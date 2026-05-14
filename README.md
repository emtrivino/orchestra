# Asker Symfoniorkester – GitHub Pages-ready website

A complete static website for **Asker Symfoniorkester** in Norwegian Bokmål. The site is generated with a dependency-free Node.js static generator and is configured to work from the GitHub Pages project URL:

```text
https://emtrivino.github.io/orchestra/
```

The build writes the full website to both `dist/` and `docs/`. Use `docs/` for GitHub Pages branch publishing.

## Publish from GitHub Pages in the browser

You do not need to run anything locally after this repository is updated. In GitHub:

1. Go to the repository **Settings**.
2. Open **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to **main**.
5. Set **Folder** to **/docs**.
6. Click **Save**.
7. Open:

```text
https://emtrivino.github.io/orchestra/
```

## Local commands for maintainers

Install dependencies (there are no external runtime dependencies, but this verifies the npm project):

```bash
npm install
```

Build the static site into `dist/` and `docs/`:

```bash
npm run build
```

Run the lightweight render/SEO lint check:

```bash
npm run lint
```

Run the local development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Where to edit content

- `src/data/site.mjs` – navigation, GitHub Pages base path, site URL, contact email, concerts, facts, news, repertoire, musician sections, partner placeholders, Facebook URL, and eBillett URL.
- `src/render.mjs` – page templates, reusable rendering sections, localized internal links, and static mailto forms.
- `src/styles.css` – visual identity, responsive layout, typography, cards, hero sections, forms, and mobile behavior.
- `public/favicon.svg` – favicon/logo mark.

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

## Contact forms

The contact and recruitment forms are static and use a mailto fallback to:

```text
post@askersymfoniorkester.no
```

## Recommended real content to add next

- Real orchestra photos and concert images.
- Official logo and brand assets.
- Confirmed concert dates, programmes, venues, and eBillett URLs.
- Musician names and board/administration roles.
- Final partner/sponsor logos.
