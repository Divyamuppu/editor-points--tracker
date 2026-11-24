(() => {
'use strict';

/* ================= icons ================= */
const P = {
  views:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  likes:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/>',
  comments:'<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
  shares:'<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/>',
  reposts:'<path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
  today:'<rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  trophy:'<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
  folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  gift:'<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18"/><path d="M12 8S10 3 7.5 4.5 9 8 12 8zM12 8s2-5 4.5-3.5S15 8 12 8z"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  users:'<circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0 1 14 0"/><path d="M16 4a4 4 0 0 1 0 8M22 21a7 7 0 0 0-4-6.3"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  flame:'<path d="M12 22a7 7 0 0 0 7-7c0-4-3-6-4-10-2 2-3 4-3 6-1-1-2-2-2-4-2 2-5 5-5 8a7 7 0 0 0 7 7z"/>',
  check:'<path d="M5 12l5 5L20 7"/>',
  link:'<path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>',
  chev:'<path d="M9 6l6 6-6 6"/>',
  back:'<path d="M15 6l-6 6 6 6"/>',
  edit:'<path d="M4 20h4L20 8l-4-4L4 16z"/>',
  copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
  lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  play:'<path d="M7 4v16l13-8z"/>',
  bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  star:'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.6l6.2-.9z"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'
};
const I = (n, cls) => `<svg class="i${cls?' '+cls:''}" viewBox="0 0 24 24" aria-hidden="true">${P[n]||''}</svg>`;

/* ================= config ================= */
const DEFAULT_SCORING = {
  views:0.01, likes:0.2, comments:1, shares:3, reposts:3,
  checkin:4, streak7:50,
  m10k:50, m50k:150, m100k:300, m500k:750, m1m:1500,
  h2h1:85, h2h2:45, h2h3:25
};
const MILESTONES = [ ['m10k',10000,'10K views'], ['m50k',50000,'50K views'], ['m100k',100000,'100K views'], ['m500k',500000,'500K views'], ['m1m',1000000,'1M views'] ];
const DEFAULT_REWARDS = { tiers:[ { name:'Rising', min:1000, amount:0 }, { name:'Silver', min:2500, amount:0 }, { name:'Gold', min:5000, amount:0 }, { name:'Legend', min:10000, amount:0 } ], topAmount:0 };
const TIER_VARS = ['var(--t1)','var(--t2)','var(--t3)','var(--t4)'];
const METRICS = [ { key:'views', label:'Views' }, { key:'likes', label:'Likes' }, { key:'comments', label:'Comments' }, { key:'shares', label:'Shares' }, { key:'reposts', label:'Reposts' } ];
const PLATFORMS = ['Instagram','YouTube','YouTube Shorts','TikTok','LinkedIn','Facebook','X','Other'];
const MAX_METRIC = 10_000_000_000;
const VIEWS = ['home','log','leaderboard','projects','month','team','points'];

/* ================= state ================= */
const S = {
  db:null, user:null, uid:null, unavailable:false, isAdmin:false,
  editors:[], adminProjects:[], members:[], months:[], scoring:null, rewards:null,
  cutsByUid:{}, projByUid:{}, subs:{}, logLoaded:{},
  loaded:{ editors:false, projects:false, members:false, months:false, scoring:false, rewards:false },
  errors:[], stale:false,
  view:'home', mode:'admin', projectId:null, month:null, sort:'total', logDate:null,
  dirty:new Set(), names:{}, pendingNames:new Set(), calc:null
};

/* ================= helpers ================= */
const $ = s => document.querySelector(s);
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const int = v => { const n = Number(v); return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0; };
const fmt = n => { n = Number(n)||0; const a = Math.abs(n);
  if (a >= 1e7) return (n/1e6).toFixed(1).replace(/\.0$/,'')+'M';
  if (a >= 1e6) return (n/1e6).toFixed(2).replace(/0$/,'').replace(/\.0$/,'')+'M';
  if (a >= 1e4) return (n/1e3).toFixed(1).replace(/\.0$/,'')+'K';
  return Math.round(n).toLocaleString('en-IN'); };
const pts = n => (Math.round((Number(n)||0)*10)/10).toLocaleString('en-IN', { maximumFractionDigits:1 });
const money = n => n > 0 ? '₹' + Math.round(n).toLocaleString('en-IN') : '₹ —';
const iso = d => { const x = new Date(d); x.setMinutes(x.getMinutes()-x.getTimezoneOffset()); return x.toISOString().slice(0,10); };
const today = () => iso(new Date());
const yesterday = () => { const d = new Date(); d.setDate(d.getDate()-1); return iso(d); };
const addDays = (ds, n) => { const [y,m,d] = ds.split('-').map(Number); return iso(new Date(y, m-1, d+n)); };
const monthOf = ds => ds.slice(0,7);
const monthLabel = ym => { const [y,m] = ym.split('-').map(Number); return new Date(y, m-1, 1).toLocaleDateString('en-IN', { month:'long', year:'numeric' }); };
const dayLabel = ds => { if (ds === today()) return 'Today'; if (ds === yesterday()) return 'Yesterday'; const [y,m,d] = ds.split('-').map(Number); return new Date(y,m-1,d).toLocaleDateString('en-IN', { day:'numeric', month:'short' }); };
const weekday = ds => { const [y,m,d] = ds.split('-').map(Number); return new Date(y,m-1,d).toLocaleDateString('en-IN', { weekday:'short' }).slice(0,2); };
const daysLeftInMonth = () => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth()+1, 0).getDate() - n.getDate(); };
const hue = id => { let h = 0; for (const c of String(id)) h = (h*31 + c.charCodeAt(0)) % 360; return h; };
const initials = n => String(n||'?').trim().split(/\s+/).map(w=>w[0]).join('').slice(0,2).toUpperCase();
// Brand palette for people: fixed, high-contrast pairs (white text passes 4.5:1 on each).
const PEOPLE = [['#E2492F','#F27A4A'],['#0F8F86','#2BB3A4'],['#4652C9','#6C78E6'],['#B7791F','#D99A2B'],['#9B3A86','#C25AAB'],['#2E8B4E','#4DAE6C'],['#2672B5','#4A93D4'],['#C43D66','#E06289']];
const avatar = (ed, size) => { const ci = Number.isInteger(ed?.colorIndex) ? ed.colorIndex : (S.editors?.find(x => x.id === ed?.id)?.colorIndex ?? hue(ed?.id||'x')); const [a,b] = PEOPLE[ci % PEOPLE.length]; return `<span class="av${size?' '+size:''}" style="--a:${a};--b:${b}" title="${esc(ed?.name||'')}" aria-hidden="true">${esc(initials(ed?.name))}</span>`; };
const scoring = () => ({ ...DEFAULT_SCORING, ...(S.scoring||{}) });
const rewards = () => { const r = S.rewards || {}; const tiers = Array.isArray(r.tiers) && r.tiers.length ? r.tiers : DEFAULT_REWARDS.tiers; return { tiers: tiers.map(t => ({ name:String(t.name||'Tier'), min:int(t.min), amount:int(t.amount) })).sort((a,b)=>a.min-b.min), topAmount:int(r.topAmount) }; };
const editorById = id => S.editors.find(e => e.id === id);
let _lk = null, _lkE = null, _lkM = null;
function links(){
  if (_lk && _lkE === S.editors && _lkM === S.members) return _lk;
  const byEditor = new Map(), used = new Set();
  for (const e of S.editors) if (e.uid && !used.has(e.uid)){ byEditor.set(e.id, e.uid); used.add(e.uid); }
  const claims = S.members.filter(m => m.editorId && S.editors.some(e => e.id === m.editorId)).sort((a,b) => String(a.requestedAt||'').localeCompare(String(b.requestedAt||'')) || a.id.localeCompare(b.id));
  for (const m of claims) if (!byEditor.has(m.editorId) && !used.has(m.id)){ byEditor.set(m.editorId, m.id); used.add(m.id); }
  _lk = { byEditor, byUid: new Map([...byEditor].map(([e,u]) => [u,e])) }; _lkE = S.editors; _lkM = S.members;
  return _lk;
}
const uidOfEditor = id => links().byEditor.get(id) || null;
const editorByUid = uid => { if (!uid) return null; const id = links().byUid.get(uid); const e = id && S.editors.find(x => x.id === id); return e && e.active !== false ? e : null; };
const myEditor = () => editorByUid(S.uid);
const myMember = () => S.members.find(m => m.id === S.uid);
const monthDoc = ym => S.months.find(m => m.id === ym);
const isClosed = ym => !!monthDoc(ym)?.closed;
const allCuts = () => Object.entries(S.cutsByUid).flatMap(([uid, list]) => list.map(c => ({ ...c, ownerUid:uid })));
const allProjects = () => [
  ...S.adminProjects.map(p => ({ ...p, ownerUid:null })),
  ...Object.entries(S.projByUid).flatMap(([uid, list]) => list.map(p => ({ ...p, ownerUid:uid })))
];
const projectById = id => allProjects().find(p => p.id === id);
const projectPath = p => p.ownerUid ? `logs/${p.ownerUid}/projects/${p.id}` : `projects/${p.id}`;
const adminView = () => S.isAdmin;
const canEditProject = p => !adminView() && !!p.ownerUid && p.ownerUid === S.uid;
const allLoaded = () => Object.values(S.loaded).every(Boolean) && Object.values(S.logLoaded).every(Boolean);
const ago = t => { if (!t) return ''; const s = (Date.now() - Date.parse(t))/1000; if (s < 60) return 'just now'; if (s < 3600) return Math.floor(s/60)+'m ago'; if (s < 86400) return Math.floor(s/3600)+'h ago'; return Math.floor(s/86400)+'d ago'; };
const tierFor = (total, tiers) => { let idx = -1; tiers.forEach((t,i) => { if (total >= t.min) idx = i; }); return idx; };
const tierVar = i => TIER_VARS[Math.max(0, Math.min(i, TIER_VARS.length-1))];
const tierChip = (idx, tiers) => idx < 0 ? '<span class="chip">No tier yet</span>' : `<span class="chip tc" style="--tc:${tierVar(idx)}">${I('star')}${esc(tiers[idx].name)}</span>`;
const clean = v => String(v ?? '').trim();
const stamp = () => ({ updatedAt:new Date().toISOString(), ...(S.uid ? { updatedBy:S.uid } : {}) });

function toast(msg, kind){
  const el = document.createElement('div'); el.className = 'toast' + (kind ? ' '+kind : '');
  el.innerHTML = (kind === 'win' ? I('check') : kind === 'error' ? I('info') : '') + `<span>${esc(msg)}</span>`;
  $('#toasts').appendChild(el); setTimeout(() => el.remove(), kind === 'error' ? 5200 : 3000);
}
function errText(e){
  switch (e?.code){
    case 'invalid_argument': return "You don't have permission for that, or a value is invalid.";
    case 'quota_exceeded': return 'The tracker is full. Ask the admin to archive old data.';
    case 'resource_exhausted': return 'Too many saves at once. Wait a moment and try again.';
    case 'revoked': return 'Your access changed. Reload the page.';
    default: return 'Connection problem. Nothing was saved; try again.';
  }
}
async function api(method, url, body){
  let r;
  try { r = await fetch(url, { method, credentials:'same-origin', headers:{ 'Content-Type':'application/json', 'X-Requested-With':'fetch' }, body: body === undefined ? undefined : JSON.stringify(body) }); }
  catch { throw { code:'unavailable', message:'Can’t reach the server. Check your connection and try again.' }; }
  let j = null; try { j = await r.json(); } catch {}
  if (r.status === 401 && !url.startsWith('/api/auth/')){ S.signedIn = false; renderAuth(); throw { code:'unauthenticated', message:'Your session ended. Please sign in again.' }; }
  if (!r.ok) throw { code:(j && j.code) || 'unavailable', message:(j && j.message) || 'Something went wrong. Try again.' };
  return j;
}
async function save(fn, quiet){
  try { await fn(); await refresh(); return true; }
  catch (e) {
    if (e?.code === 'unauthenticated') return false;
    if (!quiet) toast(e?.message || errText(e), 'error'); await refresh().catch(() => {}); return false;
  }
}

/* ================= scoring engine =================
   Editors enter running totals each day. Points come from growth over the
   highest totals logged before, so repeats and dips never double count. */
function hwmBefore(cut, date){
  const hwm = { views:0, likes:0, comments:0, shares:0, reposts:0 };
  for (const d of Object.keys(cut.daily||{}).sort()){
    if (d >= date) break;
    for (const m of METRICS) hwm[m.key] = Math.max(hwm[m.key], int(cut.daily[d]?.[m.key]));
  }
  return hwm;
}
const rateLabel = w => { w = Number(w)||0; if (w <= 0) return 'no points'; if (w >= 1) return `${pts(w)} pt${w===1?'':'s'} each`; let n = 1; while (n < 1e6 && Math.abs(w*n - Math.round(w*n)) > 1e-9) n *= 10; const per = Math.round(w*n); return `${per} pt${per===1?'':'s'} per ${n.toLocaleString('en-IN')}`; };
const engagementPts = (gains, s) => METRICS.reduce((a,m) => a + (gains[m.key]||0) * s[m.key], 0);

