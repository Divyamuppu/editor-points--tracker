'use strict';
class ApiError extends Error {
  constructor(status, code, message) { super(message); this.status = status; this.code = code; }
}
const bad = (msg) => new ApiError(400, 'invalid_argument', msg);
const forbidden = (msg = "You don't have permission to do that.") => new ApiError(403, 'forbidden', msg);
const notFound = (msg = 'Not found.') => new ApiError(404, 'not_found', msg);
const conflict = (msg) => new ApiError(409, 'conflict', msg);
module.exports = { ApiError, bad, forbidden, notFound, conflict };
