'use strict';
const config = require('./config');
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const { migrate } = require('./migrate');
const auth = require('./auth');
const api = require('./api');
const { ApiError } = require('./errors');
const { pool } = require('./db');

const app = express();
app.set('trust proxy', 1);
app.disable('x-powered-by');
app.use(helmet({
  contentSecurityPolicy: { directives: {
    defaultSrc: ["'self'"], scriptSrc: ["'self'"], styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
    fontSrc: ["'self'", 'https://fonts.gstatic.com'], imgSrc: ["'self'", 'data:'], connectSrc: ["'self'"], frameAncestors: ["'none'"], objectSrc: ["'none'"]
  } },
  crossOriginEmbedderPolicy: false
}));
app.use(compression());
app.use(express.json({ limit: '200kb' }));
app.use(cookieParser());

// CSRF protection: state-changing API calls must be JSON sent by our own page.
app.use('/api', (req, res, next) => {
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) return next();
  const hasBody = Number(req.get('content-length') || 0) > 0 || req.get('transfer-encoding');
  if (req.get('X-Requested-With') !== 'fetch' || (hasBody && !req.is('application/json'))) return next(new ApiError(403, 'forbidden', 'Request blocked.'));
  const origin = req.get('Origin');
  if (origin && new URL(origin).host !== req.get('host')) return next(new ApiError(403, 'forbidden', 'Request blocked.'));
  next();
});

app.get('/healthz', async (_req, res) => {
  try { await pool.query('SELECT 1'); res.json({ ok: true }); } catch { res.status(503).json({ ok: false }); }
});
app.use('/api', auth.loadAuth);
app.use('/api/auth', auth.router);
app.use('/api', api);
app.use('/api', (_req, _res, next) => next(new ApiError(404, 'not_found', 'Not found.')));
app.use(express.static(path.join(__dirname, '..', 'public'), { extensions: ['html'], maxAge: config.isProd ? '1h' : 0 }));
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')));

app.use((err, _req, res, _next) => {
  if (err instanceof ApiError) return res.status(err.status).json({ code: err.code, message: err.message });
  if (err.type === 'entity.parse.failed') return res.status(400).json({ code: 'invalid_argument', message: 'Invalid JSON.' });
  console.error(err);
  res.status(500).json({ code: 'unavailable', message: 'Something went wrong on the server. Try again.' });
});

module.exports = app;

// On Vercel the app runs as a function: tables are set up once with `npm run migrate`, not on every cold start.
if (!process.env.VERCEL) {
  migrate()
    .then(() => app.listen(config.port, () => console.log(`Editor Points Tracker running on http://localhost:${config.port}`)))
    .catch(e => { console.error('Could not start:', e.message); process.exit(1); });
}