function compute(){
  const s = scoring();
  const events = [], cutInfo = new Map(), logged = new Map();
  for (const cut of allCuts()){
    const ed = editorByUid(cut.ownerUid); if (!ed) continue;
    const dates = Object.keys(cut.daily||{}).filter(d => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort();
    const hwm = { views:0, likes:0, comments:0, shares:0, reposts:0 };
    const info = { hwm, last:null, lastDate:null, totalPts:0, monthPts:{}, editorId:ed.id };
    for (const d of dates){
      const v = cut.daily[d] || {}; const gains = {};
      for (const m of METRICS) gains[m.key] = Math.max(0, int(v[m.key]) - hwm[m.key]);
      const prevViews = hwm.views;
      for (const m of METRICS) hwm[m.key] = Math.max(hwm[m.key], int(v[m.key]));
      const p = engagementPts(gains, s); const ym = monthOf(d);
      events.push({ editorId:ed.id, date:d, type:'eng', pts:p, projectId:cut.projectId, cutId:cut.id });
      info.totalPts += p; info.monthPts[ym] = (info.monthPts[ym]||0) + p;
      for (const [k, thr, label] of MILESTONES){
        if (prevViews < thr && hwm.views >= thr && s[k] > 0){
          events.push({ editorId:ed.id, date:d, type:'milestone', pts:s[k], projectId:cut.projectId, cutId:cut.id, label });
          info.totalPts += s[k]; info.monthPts[ym] = (info.monthPts[ym]||0) + s[k];
        }
      }
      info.last = v; info.lastDate = d;
      if (!logged.has(ed.id)) logged.set(ed.id, new Set());
      logged.get(ed.id).add(d);
    }
    cutInfo.set(cut.ownerUid+'/'+cut.id, info);
  }
  const streakNow = new Map();
  for (const [edId, set] of logged){
    const days = [...set].sort(); let run = 0, prev = null;
    for (const d of days){
      run = prev && addDays(prev, 1) === d ? run + 1 : 1; prev = d;
      if (s.checkin > 0) events.push({ editorId:edId, date:d, type:'checkin', pts:s.checkin });
      if (run % 7 === 0 && s.streak7 > 0) events.push({ editorId:edId, date:d, type:'streak', pts:s.streak7, label:`${run}-day streak` });
    }
    const last = days[days.length-1];
    streakNow.set(edId, last === today() || last === yesterday() ? run : 0);
  }
  return { events, cutInfo, logged, streakNow, s };
}

function monthStandings(ym, calc){
  const s = calc.s; const rows = new Map(); const t = today();
  for (const ed of S.editors){ if (ed.active === false) continue; rows.set(ed.id, { editor:ed, eng:0, checkin:0, streak:0, milestone:0, h2h:0, total:0, today:0, days:0, wins:0 }); }
  const projEditor = new Map();
  for (const e of calc.events){
    if (monthOf(e.date) !== ym) continue;
    const r = rows.get(e.editorId); if (!r) continue;
    r[e.type] += e.pts; if (e.type === 'checkin') r.days++; if (e.date === t) r.today += e.pts;
    if (e.type === 'eng' && e.projectId){ if (!projEditor.has(e.projectId)) projEditor.set(e.projectId, new Map()); const m = projEditor.get(e.projectId); m.set(e.editorId, (m.get(e.editorId)||0) + e.pts); }
  }
  const h2hByProject = new Map();
  for (const [pid, m] of projEditor){
    const ranked = [...m.entries()].filter(([,p]) => p > 0).sort((a,b) => b[1]-a[1]);
    if (ranked.length < 2) continue;
    let rank = 0, prev = null; const out = [];
    ranked.forEach(([edId, p], i) => {
      if (prev === null || Math.abs(p - prev) > 1e-9) rank = i + 1; prev = p;
      const bonus = rank === 1 ? s.h2h1 : rank === 2 ? s.h2h2 : rank === 3 ? s.h2h3 : 0;
      out.push({ editorId:edId, pts:p, rank, bonus });
      const r = rows.get(edId); if (r){ r.h2h += bonus; if (rank === 1) r.wins++; }
    });
    h2hByProject.set(pid, out);
  }
  const list = [...rows.values()]; list.forEach(r => { r.total = r.eng + r.checkin + r.streak + r.milestone + r.h2h; });
  const key = S.sort;
  list.sort((a,b) => (b[key]-a[key]) || (b.total-a.total) || a.editor.name.localeCompare(b.editor.name));
  let rank = 0, prev = null;
  list.forEach((r,i) => { if (prev === null || Math.abs(r[key]-prev) > 1e-9) rank = i+1; prev = r[key]; r.rank = r[key] > 0 ? rank : null; });
  return { list, h2hByProject };
}

function rewardRows(st){
  const rw = rewards();
  const byTotal = st.list.slice().sort((a,b) => b.total - a.total);
  const top = byTotal[0]?.total || 0;
  return byTotal.map(r => {
    const tier = tierFor(r.total, rw.tiers); const isTop = r.total > 0 && Math.abs(r.total - top) < 1e-9;
    const tierAmt = tier >= 0 ? rw.tiers[tier].amount : 0;
    return { ...r, place: r.total > 0 ? byTotal.findIndex(x => Math.abs(x.total - r.total) < 1e-9) + 1 : null, tier, isTop, tierAmt, topAmt: isTop ? rw.topAmount : 0, reward: tierAmt + (isTop ? rw.topAmount : 0) };
  });
}

/* ================= names ================= */
function wantNames(ids){
  return;
  const missing = [...new Set(ids)].filter(id => id && !(id in S.names) && !S.pendingNames.has(id));
  if (!missing.length) return;
  missing.forEach(id => S.pendingNames.add(id));
  S.user.profiles(missing).then(ps => { missing.forEach(id => { S.names[id] = (ps && ps[id] && ps[id].name) || ''; S.pendingNames.delete(id); }); render(); })
    .catch(() => missing.forEach(id => S.pendingNames.delete(id)));
}
const nameOf = id => S.names[id] || 'Someone';

/* ================= shell ================= */
const editorMode = () => !S.isAdmin || S.mode === 'editor';
function navItems(){
  if (editorMode()) return [
    ['home', 'Dashboard', 'target'], ['log', 'Log numbers', 'today'], ['leaderboard', 'Leaderboard', 'trophy'],
    ['projects', 'Projects', 'folder'], ['month', 'Rewards', 'gift'], ['points', 'Points', 'info']
  ];
  return [
    ['home', 'Dashboard', 'target'], ['leaderboard', 'Leaderboard', 'trophy'], ['projects', 'Projects', 'folder'],
    ['month', 'Rewards', 'gift'], ['team', 'Team', 'users']
  ];
}
function renderShell(){
  const items = navItems();
  if (!items.some(([v]) => v === S.view)) S.view = 'home';
  const btn = ([v,l,ic]) => `<button data-view="${v}" ${S.view===v?'aria-current="page"':''}>${I(ic)}<span>${l}</span></button>`;
  const sw = '';
  $('#nav').innerHTML = sw + items.map(btn).join('');
  $('#bnav').innerHTML = items.filter(([v]) => v !== 'points').map(btn).join('');
  const logo = I('play'); $('#logo1').innerHTML = logo; $('#logo2').innerHTML = logo;
  let cls = 'wait', text = 'Connecting…';
  if (!S.db && S.unavailable){ cls = 'off'; text = 'Not signed in'; }
  else if (S.errors.length){ cls = 'off'; text = 'Sync stopped'; }
  else if (S.stale && !allLoaded()) text = 'Waiting for data';
  else if (allLoaded()){ cls = ''; text = 'Live'; }
  const role = editorMode() ? 'editor' : 'admin';
  $('#status').innerHTML = `<span class="dot ${cls}"></span><span>${esc(text)}${allLoaded() ? ' · '+role+' view' : ''}</span>`;
  $('#mstatus').textContent = text + (allLoaded() ? ' · ' + role + ' view' : '');
  const me = myEditor();
  const acct = S.signedIn ? `<div class="acct"><span class="small muted" title="${esc(S.me?.email||'')}">${esc(S.me?.name||'')}</span>${S.isAdmin ? '' : '<button class="link small" data-act="password">Change PIN</button>'}<button class="link small" data-act="logout">Sign out</button></div>` : '';
  $('#acct').innerHTML = acct;
  $('#meCard').innerHTML = editorMode() && me ? `<div class="me-card">${avatar(me)}<div><b>${esc(me.name)}</b><span>Editor</span></div></div>` : S.isAdmin && !editorMode() ? `<div class="me-card"><span class="av" style="--h:220">${I('settings')}</span><div><b>Admin</b><span>Manages the league</span></div></div>` : '';
  $('#mtopRight').innerHTML = (S.signedIn ? `<button class="btn ghost icon sm" data-act="logout" aria-label="Sign out" title="Sign out">${I('lock')}</button>` : '') + (me ? avatar(me, 'sm') : '');
}

function captureInputs(){
  const keep = {};
  document.querySelectorAll('#main input[data-keep]').forEach(el => { if (S.dirty.has(el.id)) keep[el.id] = el.value; });
  const a = document.activeElement;
  return { keep, focus: a && a.id && a.closest('#main') ? { id:a.id, s:a.selectionStart, e:a.selectionEnd } : null };
}
function restoreInputs(st){
  for (const [id, v] of Object.entries(st.keep)){ const el = document.getElementById(id); if (el){ el.value = v; el.closest('.mt')?.classList.add('dirty'); } }
  if (st.focus){ const el = document.getElementById(st.focus.id); if (el){ el.focus(); try { if (st.focus.s != null) el.setSelectionRange(st.focus.s, st.focus.e); } catch {} } }
  document.querySelectorAll('#main .cut').forEach(updatePreview);
  updateSaveBar();
}
function updateSaveBar(){
  const cards = new Set([...S.dirty].map(id => document.getElementById(id)?.closest('.cut')?.dataset.cut).filter(Boolean));
  const bar = $('#savebar');
  if (cards.size && S.view === 'log'){ $('#savebarText').textContent = `${cards.size} cut${cards.size===1?'':'s'} with unsaved numbers`; bar.classList.add('show'); }
  else bar.classList.remove('show');
}

function render(){
  renderShell();
  const st = captureInputs();
  const main = $('#main');
  if (!S.db && S.unavailable){
    main.innerHTML = `<div class="card empty"><div class="ico">${I('lock')}</div><h3>Sign in to join the league</h3><p>Open this page on claude.ai while signed in to your account.</p></div>`; updateSaveBar(); return;
  }
  let html = '';
  if (S.errors.length) html += `<div class="banner err">${I('info')}<span>Live updates stopped (${esc(S.errors[0])}). Reload the page to reconnect.</span></div>`;
  else if (S.stale && !allLoaded()) html += `<div class="banner">${I('info')}<span>Still loading. Numbers below may be incomplete.</span></div>`;
  if (!allLoaded() && !S.stale){ main.innerHTML = html + skeleton(); updateSaveBar(); return; }
  S.calc = compute();
  if (!S.month) S.month = monthOf(today());
  const ed = editorMode();
  switch (S.view){
    case 'home': html += ed ? (myEditor() ? viewEditorHome() : viewJoin()) : viewAdminHome(); break;
    case 'log': html += myEditor() ? viewLog() : viewJoin(); break;
    case 'leaderboard': html += viewLeaderboard(); break;
    case 'projects': html += S.projectId && projectById(S.projectId) ? viewProject() : viewProjects(); break;
    case 'month': html += viewMonth(); break;
    case 'team': html += (S.isAdmin && !editorMode()) ? viewTeam() : viewLeaderboard(); break;
    default: html += viewPoints();
  }
  main.innerHTML = html;
  restoreInputs(st);
}
function skeleton(){
  return `<div class="skel" style="height:34px;width:240px"></div><div class="skel" style="height:170px;border-radius:16px"></div>
    <div class="kpis">${[1,2,3,4].map(()=>'<div class="skel" style="height:76px;border-radius:16px"></div>').join('')}</div>
    <div class="skel" style="height:190px;border-radius:16px"></div>`;
}
const pageHead = (title, sub, actions) => `<div class="ph"><div><h1>${title}</h1>${sub?`<p>${sub}</p>`:''}</div>${actions?`<div class="actions">${actions}</div>`:''}</div>`;

/* ================= charts ================= */
function niceMax(v){ if (v <= 0) return 10; const p = Math.pow(10, Math.floor(Math.log10(v))); const n = v / p; return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * p; }
function barChart(series, label){
  const W = 600, H = 190, pl = 40, pr = 8, pt = 22, pb = 26;
  const top = niceMax(Math.max(...series.map(p => p.value), 0));
  const iw = W - pl - pr, ih = H - pt - pb, bw = iw / series.length;
  const y = v => pt + ih - (v / top) * ih;
  let g = '';
  for (const f of [0, .5, 1]){ const v = top * f; g += `<line x1="${pl}" x2="${W-pr}" y1="${y(v).toFixed(1)}" y2="${y(v).toFixed(1)}" stroke="var(--line)" stroke-dasharray="${f ? '3 4' : ''}"/><text x="${pl-8}" y="${(y(v)+4).toFixed(1)}" text-anchor="end" font-size="11" fill="var(--faint)">${fmt(v)}</text>`; }
  const last = series.length - 1;
  const bars = series.map((p, i) => {
    const h = Math.max(p.value > 0 ? 3 : 0, (p.value / top) * ih), x = pl + i * bw + bw * .18, w = bw * .64;
    const hl = i === last;
    return `<rect x="${x.toFixed(1)}" y="${(pt + ih - h).toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}" rx="4" fill="${hl ? 'var(--accent)' : 'color-mix(in srgb, var(--accent) 38%, var(--sunk))'}"><title>${esc(p.label)}: ${pts(p.value)} pts</title></rect>`
      + ((i % 2 === last % 2) ? `<text x="${(x + w/2).toFixed(1)}" y="${H - 8}" text-anchor="middle" font-size="11" fill="${hl ? 'var(--ink)' : 'var(--faint)'}" font-weight="${hl ? 700 : 500}">${esc(p.short)}</text>` : '')
      + (hl && p.value > 0 ? `<text x="${(x + w/2).toFixed(1)}" y="${(pt + ih - h - 6).toFixed(1)}" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">${pts(p.value)}</text>` : '');
  }).join('');
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(label)}">${g}${bars}</svg>`;
}
function dailySeries(editorId, days){
  const dates = Array.from({ length:days }, (_, i) => addDays(today(), i - days + 1));
  const sums = Object.fromEntries(dates.map(d => [d, 0]));
  for (const e of S.calc.events){ if (e.date in sums && (!editorId || e.editorId === editorId) && editorById(e.editorId)?.active !== false) sums[e.date] += e.pts; }
  return dates.map(d => ({ label:dayLabel(d), short: d === today() ? 'Today' : String(Number(d.slice(8))), value:sums[d] }));
}
function hbars(rows, unit){
  const max = Math.max(1, ...rows.map(r => r.value));
  return `<div class="hb">${rows.map(r => `<div class="hbr"><div class="hbl">${r.icon || ''}<span>${esc(r.label)}</span></div>
    <div class="hbt"><i style="width:${(r.value / max * 100).toFixed(1)}%;${r.color ? `background:${r.color}` : ''}"></i></div><b class="tnum">${pts(r.value)}${unit ? ' '+unit : ''}</b></div>`).join('')}</div>`;
}
const cardH = (title, sub, extra) => `<div class="sec-h" style="margin-bottom:14px"><div><h2>${title}</h2>${sub ? `<div class="small muted">${sub}</div>` : ''}</div>${extra || ''}</div>`;

/* ================= join ================= */
function viewJoin(){
  const mem = myMember();
  const takenBy = new Map(S.editors.map(e => [e.id, uidOfEditor(e.id)]).filter(([,u]) => u));
  const eds = S.editors.filter(e => e.active !== false).sort((a,b)=>a.name.localeCompare(b.name));
  const lost = mem && mem.editorId && !myEditor() ? editorById(mem.editorId) : null;
  return pageHead('Join the league', 'Pick your name. You\'re in straight away and can start logging your cuts.', S.isAdmin ? '<button class="btn" data-mode="admin">Back to admin view</button>' : '') +
    (lost ? `<div class="banner err">${I('info')}<span>Someone else took <b>${esc(lost.name)}</b> just before you. Pick your own name, or ask the admin if that's a mistake.</span></div>` : '') +
    `<div class="card pad"><div class="pick">${eds.map(e => { const t = takenBy.has(e.id); return `<button data-act="claim" data-id="${esc(e.id)}" ${t?'disabled':''}>${avatar(e,'lg')}<span>${esc(e.name)}</span><span class="s">${t?'Taken':'Tap to join'}</span></button>`; }).join('')}</div></div>` + miniBoard();
}
function miniBoard(){
  const st = monthStandings(monthOf(today()), S.calc);
  if (!st.list.some(r => r.total > 0)) return '';
  return `<div class="sec-h"><h2>This month so far</h2><button class="link" data-view="leaderboard">Full leaderboard</button></div>` + lbList(st.list.slice(0,5), rewards());
}

