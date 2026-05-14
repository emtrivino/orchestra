# Asker Symfoniorkester – premium orchestra website

A complete premium 2026-style website for **Asker Symfoniorkester** in Norwegian Bokmål. The site is built as a dependency-free static cultural website so it can run reliably in this repository without external package downloads. The architecture still follows modern component/content separation: structured data, generated pages, reusable layout sections, responsive CSS, SEO metadata, robots.txt, sitemap, and a local development server.

> Note: The original preferred stack was Next.js + Tailwind CSS. Package downloads from npm were blocked in this environment, so the delivered version uses a zero-dependency Node static generator while preserving the requested visual direction, content model, routes, and local commands. It can later be migrated to Next.js/Vercel using the same `src/data/site.mjs` content.

## Tech stack

- Node.js static site generator
- Modern semantic HTML
- Custom responsive CSS inspired by Tailwind utility principles
- CSS gradients, glass surfaces, texture, and editorial layouts
- Embedded Facebook Page Plugin section
- SEO metadata, favicon, robots.txt, sitemap.xml

## Setup

Install dependencies (there are no external dependencies, but this verifies the npm project):

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Build the static site:

```bash
npm run build
```

Run the lightweight render/SEO lint check:

```bash
npm run lint
```

## Where to edit content

- `src/data/site.mjs` – navigation, concerts, facts, news, repertoire, musician sections, partner placeholders, Facebook URL, eBillett URL.
- `src/render.mjs` – page templates and reusable rendering sections.
- `src/styles.css` – visual identity, responsive layout, typography, cards, hero sections, and mobile behavior.
- `public/favicon.svg` – placeholder favicon/logo mark.

## Pages included

- Home
- Konserter
- Concert detail pages
- Sesongen 2026/27
- Om orkesteret
- Musikere
- Bli med
- Repertoar
- For medlemmer
- Støtt oss
- Aktuelt
- Kontakt

## Facebook feed

The home and news pages include an embedded Facebook Page Plugin for:

```text
https://www.facebook.com/profile.php?id=100062928895060
```

If Facebook blocks iframe rendering in a specific browser/session, the section still provides a direct link to the orchestra's Facebook page.

## Recommended real content to add next

- Real orchestra photos and concert images.
- Official logo and brand assets.
- Official contact email addresses.
- Confirmed concert dates, programmes, venues, and eBillett URLs.
- Musician names and board/administration roles.
- Final partner/sponsor logos.
