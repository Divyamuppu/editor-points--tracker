'use strict';
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { z } = require('zod');
const rateLimit = require('express-rate-limit');
const { query, tx } = require('./db');
const config = require('./config');
const { ApiError, bad } = require('./errors');

const COOKIE = 'ept_session';
const MAX_AGE = 30 * 24 * 3600 * 1000;
const cookieOpts = { httpOnly: true, sameSite: 'lax', secure: config.isProd, path: '/', maxAge: MAX_AGE };
// Changing ADMIN_PASSWORD changes this value, which signs out every admin session.
const ADMIN_V = crypto.createHmac('sha256', config.jwtSecret).update(config.adminPassword).digest('hex').slice(0, 16);
const MAX_FAILS = 5, LOCK_MIN = 15;

const safeEqual = (a, b) => { const x = crypto.createHash('sha256').update(String(a)).digest(); const y = crypto.createHash('sha256').update(String(b)).digest(); return crypto.timingSafeEqual(x, y); };
const parse = (schema, body) => { const r = schema.safeParse(body); if (!r.success) throw bad(r.error.issues[0]?.message || 'Invalid input.'); return r.data; };
const sign = (res, payload) => res.cookie(COOKIE, jwt.sign(payload, config.jwtSecret, { expiresIn: '30d' }), cookieOpts);

// req.auth = { role: 'admin' } or { role: 'editor', editorId, name }
async function loadAuth(req, _res, next) {
  const token = req.cookies?.[COOKIE];
  if (!token) return next();
  try {
    const p = jwt.verify(token, config.jwtSecret);
    if (p.role === 'admin' && p.v === ADMIN_V) req.auth = { role: 'admin', name: 'Admin' };
    else if (p.role === 'editor') {
      const { rows } = await query('SELECT id, name, active, token_version, pin_hash FROM editors WHERE id = $1', [p.sub]);
      const e = rows[0];
      if (e && e.active && e.pin_hash && e.token_version === p.v) req.auth = { role: 'editor', editorId: e.id, name: e.name };
    }
  } catch { /* invalid or expired: signed out */ }
  next();
}
const requireAuth = (req, _res, next) => req.auth ? next() : next(new ApiError(401, 'unauthenticated', 'Please sign in.'));
const requireAdmin = (req, _res, next) => req.auth?.role === 'admin' ? next() : next(new ApiError(403, 'forbidden', 'Only the admin can do that.'));

const pin = z.string().regex(/^\d{4}$/, 'PIN must be 4 digits.');
const router = express.Router();
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 30, standardHeaders: 'draft-7', legacyHeaders: false,
  handler: (_req, res) => res.status(429).json({ code: 'resource_exhausted', message: 'Too many attempts. Try again in 15 minutes.' }) });

// Names for the sign-in screen
router.get('/editors', async (_req, res, next) => {
  try {
    const { rows } = await query(`SELECT * FROM (SELECT id, name, active, (pin_hash IS NOT NULL) AS has_pin, (row_number() OVER (ORDER BY created_at, id) - 1)::int AS color_index FROM editors) e WHERE active ORDER BY name`);
    res.set('Cache-Control', 'no-store').json({ editors: rows.map(r => ({ id: r.id, name: r.name, hasPin: r.has_pin, colorIndex: r.color_index })) });
  } catch (e) { next(e); }
});

router.post('/admin', limiter, async (req, res, next) => {
  try {
    const { password } = parse(z.object({ password: z.string().min(1, 'Enter the admin password.').max(200) }), req.body);
    if (!safeEqual(password, config.adminPassword)) throw new ApiError(401, 'unauthenticated', 'That password is not right.');
    sign(res, { role: 'admin', v: ADMIN_V });
    res.json({ role: 'admin' });
  } catch (e) { next(e); }
});

router.post('/editor', limiter, async (req, res, next) => {
  try {
    const d = parse(z.object({ editorId: z.uuid('Pick your name.'), pin, teamCode: z.string().trim().max(100).optional() }), req.body);
    const out = await tx(async db => {
      const { rows } = await db.query('SELECT id, name, active, pin_hash, token_version, failed_attempts, locked_until FROM editors WHERE id = $1 FOR UPDATE', [d.editorId]);
      const e = rows[0];
      if (!e || !e.active) throw bad('Pick your name from the list.');
      if (e.locked_until && new Date(e.locked_until) > new Date()) throw new ApiError(429, 'resource_exhausted', `Too many wrong PINs. Try again after ${LOCK_MIN} minutes, or ask the admin to reset your PIN.`);
      if (!e.pin_hash) {   // first sign-in: set the PIN with the team code
        if (!d.teamCode || !safeEqual(d.teamCode, config.teamCode)) throw bad('That team code is not right. Ask your admin for it.');
        await db.query('UPDATE editors SET pin_hash = $2, failed_attempts = 0, locked_until = NULL, updated_at = now() WHERE id = $1', [e.id, await bcrypt.hash(d.pin, 10)]);
        return { id: e.id, v: e.token_version, firstTime: true };
      }
      if (!await bcrypt.compare(d.pin, e.pin_hash)) {
        const fails = e.failed_attempts + 1;
        await db.query(`UPDATE editors SET failed_attempts = $2, locked_until = CASE WHEN $2 >= ${MAX_FAILS} THEN now() + interval '${LOCK_MIN} minutes' END WHERE id = $1`, [e.id, fails >= MAX_FAILS ? 0 : fails]);
        return { error: fails >= MAX_FAILS ? `Too many wrong PINs. Try again after ${LOCK_MIN} minutes.` : `Wrong PIN. ${MAX_FAILS - fails} tr${MAX_FAILS - fails === 1 ? 'y' : 'ies'} left.` };
      }
      await db.query('UPDATE editors SET failed_attempts = 0, locked_until = NULL WHERE id = $1', [e.id]);
      return { id: e.id, v: e.token_version };
    });
    if (out.error) throw new ApiError(401, 'unauthenticated', out.error);
    sign(res, { role: 'editor', sub: out.id, v: out.v });
    res.json({ role: 'editor', firstTime: !!out.firstTime });
  } catch (e) { next(e); }
});

router.post('/logout', (_req, res) => { res.clearCookie(COOKIE, { ...cookieOpts, maxAge: undefined }); res.json({ ok: true }); });
router.get('/me', requireAuth, (req, res) => res.json({ role: req.auth.role, editorId: req.auth.editorId || null, name: req.auth.name }));

router.post('/pin', requireAuth, limiter, async (req, res, next) => {
  try {
    if (req.auth.role !== 'editor') throw bad('Only editors have a PIN.');
    const d = parse(z.object({ currentPin: pin, newPin: pin }), req.body);
    const { rows } = await query('SELECT pin_hash FROM editors WHERE id = $1', [req.auth.editorId]);
    if (!rows[0]?.pin_hash || !await bcrypt.compare(d.currentPin, rows[0].pin_hash)) throw bad('Your current PIN is not right.');
    const { rows: u } = await query('UPDATE editors SET pin_hash = $2, token_version = token_version + 1, updated_at = now() WHERE id = $1 RETURNING token_version',
      [req.auth.editorId, await bcrypt.hash(d.newPin, 10)]);
    sign(res, { role: 'editor', sub: req.auth.editorId, v: u[0].token_version });
    res.json({ ok: true });
  } catch (e) { next(e); }
});

module.exports = { router, loadAuth, requireAuth, requireAdmin, parse };
