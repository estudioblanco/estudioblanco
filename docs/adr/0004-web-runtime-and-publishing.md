# ADR-0004: Web Runtime and Publishing Model

## Status

Accepted

## Date

2026-11-24

## Context

Estudio Blanco is becoming agent-first design and publishing infrastructure.
It must support:

- institutional websites;
- multimedia portfolios and editorial case studies;
- interactive experiments, client projects, and independent products;
- reusable design systems;
- fast publishing under custom domains and subdomains.

Several AI agents and human contributors must be able to work on it
concurrently in Git worktrees, at low operating cost, with reproducible
deployments, long-term maintainability, and minimal vendor lock-in.

The current website (`apps/estudioblanco`) was started from a starter
template. It runs vinext, a Vite-based reimplementation of the Next.js App
Router, with React Server Components on a Cloudflare Worker. No ADR recorded
that choice. ADR-0001 described applications as Next.js projects.

The website is a single route of static content with a few small interactive
elements. It uses no server-side features. A server runtime adds dependency
and security-maintenance cost that its content does not need.

Bahaus (ADR-0003) consists of design tokens and pure React components. Those
components render to static HTML in any React server-rendering host.

## Decision

1. **Content websites use Astro, static-first.**
   - Institutional sites, portfolios, case studies, client marketing sites,
     and documentation are built with Astro (7.x) and published as static
     output.
   - React components, including Bahaus, render at build time.
   - Client-side JavaScript is added only as explicit islands where
     interaction requires it.
2. **Interactive applications and experiments use Vite and React,** served as
   static assets.
3. **Server code is opt-in per project.**
   - A project that needs request-time behavior adds it explicitly: specific
     on-demand routes or a small dedicated Worker endpoint.
   - Server-rendered React (Server Components, Server Actions) requires its
     own ADR.
4. **Bahaus is an autonomous, shared design system.**
   - Applications consume it.
   - It depends on no application, brand, or framework server runtime.
   - Storybook documents its components.
5. **Editorial content is schema-validated JSON and Markdown.** The content of
   record will live in a private content repository. Its creation is deferred
   until a local prototype is validated. No CMS is adopted at this stage.
6. **Media** will use Cloudflare R2. Private preservation masters are kept
   separate from approved public delivery derivatives.
7. **Hosting is Cloudflare Workers with Static Assets,** one Worker per
   published hostname.
   - Version URLs and the `workers.dev` route stay disabled unless a project
     records a reason.
   - Pages is not used for new projects.
8. **Delivery:**
   - GitHub Actions for CI/CD;
   - preview environments protected by access control (never public);
   - production deployments approved by a human.
9. **Portability:**
   - Every content website must build to a directory of static files that
     any static host can serve.
   - Platform-specific features are isolated per project and documented.
10. **Concurrent work** uses one Git worktree per task.
11. **Transition:**
    - The current website remains in production until its replacement
      reaches parity, is reviewed, and is approved.
    - It receives maintenance and security fixes only.
    - The replacement is developed as a separate application,
      `apps/estudioblanco-v2`.

## Alternatives Considered

- **Keep vinext as the default runtime.** It keeps a server runtime and its
  advisory exposure for content that is static. It remains an option for a
  future product that needs Server Components (decision 3).
- **Next.js on Workers through an adapter, or Next.js static export.** It has
  the heaviest dependency and security-maintenance load, and depends on a
  community adapter. Static export removes most of what Next.js adds.
- **Vite and React for every project.** Content tooling would have to be
  assembled. Client-rendered pages weaken SEO, and full hydration conflicts
  with static Bahaus components. Kept for interactive applications.
- **Framework-minimal static sites.** They give up React and Bahaus component
  reuse. Still allowed for single-file experiments.
- **A headless CMS.** The content of record would leave Git, which works
  against agent and pull-request workflows, and it adds cost and lock-in.
  Reconsidered if non-technical editors need a UI. A Git-based CMS over the
  same files is the preferred path then.

## Consequences

### Positive

- Content websites run no server code by default, which reduces the security
  surface and operating cost.
- Pages ship no JavaScript unless they need it.
- One default path for content websites, with schema-validated content,
  localization, and build-time rendering of Bahaus components.
- Static builds are deterministic and portable.

### Negative

- The current website must be rebuilt as a new application.
- Two supported stacks (Astro, and Vite with React) instead of one.
- Composition patterns differ between Astro templates and React components.

### Risks

- Astro major versions bring breaking changes. Versions are pinned, and
  upgrades are deliberate.
- Projects may drift into server rendering without review. Server code is
  opt-in and must be justified.
- Hosting-platform tooling changes over time. Static deployment depends only
  on publishing a directory of files.

## Review Triggers

Review this decision if:

- a product requires Server Components, Server Actions, or other
  request-time React rendering;
- Astro's license or governance changes;
- a client website must run on DNS not managed by Cloudflare;
- Workers Static Assets pricing or limits change materially.

This ADR amends ADR-0001: applications are independently deployable web
applications, not necessarily Next.js projects.