/* ================= editor dashboard ================= */
const myCuts = () => (S.cutsByUid[S.uid] || []).map(c => ({ ...c, ownerUid:S.uid }));
function ringSvg(pct, color){
  const r = 56, c = 2 * Math.PI * r, off = c * (1 - Math.max(0, Math.min(1, pct)));
  return `<svg viewBox="0 0 132 132" aria-hidden="true"><circle cx="66" cy="66" r="${r}" fill="none" stroke="var(--sunk)" stroke-width="12"/><circle cx="66" cy="66" r="${r}" fill="none" stroke="${color}" stroke-width="12" stroke-linecap="round" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${off.toFixed(1)}"/></svg>`;
}
function myStats(){
  const me = myEditor(); const calc = S.calc; const rw = rewards(); const ym = monthOf(today());
  const st = monthStandings(ym, calc); const rows = rewardRows(st);
  const mine = rows.find(r => r.editor.id === me.id) || { total:0, today:0, place:null, tier:-1, days:0, eng:0, checkin:0, streak:0, milestone:0, h2h:0 };
  const nextIdx = rw.tiers.findIndex(t => t.min > mine.total);
  return { me, calc, rw, ym, st, rows, mine, nextIdx, nextTier: nextIdx >= 0 ? rw.tiers[nextIdx] : null, streak: calc.streakNow.get(me.id) || 0, logged: calc.logged.get(me.id) || new Set() };
}
function viewEditorHome(){
  const { me, calc, rw, ym, st, rows, mine, nextIdx, nextTier, streak, logged } = myStats(); const s = calc.s;
  const prevMin = mine.tier >= 0 ? rw.tiers[mine.tier].min : 0;
  const pct = nextTier ? (mine.total - prevMin) / (nextTier.min - prevMin) : 1;
  const week = Array.from({ length:7 }, (_, i) => addDays(today(), i - 6));
  const leader = rows[0]; const gap = leader && leader.editor.id !== me.id ? leader.total - mine.total : 0;
  const hour = new Date().getHours(); const greet = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const cuts = myCuts().filter(c => c.status !== 'archived');
  const todo = cuts.filter(c => !c.daily?.[today()]);
  const mon = monthLabel(ym).split(' ')[0];
  let html = pageHead(`${greet}, ${esc(me.name)}`, todo.length ? `${todo.length} of ${cuts.length} cut${cuts.length===1?'':'s'} still need today's numbers.` : cuts.length ? 'All your cuts are logged for today. Nice work.' : 'Add your first cut to start earning points.',
    `<button class="btn" data-act="add-cut">${I('plus')}Add a cut</button><button class="btn primary" data-view="log">${I('today')}Log today's numbers</button>`);
  html += `<section class="card hero">
    <div><div class="k">Points today</div><div class="big tnum">+${pts(mine.today)}</div>
      <div class="muted small">${mine.place ? (mine.place === 1 ? `You're leading ${esc(mon)}` : `${pts(gap)} pts behind ${esc(leader.editor.name)} in 1st`) : 'Log a cut to get on the board'}</div></div>
    <div class="weekwrap"><div class="k" style="margin-bottom:10px">${streak ? `${streak}-day streak · ${7 - streak % 7} to go for +${pts(s.streak7)}` : `Log 7 days in a row for +${pts(s.streak7)}`}</div>
      <div class="week">${week.map(d => `<div class="wd ${logged.has(d)?'on':''} ${d===today()?'today':''}"><i>${logged.has(d) ? I('check') : ''}</i><span>${weekday(d)}</span></div>`).join('')}</div></div>
    <div class="ringwrap"><div class="ring">${ringSvg(pct, nextTier ? tierVar(nextIdx) : tierVar(3))}<div class="rc"><b>${nextTier ? pts(nextTier.min - mine.total) : 'Max'}</b><span>${nextTier ? `pts to ${esc(nextTier.name)}` : 'Top tier reached'}</span></div></div></div>
  </section>
  <section class="kpis">
    <div class="card kpi"><div class="ki acc">${I('bolt')}</div><div><b class="tnum">${pts(mine.total)}</b><span>${esc(mon)} points</span></div></div>
    <div class="card kpi"><div class="ki gold">${I('trophy')}</div><div><b>${mine.place ? '#'+mine.place : '—'}</b><span>of ${rows.length} editors</span></div></div>
    <div class="card kpi"><div class="ki">${I('flame')}</div><div><b>${streak}</b><span>day streak</span></div></div>
    <div class="card kpi"><div class="ki good">${I('star')}</div><div><b style="font-size:16px">${mine.tier >= 0 ? esc(rw.tiers[mine.tier].name) : 'No tier'}</b><span>${daysLeftInMonth()} days left</span></div></div>
  </section>`;
  html += `<section class="dgrid">
    <div class="card pad">${cardH('Points per day', 'Last 14 days')}${barChart(dailySeries(me.id, 14), 'Your points per day')}</div>
    <div class="card pad">${cardH('Where your points come from', esc(monthLabel(ym)))}${hbars([
      { label:'Growth', value:mine.eng, icon:I('bolt') }, { label:'Daily log', value:mine.checkin, icon:I('check') }, { label:'Streaks', value:mine.streak, icon:I('flame') },
      { label:'Milestones', value:mine.milestone, icon:I('target') }, { label:'Head-to-head', value:mine.h2h, icon:I('trophy') }])}</div>
  </section>`;
  html += `<section class="dgrid">
    <div class="card pad">${cardH("Today's checklist", `${cuts.length - todo.length} of ${cuts.length} logged`, cuts.length ? `<button class="btn sm primary" data-view="log">Log now</button>` : '')}
      ${cuts.length ? `<div class="list">${cuts.map(c => { const done = !!c.daily?.[today()]; return `<div class="li"><span class="ok ${done?'y':'n'}">${done ? I('check') : ''}</span><div style="min-width:0"><b>${esc(projectById(c.projectId)?.title || 'Project')}</b><div class="small muted">${esc(c.label || c.platform || 'Cut')}</div></div><span class="chip ${done?'good':'acc'}">${done ? 'Logged' : 'Needs numbers'}</span></div>`; }).join('')}</div>`
        : `<div class="empty" style="padding:18px"><p>No cuts yet. Add your posted video to start.</p><button class="btn primary sm" data-act="add-cut">${I('plus')}Add a cut</button></div>`}</div>
    <div class="card pad">${cardH('The race', esc(monthLabel(ym)), '<button class="link" data-view="leaderboard">Full board</button>')}
      ${(() => { const list = st.list.slice(0, 5); if (!list.some(r => r.editor.id === me.id)){ const r = st.list.find(x => x.editor.id === me.id); if (r) list.push(r); } return `<div class="list">${list.map(r => `<div class="li ${r.editor.id===me.id?'me':''}"><span class="rank ${r.rank && r.rank<=3?'r'+r.rank:''}" style="width:28px;height:28px;font-size:12px">${r.rank || '–'}</span>${avatar(r.editor,'sm')}<b style="flex:1">${esc(r.editor.name)}${r.editor.id===me.id?' · you':''}</b><b class="tnum">${pts(r.total)}</b></div>`).join('')}</div>`; })()}</div>
  </section>`;
  const ranked = cuts.map(c => ({ c, info:calc.cutInfo.get(S.uid+'/'+c.id) })).sort((a,b) => (b.info?.monthPts?.[ym]||0) - (a.info?.monthPts?.[ym]||0));
  if (ranked.length) html += `<div class="card rows"><div class="row head" style="grid-template-columns:minmax(0,1.6fr) repeat(4,minmax(0,.7fr)) minmax(0,.8fr)"><span>My cuts</span><span>Views</span><span>Likes</span><span>Shares</span><span>Last logged</span><span>Month pts</span></div>
    ${ranked.map(({c, info}) => `<div class="row" style="grid-template-columns:minmax(0,1.6fr) repeat(4,minmax(0,.7fr)) minmax(0,.8fr)"><div class="first"><b>${esc(projectById(c.projectId)?.title || 'Project')}</b><div class="small muted">${esc(c.label || 'Cut')} · ${esc(c.platform || '')}</div></div>
      <div><span class="ml">Views</span><span class="n tnum">${fmt(info?.hwm.views||0)}</span></div><div><span class="ml">Likes</span><span class="n tnum">${fmt(info?.hwm.likes||0)}</span></div><div><span class="ml">Shares</span><span class="n tnum">${fmt(info?.hwm.shares||0)}</span></div>
      <div><span class="ml">Last logged</span><span class="n">${info?.lastDate ? esc(dayLabel(info.lastDate)) : 'Never'}</span></div><div><span class="ml">Month pts</span><span class="n tnum" style="font-family:var(--font-display)">${pts(info?.monthPts?.[ym]||0)}</span></div></div>`).join('')}</div>`;
  return html;
}

function viewLog(){
  const { calc } = myStats(); const s = calc.s;
  const date = S.logDate && [today(), yesterday()].includes(S.logDate) ? S.logDate : today();
  const cuts = myCuts().filter(c => c.status !== 'archived').sort((a,b) => String(b.postedAt||'').localeCompare(String(a.postedAt||'')));
  const archived = myCuts().filter(c => c.status === 'archived');
  const doneCount = cuts.filter(c => c.daily && c.daily[date]).length;
  const locked = isClosed(monthOf(date));
  let html = pageHead('Log numbers', `Type each video's totals from the platform's insights. Logging today earns +${pts(s.checkin)}; fix earlier days from History.`, `<button class="btn primary" data-act="add-cut">${I('plus')}Add a cut</button>`);
  html += `<div class="logbar"><div class="seg" role="group" aria-label="Logging date">
      <button type="button" data-logdate="${today()}" aria-pressed="${date===today()}">Today</button>
      <button type="button" data-logdate="${yesterday()}" aria-pressed="${date===yesterday()}">Yesterday</button></div>
    ${cuts.length ? `<div class="progress-pill"><span>${doneCount}/${cuts.length} logged</span><div class="bar"><i style="width:${doneCount/cuts.length*100}%"></i></div></div>` : ''}</div>`;
  if (locked) html += `<div class="banner">${I('lock')}<span>${esc(monthLabel(monthOf(date)))} is closed, so its numbers are locked.</span></div>`;
  if (!cuts.length) html += `<div class="card empty"><div class="ico">${I('play')}</div><h3>Add your first cut</h3><p>A cut is your posted version of a project. Add it once, then type its totals here every day to earn points.</p><button class="btn primary" data-act="add-cut">${I('plus')}Add a cut</button></div>`;
  else html += `<section class="cuts">${cuts.map(c => cutCard(c, date, locked)).join('')}</section>`;
  if (archived.length) html += `<details class="card pad"><summary class="muted" style="cursor:pointer;font-weight:700">${archived.length} archived cut${archived.length===1?'':'s'}</summary>
    <div style="display:grid;gap:10px;margin-top:12px">${archived.map(c => `<div class="cut-f"><span>${esc(projectById(c.projectId)?.title || 'Project')} · ${esc(c.label || 'Cut')}</span><button class="btn sm" data-act="unarchive-cut" data-id="${esc(c.id)}">Restore</button></div>`).join('')}</div></details>`;
  return html;
}

function cutCard(c, date, locked){
  const p = projectById(c.projectId);
  const entry = c.daily?.[date];
  const before = hwmBefore(c, date);
  const lastDate = Object.keys(c.daily||{}).filter(d => d < date).sort().pop();
  const last = lastDate ? c.daily[lastDate] : null;
  const info = S.calc.cutInfo.get(S.uid+'/'+c.id);
  const ym = monthOf(today());
  const fid = k => `in-${c.id}-${k}`;
  return `<article class="card cut ${entry?'done':'todo'}" data-cut="${esc(c.id)}" data-date="${date}" data-before='${esc(JSON.stringify(before))}'>
    <div class="cut-h"><div><h3>${esc(p?.title || 'Project removed')}${c.label ? ` <span class="muted" style="font-weight:600">· ${esc(c.label)}</span>` : ''}</h3>
      <div class="meta"><span>${esc(c.platform || '')}</span>${c.postedAt?`<span>Posted ${esc(dayLabel(c.postedAt))}</span>`:''}${c.url?`<a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">${I('link')}Video</a>`:''}</div></div>
      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">${entry ? `<span class="chip good">${I('check')}Logged</span>` : '<span class="chip acc">Needs numbers</span>'}
        <span class="chip">${pts(info?.monthPts?.[ym] || 0)} pts this month</span>
        <button class="btn sm" data-act="history" data-id="${esc(c.id)}">${I('today')}History</button><button class="btn ghost icon sm" data-act="edit-cut" data-id="${esc(c.id)}" aria-label="Edit cut details">${I('edit')}</button></div></div>
    <div class="mgrid">${METRICS.map(m => `<div class="mt"><label for="${fid(m.key)}">${I(m.key)}${m.label}<span class="rate">${esc(rateLabel(S.calc?.s?.[m.key]))}</span></label>
      <input type="number" id="${fid(m.key)}" data-keep data-metric="${m.key}" min="0" step="1" inputmode="numeric" ${locked?'disabled':''} value="${entry ? int(entry[m.key]) : ''}" placeholder="${last ? int(last[m.key]) : '0'}">
      <span class="d" data-delta="${m.key}"></span></div>`).join('')}</div>
    <div class="catsum" aria-live="polite"></div>
    <div class="cut-f"><span class="last">${last ? `Last logged ${esc(dayLabel(lastDate).toLowerCase())}` : 'First entry: type the totals the platform shows right now'}</span>
      <span style="display:flex;gap:10px;align-items:center"><span class="preview"></span><button class="btn primary" data-act="save-cut" data-id="${esc(c.id)}" ${locked?'disabled':''}>Save</button></span></div>
  </article>`;
}

function updatePreview(card){
  if (!card || !S.calc) return;
  let before; try { before = JSON.parse(card.dataset.before || '{}'); } catch { before = {}; }
  const s = S.calc.s; const gains = {}; let any = false;
  card.querySelectorAll('input[data-metric]').forEach(inp => {
    const k = inp.dataset.metric; const raw = inp.value.trim();
    const n = raw === '' ? null : Math.max(0, Math.floor(Number(raw) || 0));
    const dEl = card.querySelector(`[data-delta="${k}"]`);
    if (n === null){ gains[k] = 0; if (dEl){ dEl.textContent = ''; dEl.className = 'd'; } return; }
    any = true;
    const g = n - (before[k]||0); gains[k] = Math.max(0, g);
    if (dEl){ const cp = Math.max(0, g) * (s[k]||0);
      dEl.innerHTML = g > 0 ? `<b>+${pts(cp)} pts</b><span>+${fmt(g)} ${esc(METRICS.find(x => x.key === k)?.label.toLowerCase() || '')}</span>` : g < 0 ? 'Lower than last entry · 0 pts' : 'No change · 0 pts';
      dEl.className = 'd ' + (g > 0 ? 'up' : g < 0 ? 'down' : ''); }
  });
  const el = card.querySelector('.preview'); if (!el) return;
  const dirty = [...card.querySelectorAll('input[data-metric]')].some(i => S.dirty.has(i.id));
  el.innerHTML = any && dirty ? `<span class="gainpill">${I('bolt')}+${pts(engagementPts(gains, s))} pts</span>` : '';
  const sum = card.querySelector('.catsum');
  if (sum){ const total = engagementPts(gains, s);
    sum.innerHTML = any && total > 0 ? METRICS.filter(m => gains[m.key] > 0).map(m => `<span>${esc(m.label)} <b>${pts(gains[m.key]*s[m.key])}</b></span>`).join('<i>+</i>') + `<i>=</i><span class="tot"><b>${pts(total)} pts</b> ${dirty ? 'if you save' : 'from this entry'}</span>` : ''; }
  const btn = card.querySelector('[data-act="save-cut"]');
  if (btn && !btn.disabled){ const done = card.classList.contains('done'); btn.className = 'btn ' + (dirty || !done ? 'primary' : 'quiet'); btn.textContent = done ? (dirty ? 'Save changes' : 'Saved') : 'Save'; }
}

/* ================= admin dashboard ================= */
function viewAdminHome(){
  const calc = S.calc; const t = today(); const ym = monthOf(t); const rw = rewards();
  const st = monthStandings(ym, calc); const rr = rewardRows(st);
  const eds = S.editors.filter(e => e.active !== false).sort((a,b)=>a.name.localeCompare(b.name));
  const joined = eds.filter(e => S.pinSet[e.id]);
  const loggedToday = joined.filter(e => calc.logged.get(e.id)?.has(t));
  const notLogged = joined.filter(e => !calc.logged.get(e.id)?.has(t));
  const notJoined = eds.filter(e => !S.pinSet[e.id]);
  const payout = rr.reduce((a,r) => a + r.reward, 0);
  const amountsSet = rw.tiers.some(x => x.amount > 0) || rw.topAmount > 0;
  const week = Array.from({ length:7 }, (_, i) => addDays(t, i - 6));
  const me = myEditor();
  let html = pageHead('Admin dashboard', `${esc(monthLabel(ym))} · ${daysLeftInMonth()} days left`, '');
  html += `<section class="kpis">
    <div class="card kpi"><div class="ki acc">${I('check')}</div><div><b>${loggedToday.length}/${joined.length}</b><span>logged today</span></div></div>
    <div class="card kpi"><div class="ki good">${I('bolt')}</div><div><b class="tnum">${pts(st.list.reduce((a,r)=>a+r.today,0))}</b><span>team points today</span></div></div>
    <div class="card kpi"><div class="ki">${I('trophy')}</div><div><b class="tnum">${pts(st.list.reduce((a,r)=>a+r.total,0))}</b><span>team points this month</span></div></div>
    <div class="card kpi"><div class="ki gold">${I('gift')}</div><div><b class="tnum">${amountsSet ? money(payout) : 'Not set'}</b><span>${amountsSet ? 'payout so far' : '<button class="link" data-act="edit-rewards">Set reward amounts</button>'}</span></div></div>
  </section>`;
  html += `<section class="dgrid">
    <div class="card pad">${cardH('Team points per day', 'Last 14 days, all editors')}${barChart(dailySeries(null, 14), 'Team points per day')}</div>
    <div class="card pad">${cardH('Points by editor', esc(monthLabel(ym)), '<button class="link" data-view="leaderboard">Leaderboard</button>')}${hbars(rr.map(r => ({ label:r.editor.name, value:r.total, icon:avatar(r.editor,'sm'), color: r.tier >= 0 ? tierVar(r.tier) : 'var(--line)' })))}
      <div class="small muted" style="margin-top:10px;display:flex;gap:12px;flex-wrap:wrap">${rw.tiers.map((x,i) => `<span style="display:inline-flex;gap:6px;align-items:center"><i style="width:10px;height:10px;border-radius:3px;background:${tierVar(i)}"></i>${esc(x.name)} ${pts(x.min)}+</span>`).join('')}</div></div>
  </section>`;
  html += `<div class="card pad">${cardH('Daily check-ins', 'Last 7 days. A tick means the editor logged numbers that day.')}
    <div class="ckwrap"><div class="ck" style="grid-template-columns:minmax(120px,1.4fr) repeat(7,minmax(34px,1fr)) minmax(64px,.8fr) minmax(80px,.9fr)">
      <span class="ckh">Editor</span>${week.map(d => `<span class="ckh c ${d===t?'now':''}">${d===t ? 'Today' : weekday(d)+' '+Number(d.slice(8))}</span>`).join('')}<span class="ckh c">Streak</span><span class="ckh r">Pts today</span>
      ${eds.map(e => { const L = calc.logged.get(e.id) || new Set(); const r = st.list.find(x => x.editor.id === e.id) || { today:0 }; const j = !!S.pinSet[e.id];
        return `<span class="ckn">${avatar(e,'sm')}<span><b>${esc(e.name)}</b>${j ? '' : '<span class="small muted" style="display:block;font-weight:600">Not signed in yet</span>'}</span></span>${week.map(d => `<span class="c"><span class="ok ${L.has(d)?'y':'n'}">${L.has(d) ? I('check') : ''}</span></span>`).join('')}<span class="c tnum">${calc.streakNow.get(e.id)||0}d</span><span class="r tnum" style="font-weight:800;color:${r.today?'var(--good)':'var(--faint)'}">${r.today ? '+'+pts(r.today) : '0'}</span>`; }).join('')}
    </div></div></div>`;
  // Needs attention
  const weekAgo = Date.now() - 7*864e5; const editMap = new Map();
  for (const c of allCuts()){ const e = editorByUid(c.ownerUid); if (!e) continue;
    for (const [d, v] of Object.entries(c.daily||{})) if (v && v.edited && v.editedAt && Date.parse(v.editedAt) > weekAgo){
      const k = c.ownerUid + '/' + c.id; const g = editMap.get(k) || { e, c, days:[], at:'', fixed:false };
      g.days.push(d); if (String(v.editedAt) > g.at) g.at = v.editedAt; g.fixed = g.fixed || !!v.fixedBy; editMap.set(k, g); } }
  const edits = [...editMap.values()].sort((a,b) => String(b.at).localeCompare(String(a.at)));
  const jumps = calc.events.filter(x => x.type === 'eng' && monthOf(x.date) === ym && x.pts > 0).sort((a,b) => b.pts - a.pts).slice(0, 5);
  const cutOf = (edId, cutId) => { const uid = uidOfEditor(edId); return (S.cutsByUid[uid]||[]).find(c => c.id === cutId); };
  html += `<section class="dgrid">
    <div class="card pad">${cardH('Needs attention', '')}
      <div class="list">
        ${notLogged.length ? `<div class="li"><span class="ok n">${I('today')}</span><div style="min-width:0"><b>Not logged today</b><div class="small muted">${notLogged.map(e => esc(e.name)).join(', ')}</div></div></div>` : `<div class="li"><span class="ok y">${I('check')}</span><b>Everyone who joined has logged today</b></div>`}
        ${notJoined.length ? `<div class="li"><span class="ok n">${I('users')}</span><div style="min-width:0"><b>Not signed in yet</b><div class="small muted">${notJoined.map(e => esc(e.name)).join(', ')}. Send them the app link and the team code.</div></div></div>` : ''}
        ${edits.slice(0, 6).map(x => { const n = x.days.length; const ds = x.days.sort().reverse(); return `<div class="li"><span class="ok n">${I('edit')}</span><div style="min-width:0;flex:1"><b>${esc(x.e.name)} ${x.fixed ? 'had' : 'edited'} ${n} past day${n===1?'':'s'}${x.fixed ? ' fixed' : ''}</b><div class="small muted">${esc(projectById(x.c.projectId)?.title || 'Project')} · ${esc(ds.slice(0,3).map(dayLabel).join(', '))}${n>3?` +${n-3} more`:''} · ${esc(ago(x.at))}</div></div><button class="btn sm" data-act="fix-entry" data-uid="${esc(x.c.ownerUid)}" data-id="${esc(x.c.id)}">Review</button></div>`; }).join('')}
        ${!edits.length ? `<div class="li"><span class="ok y">${I('check')}</span><b>No past days edited this week</b></div>` : ''}
      </div></div>
    <div class="card pad">${cardH('Biggest single-day gains', `${esc(monthLabel(ym))} · worth a quick check`)}
      ${jumps.length ? `<div class="list">${jumps.map(x => { const e = editorById(x.editorId); const c = cutOf(x.editorId, x.cutId); return `<div class="li">${avatar(e,'sm')}<div style="min-width:0;flex:1"><b>${esc(e?.name)}</b><div class="small muted">${esc(projectById(x.projectId)?.title || 'Project')} · ${esc(dayLabel(x.date))}</div></div><b class="tnum" style="color:var(--good)">+${pts(x.pts)}</b>${c ? `<button class="btn sm" data-act="fix-entry" data-uid="${esc(uidOfEditor(x.editorId))}" data-id="${esc(c.id)}">Review</button>` : ''}</div>`; }).join('')}</div>` : '<p class="muted small" style="margin:0">No points logged this month yet.</p>'}
    </div>
  </section>`;
  return html;
}


/* ================= leaderboard ================= */
function monthOptions(){
  const set = new Set([monthOf(today())]);
  for (const e of S.calc.events) set.add(monthOf(e.date));
  for (const m of S.months) set.add(m.id);
  return [...set].filter(m => /^\d{4}-\d{2}$/.test(m)).sort().reverse();
}
const monthSelect = id => `<select id="${id}" data-filter="month" aria-label="Month">${monthOptions().map(m => `<option value="${m}" ${m===S.month?'selected':''}>${esc(monthLabel(m))}${isClosed(m)?' · closed':''}</option>`).join('')}</select>`;

function lbList(list, rw){
  const meId = myEditor()?.id; const max = Math.max(1, ...list.map(r => r.total));
  return `<div class="card lb">${list.map(r => `<details class="${r.editor.id===meId?'me':''}"><summary>
      <span class="rank ${r.rank && r.rank<=3?'r'+r.rank:''}">${r.rank || '–'}</span>
      <span class="who">${avatar(r.editor)}<span style="min-width:0"><b>${esc(r.editor.name)}${r.editor.id===meId?' · you':''}</b><span class="sub2">${tierChip(tierFor(r.total, rw.tiers), rw.tiers)}<span>${r.days}d logged</span></span></span></span>
      <span class="barcol"><div class="bar"><i style="width:${(r.total/max*100).toFixed(1)}%"></i></div></span>
      <span class="tod ${r.today?'':'zero'}">${r.today ? '+'+pts(r.today)+' today' : 'no pts today'}</span>
      <span class="tot tnum">${pts(r.total)}</span>
      <span class="chev">${I('chev')}</span></summary>
    <div class="bd"><div><span>Engagement</span><b>${pts(r.eng)}</b></div><div><span>Check-ins</span><b>${pts(r.checkin)}</b></div><div><span>Streaks</span><b>${pts(r.streak)}</b></div><div><span>Milestones</span><b>${pts(r.milestone)}</b></div><div><span>Head-to-head</span><b>${pts(r.h2h)}</b></div></div>
  </details>`).join('')}</div>`;
}

function viewLeaderboard(){
  const st = monthStandings(S.month, S.calc); const rw = rewards();
  const sorts = { total:'Total', today:'Today', eng:'Engagement' };
  let html = pageHead('Leaderboard', `${esc(monthLabel(S.month))}${S.month === monthOf(today()) ? ` · ${daysLeftInMonth()} days left` : ''}${isClosed(S.month) ? ' · closed' : ''}`);
  html += `<div class="toolbar"><div class="left">${monthSelect('f-month')}<div class="seg" role="group" aria-label="Rank by">${Object.entries(sorts).map(([k,l]) => `<button type="button" data-sort="${k}" aria-pressed="${S.sort===k}">${l}</button>`).join('')}</div></div>
    <button class="btn sm" data-act="copy-csv">${I('copy')}Copy CSV</button></div>`;
  const top = st.list.filter(r => r.rank && r.rank <= 3);
  if (top.length >= 2){
    const by = n => top.find(r => r.rank === n) || top.filter(r => r.rank === 1)[n-1];
    const order = [ [top[1], 2], [top[0], 1], [top[2], 3] ];
    html += `<section class="card pad"><div class="podium">${order.map(([r, n]) => r ? `<div class="pd p${r.rank}">${avatar(r.editor,'xl')}<div><div class="nm">${esc(r.editor.name)}</div><div class="pt tnum">${pts(r[S.sort])} <small>pts</small></div></div><div class="step">${r.rank}</div></div>` : '<div></div>').join('')}</div></section>`;
  }
  if (!st.list.some(r => r.total > 0)) html += `<div class="card empty"><div class="ico">${I('trophy')}</div><h3>The race hasn't started</h3><p>Points appear the moment editors log their first numbers for ${esc(monthLabel(S.month))}.</p></div>`;
  else html += lbList(st.list, rw);
  html += `<p class="small muted" style="margin:0">Tap a row for the breakdown. Head-to-head points update live and become final when the month closes.</p>`;
  return html;
}

