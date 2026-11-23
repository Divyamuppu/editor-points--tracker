-- Editor Points Tracker schema v2 (idempotent: safe to run on every start)
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- One-time cleanup of the v1 test schema (email accounts), which this version replaces.
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'cuts' AND column_name = 'user_id') THEN
    DROP TABLE IF EXISTS daily_entries, cuts, projects, months, settings, editor_claims, editors, users CASCADE;
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS editors (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name            text NOT NULL CHECK (length(name) BETWEEN 1 AND 40),
  active          boolean NOT NULL DEFAULT true,
  pin_hash        text,                         -- NULL until the editor sets their PIN
  token_version   integer NOT NULL DEFAULT 0,   -- bumped on PIN change/reset to sign out old sessions
  failed_attempts integer NOT NULL DEFAULT 0,
  locked_until    timestamptz,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS editors_name_lower_uq ON editors (lower(name));

CREATE TABLE IF NOT EXISTS projects (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title           text NOT NULL CHECK (length(title) BETWEEN 1 AND 120),
  client          text NOT NULL DEFAULT '' CHECK (length(client) <= 80),
  platform        text NOT NULL DEFAULT '' CHECK (length(platform) <= 40),
  notes           text NOT NULL DEFAULT '' CHECK (length(notes) <= 300),
  status          text NOT NULL DEFAULT 'open' CHECK (status IN ('open','closed')),
  owner_editor_id uuid REFERENCES editors(id) ON DELETE SET NULL,   -- NULL = created by admin
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX IF NOT EXISTS projects_title_lower_uq ON projects (lower(title));

CREATE TABLE IF NOT EXISTS cuts (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  editor_id  uuid NOT NULL REFERENCES editors(id) ON DELETE RESTRICT,
  project_id uuid NOT NULL REFERENCES projects(id) ON DELETE RESTRICT,
  label      text NOT NULL DEFAULT '' CHECK (length(label) <= 80),
  url        text NOT NULL CHECK (url ~* '^https?://\S+\.\S+' AND length(url) <= 500),
  platform   text NOT NULL DEFAULT '' CHECK (length(platform) <= 40),
  posted_at  date NOT NULL,
  status     text NOT NULL DEFAULT 'active' CHECK (status IN ('active','archived')),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS cuts_editor_idx ON cuts (editor_id);
CREATE INDEX IF NOT EXISTS cuts_project_idx ON cuts (project_id);
CREATE UNIQUE INDEX IF NOT EXISTS cuts_editor_project_label_uq ON cuts (editor_id, project_id, lower(label));

CREATE TABLE IF NOT EXISTS daily_entries (
  cut_id         uuid NOT NULL REFERENCES cuts(id) ON DELETE CASCADE,
  day            date NOT NULL,
  views          bigint NOT NULL DEFAULT 0 CHECK (views    BETWEEN 0 AND 10000000000),
  likes          bigint NOT NULL DEFAULT 0 CHECK (likes    BETWEEN 0 AND 10000000000),
  comments       bigint NOT NULL DEFAULT 0 CHECK (comments BETWEEN 0 AND 10000000000),
  shares         bigint NOT NULL DEFAULT 0 CHECK (shares   BETWEEN 0 AND 10000000000),
  reposts        bigint NOT NULL DEFAULT 0 CHECK (reposts  BETWEEN 0 AND 10000000000),
  edited         boolean NOT NULL DEFAULT false,
  edited_at      timestamptz,
  fixed_by_admin boolean NOT NULL DEFAULT false,
  created_at     timestamptz NOT NULL DEFAULT now(),
  updated_at     timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (cut_id, day)
);

CREATE TABLE IF NOT EXISTS settings (
  key        text PRIMARY KEY CHECK (key IN ('scoring','rewards')),
  value      jsonb NOT NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS months (
  ym          text PRIMARY KEY CHECK (ym ~ '^\d{4}-(0[1-9]|1[0-2])$'),
  closed      boolean NOT NULL DEFAULT false,
  closed_at   timestamptz,
  reopened_at timestamptz,
  results     jsonb,
  scoring     jsonb,
  rewards     jsonb
);

INSERT INTO editors (name)
SELECT n FROM unnest(ARRAY['Akshay','Sameer','Vishnu','Abhinav','Likhith','Kishan','Nikhil']) AS n
WHERE NOT EXISTS (SELECT 1 FROM editors);

INSERT INTO settings (key, value) VALUES
 ('scoring', '{"views":0.01,"likes":0.2,"comments":1,"shares":3,"reposts":3,"checkin":4,"streak7":50,"m10k":50,"m50k":150,"m100k":300,"m500k":750,"m1m":1500,"h2h1":85,"h2h2":45,"h2h3":25}'),
 ('rewards', '{"tiers":[{"name":"Rising","min":1000,"amount":0},{"name":"Silver","min":2500,"amount":0},{"name":"Gold","min":5000,"amount":0},{"name":"Legend","min":10000,"amount":0}],"topAmount":0}')
ON CONFLICT (key) DO NOTHING;
