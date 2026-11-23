'use strict';
const express = require('express');
const { z } = require('zod');
const { query, tx } = require('./db');
const { requireAuth, requireAdmin, parse } = require('./auth');
const { today, monthOf } = require('./time');
const { bad, forbidden, notFound, conflict } = require('./errors');

const router = express.Router();
router.use(requireAuth);
const wrap = fn => (req, res, next) => Promise.resolve(fn(req, res)).catch(next);

/* ---------- schemas ---------- */
const PLATFORMS = ['Instagram','YouTube','YouTube Shorts','TikTok','LinkedIn','Facebook','X','Other',''];
const uuid = z.uuid('Invalid id.');
const day = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use a YYYY-MM-DD date.').refine(d => !Number.isNaN(Date.parse(d + 'T00:00:00Z')), 'Invalid date.');
const metric = z.number({ error: 'Numbers only.' }).int('Whole numbers only.').min(0, 'Numbers must be 0 or more.').max(10_000_000_000, 'That number looks too large.');
const metrics = z.object({ views: metric, likes: metric, comments: metric, shares: metric, reposts: metric });
const platform = z.string().trim().refine(v => PLATFORMS.includes(v), 'Pick a platform from the list.');
const url = z.string().trim().max(500).regex(/^https?:\/\/\S+\.\S+/i, 'The link must start with http:// or https://');
const editorName = z.string().trim().min(1, 'Enter a name.').max(40).transform(n => n.replace(/\s+/g, ' ').replace(/\b\w/g, c => c.toUpperCase()));
const projectBody = z.object({
  title: z.string().trim().min(1, 'Give the project a title.').max(120),
  client: z.string().trim().max(80).default(''),
  platform: platform.default(''),
  notes: z.string().trim().max(300).default('')
});
const cutBody = z.object({ label: z.string().trim().max(80).default(''), url, platform: platform.default('Instagram'), postedAt: day });
const scoringBody = z.object(Object.fromEntries(['views','likes','comments','shares','reposts','checkin','streak7','m10k','m50k','m100k','m500k','m1m','h2h1','h2h2','h2h3']
  .map(k => [k, z.number().min(0).max(100000)]))).refine(s => s.h2h1 >= s.h2h2 && s.h2h2 >= s.h2h3, '1st must be worth at least 2nd, and 2nd at least 3rd.');
const rewardsBody = z.object({
  tiers: z.array(z.object({ name: z.string().trim().min(1).max(20), min: z.number().int().positive(), amount: z.number().int().min(0).max(10_000_000) })).min(1).max(8),
  topAmount: z.number().int().min(0).max(10_000_000)
}).refine(r => r.tiers.every((t, i) => i === 0 || t.min > r.tiers[i - 1].min), 'Each tier must need more points than the one before.');
const ymParam = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Invalid month.');
const resultsBody = z.object({ results: z.array(z.object({
  editorId: uuid, name: z.string().max(40), total: z.number(), place: z.number().int().nullable(), tierName: z.string().max(20), tierIdx: z.number().int(),
  tierAmt: z.number().min(0), topAmt: z.number().min(0), reward: z.number().min(0),
  breakdown: z.object({ eng: z.number(), checkin: z.number(), streak: z.number(), milestone: z.number(), h2h: z.number() })
})).max(500), scoring: z.record(z.string(), z.number()), rewards: z.any() });

/* ---------- helpers ---------- */
const isAdmin = req => req.auth.role === 'admin';
const myEditorId = req => req.auth.role === 'editor' ? req.auth.editorId : null;
async function assertMonthOpen(d, db = { query }) {
  const { rows } = await db.query('SELECT closed FROM months WHERE ym = $1', [monthOf(d)]);
  if (rows[0]?.closed) throw bad(`${monthOf(d)} is closed, so its numbers are locked.`);
}
function pgError(e) {
  if (e.code === '23505') {
    if (/editors_name/.test(e.constraint)) return conflict('An editor with this name already exists.');
    if (/projects_title/.test(e.constraint)) return conflict('A project with this title already exists. Open it and add your cut there.');
    if (/cuts_editor_project_label/.test(e.constraint)) return conflict('You already have a cut with this name on this project. Give it a different version name.');
    return conflict('That already exists.');
  }
  if (e.code === '23503') return conflict('That is still in use, so it can’t be removed.');
  if (e.code === '23514') return bad('One of the values is not allowed.');
  return e;
}
const dbWrap = fn => wrap(async (req, res) => { try { await fn(req, res); } catch (e) { throw pgError(e); } });

