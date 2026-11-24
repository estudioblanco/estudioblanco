# ADR-0001: Monorepo Foundation

## Status

Accepted. Amended by [ADR-0004](0004-web-runtime-and-publishing.md):
applications are independently deployable web applications, not necessarily
Next.js projects.

## Date

2026-07-21

## Context

Estudio Blanco needs a repository foundation that can support more than one web
application without forcing those applications to share product concerns,
deployment assumptions, or release timing. The planned applications,
`apps/estudioblanco` and `apps/cernunnos`, should be able to evolve as
separate products while still benefiting from shared development standards.

The repository also needs a clear home for shared packages such as configuration,
types, utilities, and future cross-application libraries. Without an explicit
structure, shared code can drift into application folders, applications can begin
importing from each other, and technical conventions can become implicit instead
of documented.

The initial foundation should therefore make future growth possible while keeping
the repository product-empty until application scope is approved.

## Decision

Use pnpm workspaces and Turborepo as the monorepo foundation.

Applications will live under `apps/`. Shared packages will live under
`packages/`. Root-level scripts will coordinate common workflows such as linting,
typechecking, formatting, building, and development through Turborepo where
workspace orchestration is useful.

This keeps application boundaries visible, gives shared code a deliberate home,
and allows future Next.js applications to be added without changing the repository
model.

## Alternatives Considered

- Separate repositories per application: this would create strong product
  boundaries, but it would duplicate tooling and make shared packages harder to
  develop, version, and review across Estudio Blanco and Cernunnos.
- A single Next.js project without a monorepo: this would be simpler at the start,
  but it would blur the boundary between separate applications and make it harder
  to support independent deployment and ownership later.
- pnpm workspaces without Turborepo: this would provide workspace linking, but it
  would leave task orchestration, caching, and dependency-aware execution to ad
  hoc scripts as the repository grows.

## Consequences

### Positive

- Multiple applications can be added under a consistent repository model.
- Shared packages have an explicit location and can be reviewed as stable APIs.
- Common TypeScript, ESLint, and Prettier standards can be managed centrally.
- Turborepo can coordinate workspace tasks as applications and packages are added.
- The repository can remain product-empty while still being ready for approved
  application work.

### Negative

- The repository has more initial tooling than a single Next.js project.
- Contributors need to understand workspace boundaries and Turborepo task flow.
- Shared package design requires discipline to avoid premature abstractions.
- Root-level tooling changes can affect multiple applications once they exist.

### Risks

- The monorepo may become overarchitected if only one application remains active.
- Applications may become coupled through shared packages that should have stayed
  app-specific.
- Shared packages may grow without clear ownership, versioning expectations, or
  documented consumers.
- Turborepo may add operational complexity if workspace task orchestration remains
  minimal.

## Review Triggers

Review this decision if:

- only one application remains active;
- independent deployments become difficult to manage;
- If Turborepo no longer provides measurable value.;
- the repository grows enough to require stricter ownership boundaries;
- shared packages begin accumulating app-specific behavior.