/* ================= projects ================= */
function viewProjects(){
  const ym = monthOf(today()); const st = monthStandings(ym, S.calc);
  const canAdd = !adminView() && !!myEditor();
  let html = pageHead('Projects', adminView() ? 'What your editors are working on. Editors add projects themselves when they start a new cut.' : 'Every editor cuts their own version of the same project. Whoever grows the most on a project each month wins the head-to-head bonus.', canAdd ? `<button class="btn primary" data-act="add-project">${I('plus')}New project</button>` : '');
  const projects = allProjects();
  if (!projects.length) return html + `<div class="card empty"><div class="ico">${I('folder')}</div><h3>No projects yet</h3><p>${canAdd ? 'Create the first one. Everyone on the team can add their cut to it.' : 'Projects appear here as soon as an editor adds one.'}</p>${canAdd?`<button class="btn primary" data-act="add-project">${I('plus')}New project</button>`:''}</div>`;
  const cuts = allCuts().filter(c => editorByUid(c.ownerUid));
  const sorted = projects.sort((a,b) => (a.status==='closed') - (b.status==='closed') || String(b.createdAt||'').localeCompare(String(a.createdAt||'')));
  html += `<div class="pgrid">${sorted.map(p => {
    const pc = cuts.filter(c => c.projectId === p.id);
    const eds = [...new Set(pc.map(c => editorByUid(c.ownerUid)?.id))].map(editorById).filter(Boolean);
    const views = pc.reduce((a,c) => a + (S.calc.cutInfo.get(c.ownerUid+'/'+c.id)?.hwm.views || 0), 0);
    const h = st.h2hByProject.get(p.id); const lead = h?.[0] ? editorById(h[0].editorId) : null;
    const by = p.ownerUid ? editorByUid(p.ownerUid)?.name : 'Admin';
    return `<button class="card pcard" data-open-project="${esc(p.id)}">
      <div style="display:flex;justify-content:space-between;gap:10px;align-items:flex-start"><div style="min-width:0"><h3>${esc(p.title)}</h3><div class="sub">${esc([p.client, p.platform].filter(Boolean).join(' · ') || 'No client set')}</div></div>${p.status==='closed'?'<span class="chip">Closed</span>':'<span class="chip good">Open</span>'}</div>
      <div class="pstats"><div><b>${pc.length}</b><span>cuts</span></div><div><b>${eds.length}</b><span>editors</span></div><div><b>${fmt(views)}</b><span>views</span></div></div>
      <div class="pfoot"><span style="display:flex;flex-direction:column;gap:6px;min-width:0"><span class="stack">${eds.slice(0,7).map(e => avatar(e,'sm')).join('')}</span><span class="small" style="color:var(--ink);font-weight:600">${eds.length ? esc(eds.map(e => e.name).join(', ')) : '<span class="muted">No cuts yet</span>'}</span></span>
        <span class="small muted">${lead ? `${I('trophy')} <b style="color:var(--ink)">${esc(lead.name)}</b> leads` : `Added by ${esc(by || 'editor')}`}</span></div>
    </button>`; }).join('')}</div>`;
  return html;
}

