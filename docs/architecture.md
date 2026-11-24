# Architecture

This monorepo starts with infrastructure only. Product applications and shared
packages should be added deliberately as separate units.

## Apps

Apps live in `apps/` and should be independently deployable web applications.
The runtime and publishing model is defined in
[ADR-0004](adr/0004-web-runtime-and-publishing.md).

Each app owns:

- routing
- page composition
- app-specific environment variables
- app-specific assets
- deployment configuration

Apps should consume shared code from `packages/` through explicit workspace
dependencies.

## Packages

Packages live in `packages/` and should expose stable, typed APIs.

Common package categories:

- `packages/ui`: shared React components and design primitives
- `packages/config`: shared linting, TypeScript, or framework configuration
- `packages/types`: shared TypeScript contracts
- `packages/utils`: framework-agnostic utility code

Avoid importing from one app into another app. If behavior is useful in more
than one app, promote it into a package.

## Tooling

Turborepo coordinates workspace scripts. Root scripts should delegate work to
package-level scripts so each app or package can own its build, lint, and
typecheck details.

## Documentation

Document architectural decisions in `docs/adr/` before they become
implicit conventions.
