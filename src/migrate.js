'use strict';
const fs = require('fs');
const path = require('path');
const { pool } = require('./db');

async function migrate() {
  await pool.query(fs.readFileSync(path.join(__dirname, '..', 'db', 'schema.sql'), 'utf8'));
}
module.exports = { migrate };
if (require.main === module) {
  migrate().then(() => { console.log('Database is up to date.'); return pool.end(); })
    .catch(e => { console.error('Migration failed:', e.message); process.exit(1); });
}