/* ---------- read everything the dashboards need ---------- */
router.get('/state', wrap(async (req, res) => {
  const [editors, projects, cuts, entries, settings, months] = await Promise.all([
    query('SELECT id, name, active, (pin_hash IS NOT NULL) AS has_pin, created_at, (row_number() OVER (ORDER BY created_at, id) - 1)::int AS color_index FROM editors ORDER BY name'),
    query('SELECT id, title, client, platform, notes, status, owner_editor_id, created_at FROM projects'),
    query('SELECT id, editor_id, project_id, label, url, platform, posted_at, status, created_at, updated_at FROM cuts'),
    query('SELECT cut_id, day, views, likes, comments, shares, reposts, edited, edited_at, fixed_by_admin, created_at FROM daily_entries'),
    query('SELECT key, value FROM settings'),
    query('SELECT ym, closed, closed_at, reopened_at, results, scoring, rewards FROM months')
  ]);
  const daily = new Map();
  for (const r of entries.rows) {
    if (!daily.has(r.cut_id)) daily.set(r.cut_id, {});
    daily.get(r.cut_id)[r.day] = { views: r.views, likes: r.likes, comments: r.comments, shares: r.shares, reposts: r.reposts,
      at: r.created_at, ...(r.edited ? { edited: true, editedAt: r.edited_at } : {}), ...(r.fixed_by_admin ? { fixedBy: 'admin' } : {}) };
  }
  const s = Object.fromEntries(settings.rows.map(r => [r.key, r.value]));
  res.set('Cache-Control', 'no-store').json({
    me: { role: req.auth.role, editorId: req.auth.editorId || null, name: req.auth.name },
    today: today(),
    editors: editors.rows.map(e => ({ id: e.id, name: e.name, active: e.active, hasPin: e.has_pin, createdAt: e.created_at, colorIndex: e.color_index })),
    projects: projects.rows.map(p => ({ id: p.id, title: p.title, client: p.client, platform: p.platform, notes: p.notes, status: p.status, ownerEditorId: p.owner_editor_id, createdAt: p.created_at })),
    cuts: cuts.rows.map(c => ({ id: c.id, editorId: c.editor_id, projectId: c.project_id, label: c.label, url: c.url, platform: c.platform,
      postedAt: c.posted_at, status: c.status, createdAt: c.created_at, updatedAt: c.updated_at, daily: daily.get(c.id) || {} })),
    scoring: s.scoring || null,
    rewards: s.rewards || null,
    months: months.rows.map(m => ({ id: m.ym, closed: m.closed, closedAt: m.closed_at, closedBy: 'admin', reopenedAt: m.reopened_at, results: m.results, scoring: m.scoring, rewards: m.rewards }))
  });
}));

/* ---------- editors (admin) ---------- */
router.post('/editors', requireAdmin, dbWrap(async (req, res) => {
  const { name } = parse(z.object({ name: editorName }), req.body);
  const { rows } = await query('INSERT INTO editors (name) VALUES ($1) RETURNING id', [name]);
  res.status(201).json({ id: rows[0].id });
}));
router.patch('/editors/:id', requireAdmin, dbWrap(async (req, res) => {
  const id = parse(uuid, req.params.id);
  const d = parse(z.object({ name: editorName.optional(), active: z.boolean().optional() }).refine(v => v.name !== undefined || v.active !== undefined, 'Nothing to change.'), req.body);
  const { rowCount } = await query('UPDATE editors SET name = COALESCE($2, name), active = COALESCE($3, active), updated_at = now() WHERE id = $1', [id, d.name ?? null, d.active ?? null]);
  if (!rowCount) throw notFound('Editor not found.');
  res.json({ ok: true });
}));
router.delete('/editors/:id', requireAdmin, dbWrap(async (req, res) => {
  const id = parse(uuid, req.params.id);
  await tx(async db => {
    const { rows } = await db.query('SELECT (SELECT count(*) FROM cuts WHERE editor_id = $1)::int AS cuts, (SELECT pin_hash IS NOT NULL FROM editors WHERE id = $1) AS has_pin', [id]);
    if (rows[0].cuts || rows[0].has_pin) throw conflict('This editor has signed in or has entries. Deactivate them instead.');
    const r = await db.query('DELETE FROM editors WHERE id = $1', [id]);
    if (!r.rowCount) throw notFound('Editor not found.');
  });
  res.json({ ok: true });
}));

