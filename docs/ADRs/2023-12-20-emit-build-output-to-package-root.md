# Emit Build Output to the Package Root Instead of Using an Exports Map

## Status

Accepted

## Context

This library is consumed by Contentful marketplace app frontends, which want to import a subset of it
— `@contentful/integration-frontend-toolkit/components` rather than the whole package — so that
unused chart and analytics code is not pulled into their bundles.

The package originally distributed Vite library bundles from `dist/` and described them with a
conditional `exports` map. As of `61fc9ae`, `e947e82` and `21d63ee` (May 2023) `package.json` carried
`main: dist/index.cjs`, `module: dist/index.es.js` and an `exports` map with `import` / `require`
conditions — a dual ESM + CommonJS package with modern conditional exports. `0e62451` (PR #46,
2023-12-19) extended that map with per-subpath entries for `./components` and `./providers`, each
declaring its own `import`, `require` and `types` targets.

That arrangement did not work for consumers. The following two weeks contain a visible sequence of
attempts to make it resolve correctly — including switching the package to CommonJS and reverting it,
adding `"type": "module"` and reverting it, and trying three different TypeScript
`moduleResolution` settings:

| Commit | Attempt |
|---|---|
| `42b8a7b`, `0e32297`, `5a2e65e` | upgrade TypeScript and change `moduleResolution` to support `exports` |
| `038e75a` | switch the entry point field from `module` to `main` |
| `d64e2a1`, `9f022be` | try CommonJS, then revert |
| `ed95a1a`, `57a5d08` | remove `"type": "module"`, then revert the removal |
| `6096fbc`, `8c0b8bf` | `moduleResolution: Bundler`, then `Node` |
| `519aee2` | verify the result against the LineChart component |

The generous reading is that conditional `exports` requires every consumer's bundler and TypeScript
configuration to agree on resolution semantics, and the consumers here are dozens of independently
configured app builds. Matching that matrix from the library side proved not to be worth it.

## Decision

Abandon the `exports` map and the published bundle. Compile with `tsc` directly into the package
root, preserving the source directory structure, and let subpath imports resolve through ordinary
Node directory resolution.

The pivot is `36257b3` (2023-12-20) — *"move directories to top level for imports"* — which deleted
the `exports` map, set `module`/`types` to root-relative paths, and changed the TypeScript `outDir`.
The details settled over the following two weeks into the state described below.

**How the published package is produced.** `npm run build` is `tsc && vite build`. The `tsc` step does
the work that matters:

```jsonc
// tsconfig.json
"module": "ESNext",
"moduleResolution": "Node",
"declaration": true,
"outDir": ".",
"include": ["src/"]
```

With `outDir: "."`, `src/index.ts` compiles to `./index.js`, `src/components/**` to `./components/**`,
`src/sdks/**` to `./sdks/**` and `src/types/**` to `./types/**`, each with a sibling `.d.ts`.
`package.json` then declares `main: "./index.js"` and `files: ["components", "sdks", "types"]`.

**There is no `exports` field, no `type` field, and no `module` field.** Subpath imports work because
the published tarball genuinely contains a `components/` directory with an `index.js` in it.

**The Vite bundle is not published.** `vite.config.ts` builds `formats: ['es']` with a single entry and
emits `dist/index.es.js`, but `dist/` is absent from `files`. The Vite step remains useful for local
development and for type-declaration generation via `vite-plugin-dts`; its bundle is not what
consumers receive.

## Consequences

**What this enables**

- Subpath imports work without asking anything of the consumer's resolver configuration. This is the
  property the two weeks of failed attempts were trying to buy.
- Module structure is preserved rather than bundled, so consumers' bundlers do the tree-shaking with
  full visibility of the import graph.
- The build is one `tsc` invocation. There is no bundler configuration standing between the source
  layout and the published layout.

**Trade-offs accepted**

- **The build writes into the repository working tree.** With `outDir: "."`, compiled `.js` and
  `.d.ts` files land beside the sources. `.gitignore` compensates with root-level patterns and an
  explicit `# exported build directories` section covering `/components/`, `/sdks/` and `/types/`.
  Anything added to `src/` that compiles to a new root-level directory must be added to both
  `.gitignore` and `files`, or it will either be committed by accident or be missing from the
  published package.
- **ESM-only, and not declared as such.** Output is ESM, but there is no `"type": "module"`, so Node
  treats the `.js` files as CommonJS by default. This is fine for bundler-based consumers, which is
  what marketplace apps are, and is a known hazard for anything importing the package directly under
  Node. Reintroducing `"type": "module"` was tried and reverted (`ed95a1a`, `57a5d08`), so it should
  not be changed casually.
- **No CommonJS build.** CommonJS consumers are unsupported; the attempt was made and reverted
  (`d64e2a1`, `9f022be`).
- **Two build steps with different outputs, only one of which ships.** A contributor reasonably
  assumes the bundler produces the artifact. Changing `vite.config.ts` has no effect on what is
  published.

**Follow-up work created**

- `ARCHITECTURE.md` describes a "Subpath Export Map" in `package.json` and attributes the subpath
  outputs to Vite. Both statements describe the pre-`36257b3` design and are no longer accurate; they
  should be corrected to describe the `tsc`-to-root mechanism.
- Consider whether `dist/` should be produced at all, given it is never published.