function viewProject(){
  const p = projectById(S.projectId); const ym = monthOf(today());
  const st = monthStandings(ym, S.calc); const h = st.h2hByProject.get(p.id) || [];
  const cuts = allCuts().filter(c => c.projectId === p.id && editorByUid(c.ownerUid))
    .map(c => ({ c, ed:editorByUid(c.ownerUid), info:S.calc.cutInfo.get(c.ownerUid+'/'+c.id) }))
    .sort((a,b) => (b.info?.monthPts?.[ym]||0) - (a.info?.monthPts?.[ym]||0));
  const mine = myEditor() && cuts.some(x => x.c.ownerUid === S.uid);
  const by = p.ownerUid ? editorByUid(p.ownerUid)?.name : 'Admin';
  const acts = [
    myEditor() && p.status !== 'closed' ? `<button class="btn primary" data-act="add-cut" data-project="${esc(p.id)}">${I('plus')}${mine ? 'Add another cut' : 'Add my cut'}</button>` : '',
    canEditProject(p) ? `<button class="btn" data-act="edit-project" data-id="${esc(p.id)}">${I('edit')}Edit</button>` : '',
    canEditProject(p) ? `<button class="btn danger" data-act="delete-project" data-id="${esc(p.id)}">Delete</button>` : ''
  ].join('');
  let html = `<div><button class="btn ghost sm" data-act="back">${I('back')}All projects</button></div>`;
  html += pageHead(esc(p.title), `${esc([p.client, p.platform].filter(Boolean).join(' · ') || 'No client set')} · added by ${esc(by || 'an editor')}${p.notes ? ' · '+esc(p.notes) : ''}`, acts);
  if (h.length) html += `<section class="card pad"><div class="sec-h" style="margin-bottom:14px"><h2>Head-to-head · ${esc(monthLabel(ym))}</h2><span class="small muted">Bonus paid when the month closes</span></div>
    <div class="podium">${[h[1], h[0], h[2]].map(x => x ? `<div class="pd p${Math.min(x.rank,3)}">${avatar(editorById(x.editorId),'lg')}<div><div class="nm">${esc(editorById(x.editorId)?.name)}</div><div class="pt tnum" style="font-size:17px">${pts(x.pts)} <small>pts · +${pts(x.bonus)}</small></div></div><div class="step" style="height:${[0,84,60,44][Math.min(x.rank,3)]}px;font-size:20px">${x.rank}</div></div>` : '<div></div>').join('')}</div></section>`;
  else if (cuts.length) html += `<div class="banner">${I('target')}<span>Head-to-head starts when a second editor adds a cut to this project.</span></div>`;
  if (!cuts.length) return html + `<div class="card empty"><div class="ico">${I('play')}</div><h3>No cuts yet</h3><p>${adminView() ? 'No editor has added a cut to this project yet.' : 'Be the first to add your version of this project.'}</p>${myEditor() && p.status !== 'closed' ? `<button class="btn primary" data-act="add-cut" data-project="${esc(p.id)}">${I('plus')}Add my cut</button>` : ''}</div>`;
  html += `<div class="card rows"><div class="row head"><span>Cut</span>${METRICS.map(m => `<span>${m.label}</span>`).join('')}<span>Month pts</span><span></span></div>
    ${cuts.map(({c, ed, info}) => `<div class="row"><div class="first" style="display:flex;gap:10px;align-items:center;min-width:0">${avatar(ed,'sm')}<div style="min-width:0"><b>${esc(ed.name)}</b><div class="small muted">${c.url ? `<a href="${esc(c.url)}" target="_blank" rel="noopener noreferrer">${esc(c.label || 'Video')}</a>` : esc(c.label || 'Cut')} · ${info?.lastDate ? 'logged '+esc(dayLabel(info.lastDate).toLowerCase()) : 'not logged'}</div></div></div>
      ${METRICS.map(m => `<div><span class="ml">${m.label}</span><span class="n tnum">${fmt(info?.hwm[m.key]||0)}</span></div>`).join('')}
      <div><span class="ml">Month pts</span><span class="n tnum" style="font-family:var(--font-display)">${pts(info?.monthPts?.[ym]||0)}</span></div>
      <div>${S.isAdmin ? `<button class="btn sm" data-act="fix-entry" data-uid="${esc(c.ownerUid)}" data-id="${esc(c.id)}">Fix</button>` : ''}</div></div>`).join('')}</div>
    <p class="small muted" style="margin:0">Numbers are the highest totals logged so far.</p>`;
  return html;
}

/* ================= rewards ================= */
function viewMonth(){
  const ym = S.month; const doc = monthDoc(ym); const rw = rewards(); const admin = S.isAdmin && !editorMode();
  let rows;
  if (doc?.closed && Array.isArray(doc.results)){
    wantNames([doc.closedBy]);
    rows = doc.results.map(r => ({ ...r, editor: editorById(r.editorId) || { id:r.editorId, name:r.name } }));
  } else {
    rows = rewardRows(monthStandings(ym, S.calc)).map(r => ({ editorId:r.editor.id, name:r.editor.name, editor:r.editor, total:r.total, place:r.place, tierName:r.tier>=0?rw.tiers[r.tier].name:'', tierIdx:r.tier, tierAmt:r.tierAmt, topAmt:r.topAmt, reward:r.reward }));
  }
  const payout = rows.reduce((a,r) => a + (r.reward||0), 0);
  const amountsSet = rw.tiers.some(t => t.amount > 0) || rw.topAmount > 0;
  const acts = [
    admin ? `<button class="btn" data-act="edit-scoring">${I('bolt')}Point values</button>` : '',
    admin ? `<button class="btn" data-act="edit-rewards">${I('settings')}Set rewards</button>` : '',
    admin && !doc?.closed ? `<button class="btn primary" data-act="close-month">${I('lock')}Close month</button>` : '',
    admin && doc?.closed ? `<button class="btn" data-act="reopen-month">Reopen</button>` : ''
  ].join('');
  let html = pageHead('Month-end rewards', 'Your month total puts you in a tier. The top scorer also wins Editor of the month.', acts);
  html += `<div class="toolbar"><div class="left">${monthSelect('f-month2')}</div><button class="btn sm" data-act="copy-month">${I('copy')}Copy CSV</button></div>`;
  if (doc?.closed) html += `<div class="banner good">${I('lock')}<span>${esc(monthLabel(ym))} closed ${esc(ago(doc.closedAt))}${doc.closedBy?` by ${esc(nameOf(doc.closedBy))}`:''}. These results are final.</span></div>`;
  else html += `<div class="banner">${I('info')}<span>Live results${ym === monthOf(today()) ? ` · ${daysLeftInMonth()} days left` : ''}. They become final when the admin closes the month.</span></div>`;
  if (!amountsSet && !doc?.closed) html += `<div class="banner err">${I('gift')}<span>Reward amounts aren't set yet. ${admin ? 'Click Set rewards to add the ₹ amount for each tier.' : 'The admin will announce them soon.'}</span></div>`;
  const tiersForView = doc?.closed && doc.rewards?.tiers ? doc.rewards.tiers : rw.tiers;
  html += `<section class="tiers">${tiersForView.map((t,i) => {
    const inTier = rows.filter(r => r.tierName === t.name);
    return `<div class="card tier" style="--tc:${tierVar(i)}"><div class="tn">${esc(t.name)}</div><div class="amt tnum">${money(t.amount)}</div><div class="need">${pts(t.min)}+ points</div>
      <div class="who">${inTier.length ? inTier.map(r => avatar(r.editor,'sm')).join('') : '<span class="small muted">Nobody yet</span>'}</div></div>`; }).join('')}</section>`;
  const top = rows[0] && rows[0].total > 0 ? rows[0] : null;
  html += `<section class="card hero" style="grid-template-columns:auto 1fr auto">
    ${top ? avatar(top.editor,'xl') : `<div class="empty" style="padding:0"><div class="ico">${I('trophy')}</div></div>`}
    <div><div class="k">Editor of the month${doc?.closed ? '' : ' · so far'}</div><div class="big" style="font-size:34px">${top ? esc(top.name) : 'Not decided'}</div><div class="muted small">${top ? `${pts(top.total)} points · ${money(rw.topAmount)} extra` : 'Waiting for the first points'}</div></div>
    <div style="text-align:right"><div class="k">Total payout</div><div class="big tnum" style="font-size:30px">${money(payout)}</div><div class="muted small">${rows.filter(r => r.tierName).length} of ${rows.length} editors in a tier</div></div>
  </section>`;
  html += `<div class="card rows">${rows.map(r => `<div class="row rw">
    <span class="rank ${r.place && r.place<=3?'r'+r.place:''}">${r.place || '–'}</span>
    <div style="display:flex;gap:10px;align-items:center">${avatar(r.editor,'sm')}<b>${esc(r.name)}</b></div>
    <div class="rwp"><span class="ml">Points</span><span class="n tnum">${pts(r.total)}</span></div>
    <div>${r.tierName ? `<span class="chip tc" style="--tc:${tierVar(r.tierIdx ?? 0)}">${I('star')}${esc(r.tierName)}</span>` : '<span class="chip">No tier</span>'}</div>
    <div style="text-align:right"><span class="ml">Reward</span><b class="tnum" style="font-family:var(--font-display)">${money(r.reward)}</b></div></div>`).join('')}</div>`;
  return html;
}

/* ================= team ================= */
function viewTeam(){
  wantNames(S.editors.map(e => uidOfEditor(e.id)).filter(Boolean));
  let html = pageHead('Team', 'Send editors the app link and the team code. They tap their name and set a 4-digit PIN the first time. Only they can log their own cuts.', `<button class="btn primary" data-act="add-editor">${I('plus')}Add editor</button>`);
  const sorted = S.editors.slice().sort((a,b) => (a.active===false) - (b.active===false) || a.name.localeCompare(b.name));
  html += `<div class="card"><div class="roster head"><span>Editor</span><span class="hm">PIN</span><span class="hm">Cuts</span><span class="hm">Status</span><span class="hm" style="text-align:right">All-time pts</span><span></span></div>
  ${sorted.map(ed => { const uid = ed.id; const pinOk = !!S.pinSet[ed.id]; const cuts = (S.cutsByUid[uid]||[]).length; const all = S.calc.events.filter(e => e.editorId === ed.id).reduce((a,e)=>a+e.pts,0);
    return `<div class="roster"><div style="display:flex;gap:10px;align-items:center">${avatar(ed,'sm')}<div><b>${esc(ed.name)}</b><div class="small muted mo">${pinOk ? 'PIN set' : 'Not signed in yet'}</div></div></div>
      <span class="hm">${pinOk ? '<span class="chip good">PIN set</span>' : '<span class="chip">Not signed in yet</span>'}</span><span class="hm tnum">${cuts}</span>
      <span class="hm">${ed.active===false?'<span class="chip">Inactive</span>':'<span class="chip good">Active</span>'}</span><span class="hm tnum" style="text-align:right;font-weight:800">${pts(all)}</span>
      <div class="acts"><button class="btn sm" data-act="rename-editor" data-id="${esc(ed.id)}">Rename</button>${pinOk?`<button class="btn sm" data-act="reset-pin" data-id="${esc(ed.id)}">Reset PIN</button>`:''}
        <button class="btn sm" data-act="toggle-editor" data-id="${esc(ed.id)}">${ed.active===false?'Reactivate':'Deactivate'}</button>${!pinOk && !cuts?`<button class="btn sm danger" data-act="delete-editor" data-id="${esc(ed.id)}">Delete</button>`:''}</div></div>`; }).join('')}</div>
  <div class="banner">${I('info')}<span>Forgot their PIN? Use Reset PIN. They set a new one with the team code the next time they sign in, and their points stay.</span></div>`;
  return html;
}

/* ================= points ================= */
function viewPoints(){
  const s = scoring(); const rw = rewards();
  const unit = w => w >= 1 ? `${pts(w)} pt${w===1?'':'s'} each` : w >= 0.1 ? `${pts(w*10)} pts per 10` : `${pts(w*100)} pt${w*100===1?'':'s'} per 100`;
  const ex = { views:15000, likes:900, comments:60, shares:45, reposts:20 };
  const exEng = engagementPts(ex, s);
  const acts = S.isAdmin && !editorMode() ? `<button class="btn" data-act="edit-scoring">${I('settings')}Point values</button><button class="btn" data-act="edit-rewards">${I('gift')}Rewards</button>` : '';
  return pageHead('How points work', 'Log your cuts\' totals every day. You earn points for each day\'s growth, plus bonuses for showing up, hitting milestones and beating other editors on the same project. Points reset each month.', acts) +
  `<div class="rules">
    <div class="card"><h3><span class="ki">${I('bolt')}</span>Engagement</h3><p>Type the totals the platform shows. You earn points on the increase since your last entry.</p>
      <div class="wl">${METRICS.map(m => `<div><span style="display:flex;gap:8px;align-items:center">${I(m.key)}${m.label}</span><b>${unit(s[m.key])}</b></div>`).join('')}</div></div>
    <div class="card"><h3><span class="ki">${I('flame')}</span>Show up daily</h3><p>Rewards the habit, even on slow days. Missed a day? Add it from History on the cut.</p>
      <div class="wl"><div><span>Each day you log</span><b>+${pts(s.checkin)}</b></div><div><span>Every 7 days in a row</span><b>+${pts(s.streak7)}</b></div></div></div>
    <div class="card"><h3><span class="ki">${I('target')}</span>View milestones</h3><p>One-time bonus per cut, the day it crosses each mark.</p>
      <div class="wl">${MILESTONES.map(([k,,l]) => `<div><span>${l}</span><b>+${pts(s[k])}</b></div>`).join('')}</div></div>
    <div class="card"><h3><span class="ki">${I('trophy')}</span>Head-to-head</h3><p>Monthly, on each project with cuts from two or more editors, ranked by engagement points earned there.</p>
      <div class="wl"><div><span>1st on a project</span><b>+${pts(s.h2h1)}</b></div><div><span>2nd</span><b>+${pts(s.h2h2)}</b></div><div><span>3rd</span><b>+${pts(s.h2h3)}</b></div></div></div>
    <div class="card"><h3><span class="ki">${I('star')}</span>Example day</h3><p>Your cut grew by ${fmt(ex.views)} views, ${ex.likes} likes, ${ex.comments} comments, ${ex.shares} shares and ${ex.reposts} reposts.</p>
      <div class="wl">${METRICS.map(m => `<div><span>${ex[m.key].toLocaleString('en-IN')} ${m.label.toLowerCase()} × ${s[m.key]}</span><b>${pts(ex[m.key]*s[m.key])}</b></div>`).join('')}
        <div><span>Daily check-in</span><b>+${pts(s.checkin)}</b></div><div><span>Crossed 10K views</span><b>+${pts(s.m10k)}</b></div>
        <div class="tot"><span>That day</span><b>${pts(exEng + s.checkin + s.m10k)} pts</b></div></div></div>
    <div class="card"><h3><span class="ki">${I('gift')}</span>Month-end rewards</h3><p>Your month total decides your tier. The top scorer also gets Editor of the month.</p>
      <div class="wl">${rw.tiers.map((t,i) => `<div><span>${tierChip(i, rw.tiers)} ${pts(t.min)}+ pts</span><b>${money(t.amount)}</b></div>`).join('')}<div><span>Editor of the month</span><b>${money(rw.topAmount)} extra</b></div></div></div>
    <div class="card" style="grid-column:1/-1"><h3><span class="ki">${I('lock')}</span>Fair play</h3>
      <p>Enter the exact totals from the platform's insights. Only increases earn points, so repeats and dips never count twice. Log daily from My day. To correct an earlier day or add one you missed, open History on that cut; you can only change your own cuts, and only in months that aren't closed. The admin can see every entry and correct numbers that look wrong. When the month closes, results and rewards are locked.</p></div>
  </div>`;
}

/* ================= dialogs ================= */
const dlg = $('#dlg'), form = $('#dlgForm');
let dlgSubmit = null;
function openDialog({ title, sub, body, submitLabel, danger, onSubmit }){
  form.innerHTML = `<div class="dlg-h"><h2>${esc(title)}</h2>${sub?`<p>${esc(sub)}</p>`:''}</div>
    <div class="dlg-b">${body}<div class="ferr" id="ferr" role="alert"></div></div>
    <div class="dlg-f"><button type="button" class="btn ghost" data-close>Cancel</button><button type="submit" class="btn ${danger?'danger':'primary'}" id="dlgOk">${esc(submitLabel)}</button></div>`;
  dlgSubmit = onSubmit; dlg.showModal();
  const first = form.querySelector('input:not([type=hidden]):not([disabled]):not([type=checkbox]),select:not([disabled])'); if (first) first.focus();
}
function closeDialog(){ dlgSubmit = null; if (dlg.open) dlg.close(); }
function formError(msg){ const el = $('#ferr'); if (el) el.textContent = msg; }
form.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeDialog(); });
dlg.addEventListener('close', () => { dlgSubmit = null; });
dlg.addEventListener('click', e => { if (e.target === dlg) closeDialog(); });
form.addEventListener('submit', async e => {
  e.preventDefault(); if (!dlgSubmit) return;
  const btn = $('#dlgOk'); btn.disabled = true; const label = btn.textContent; btn.textContent = 'Saving…'; formError('');
  try { const ok = await dlgSubmit(new FormData(form)); if (ok) closeDialog(); }
  finally { if (btn.isConnected){ btn.disabled = false; btn.textContent = label; } }
});
const confirmDialog = (title, sub, label, fn) => openDialog({ title, sub, body:'', submitLabel:label, danger:true, onSubmit:fn });

function readMetrics(fd, prefix){
  const out = {};
  for (const m of METRICS){
    const raw = clean(fd.get(prefix + m.key)); const n = raw === '' ? 0 : Number(raw);
    if (!Number.isFinite(n) || n < 0 || !Number.isInteger(n)) return { error:`${m.label} must be a whole number, 0 or more.` };
    if (n > MAX_METRIC) return { error:`${m.label} looks too large. Check the number.` };
    out[m.key] = n;
  }
  return { values:out };
}