/* ---------- PIN reset (admin) ---------- */
router.post('/editors/:id/reset-pin', requireAdmin, dbWrap(async (req, res) => {
  const id = parse(uuid, req.params.id);
  const { rowCount } = await query('UPDATE editors SET pin_hash = NULL, token_version = token_version + 1, failed_attempts = 0, locked_until = NULL, updated_at = now() WHERE id = $1', [id]);
  if (!rowCount) throw notFound('Editor not found.');
  res.json({ ok: true });
}));

/* ---------- projects ---------- */
async function loadProject(id, db = { query }) {
  const { rows } = await db.query('SELECT id, owner_editor_id, status FROM projects WHERE id = $1', [id]);
  if (!rows[0]) throw notFound('Project not found.');
  return rows[0];
}
const canEditProject = (req, p) => !isAdmin(req) && !!p.owner_editor_id && p.owner_editor_id === myEditorId(req);
router.post('/projects', dbWrap(async (req, res) => {
  if (isAdmin(req)) throw forbidden('Projects are added by editors. The admin view is read-only for projects.');
  const d = parse(projectBody, req.body);
  const { rows } = await query('INSERT INTO projects (title, client, platform, notes, owner_editor_id) VALUES ($1,$2,$3,$4,$5) RETURNING id',
    [d.title, d.client, d.platform, d.notes, myEditorId(req)]);
  res.status(201).json({ id: rows[0].id });
}));
router.patch('/projects/:id', dbWrap(async (req, res) => {
  const id = parse(uuid, req.params.id);
  const d = parse(projectBody.extend({ status: z.enum(['open', 'closed']) }), req.body);
  const p = await loadProject(id);
  if (!canEditProject(req, p)) throw forbidden('Only the editor who added this project can edit it.');
  await query('UPDATE projects SET title=$2, client=$3, platform=$4, notes=$5, status=$6, updated_at=now() WHERE id=$1', [id, d.title, d.client, d.platform, d.notes, d.status]);
  res.json({ ok: true });
}));
router.delete('/projects/:id', dbWrap(async (req, res) => {
  const id = parse(uuid, req.params.id);
  const p = await loadProject(id);
  if (!canEditProject(req, p)) throw forbidden('Only the editor who added this project can delete it.');
  const { rows } = await query('SELECT count(*)::int AS n FROM cuts WHERE project_id = $1', [id]);
  if (rows[0].n) throw conflict(`This project has ${rows[0].n} cut${rows[0].n === 1 ? '' : 's'}. Close it instead so their points are kept.`);
  await query('DELETE FROM projects WHERE id = $1', [id]);
  res.json({ ok: true });
}));

