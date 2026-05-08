# Agent Guide — @contentful/integration-frontend-toolkit

## What This Repo Does
A shared React component library and SDK wrapper library for Contentful marketplace app frontends. Provides reusable UI components (search, charts, hyperlinks), a Sentry SDK wrapper pre-configured for marketplace apps, and a Segment analytics context provider.

Currently used by the `microsoft-teams` app in `contentful/apps`.

## Ownership
`@contentful/team-marketplace` (full, sole owner)

## Structure

```
src/
├── components/
│   ├── general/           # HyperLink, SearchBar, LocalHostWarning, SearchableList
│   └── stacks/analytics/  # LineChart (Chart.js wrapper)
├── sdks/
│   ├── sentry/            # sentryMarketplaceAppsSDK — pre-configured Sentry for marketplace apps
│   └── segment/           # SegmentMarketplaceProvider — Segment analytics context provider
└── types/                 # ContentfulNetworkHeaders interface
```

## Public API

**Components** (import from `@contentful/integration-frontend-toolkit/components`):
- `HyperLink` — link component
- `SearchBar` — search input
- `SearchableList` — searchable list
- `LocalHostWarning` — dev localhost warning banner
- `LineChart` — Chart.js line chart wrapper

**SDKs** (import from `@contentful/integration-frontend-toolkit/sdks`):
- `sentryMarketplaceAppsSDK` — initializes Sentry pre-configured for Contentful marketplace apps
- `SegmentAnalyticsProvider` — React context provider for Segment tracking
- `SegmentAnalyticsContext` — context for accessing analytics in child components

## Sharp Edges & Invariants

- **Subpath imports only** — consumers should import from `/components` or `/sdks` subpaths, not the root. The root `index.ts` re-exports everything but subpath imports enable better tree-shaking.
- **ES modules only** — output is ESM only (no CJS). Consumers must support ES modules.
- **React and `@contentful/react-apps-toolkit` are peer dependencies** — do not move them to `dependencies`.
- **Jest via `react-scripts`** — tests use Jest (not Vitest). Do not replace the test runner.
- **Storybook is required for new components** — every new React component needs a `.stories.tsx` file. Chromatic runs visual regression tests in CI.
- **Each entity in its own directory** — follow the pattern: `ComponentName/index.ts`, `ComponentName/ComponentName.tsx`, `ComponentName/ComponentName.spec.tsx`, `ComponentName/ComponentName.stories.tsx`.
- **Publishes to GitHub Packages** — `npm.pkg.github.com`, public access.

## Never / Always

- **Never** add a component without a `.stories.tsx` file — Chromatic will fail.
- **Never** add a component without a `.spec.tsx` test file.
- **Never** manually bump the version — semantic-release on `master` handles it.
- **Always** use lowercase directory and file names — except React component files themselves (PascalCase).
- **Always** export new entities from the parent `index.ts`.
