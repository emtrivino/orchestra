# Asker Symfoniorkester – GitHub Pages-ready website

A complete static website for **Asker Symfoniorkester** in Norwegian Bokmål. The site is generated with a dependency-free Node.js static generator and is configured to work from the GitHub Pages project URL:

```text
https://emtrivino.github.io/orchestra/
```

The build writes the full website to both `dist/` and `docs/`. Use `docs/` for GitHub Pages branch publishing. The recommended publishing mode is **Settings → Pages → Deploy from a branch → main → /docs**.

## Publish from GitHub Pages in the browser only

You do not need to run anything locally after this repository is updated and merged. In GitHub:

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
http://localhost:3000/orchestra/
```

## Where to edit content

- `src/data/site.mjs` – navigation, GitHub Pages base path, site URL, contact email, the single public concert, hero image metadata, Facebook URL, and eBillett URL.
- `src/render.mjs` – page templates, reusable rendering sections, localized internal links, and static mailto contact links.
- `src/styles.css` – clean visual identity, responsive layout, typography, cards, hero section, and mobile behavior.
- `public/images/` – committed image assets copied into both `dist/images/` and `docs/images/` so GitHub Pages can serve them.
- `public/favicon.svg` – favicon/logo mark.

## Pages included

- Home
- Konserter
- Sommerkonsert detail page
- Bli med
- Om oss
- Kontakt

## Contact links

The contact and recruitment calls to action are static mailto links to:

```text
post@askersymfoniorkester.no
```

## Recommended real content to add next

- Optional replacement of the committed frontpage image with a newer orchestra photo.
- Official logo and brand assets.
- Confirmed updates to the Sommerkonsert programme, soloists, or ticket URL.
