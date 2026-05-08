# Contributing to @contentful/integration-frontend-toolkit

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | see `.nvmrc` |
| npm | bundled with Node |

## Setup

```bash
git clone https://github.com/contentful/integration-frontend-toolkit.git
cd integration-frontend-toolkit
npm install
```

## Running Tests

```bash
npm test        # interactive watch mode (Jest via react-scripts)
npm run test:ci # single run (CI mode)
```

Tests use **Jest + React Testing Library**. Test files are co-located as `ComponentName.spec.tsx` or `*.spec.ts`.

## Storybook

```bash
npm run storybook    # dev server on port 6006
npm run build-storybook  # static build
```

Every new React component **requires** a `.stories.tsx` file. Chromatic runs visual regression tests against Storybook in CI — PRs without stories for new components will fail.

## Building

```bash
npm run build
```

Runs TypeScript compilation + Vite build. Output goes to `dist/`. ESM only.

## Linting

```bash
npm run lint   # ESLint — zero warnings threshold
```

Prettier and lint-staged run automatically on staged files via Husky pre-commit hook.

## Adding a New Component

1. Create `src/components/general/<ComponentName>/`
2. Add `<ComponentName>.tsx` (implementation)
3. Add `<ComponentName>.spec.tsx` (tests — required)
4. Add `<ComponentName>.stories.tsx` (Storybook — required)
5. Add `index.ts` re-export
6. Export from `src/components/index.ts`

Same pattern applies for new SDK wrappers under `src/sdks/`.

## Code Conventions

- **TypeScript** throughout
- **Conventional Commits** — `feat:`, `fix:`, `chore:`, `docs:`
- **Lowercase directories**, PascalCase React component files
- **React + `@contentful/react-apps-toolkit` are peer deps** — do not add them to `dependencies`
- **ESM output only** — do not configure CJS output in Vite

## Releasing

Releases are automated via semantic-release on `master`. Do not manually bump versions.

## Troubleshooting

**Chromatic visual regression failures in CI**
A visual change was detected. Review the Chromatic link in the CI output and approve intentional changes.

**`npm link` for local testing**
```bash
npm run build
npm link
cd ../your-app
npm link @contentful/integration-frontend-toolkit
```

**`npm pack` for offline testing**
```bash
npm run build
npm pack   # generates a .tgz
npm install /path/to/contentful-integration-frontend-toolkit-x.y.z.tgz
```
