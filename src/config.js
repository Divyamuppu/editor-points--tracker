'use strict';
for (const k of ['DATABASE_URL', 'JWT_SECRET', 'ADMIN_PASSWORD', 'TEAM_CODE']) {
  if (!process.env[k]) { console.error(`Missing environment variable ${k}. See .env.example.`); process.exit(1); }
}
if (process.env.ADMIN_PASSWORD.length < 10) { console.error('ADMIN_PASSWORD must be at least 10 characters.'); process.exit(1); }
if (process.env.NODE_ENV === 'production' && process.env.JWT_SECRET.length < 32) { console.error('JWT_SECRET must be at least 32 characters in production.'); process.exit(1); }
module.exports = {
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  adminPassword: process.env.ADMIN_PASSWORD,
  teamCode: process.env.TEAM_CODE,
  timeZone: process.env.APP_TIMEZONE || 'Asia/Kolkata',
  port: Number(process.env.PORT) || 3000,
  isProd: process.env.NODE_ENV === 'production'
};