function projectDialog(p){
  openDialog({
    title: p ? 'Edit project' : 'New project', sub: p ? '' : 'Add the brief once. Every editor can then add their own cut to it.', submitLabel: p ? 'Save project' : 'Create project',
    body: `<label class="field full" for="p-title">Project title<input type="text" id="p-title" name="title" required maxlength="120" value="${esc(p?.title)}" placeholder="e.g. Diwali launch reel"></label>
      <label class="field" for="p-client">Client / brand <span class="hint">optional</span><input type="text" id="p-client" name="client" maxlength="80" value="${esc(p?.client)}"></label>
      <label class="field" for="p-platform">Main platform<select id="p-platform" name="platform"><option value="">Mixed</option>${PLATFORMS.map(x=>`<option ${p?.platform===x?'selected':''}>${x}</option>`).join('')}</select></label>
      <label class="field full" for="p-notes">Brief notes <span class="hint">optional</span><input type="text" id="p-notes" name="notes" maxlength="300" value="${esc(p?.notes)}"></label>
      ${p?`<label class="field" for="p-status">Status<select id="p-status" name="status"><option value="open" ${p.status!=='closed'?'selected':''}>Open for new cuts</option><option value="closed" ${p.status==='closed'?'selected':''}>Closed</option></select></label>`:''}`,
    onSubmit: async fd => {
      const title = clean(fd.get('title'));
      if (!title) { formError('Give the project a title.'); return false; }
      if (title.length > 120) { formError('Keep the title under 120 characters.'); return false; }
      if (allProjects().some(x => x.id !== p?.id && x.title.trim().toLowerCase() === title.toLowerCase())) { formError('A project with this title already exists. Open it and add your cut there.'); return false; }
      const data = { title, client:clean(fd.get('client')).slice(0,80), platform:clean(fd.get('platform')), notes:clean(fd.get('notes')).slice(0,300) };
      if (p){
        if (!canEditProject(p)) { formError('Only the editor who added this project can edit it.'); return false; }
        data.status = fd.get('status') === 'closed' ? 'closed' : 'open';
        const ok = await save(() => api('PATCH', '/api/projects/'+p.id, data)); if (ok) toast('Project saved', 'win'); return ok;
      }
      if (!myEditor() && !S.isAdmin) { formError('Pick your editor name first to add projects.'); return false; }
      let newId = null;
      const ok = await save(async () => { newId = (await api('POST', '/api/projects', data)).id; });
      if (ok){ toast('Project created', 'win'); S.view = 'projects'; S.projectId = newId; setHash(); render(); }
      return ok;
    }
  });
}

function cutDialog(cut, presetProject){
  const open = allProjects().filter(x => x.status !== 'closed' || x.id === cut?.projectId).sort((a,b)=>a.title.localeCompare(b.title));
  if (!open.length && !cut){
    openDialog({ title:'Create a project first', sub:'A cut belongs to a project. Create the project, then add your cut to it.', body:'', submitLabel:'New project', onSubmit: async () => { setTimeout(() => projectDialog(null), 0); return true; } });
    return;
  }
  const pid = cut?.projectId || presetProject || '';
  openDialog({
    title: cut ? 'Cut details' : 'Add a cut', sub: cut ? 'Change the link or name, or archive it when you stop tracking it.' : 'Add your posted version. You can type today\'s totals now or from your daily log.',
    submitLabel: cut ? 'Save details' : 'Add cut',
    body: `<label class="field full" for="c-project">Project<select id="c-project" name="projectId" required ${cut?'disabled':''}><option value="">Choose project</option>${open.map(p=>`<option value="${esc(p.id)}" ${p.id===pid?'selected':''}>${esc(p.title)}</option>`).join('')}</select>
        ${cut ? '' : '<span class="hint">Not listed? <button type="button" class="link" data-new-project>Create a new project</button></span>'}</label>
      <label class="field" for="c-label">Version name <span class="hint">optional</span><input type="text" id="c-label" name="label" maxlength="80" value="${esc(cut?.label)}" placeholder="e.g. Fast cut, hook first"></label>
      <label class="field" for="c-platform">Platform<select id="c-platform" name="platform">${PLATFORMS.map(x=>`<option ${(cut?.platform || projectById(pid)?.platform || 'Instagram')===x?'selected':''}>${x}</option>`).join('')}</select></label>
      <label class="field full" for="c-url">Video link<input type="url" id="c-url" name="url" maxlength="500" value="${esc(cut?.url)}" placeholder="https://www.instagram.com/reel/…"></label>
      <label class="field" for="c-date">Posted on<input type="date" id="c-date" name="postedAt" required value="${esc(cut?.postedAt || today())}" max="${today()}"></label>
      ${!cut ? `<h4>Today's totals <span class="hint" style="text-transform:none;letter-spacing:0">optional</span></h4><div class="dmetrics">${METRICS.map(m=>`<label class="field" for="c-${m.key}">${m.label}<input type="number" id="c-${m.key}" name="m_${m.key}" min="0" step="1" inputmode="numeric" placeholder="0"></label>`).join('')}</div>` : ''}
      ${cut ? `<label class="cbx full" for="c-archive"><input type="checkbox" id="c-archive" name="archived" ${cut.status==='archived'?'checked':''}> Archive this cut (hide it from my daily log)</label>` : ''}`,
    onSubmit: async fd => {
      const projectId = cut ? cut.projectId : clean(fd.get('projectId'));
      if (!projectById(projectId)) { formError('Choose a project.'); return false; }
      const url = clean(fd.get('url'));
      if (!url) { formError('Add the video link so the team can check the numbers.'); return false; }
      if (!/^https?:\/\/\S+\.\S+/i.test(url)) { formError('The link must start with http:// or https://'); return false; }
      const postedAt = clean(fd.get('postedAt'));
      if (!/^\d{4}-\d{2}-\d{2}$/.test(postedAt) || postedAt > today()) { formError('Pick the date it was posted (not in the future).'); return false; }
      const label = clean(fd.get('label')).slice(0,80);
      const data = { label, url, platform:clean(fd.get('platform')), postedAt };
      if (cut){
        data.status = fd.get('archived') ? 'archived' : 'active';
        const ok = await save(() => api('PATCH', '/api/cuts/'+cut.id, data)); if (ok) toast('Cut updated', 'win'); return ok;
      }
      if (myCuts().some(c => c.projectId === projectId && (c.label||'').toLowerCase() === label.toLowerCase())) { formError(label ? 'You already have a cut with this name on this project.' : 'You already have a cut on this project. Give this one a version name.'); return false; }
      const daily = {};
      if (METRICS.some(m => clean(fd.get('m_'+m.key)) !== '')){ const r = readMetrics(fd, 'm_'); if (r.error){ formError(r.error); return false; } daily[today()] = { ...r.values, at:new Date().toISOString() }; }
      const t0 = daily[today()]; const ok = await save(() => api('POST', '/api/cuts', { ...data, projectId, ...(t0 ? { today:{ views:t0.views, likes:t0.likes, comments:t0.comments, shares:t0.shares, reposts:t0.reposts } } : {}) }));
      if (ok){ toast(Object.keys(daily).length ? 'Cut added with today\'s numbers' : 'Cut added. Log its numbers below.', 'win'); S.view = 'log'; S.projectId = null; setHash(); render(); window.scrollTo({ top:0 }); }
      return ok;
    }
  });
}
form.addEventListener('click', e => { if (e.target.closest('[data-new-project]')){ closeDialog(); setTimeout(() => projectDialog(null), 0); } });

function cutDays(cut){
  const s = scoring(); const hwm = { views:0, likes:0, comments:0, shares:0, reposts:0 }; const out = [];
  for (const d of Object.keys(cut.daily||{}).filter(x => /^\d{4}-\d{2}-\d{2}$/.test(x)).sort()){
    const v = cut.daily[d] || {}; const gains = {};
    for (const m of METRICS) gains[m.key] = Math.max(0, int(v[m.key]) - hwm[m.key]);
    const prevViews = hwm.views;
    for (const m of METRICS) hwm[m.key] = Math.max(hwm[m.key], int(v[m.key]));
    let p = engagementPts(gains, s);
    for (const [k, thr] of MILESTONES) if (prevViews < thr && hwm.views >= thr) p += s[k];
    out.push({ date:d, v, pts:p });
  }
  return out.reverse();
}
function historyDialog(cutId){
  const cut = myCuts().find(c => c.id === cutId); if (!cut) return;
  if (S.dirty.size){ toast('Save or clear the numbers you typed first.', 'error'); return; }
  const rows = cutDays(cut); const p = projectById(cut.projectId);
  openDialog({
    title:'Entry history', sub:`${p?.title || 'Project'}${cut.label ? ' · '+cut.label : ''}. Edit or delete any day, or add a day you missed. Points recalculate as soon as you save.`,
    submitLabel:'Add a missed day',
    body: rows.length ? `<div class="hist full">${rows.map(r => { const locked = isClosed(monthOf(r.date)); return `<div class="hrow">
        <div><b>${esc(dayLabel(r.date))}</b>${r.v.edited ? ' <span class="chip">edited</span>' : ''}${r.v.fixedBy ? ' <span class="chip acc">fixed by admin</span>' : ''}
          <div class="hm2 tnum">${METRICS.map(m => `${fmt(r.v[m.key])} ${m.label.toLowerCase()}`).join(' · ')}</div></div>
        <div class="hp ${r.pts ? '' : 'zero'}">+${pts(r.pts)} pts</div>
        <div class="acts">${locked ? `<span class="chip">${I('lock')}Month closed</span>` : `<button type="button" class="btn sm" data-hedit="${r.date}" data-cut="${esc(cutId)}">${I('edit')}Edit</button><button type="button" class="btn sm danger" data-hdel="${r.date}" data-cut="${esc(cutId)}">Delete</button>`}</div>
      </div>`; }).join('')}</div>
      <p class="full small muted" style="margin:0">Points shown are engagement and milestone points for each day. Daily check-in and streak bonuses are added on top.</p>`
      : `<p class="full muted" style="margin:0">No entries yet. Log today's numbers from My day, or add a missed day.</p>`,
    onSubmit: async () => { setTimeout(() => entryDialog(cutId, null), 0); return true; }
  });
  const c = form.querySelector('[data-close]'); if (c) c.textContent = 'Close';
}
function entryDialog(cutId, date){
  const cut = myCuts().find(c => c.id === cutId); if (!cut) return;
  const existing = date ? cut.daily?.[date] : null;
  const minDate = cut.postedAt && /^\d{4}-\d{2}-\d{2}$/.test(cut.postedAt) ? cut.postedAt : '';
  const prevDate = d => Object.keys(cut.daily||{}).filter(x => x < d).sort().pop();
  const ref0 = date ? cut.daily?.[prevDate(date)] : cut.daily?.[Object.keys(cut.daily||{}).sort().pop()];
  openDialog({
    title: date ? `Edit ${dayLabel(date).toLowerCase() === 'today' || dayLabel(date).toLowerCase() === 'yesterday' ? dayLabel(date).toLowerCase() + '’s' : dayLabel(date)} numbers` : 'Add a missed day',
    sub: 'Type the totals the platform showed on that day, not the change since the day before.',
    submitLabel: 'Save entry',
    body: `${date ? `<input type="hidden" name="date" value="${date}">` : `<label class="field full" for="h-date">Day<input type="date" id="h-date" name="date" required ${minDate?`min="${minDate}"`:''} max="${today()}" value="${(() => { let d = today(); for (let i = 0; i < 60; i++){ if (!cut.daily?.[d] && (!minDate || d >= minDate) && !isClosed(monthOf(d))) return d; d = addDays(d, -1); } return today(); })()}"></label>`}
      <div class="dmetrics">${METRICS.map(m => `<label class="field" for="h-${m.key}">${m.label}<input type="number" id="h-${m.key}" name="h_${m.key}" min="0" step="1" inputmode="numeric" value="${existing ? int(existing[m.key]) : ''}" placeholder="${ref0 ? int(ref0[m.key]) : '0'}"></label>`).join('')}</div>
      ${ref0 ? `<p class="full small muted" style="margin:0">${date ? 'Day before' : 'Last logged'}: ${METRICS.map(m => `${fmt(ref0[m.key])} ${m.label.toLowerCase()}`).join(' · ')}</p>` : ''}`,
    onSubmit: async fd => {
      const d = clean(fd.get('date'));
      if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) { formError('Pick a day.'); return false; }
      if (d > today()) { formError('You can’t log a future day.'); return false; }
      if (minDate && d < minDate) { formError(`This cut was posted on ${dayLabel(minDate)}. Pick that day or later.`); return false; }
      if (isClosed(monthOf(d))) { formError(`${monthLabel(monthOf(d))} is closed, so it can’t be changed.`); return false; }
      if (!date && cut.daily?.[d]) { formError(`${dayLabel(d)} already has numbers. Close this and use Edit on that day.`); return false; }
      const vals = {}; let typed = false;
      for (const m of METRICS){
        const raw = clean(fd.get('h_' + m.key)); if (raw !== '') typed = true;
        const n = raw === '' ? (existing ? int(existing[m.key]) : 0) : Number(raw);
        if (!Number.isFinite(n) || n < 0 || !Number.isInteger(n)) { formError(`${m.label} must be a whole number, 0 or more.`); return false; }
        if (n > MAX_METRIC) { formError(`${m.label} looks too large. Check the number.`); return false; }
        vals[m.key] = n;
      }
      if (!typed && !existing) { formError('Type at least one total.'); return false; }
      if (existing && METRICS.every(m => int(existing[m.key]) === vals[m.key])) { setTimeout(() => historyDialog(cutId), 0); return true; }
      const now = new Date().toISOString();
      const entry = { ...vals, at: existing?.at || now, ...(existing || d !== today() ? { edited:true, editedAt:now } : {}) };
      const ok = await save(() => api('PUT', `/api/cuts/${cutId}/days/${d}`, vals));
      if (ok){ toast(existing ? `${dayLabel(d)} updated` : `${dayLabel(d)} added`, 'win'); setTimeout(() => historyDialog(cutId), 350); }
      return ok;
    }
  });
}
async function deleteEntry(cutId, date){
  if (isClosed(monthOf(date))) { toast('That month is closed.', 'error'); return false; }
  const ok = await save(() => api('DELETE', `/api/cuts/${cutId}/days/${date}`));
  if (ok) toast(`${dayLabel(date)} deleted`, 'win');
  return ok;
}
form.addEventListener('click', e => {
  const ed = e.target.closest('[data-hedit]'); const del = e.target.closest('[data-hdel]');
  if (ed){ const c = ed.dataset.cut, d = ed.dataset.hedit; closeDialog(); setTimeout(() => entryDialog(c, d), 0); }
  if (del){ const c = del.dataset.cut, d = del.dataset.hdel; closeDialog();
    setTimeout(() => confirmDialog(`Delete ${dayLabel(d).toLowerCase() === 'today' ? 'today' : dayLabel(d)}'s entry?`, 'Its points are removed and later days are recalculated. If you also miss that day’s check-in, the streak may break.', 'Delete entry', async () => { const ok = await deleteEntry(c, d); if (ok) setTimeout(() => historyDialog(c), 350); return ok; }), 0); }
});