/* ---------- cuts ---------- */
async function loadCut(id, db = { query }) {
  const { rows } = await db.query('SELECT id, editor_id, posted_at, project_id FROM cuts WHERE id = $1', [id]);
  if (!rows[0]) throw notFound('Cut not found.');
  return rows[0];
}
router.post('/cuts', dbWrap(async (req, res) => {
  const d = parse(cutBody.extend({ projectId: uuid, today: metrics.optional() }), req.body);
  const editorId = myEditorId(req);
  if (!editorId) throw forbidden('Only editors can add cuts.');
  if (d.postedAt > today()) throw bad('The posted date can’t be in the future.');
  const p = await loadProject(d.projectId);
  if (p.status === 'closed') throw bad('That project is closed for new cuts.');
  const id = await tx(async db => {
    const { rows } = await db.query('INSERT INTO cuts (editor_id, project_id, label, url, platform, posted_at) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id',
      [editorId, d.projectId, d.label, d.url, d.platform, d.postedAt]);
    if (d.today) {
      await assertMonthOpen(today(), db);
      const m = d.today;
      await db.query('INSERT INTO daily_entries (cut_id, day, views, likes, comments, shares, reposts) VALUES ($1,$2,$3,$4,$5,$6,$7)',
        [rows[0].id, today(), m.views, m.likes, m.comments, m.shares, m.reposts]);
    }
    return rows[0].id;
  });
  res.status(201).json({ id });
}));
router.patch('/cuts/:id', dbWrap(async (req, res) => {
  const id = parse(uuid, req.params.id);
  const d = parse(z.object({ label: z.string().trim().max(80).optional(), url: url.optional(), platform: platform.optional(), postedAt: day.optional(),
    status: z.enum(['active', 'archived']).optional() }), req.body);
  const c = await loadCut(id);
  if (c.editor_id !== myEditorId(req)) throw forbidden('You can only change your own cuts.');
  if (d.postedAt && d.postedAt > today()) throw bad('The posted date can’t be in the future.');
  await query(`UPDATE cuts SET label = COALESCE($2,label), url = COALESCE($3,url), platform = COALESCE($4,platform), posted_at = COALESCE($5,posted_at),
    status = COALESCE($6,status), updated_at = now() WHERE id = $1`, [id, d.label ?? null, d.url ?? null, d.platform ?? null, d.postedAt ?? null, d.status ?? null]);
  res.json({ ok: true });
}));
router.put('/cuts/:id/days/:day', dbWrap(async (req, res) => {
  const id = parse(uuid, req.params.id);
  const d = parse(day, req.params.day);
  const m = parse(metrics, req.body);
  const c = await loadCut(id);
  const own = c.editor_id === myEditorId(req);
  if (!own && !isAdmin(req)) throw forbidden('You can only log numbers for your own cuts.');
  if (d > today()) throw bad('You can’t log a future day.');
  if (own && !isAdmin(req) && d < c.posted_at) throw bad(`This cut was posted on ${c.posted_at}. Pick that day or later.`);
  await assertMonthOpen(d);
  await query(`INSERT INTO daily_entries (cut_id, day, views, likes, comments, shares, reposts, edited, edited_at, fixed_by_admin)
      VALUES ($1,$2,$3,$4,$5,$6,$7, $8, CASE WHEN $8 THEN now() END, $9)
    ON CONFLICT (cut_id, day) DO UPDATE SET views=EXCLUDED.views, likes=EXCLUDED.likes, comments=EXCLUDED.comments, shares=EXCLUDED.shares, reposts=EXCLUDED.reposts,
      edited = daily_entries.edited OR EXCLUDED.edited, edited_at = CASE WHEN EXCLUDED.edited THEN now() ELSE daily_entries.edited_at END,
      fixed_by_admin = daily_entries.fixed_by_admin OR EXCLUDED.fixed_by_admin, updated_at = now()`,
    [id, d, m.views, m.likes, m.comments, m.shares, m.reposts, d !== today() || !own, !own]);
  await query('UPDATE cuts SET updated_at = now() WHERE id = $1', [id]);
  res.json({ ok: true });
}));
router.delete('/cuts/:id/days/:day', dbWrap(async (req, res) => {
  const id = parse(uuid, req.params.id);
  const d = parse(day, req.params.day);
  const c = await loadCut(id);
  if (c.editor_id !== myEditorId(req) && !isAdmin(req)) throw forbidden('You can only change your own cuts.');
  await assertMonthOpen(d);
  await query('DELETE FROM daily_entries WHERE cut_id = $1 AND day = $2', [id, d]);
  res.json({ ok: true });
}));

/* ---------- settings (admin) ---------- */
router.put('/settings/scoring', requireAdmin, dbWrap(async (req, res) => {
  const v = parse(scoringBody, req.body);
  await query('INSERT INTO settings (key, value) VALUES ($1,$2) ON CONFLICT (key) DO UPDATE SET value=$2, updated_at=now()', ['scoring', v]);
  res.json({ ok: true });
}));
router.put('/settings/rewards', requireAdmin, dbWrap(async (req, res) => {
  const v = parse(rewardsBody, req.body);
  await query('INSERT INTO settings (key, value) VALUES ($1,$2) ON CONFLICT (key) DO UPDATE SET value=$2, updated_at=now()', ['rewards', v]);
  res.json({ ok: true });
}));

/* ---------- months (admin) ---------- */
router.post('/months/:ym/close', requireAdmin, dbWrap(async (req, res) => {
  const ym = parse(ymParam, req.params.ym);
  const d = parse(resultsBody, req.body);
  await query(`INSERT INTO months (ym, closed, closed_at, results, scoring, rewards) VALUES ($1, true, now(), $2, $3, $4)
    ON CONFLICT (ym) DO UPDATE SET closed = true, closed_at = now(), results = $2, scoring = $3, rewards = $4`,
    [ym, JSON.stringify(d.results), d.scoring, JSON.stringify(d.rewards ?? null)]);
  res.json({ ok: true });
}));
router.post('/months/:ym/reopen', requireAdmin, dbWrap(async (req, res) => {
  const ym = parse(ymParam, req.params.ym);
  const { rowCount } = await query('UPDATE months SET closed = false, reopened_at = now() WHERE ym = $1', [ym]);
  if (!rowCount) throw notFound('That month is not closed.');
  res.json({ ok: true });
}));

module.exports = router;
