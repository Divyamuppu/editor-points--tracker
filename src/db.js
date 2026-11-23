'use strict';
const { Pool, types } = require('pg');
const { databaseUrl } = require('./config');

// Return DATE columns as 'YYYY-MM-DD' strings and BIGINT as numbers.
types.setTypeParser(1082, v => v);
types.setTypeParser(20, v => Number(v));

const local = /localhost|127\.0\.0\.1/.test(databaseUrl);
const pool = new Pool({
  connectionString: databaseUrl,
  ssl: local ? false : { rejectUnauthorized: true },
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000
});
pool.on('error', err => console.error('Postgres pool error:', err.message));

async function tx(fn) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const out = await fn(client);
    await client.query('COMMIT');
    return out;
  } catch (e) {
    await client.query('ROLLBACK').catch(() => {});
    throw e;
  } finally {
    client.release();
  }
}
module.exports = { pool, query: (t, p) => pool.query(t, p), tx };