function fixDialog(uid, cutId){
  const cut = (S.cutsByUid[uid]||[]).find(c => c.id === cutId); if (!cut) return;
  const ed = editorByUid(uid); const dates = Object.keys(cut.daily||{}).sort().reverse(); const def = dates[0] || today();
  openDialog({
    title:`Fix ${ed?.name || 'editor'}'s numbers`, sub:`${projectById(cut.projectId)?.title || ''} · ${cut.label || 'cut'}. Set the totals for a day, or clear that day.`, submitLabel:'Save correction',
    body: `<label class="field" for="x-date">Day<input type="date" id="x-date" name="date" value="${def}" max="${today()}" required></label>
      <label class="cbx" for="x-clear" style="align-self:end;padding-bottom:12px"><input type="checkbox" id="x-clear" name="clear"> Clear this day instead</label>
      <div class="dmetrics">${METRICS.map(m => `<label class="field" for="x-${m.key}">${m.label}<input type="number" id="x-${m.key}" name="x_${m.key}" min="0" step="1" value="${int(cut.daily?.[def]?.[m.key])}"></label>`).join('')}</div>
      <p class="full small muted" style="margin:0">Logged days: ${dates.length ? dates.slice(0,10).map(dayLabel).join(', ') + (dates.length>10?'…':'') : 'none'}</p>`,
    onSubmit: async fd => {
      const date = clean(fd.get('date'));
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date > today()) { formError('Pick a valid day.'); return false; }
      if (fd.get('clear')){
        if (!cut.daily?.[date]) { formError('There is no entry on that day.'); return false; }
        const ok = await save(() => api('DELETE', `/api/cuts/${cutId}/days/${date}`)); if (ok) toast('Entry cleared', 'win'); return ok;
      }
      const r = readMetrics(fd, 'x_'); if (r.error){ formError(r.error); return false; }
      const ok = await save(() => api('PUT', `/api/cuts/${cutId}/days/${date}`, r.values));
      if (ok) toast('Correction saved', 'win'); return ok;
    }
  });
}

function editorDialog(ed){
  openDialog({
    title: ed ? 'Rename editor' : 'Add editor', submitLabel: ed ? 'Save' : 'Add editor',
    body: `<label class="field full" for="ed-name">Name<input type="text" id="ed-name" name="name" required maxlength="40" value="${esc(ed?.name)}"></label>`,
    onSubmit: async fd => {
      const raw = clean(fd.get('name')); if (!raw) { formError('Enter a name.'); return false; }
      const name = raw.replace(/\s+/g,' ').replace(/\b\w/g, c => c.toUpperCase());
      if (S.editors.some(x => x.id !== ed?.id && x.name.toLowerCase() === name.toLowerCase())) { formError('An editor with this name already exists.'); return false; }
      if (ed){ const ok = await save(() => api('PATCH', '/api/editors/'+ed.id, { name })); if (ok) toast('Editor renamed', 'win'); return ok; }
      const ok = await save(() => api('POST', '/api/editors', { name }));
      if (ok) toast(name+' added', 'win'); return ok;
    }
  });
}

function scoringDialog(){
  const s = scoring();
  const f = (k, label, step, hint) => `<label class="field" for="s-${k}">${label}${hint?` <span class="hint">${hint}</span>`:''}<input type="number" id="s-${k}" name="${k}" min="0" step="${step}" value="${s[k]}" required></label>`;
  openDialog({
    title:'Point values', sub:'Scores recalculate for every open month. Closed months keep their locked results.', submitLabel:'Save point values',
    body: `<h4>Per unit of growth</h4>${f('views','Per view','0.001','0.01 = 1 per 100')}${f('likes','Per like','0.01','0.2 = 2 per 10')}${f('comments','Per comment','0.1')}${f('shares','Per share','0.1')}${f('reposts','Per repost','0.1')}
      <h4>Show up</h4>${f('checkin','Each day logged','1')}${f('streak7','Every 7-day streak','1')}
      <h4>View milestones (per cut)</h4>${MILESTONES.map(([k,,l]) => f(k, l, '1')).join('')}
      <h4>Monthly head-to-head</h4>${f('h2h1','1st on a project','1')}${f('h2h2','2nd','1')}${f('h2h3','3rd','1')}`,
    onSubmit: async fd => {
      const next = {};
      for (const k of Object.keys(DEFAULT_SCORING)){ const n = Number(fd.get(k)); if (!Number.isFinite(n) || n < 0 || n > 100000) { formError('Every value must be between 0 and 100,000.'); return false; } next[k] = n; }
      if (next.h2h1 < next.h2h2 || next.h2h2 < next.h2h3) { formError('1st must be worth at least 2nd, and 2nd at least 3rd.'); return false; }
      const ok = await save(() => api('PUT', '/api/settings/scoring', next)); if (ok) toast('Point values saved', 'win'); return ok;
    }
  });
}

function rewardsDialog(){
  const rw = rewards();
  openDialog({
    title:'Month-end rewards', sub:'Editors reach a tier by their month total. The top scorer also gets the Editor of the month amount.', submitLabel:'Save rewards',
    body: `<div class="dtiers"><span class="small muted">Tier</span><span class="small muted">Points needed</span><span class="small muted">Reward (₹)</span>
      ${rw.tiers.map((t,i) => `<input type="text" name="t${i}_name" maxlength="20" value="${esc(t.name)}" aria-label="Tier ${i+1} name" id="t${i}n">
        <input type="number" name="t${i}_min" min="0" step="50" value="${t.min}" aria-label="Tier ${i+1} points" id="t${i}m">
        <input type="number" name="t${i}_amount" min="0" step="100" value="${t.amount || ''}" placeholder="Amount" aria-label="Tier ${i+1} reward" id="t${i}a">`).join('')}</div>
      <label class="field full" for="r-top">Editor of the month, extra (₹)<input type="number" id="r-top" name="topAmount" min="0" step="100" value="${rw.topAmount || ''}" placeholder="Amount"></label>`,
    onSubmit: async fd => {
      const tiers = [];
      for (let i = 0; i < rw.tiers.length; i++){
        const name = clean(fd.get(`t${i}_name`)); const min = Number(fd.get(`t${i}_min`)); const amount = clean(fd.get(`t${i}_amount`)) === '' ? 0 : Number(fd.get(`t${i}_amount`));
        if (!name) { formError(`Tier ${i+1} needs a name.`); return false; }
        if (!Number.isFinite(min) || min <= 0) { formError(`Tier ${i+1} needs points above 0.`); return false; }
        if (!Number.isFinite(amount) || amount < 0 || amount > 10000000) { formError(`Tier ${i+1} reward must be 0 or more.`); return false; }
        tiers.push({ name:name.slice(0,20), min:Math.floor(min), amount:Math.floor(amount) });
      }
      for (let i = 1; i < tiers.length; i++) if (tiers[i].min <= tiers[i-1].min) { formError('Each tier must need more points than the one before.'); return false; }
      const top = clean(fd.get('topAmount')) === '' ? 0 : Number(fd.get('topAmount'));
      if (!Number.isFinite(top) || top < 0) { formError('Editor of the month amount must be 0 or more.'); return false; }
      const ok = await save(() => api('PUT', '/api/settings/rewards', { tiers, topAmount:Math.floor(top) })); if (ok) toast('Rewards saved', 'win'); return ok;
    }
  });
}

/* ================= actions ================= */
async function saveCut(card, quiet){
  const id = card.dataset.cut; const date = card.dataset.date;
  const cut = myCuts().find(c => c.id === id); if (!cut) return false;
  if (![today(), yesterday()].includes(date)) { toast('You can only log today or yesterday.', 'error'); return false; }
  if (isClosed(monthOf(date))) { toast('That month is closed.', 'error'); return false; }
  const vals = {}; let typed = false;
  for (const inp of card.querySelectorAll('input[data-metric]')){
    const raw = inp.value.trim(); const k = inp.dataset.metric;
    if (raw !== '') typed = true;
    const n = raw === '' ? (cut.daily?.[date]?.[k] ?? int(inp.placeholder)) : Number(raw);
    if (!Number.isFinite(Number(n)) || n < 0 || !Number.isInteger(Number(n))) { toast(`${METRICS.find(m=>m.key===k).label} must be a whole number.`, 'error'); inp.focus(); return false; }
    if (n > MAX_METRIC) { toast('A number looks too large. Check it.', 'error'); inp.focus(); return false; }
    vals[k] = Number(n);
  }
  if (!typed){ if (!quiet) toast('Type at least one total first.', 'error'); return null; }
  const clearDirty = () => card.querySelectorAll('input[data-metric]').forEach(i => S.dirty.delete(i.id));
  const prev = cut.daily?.[date];
  if (prev && METRICS.every(m => int(prev[m.key]) === vals[m.key])) { clearDirty(); updateSaveBar(); return null; }
  const calc = S.calc; const wasLogged = calc.logged.get(myEditor()?.id)?.has(date);
  const hb = hwmBefore(cut, date); const prevGain = prev ? engagementPts(Object.fromEntries(METRICS.map(m => [m.key, Math.max(0, int(prev[m.key]) - hb[m.key])])), calc.s) : 0;
  const ok = await save(() => api('PUT', `/api/cuts/${id}/days/${date}`, vals), quiet);
  if (ok){
    clearDirty(); updateSaveBar();
    if (!quiet){
      const g = Object.fromEntries(METRICS.map(m => [m.key, Math.max(0, vals[m.key] - hb[m.key])]));
      const ms = MILESTONES.reduce((acc, [k, thr]) => acc + (hb.views < thr && vals.views >= thr && !(prev && int(prev.views) >= thr) ? calc.s[k] : 0), 0);
      const delta = engagementPts(g, calc.s) - prevGain + ms + (wasLogged ? 0 : calc.s.checkin);
      toast(delta > 0 ? `Saved · +${pts(delta)} pts${ms ? ' incl. milestone' : ''}${wasLogged ? '' : (ms ? ' & check-in' : ' incl. check-in')}` : 'Saved', 'win');
    }
  }
  return ok;
}
async function saveAll(btn){
  const cards = [...document.querySelectorAll('#main .cut')].filter(c => [...c.querySelectorAll('input[data-metric]')].some(i => S.dirty.has(i.id)));
  if (!cards.length){ toast('Nothing new to save.'); return; }
  if (btn) btn.disabled = true; let n = 0, fail = 0;
  for (const c of cards){ const r = await saveCut(c, true); if (r) n++; else if (r === false) fail++; }
  if (btn) btn.disabled = false;
  if (n) toast(`Saved ${n} cut${n===1?'':'s'}`, 'win'); if (fail) toast(`${fail} cut${fail===1?'':'s'} not saved. Check the numbers and try again.`, 'error');
  updateSaveBar();
}
$('#saveAllBtn').addEventListener('click', e => saveAll(e.currentTarget));

function setHash(){ try { if (location.hash !== '#'+S.view) history.replaceState(null, '', '#'+S.view); } catch {} }
function go(view){
  if (S.dirty.size && S.view === 'log' && view !== 'log'){ toast('Save or clear your numbers first.', 'error'); return; }
  S.view = view; S.projectId = null; setHash(); render(); window.scrollTo({ top:0 });
}
function readHash(){ const h = (location.hash||'').slice(1); if (VIEWS.includes(h)) S.view = h; }
document.addEventListener('click', e => {
  const md = e.target.closest('[data-mode]');
  if (md && !md.closest('dialog')){ if (S.dirty.size && S.view === 'log'){ toast('Save or clear your numbers first.', 'error'); return; } S.mode = md.dataset.mode; S.view = 'home'; S.projectId = null; setHash(); render(); window.scrollTo({ top:0 }); return; }
  const v = e.target.closest('[data-view]'); if (v && !v.closest('dialog')) go(v.dataset.view); });
window.addEventListener('hashchange', () => { readHash(); render(); });

$('#main').addEventListener('input', e => {
  const inp = e.target.closest('input[data-keep]'); if (!inp) return;
  S.dirty.add(inp.id); inp.closest('.mt')?.classList.add('dirty'); updatePreview(inp.closest('.cut')); updateSaveBar();
});
$('#main').addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.matches('input[data-metric]')){ e.preventDefault(); e.target.closest('.cut')?.querySelector('[data-act="save-cut"]')?.click(); } });
$('#main').addEventListener('change', e => { const f = e.target.dataset.filter; if (f){ S[f] = e.target.value; render(); } });

$('#main').addEventListener('click', async e => {
  const t = e.target;
  const sb = t.closest('[data-sort]'); if (sb){ S.sort = sb.dataset.sort; render(); return; }
  const ld = t.closest('[data-logdate]'); if (ld){ if (S.dirty.size){ toast('Save or clear your numbers before switching day.', 'error'); return; } S.logDate = ld.dataset.logdate; render(); return; }
  const op = t.closest('[data-open-project]'); if (op){ S.projectId = op.dataset.openProject; render(); window.scrollTo({ top:0 }); return; }
  const b = t.closest('[data-act]'); if (!b) return;
  const id = b.dataset.id;
  switch (b.dataset.act){
    case 'back': S.projectId = null; render(); break;
    case 'claim': {
      if (!S.uid){ toast('Sign in to join.', 'error'); break; }
      const ed = editorById(id); if (!ed) break;
      if (uidOfEditor(id)){ toast(`${ed.name} is already taken.`, 'error'); break; }
      b.disabled = true;
      const ok = await save(() => api('POST', '/api/claim', { editorId:id }));
      if (ok){ toast(`You're in as ${ed.name}`, 'win'); S.mode = 'editor'; S.view = 'home'; setHash(); render(); }
      else b.disabled = false;
      break;
    }
    case 'add-cut': cutDialog(null, b.dataset.project); break;
    case 'edit-cut': cutDialog(myCuts().find(c => c.id === id)); break;
    case 'history': historyDialog(id); break;
    case 'unarchive-cut': { const ok = await save(() => api('PATCH', '/api/cuts/'+id, { status:'active' })); if (ok) toast('Cut restored', 'win'); break; }
    case 'save-cut': { b.disabled = true; await saveCut(b.closest('.cut')); if (b.isConnected) b.disabled = false; break; }
    case 'fix-entry': fixDialog(b.dataset.uid, id); break;
    case 'add-project': projectDialog(null); break;
    case 'edit-project': projectDialog(projectById(id)); break;
    case 'delete-project': {
      const p = projectById(id); const n = allCuts().filter(c => c.projectId === id).length;
      if (n){ toast(`This project has ${n} cut${n===1?'':'s'}. Close it instead so their points are kept.`, 'error'); break; }
      confirmDialog(`Delete “${p.title}”?`, 'It has no cuts. This can’t be undone.', 'Delete project', async () => { const ok = await save(() => api('DELETE', '/api/projects/'+p.id)); if (ok){ S.projectId = null; toast('Project deleted'); render(); } return ok; });
      break;
    }
    case 'add-editor': editorDialog(null); break;
    case 'rename-editor': editorDialog(editorById(id)); break;
    case 'toggle-editor': { const ed = editorById(id); const active = ed.active === false; b.disabled = true; const ok = await save(() => api('PATCH', '/api/editors/'+id, { active })); if (b.isConnected) b.disabled = false; if (ok) toast(`${ed.name} ${active?'reactivated':'deactivated'}`); break; }
    case 'delete-editor': { const ed = editorById(id); confirmDialog(`Delete ${ed.name}?`, 'They have never signed in and have no entries, so nothing else changes.', 'Delete editor', async () => { const ok = await save(() => api('DELETE', '/api/editors/'+id)); if (ok) toast('Editor deleted'); return ok; }); break; }
    case 'reset-pin': { const ed = editorById(id); confirmDialog(`Reset ${ed.name}'s PIN?`, `${ed.name} is signed out everywhere and sets a new PIN with the team code next time. Their cuts and points stay.`, 'Reset PIN', async () => {
        const ok = await save(() => api('POST', `/api/editors/${id}/reset-pin`, {})); if (ok) toast(`${ed.name}'s PIN reset`); return ok; }); break; }
    case 'edit-scoring': scoringDialog(); break;
    case 'edit-rewards': rewardsDialog(); break;
    case 'close-month': {
      const ym = S.month; const rw = rewards(); const rows = rewardRows(monthStandings(ym, S.calc));
      confirmDialog(`Close ${monthLabel(ym)}?`, `This locks the results and rewards shown (${rows.filter(r=>r.tier>=0).length} editors in a tier). Editors can't change numbers for this month afterwards.`, 'Close month', async () => {
        const results = rows.map(r => ({ editorId:r.editor.id, name:r.editor.name, total:Math.round(r.total*10)/10, place:r.place, tierName:r.tier>=0?rw.tiers[r.tier].name:'', tierIdx:r.tier, tierAmt:r.tierAmt, topAmt:r.topAmt, reward:r.reward,
          breakdown:{ eng:Math.round(r.eng*10)/10, checkin:r.checkin, streak:r.streak, milestone:r.milestone, h2h:r.h2h } }));
        const ok = await save(() => api('POST', `/api/months/${ym}/close`, { results, scoring:scoring(), rewards:rw }));
        if (ok) toast(`${monthLabel(ym)} closed`, 'win'); return ok;
      });
      break;
    }
    case 'reopen-month': { const ym = S.month; confirmDialog(`Reopen ${monthLabel(ym)}?`, 'Results go back to live and numbers can be fixed again.', 'Reopen', async () => { const ok = await save(() => api('POST', `/api/months/${ym}/reopen`)); if (ok) toast('Month reopened'); return ok; }); break; }
    case 'copy-csv': case 'copy-month': {
      const ym = S.month; const rw = rewards(); const doc = monthDoc(ym);
      const q = v => /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g,'""')}"` : String(v);
      let csv;
      if (b.dataset.act === 'copy-month'){
        const rows = doc?.closed && Array.isArray(doc.results) ? doc.results : rewardRows(monthStandings(ym, S.calc)).map(r => ({ place:r.place, name:r.editor.name, total:Math.round(r.total*10)/10, tierName:r.tier>=0?rw.tiers[r.tier].name:'', tierAmt:r.tierAmt, topAmt:r.topAmt, reward:r.reward }));
        csv = [['Month','Rank','Editor','Points','Tier','Tier reward','Editor of month','Total reward'], ...rows.map(r => [ym, r.place ?? '', r.name, r.total, r.tierName, r.tierAmt, r.topAmt, r.reward])];
      } else {
        const st = monthStandings(ym, S.calc);
        csv = [['Month','Rank','Editor','Total','Today','Engagement','Check-ins','Streaks','Milestones','Head-to-head','Days logged'], ...st.list.map(r => [ym, r.rank ?? '', r.editor.name, Math.round(r.total*10)/10, Math.round(r.today*10)/10, Math.round(r.eng*10)/10, r.checkin, r.streak, r.milestone, r.h2h, r.days])];
      }
      try { await navigator.clipboard.writeText(csv.map(r => r.map(q).join(',')).join('\n')); toast('Copied. Paste it into a sheet.', 'win'); } catch { toast('Copying was blocked by the browser.', 'error'); }
      break;
    }
  }
});

