# Liceum Polonijne w Warszawie

Strona Liceum Polonijnego w Warszawie — **plain Vite + React 19 + TypeScript** single-page
application. No SSR, no framework beyond Vite; routing is handled by React Router.

## Stack

- Vite 8
- React 19 + TypeScript
- React Router 7 (`/` and `/archiwum`)
- Tailwind CSS 4 (`src/styles.css`, via `@tailwindcss/vite`)
- shadcn/ui components (`src/components/ui`)
- TanStack Query (data/cache utility only — no router involvement)

## Development

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build
npm run lint
```

## Project layout

```
index.html                 app shell + static SEO defaults
public/                    favicons, robots.txt, sitemap.xml, images & documents
  __l5e/assets-v1/...      archive photos (self-hosted, ~110 MB)
  assets/docs/...          recruitment PDFs / DOCX files
src/main.tsx               React entry point
src/App.tsx                React Router routes + per-route SEO
src/components/Seo.tsx     document-head manager (title, meta, canonical, JSON-LD)
src/features/HomePage.tsx  main page
src/features/ArchivePage.tsx  archive page
src/lib/archive-data.ts    archive content (titles, dates, image paths)
src/lib/docs.ts            recruitment document links
src/lib/site-i18n.ts       PL/EN/UK/RU translations
src/styles.css             design tokens + Tailwind setup
```

## Deployment

The build output in `dist/` is fully static. Because routing is client-side, the host must
serve `index.html` for unknown paths:

- Netlify: `public/_redirects` (included)
- Vercel: `vercel.json` (included)
- Nginx: `try_files $uri /index.html;`
- GitHub Pages: copy `dist/index.html` to `dist/404.html`

Set the public site URL for canonical/OG tags and the sitemap with an env variable:

```sh
VITE_SITE_URL=https://liceumpolonijne.edu.pl npm run build
```

## Media hosting

All archive images and recruitment documents are committed under `public/`, so the site does
not depend on any external host. Two large videos exceed the repository file-size limit and
are still loaded from a remote URL — see `MIGRATION.md`.
