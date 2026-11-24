# AGENTS.md

## Current Status

- Read [STATUS.md](STATUS.md) before starting work. It records the production
  baseline, branch responsibilities, known failures, and deployment
  constraints.
- Do not deploy or roll back production without explicit approval.

## Project Principles

- Keep the repository documentation-first and product-empty until scope is approved.
- Preserve a clean pnpm workspace and Turborepo foundation.
- Prefer explicit, boring tooling over clever abstractions.

## Product Boundaries

- Keep Estudio Blanco and Cernunnos as separate applications.
- Do not create product functionality without documented scope.
- Put shared code in `packages/` only when it is genuinely shared.

## Architecture

- Apps belong under `apps/`.
- Shared packages belong under `packages/`.
- Architecture notes and decisions belong under `docs/architecture/`.
- Do not introduce framework, deployment, or data-layer decisions without approval.

## Repository Language

- System Knowledge is written in English.
- Domain Knowledge remains in its original language whenever possible.
- System Knowledge includes engineering-facing documentation such as `README.md`, `AGENTS.md`, `CLAUDE.md`, ADRs, architecture documentation, engineering documentation, product principles, design principles, research principles, technical specifications, code comments, commit messages, pull requests, and issues.
- Domain Knowledge includes user interviews, survey responses, research findings, business strategy, market analysis, product vision, brand strategy, and Argentine agriculture domain knowledge.
- Do not translate Domain Knowledge only to make the repository uniformly English.
- When a document mixes System Knowledge and Domain Knowledge, write the system framing in English and preserve domain source material in its original language.

## Coding Standards

- Use TypeScript for source code.
- Keep strict TypeScript settings enabled.
- Use ESLint and Prettier before considering work complete.
- Keep package APIs small, typed, and documented.

## Design Principles

- Do not add components, layouts, assets, or visual systems before product and brand direction exist.
- Keep future design systems shared only when both applications need them.
- Document brand decisions in `docs/brand/` first.

## UX Principles

- Do not invent user journeys or interaction models.
- Document intended users, jobs, and flows before building screens.
- Keep application experiences separate unless a shared UX pattern is approved.

## Security

- Do not commit secrets or local environment values.
- Keep environment examples explicit and non-sensitive.
- Ask before adding authentication, authorization, analytics, or third-party services.

## Git Workflow

- Keep commits focused and reviewable.
- Run lint, typecheck, and format checks before committing.
- Do not rewrite unrelated user changes.
- Ask before changing product or architecture direction.

## Definition of Done

- Documentation is updated for the change.
- Product boundaries remain clear.
- No unapproved product functionality is introduced.
- `pnpm lint`, `pnpm typecheck`, and `pnpm format:check` pass or any failure is explained.
