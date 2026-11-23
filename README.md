# Editor Points Tracker

Daily engagement league for video editors. Editors log their cuts' views, likes, comments, shares and reposts; points, leaderboard and month-end rewards are calculated automatically. Admin and editor dashboards, Node + Express API, Neon Postgres.

## Sign-in
- **Admin:** one password (`ADMIN_PASSWORD`). Change it in the environment to sign the admin out everywhere.
- **Editors:** tap their name and enter a 4-digit PIN. The first time, they set the PIN using the team code (`TEAM_CODE`). Forgot it? Admin → Team → Reset PIN. Points are kept.
- No emails or personal details are stored.

## Run locally
```zsh
npm install
cp .env.example .env      # fill in DATABASE_URL, JWT_SECRET, ADMIN_PASSWORD, TEAM_CODE
npm run dev               # http://localhost:3000
```
Tables, your 7 editors and the point values are created on first start.

## Deploy on Render
1. Push this folder to GitHub.
2. Render → New → Blueprint → pick the repo (uses `render.yaml`).
3. Fill in `DATABASE_URL` (Neon pooled connection string), `ADMIN_PASSWORD`, `TEAM_CODE`. `JWT_SECRET` is generated.

## Rules (enforced by the API)
- Editors add projects and cuts, and log or fix their own numbers in open months.
- Admin manages editors, resets PINs, fixes any editor's numbers, sets point values and rewards, closes and reopens months.

## Security
bcrypt-hashed PINs, signed httpOnly session cookie (30 days), lockout after 5 wrong PINs for 15 minutes, rate-limited sign-in, CSRF guard on writes, strict Content-Security-Policy, server-side validation (zod + database constraints).
