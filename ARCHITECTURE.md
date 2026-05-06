# Architecture — @contentful/integration-frontend-toolkit

## Overview

A single-package React component and SDK library. Published as ESM to GitHub Packages. Provides UI primitives and pre-configured telemetry SDKs for use in Contentful marketplace app frontends.

## Package Structure

```
src/
├── components/           # React UI components
│   ├── general/
│   │   ├── HyperLink/
│   │   ├── SearchBar/
│   │   ├── LocalHostWarning/
│   │   └── SearchableList/
│   └── stacks/analytics/
│       └── LineChart/    # Chart.js wrapper
├── sdks/
│   ├── sentry/
│   │   └── sentryMarketplaceAppsSDK.ts   # @sentry/react wrapper
│   └── segment/
│       ├── SegmentMarketplaceProvider.tsx # Analytics context provider
│       ├── segmentMarketplaceContext.tsx  # React context
│       └── typewriter/                   # Typed Segment analytics (generated)
└── types/
    └── index.ts          # ContentfulNetworkHeaders
```

## Subpath Export Map

```json
{
  ".": "./index.js",
  "./components": "./components/index.js",
  "./sdks": "./sdks/index.js"
}
```

Consumers should use subpath imports for tree-shaking. All entities are also re-exported from the root for convenience.

## Build Pipeline

```
tsc → type checking + .d.ts generation
Vite → ESM bundle:
  index.es.js       (root)
  components/       (subpath)
  sdks/             (subpath)
```

`prepublishOnly` runs `npm run build` automatically before publishing.

## Key Dependencies

| Package | Role |
|---------|------|
| `@contentful/app-sdk` | App SDK types used in SDK wrappers |
| `@contentful/f36-components` | Forma 36 UI components (runtime dep) |
| `@sentry/react` | Sentry React SDK wrapped by `sentryMarketplaceAppsSDK` |
| `@segment/analytics-next` | Segment analytics client wrapped by `SegmentMarketplaceProvider` |
| `chart.js` + `react-chartjs-2` | Charting (LineChart component) |
| `fuse.js` | Fuzzy search (SearchableList, SearchBar) |
| `@emotion/css` | CSS-in-JS styling |
| React 16.8+ | Peer dep |
| `@contentful/react-apps-toolkit` | Peer dep |

## CI / Release

```
Every push:
  chromatic.yml → Chromatic visual regression testing → Storybook publish

Every push to master / PRs to master:
  release-package.yml → npm ci → build → test → semantic-release → publish to GitHub Packages
```

Semantic-release on `master` branch. Publishes to `npm.pkg.github.com` under `@contentful` scope with public access.

## File Conventions

Every entity follows this structure (enforced by team convention, not tooling):

```
ComponentName/
├── index.ts                    # re-export
├── ComponentName.tsx           # implementation
├── ComponentName.spec.tsx      # unit + component tests (Jest + Testing Library)
└── ComponentName.stories.tsx   # Storybook stories (required for CI)
```

Files: lowercase directories, PascalCase React component files.
