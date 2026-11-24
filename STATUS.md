# STATUS.md

Operational snapshot of the repository for contributors and AI agents. It
records the current state. Rules stay in [AGENTS.md](AGENTS.md). Update this
file whenever the production baseline, branch roles, or known failures change.

**Last updated:** 2026-11-24 (UTC). M0 recovery and M1 architecture decision
are complete. **Current phase:** M2, foundation and local prototype of the
next website (`apps/estudioblanco-v2`, Astro), developed on an isolated
feature branch. See [ADR-0004](docs/adr/0004-web-runtime-and-publishing.md).

## Repository Structure

| Path                         | Purpose                                                                                                                                                                                                    |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apps/estudioblanco`         | Public website `estudioblanco.org`. Built with vinext 0.0.50 (a Vite-based reimplementation of the Next.js API) and React 19.2.9 Server Components, deployed as the Cloudflare Worker `estudioblanco-app`. |
| `apps/cernunnos`             | Separate application (Next.js 15, static export). Keep it independent of Estudio Blanco.                                                                                                                   |
| `packages/eslint-config`     | Shared ESLint configuration.                                                                                                                                                                               |
| `packages/typescript-config` | Shared TypeScript configuration.                                                                                                                                                                           |
| `packages/bahaus`            | Bahaus design system. **Not on `main` yet.** It exists only on `claude/bahaus-m0-recovery` (see below).                                                                                                    |
| `docs/`                      | Principles, ADRs, architecture, brand, product, and research documentation.                                                                                                                                |

`apps/estudioblanco` remains the production application until its replacement
is reviewed and approved. It receives maintenance and security fixes only.

Tooling: pnpm 11.9 workspace with Turborepo. Root commands: `pnpm lint`,
`pnpm typecheck`, `pnpm build`, `pnpm format:check`.

## Branch Responsibilities

| Ref                                          | Commit    | Role                                                                                                                                              |
| -------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `main`                                       | `bd0f702` | Integration branch. Production code plus PR #4 (not yet deployed). Contains the React security fix and Worker settings (PR #5).                   |
| `claude/bahaus-m0-recovery`                  | `dba6edc` | Recovered Bahaus design system, ADR-0003, and brand direction: 12 commits on top of `b7b7559`. Not merged; integration waits for the M1 decision. |
| `claude/security-react-rsc-19.2.9`           | `b3db302` | Exact record of what production runs. Do not develop on it.                                                                                       |
| `backup/pre-sync-2026-08-14`                 | `c5d7b27` | Historical snapshot from before the GitHub sync. Read only.                                                                                       |
| tag `security-baseline/2026-11-24`           | `b3db302` | Secure rollback baseline (see below).                                                                                                             |
| `claude/integrate-security-react-rsc-19.2.9` | `fe5fc0a` | Merged through PR #5. Historical.                                                                                                                 |
| `codex/fix-hero-responsive-measure`          | `cbf05fe` | Merged through PR #4. Historical.                                                                                                                 |
| `feat/cloudflare-bootstrap`                  | `7292d76` | Cloudflare build scripts, merged through PR #1 as a separate commit. Historical.                                                                  |

Use `<author>/<slug>` branch names (or `feat/<slug>` for approved feature
work) and Conventional Commits.

`main` is protected by a ruleset: changes land through pull requests;
force-pushes and branch deletion are blocked.

## Production Baseline

| Item               | Value                                                                  |
| ------------------ | ---------------------------------------------------------------------- |
| Domain             | `estudioblanco.org` (Worker custom domain)                             |
| Worker             | `estudioblanco-app`                                                    |
| Cloudflare version | `22488c80-f4ee-4d7c-9e8f-ef3cb4c30c47` (100% of traffic)               |
| Running code       | `3642f05`: `b7b7559` plus React, React DOM, and RSC packages at 19.2.9 |
| Worker settings    | From `b3db302`: `workers_dev: false`, `preview_urls: false`            |
| Deployed           | 2026-11-24, manually with Wrangler                                     |

Production is **not** `main`. `main` equals production plus PR #4, which
widens the hero heading on desktop (`max-width` 48rem to 52rem).

**Rollback rule:** never deploy or roll back to a Worker version older than
`22488c80`. Older versions run React releases with known security advisories.
To restore the baseline, redeploy version `22488c80`. If that version is
unavailable, rebuild from tag `security-baseline/2026-11-24`. Before any
deploy, confirm that the built `dist/` contains no React version below 19.2.9.

## Main Branch Status

As of `bd0f702`:

- `pnpm lint`, `pnpm typecheck`, and `pnpm build` pass.
- `estudioblanco` resolves `react`, `react-dom`, and `react-server-dom-webpack`
  to 19.2.9 only.
- The generated Worker configuration keeps `workers_dev` and `preview_urls`
  disabled.
- `main` has not been deployed. Deploying it ships the PR #4 visual change and
  requires explicit approval.

## Bahaus Backup Status

- `claude/bahaus-m0-recovery` is not on the public `origin`.
- It is backed up to the private repository
  `estudioblanco/estudioblanco-private-backup`, together with
  `backup/pre-sync-2026-08-14`, `claude/security-react-rsc-19.2.9`, and tag
  `security-baseline/2026-11-24`. Nothing else is stored there.
- The backup repository is backup-only. It has no Actions, Pages, issues, or
  wiki. Never use it as `origin`, a deploy source, or a mirror of all local
  refs. Push to it only refs that a maintainer has reviewed and approved.
- Bahaus work follows `packages/bahaus/AGENTS.md` on that branch.

## Known Failures

These failures predate M0 and are unchanged by it:

- `pnpm format:check` fails on four files in `apps/estudioblanco`:
  `app/refinement.css`, `components/sections/Events.tsx`,
  `components/sections/Hero.tsx`, and `components/ui/SectionHeader.tsx`.
- `apps/estudioblanco/tests/rendered-html.test.mjs` fails 2 of 2 tests. Its
  assertions are stale: an old page title and hero copy, and a `<FinalCTA />`
  section that is no longer rendered.
- `pnpm audit` still reports advisories outside the React RSC packages. They
  have not been triaged yet.

Report these failures; do not fix them as a side effect of unrelated work.

## Deployment Constraints

- There is no CI and no automatic deployment. Merging to `main` does not
  deploy. Deploys are manual and require explicit human approval.
- Deploy from a clean worktree, from `apps/estudioblanco`, with the app-local
  Wrangler:
  1. `pnpm install --frozen-lockfile`
  2. `pnpm --filter @estudioblanco/app build`
  3. Verify the React version in `dist/`.
  4. `wrangler versions upload`
  5. `wrangler versions deploy <version-id>@100%`
- `wrangler triggers deploy` does not read the generated configuration on its
  own. Always pass `-c dist/server/wrangler.json`. Without it, Wrangler falls
  back to defaults that re-enable the `workers.dev` route.
- Keep `workers_dev: false` and `preview_urls: false` in
  `apps/estudioblanco/vite.config.ts`.
- Run Wrangler with `WRANGLER_WRITE_LOGS=false`. Do not raise its log level.
  The app's `dev`, `build`, and `start` scripts set
  `WRANGLER_LOG_PATH=.wrangler/wrangler.log`. Treat that file as sensitive:
  never print or commit it.
- `dist/server/vinext-server.json` contains a secret generated at build time.
  Never print, commit, or upload it.
- Builds download Google Fonts CSS at build time, so two builds of the same
  commit can differ slightly in font CSS.
- There is no staging environment.

## Architecture (ADR-0004, Accepted)

- Content websites: Astro, static-first; React (including Bahaus) rendered at
  build time; client JavaScript only as explicit islands.
- Interactive applications and experiments: Vite and React.
- Bahaus: autonomous shared design system, documented in Storybook.
- Content: schema-validated JSON and Markdown; private content repository
  deferred until the local prototype is validated.
- Media: Cloudflare R2 (not provisioned yet).
- Hosting: Cloudflare Workers Static Assets; GitHub Actions CI/CD (not set up
  yet); access-protected previews; human-approved production deploys.

Open items:

1. Portfolio content transfer from the separate recovery workspace requires
   explicit approval. Do not access that workspace from this repository.
2. Whether Estudio Blanco and Cernunnos converge on one stack. They remain
   separate applications either way.

## Pending Security and Infrastructure Work

Maintainers keep detailed findings in private records outside version
control. Never commit audit reports, evidence, credentials, or client
information to this public repository.

Done:

- GitHub dependency alerts, Dependabot security updates, secret scanning, and
  push protection are enabled.
- `main` is protected by a ruleset.
- Edge request filtering is in place for the production hostname.

Planned workstreams:

- Edge hardening for the production zone: HTTPS enforcement, HSTS, and
  security headers.
- Email-authentication DNS records, after confirming every sending service.
- CI on every pull request: frozen install, lint, typecheck, format check,
  tests, build, and dependency audit.
- Access policies for non-production hostnames.
- Removing `WRANGLER_LOG_PATH` from the app scripts (pull request open).
- Fixing the known format and test failures, and triaging `pnpm audit`.
