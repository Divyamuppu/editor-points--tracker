'use strict';
const { timeZone } = require('./config');
const fmt = new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' });
const today = () => fmt.format(new Date());           // 'YYYY-MM-DD' in the app's time zone
const monthOf = day => day.slice(0, 7);
module.exports = { today, monthOf };