/* ================= data wiring ================= */
let pollTimer = null, refreshing = null;
function applyState(st){
  S.signedIn = true; S.me = st.me;
  S.isAdmin = st.me.role === 'admin'; S.mode = S.isAdmin ? 'admin' : 'editor';
  S.uid = S.isAdmin ? 'admin' : st.me.editorId;
  S.names = { admin:'Admin', ...Object.fromEntries(st.editors.map(e => [e.id, e.name])) };
  S.pinSet = Object.fromEntries(st.editors.map(e => [e.id, !!e.hasPin]));
  S.editors = st.editors.map(e => ({ ...e, uid:null }));
  S.members = st.editors.map(e => ({ id:e.id, editorId:e.id, requestedAt:e.createdAt }));   // each editor's entries belong to that editor
  S.adminProjects = st.projects.filter(p => !p.ownerEditorId);
  const pb = {}; for (const p of st.projects) if (p.ownerEditorId) (pb[p.ownerEditorId] = pb[p.ownerEditorId] || []).push(p);
  S.projByUid = pb;
  const cb = {}; for (const c of st.cuts) (cb[c.editorId] = cb[c.editorId] || []).push(c);
  S.cutsByUid = cb;
  S.months = st.months; S.scoring = st.scoring; S.rewards = st.rewards;
  for (const k of Object.keys(S.loaded)) S.loaded[k] = true;
  S.logLoaded = {}; S.errors = []; S.stale = false;
}
async function refresh(){
  if (refreshing) return refreshing;
  refreshing = (async () => {
    try { applyState(await api('GET', '/api/state')); if (!dlg.open || !S.dirty.size) render(); }
    catch (e) { if (e?.code !== 'unauthenticated'){ S.stale = true; if (!S.errors.length) S.errors.push('can’t reach the server'); render(); } }
    finally { refreshing = null; }
  })();
  return refreshing;
}
function startPolling(){
  clearInterval(pollTimer);
  pollTimer = setInterval(() => { if (document.visibilityState === 'visible' && S.signedIn && !dlg.open) refresh(); }, 15000);
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && S.signedIn) refresh(); });

/* ---------- sign in ---------- */
function renderAuth(mode){
  S.authMode = mode || S.authMode || 'editor';
  clearInterval(pollTimer);
  document.body.classList.add('auth');
  const admin = S.authMode === 'admin';
  $('#authRoot').innerHTML = `<div class="auth-wrap">
    <section class="auth-hero" aria-hidden="${admin ? 'false' : 'false'}">
      <div class="brand" style="padding:0"><div class="logo light">${I('play')}</div><div><b>Editor Points</b><span>Daily engagement league</span></div></div>
      <div><h1>Log today’s numbers.<br>Climb the board.</h1>
        <p>Type your cuts’ views, likes, comments, shares and reposts once a day. Points add up all month.</p></div>
      <ul class="auth-feats">
        <li><span>${I('bolt')}</span><div><b>Points for growth</b><small>Every new view, like and share counts</small></div></li>
        <li><span>${I('flame')}</span><div><b>Daily streaks</b><small>Log every day for bonus points</small></div></li>
        <li><span>${I('gift')}</span><div><b>Month-end rewards</b><small>Reach a tier, win Editor of the month</small></div></li>
      </ul>
      <div class="swatches" aria-hidden="true">${PEOPLE.map(([x,y]) => `<i style="background:linear-gradient(135deg,${x},${y})"></i>`).join('')}</div>
    </section>
    <section class="auth-panel">
      <div class="seg auth-tabs" role="tablist" aria-label="Sign in as">
        <button type="button" role="tab" data-auth="editor" aria-pressed="${!admin}">${I('users')}Editor</button>
        <button type="button" role="tab" data-auth="admin" aria-pressed="${admin}">${I('lock')}Admin</button></div>
      <div id="authBody">${admin ? adminForm() : `<h2 class="auth-h">Who’s logging today?</h2><div class="names" id="authNames">${'<span class="skel" style="height:52px;width:150px;border-radius:999px"></span>'.repeat(4)}</div><div id="authPin"></div>`}</div>
    </section>
  </div>`;
  if (admin) bindAdmin(); else loadEditorPicker();
}
const adminForm = () => `<h2 class="auth-h">Admin panel</h2><p class="auth-sub">Enter the admin password to manage editors, rewards and payouts.</p>
  <form id="authForm" novalidate>
    <label class="field" for="a-pass">Admin password<input type="password" id="a-pass" name="password" autocomplete="current-password" maxlength="200" required></label>
    <div class="ferr" id="authErr" role="alert"></div>
    <button type="submit" class="btn primary lg" id="authBtn">Open admin panel</button></form>`;
function bindAdmin(){
  const f = $('#authForm'); f.querySelector('input').focus();
  f.addEventListener('submit', async e => {
    e.preventDefault(); const pw = f.password.value; const err = $('#authErr'); err.textContent = '';
    if (!pw) { err.textContent = 'Enter the admin password.'; return; }
    await signIn('/api/auth/admin', { password:pw }, 'Open admin panel');
  });
}
async function loadEditorPicker(){
  let list;
  try { list = (await api('GET', '/api/auth/editors')).editors; }
  catch (ex) { $('#authNames').innerHTML = `<div class="banner err">${I('info')}<span>${esc(ex.message)}</span></div><button class="btn" data-auth="editor">Try again</button>`; return; }
  if (!list.length) { $('#authNames').innerHTML = '<p class="auth-sub">No editors yet. Ask the admin to add you.</p>'; return; }
  S.authList = list;
  $('#authNames').innerHTML = list.map(e => `<button type="button" class="name-chip" data-pick="${esc(e.id)}" aria-pressed="false">${avatar(e)}<span><b>${esc(e.name)}</b><small>${e.hasPin ? 'Enter PIN' : 'First time'}</small></span></button>`).join('');
  $('#authPin').innerHTML = `<p class="auth-sub hint-row">${I('info')}Tap your name to continue.</p>`;
}
const pinBoxes = (group, label) => `<div class="field"><span>${label}</span><div class="pin" data-group="${group}" role="group" aria-label="${label}">
  ${[0,1,2,3].map(i => `<input type="password" inputmode="numeric" maxlength="1" pattern="[0-9]" autocomplete="one-time-code" aria-label="${label} digit ${i+1}" data-i="${i}">`).join('')}</div></div>`;
const readPin = g => [...document.querySelectorAll(`.pin[data-group="${g}"] input`)].map(i => i.value).join('');
function pinForm(id){
  const e = (S.authList || []).find(x => x.id === id); if (!e) return;
  document.querySelectorAll('.name-chip').forEach(c => c.setAttribute('aria-pressed', String(c.dataset.pick === id)));
  const first = !e.hasPin;
  $('#authPin').innerHTML = `<form id="authForm" class="pinform" novalidate>
    <div class="pin-head">${avatar(e,'lg')}<div><b>Hi ${esc(e.name)}</b><span>${first ? 'First time here: set a 4-digit PIN you’ll remember.' : 'Enter your 4-digit PIN.'}</span></div></div>
    ${first ? `<label class="field" for="a-code">Team code <span class="hint">from your admin</span><input type="text" id="a-code" name="teamCode" autocomplete="off" maxlength="100" required></label>` : ''}
    <div class="pin-row">${pinBoxes('pin', first ? 'New PIN' : 'PIN')}${first ? pinBoxes('pin2', 'Repeat PIN') : ''}</div>
    <div class="ferr" id="authErr" role="alert"></div>
    <button type="submit" class="btn primary lg" id="authBtn">${first ? 'Set PIN and start' : 'Sign in'}</button>
  </form>`;
  const f = $('#authForm');
  (first ? f.teamCode : f.querySelector('.pin input')).focus();
  f.addEventListener('submit', async ev => {
    ev.preventDefault(); const err = $('#authErr'); err.textContent = '';
    const pin = readPin('pin');
    if (first && !f.teamCode.value.trim()) { err.textContent = 'Enter the team code your admin gave you.'; f.teamCode.focus(); return; }
    if (!/^\d{4}$/.test(pin)) { err.textContent = 'Enter all 4 digits of your PIN.'; return; }
    if (first && readPin('pin2') !== pin) { err.textContent = 'The two PINs don’t match.'; clearPin('pin2'); return; }
    await signIn('/api/auth/editor', { editorId:id, pin, ...(first ? { teamCode:f.teamCode.value.trim() } : {}) }, first ? 'Set PIN and start' : 'Sign in');
    if (!S.signedIn) clearPin('pin');
  });
}
function clearPin(g){ const ins = document.querySelectorAll(`.pin[data-group="${g}"] input`); ins.forEach(i => i.value = ''); ins[0]?.focus(); }
// PIN boxes: move forward on type, back on Backspace, accept a pasted PIN, submit when complete.
document.addEventListener('input', e => {
  const inp = e.target.closest('.pin input'); if (!inp) return;
  inp.value = inp.value.replace(/\D/g, '').slice(-1);
  const box = inp.closest('.pin'); const ins = [...box.querySelectorAll('input')]; const i = ins.indexOf(inp);
  if (inp.value && i < 3) ins[i+1].focus();
  if (inp.value && i === 3){
    const next = box.closest('.pin-row').querySelectorAll('.pin')[[...box.closest('.pin-row').querySelectorAll('.pin')].indexOf(box) + 1];
    if (next) next.querySelector('input').focus();
    else if ([...document.querySelectorAll('#authForm .pin input')].every(x => x.value)) $('#authForm').requestSubmit();
  }
});
document.addEventListener('keydown', e => {
  const inp = e.target.closest('.pin input'); if (!inp) return;
  const ins = [...inp.closest('.pin').querySelectorAll('input')]; const i = ins.indexOf(inp);
  if (e.key === 'Backspace' && !inp.value && i > 0){ ins[i-1].value = ''; ins[i-1].focus(); e.preventDefault(); }
  if (e.key === 'ArrowLeft' && i > 0) ins[i-1].focus();
  if (e.key === 'ArrowRight' && i < 3) ins[i+1].focus();
});
document.addEventListener('paste', e => {
  const inp = e.target.closest('.pin input'); if (!inp) return;
  const digits = (e.clipboardData?.getData('text') || '').replace(/\D/g, '').slice(0, 4); if (!digits) return;
  e.preventDefault(); const ins = [...inp.closest('.pin').querySelectorAll('input')];
  digits.split('').forEach((d, k) => { if (ins[k]) ins[k].value = d; });
  ins[Math.min(digits.length, 4) - 1].dispatchEvent(new Event('input', { bubbles:true }));
});
async function signIn(url, body, label){
  const btn = $('#authBtn'); const err = $('#authErr'); btn.disabled = true; btn.textContent = 'Signing in…';
  try {
    const r = await api('POST', url, body);
    document.body.classList.remove('auth'); $('#authRoot').innerHTML = '';
    S.view = 'home'; setHash(); await refresh(); startPolling();
    toast(r.firstTime ? 'PIN set. You’re in.' : 'Signed in', 'win');
  } catch (ex) { err.textContent = ex.message || 'Something went wrong. Try again.'; btn.disabled = false; btn.textContent = label; }
}
document.addEventListener('click', e => {
  const a = e.target.closest('[data-auth]'); if (a){ renderAuth(a.dataset.auth); return; }
  const p = e.target.closest('[data-pick]'); if (p) pinForm(p.dataset.pick);
});
document.addEventListener('click', async e => {
  if (e.target.closest('[data-act="logout"]')){
    if (S.dirty.size && !window.confirm('You have unsaved numbers. Sign out anyway?')) return;
    try { await api('POST', '/api/auth/logout', {}); } catch {}
    S.signedIn = false; S.dirty.clear(); renderAuth(S.isAdmin ? 'admin' : 'editor');
  }
  if (e.target.closest('[data-act="password"]')) pinDialog();
});
function pinDialog(){
  openDialog({ title:'Change PIN', sub:'You stay signed in here and are signed out on other devices.', submitLabel:'Change PIN',
    body:`<label class="field full" for="pw-cur">Current PIN<input type="password" id="pw-cur" name="currentPin" inputmode="numeric" maxlength="4" autocomplete="current-password" required></label>
      <label class="field full" for="pw-new">New PIN <span class="hint">4 digits</span><input type="password" id="pw-new" name="newPin" inputmode="numeric" maxlength="4" autocomplete="new-password" required></label>`,
    onSubmit: async fd => {
      const cur = String(fd.get('currentPin') || '').trim(), nw = String(fd.get('newPin') || '').trim();
      if (!/^\d{4}$/.test(cur) || !/^\d{4}$/.test(nw)) { formError('Both PINs must be 4 digits.'); return false; }
      try { await api('POST', '/api/auth/pin', { currentPin:cur, newPin:nw }); toast('PIN changed', 'win'); return true; }
      catch (ex) { formError(ex.message); return false; }
    } });
}

async function init(){
  readHash();
  try { await api('GET', '/api/auth/me'); }
  catch (e) { renderAuth('editor'); return; }
  await refresh(); startPolling();
  let lastDay = today();
  setInterval(() => { if (today() !== lastDay){ lastDay = today(); S.logDate = null; if (!dlg.open && !S.dirty.size) render(); } }, 60000);
}
init();
})();
