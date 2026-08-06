# Migration: TanStack Start → plain Vite + React

This document records the conversion of the project from a Lovable/TanStack Start SSR app to a
standalone client-rendered Vite + React application suitable for GitHub and any static host.

## Plan (executed)

1. Self-host every remote binary so the app has no runtime dependency on Lovable's CDN.
2. Delete the TanStack Start runtime: server entry, SSR wrapper, request middleware,
   file-based routing and the generated route tree.
3. Add a standard Vite entry (`index.html` + `src/main.tsx`).
4. Reimplement the two routes with React Router and a small `<Seo />` head manager.
5. Replace the SSR-only `/sitemap.xml` server route with a static file.
6. Rewrite build config, package scripts, and docs; verify with a production build.

## Removed

| File | Reason |
| --- | --- |
| `src/server.ts` | SSR/Worker fetch entry point |
| `src/start.ts` | TanStack Start request middleware (CSRF, error page) |
| `src/router.tsx` | TanStack Router instance |
| `src/routeTree.gen.ts` | generated file-based route tree |
| `src/routes/__root.tsx` | root SSR shell (`<html>`, `<HeadContent />`, `<Scripts />`) |
| `src/routes/index.tsx`, `src/routes/archiwum.tsx` | route wrappers with `head()` metadata |
| `src/routes/sitemap[.]xml.ts` | server route → replaced by `public/sitemap.xml` |
| `src/lib/error-capture.ts`, `src/lib/error-page.ts`, `src/lib/lovable-error-reporting.ts` | SSR/Lovable-specific error plumbing |
| `bunfig.toml`, `.lovable/` | Lovable tooling config |

Removed dependencies: `@tanstack/react-router`, `@tanstack/react-start`,
`@tanstack/router-plugin`, `@lovable.dev/vite-tanstack-config`, `nitro`,
`vite-tsconfig-paths` (native `resolve.tsconfigPaths` is used instead).

## Added

| File | Purpose |
| --- | --- |
| `index.html` | Vite app shell, favicons, default meta tags |
| `src/main.tsx` | `createRoot(...).render(<App />)` |
| `src/App.tsx` | `BrowserRouter` with `/`, `/archiwum`, and a 404 route + per-route SEO |
| `src/components/Seo.tsx` | sets `document.title`, meta, canonical, OG and JSON-LD |
| `vite.config.ts` | plain `@vitejs/plugin-react` + `@tailwindcss/vite` |
| `public/sitemap.xml` | static sitemap |
| `public/_redirects`, `vercel.json` | SPA fallback for Netlify / Vercel |

Added dependency: `react-router-dom`.

## Unchanged application code

`src/features/HomePage.tsx`, `src/features/ArchivePage.tsx`, `src/components/ui/*`,
`src/hooks/*`, `src/lib/{archive-data,docs,site-i18n,utils}.ts` and `src/styles.css` were
already framework-agnostic React/TypeScript and were kept as-is. In-page navigation between
`/` and `/archiwum` uses plain `<a href>` links, which work identically with React Router
(full document load) — convert them to `<Link>` if you want soft navigation.

## Media

- 862 archive/home images were downloaded into `public/media/<id>/<file>` — the exact
  paths already referenced by `src/lib/archive-data.ts` and the `*.asset.json` pointers, so no
  code changes were required.
- 26 recruitment documents were downloaded into `public/assets/docs/` (these were previously
  broken links to another host).
- Two videos exceed the 10 MB per-file repository limit and are therefore **not** committed.
  They are referenced by absolute URL
  (`https://project--e73b3868-3cd9-4a45-865f-7c2b371d7a55-dev.lovable.app/__l5e/...`) in
  `src/assets/real/fundacja-1-5-procent.mp4.asset.json` and in one archive excerpt. To fully
  cut the last external dependency, upload the two MP4s to your own hosting (or add them via
  Git LFS) and replace those URLs.

## Consequences

- No SSR: HTML is rendered in the browser. Crawlers that execute JavaScript index the site
  fine; if you need pre-rendered HTML per route, add a prerender step (e.g. `vite-plugin-ssg`).
- The project can no longer be built or published by Lovable — this was the intended trade-off.
