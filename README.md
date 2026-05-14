# Asker Symfoniorkester website

Premium Norwegian Bokmål website for **Asker Symfoniorkester**, prepared for deployment to GitHub Pages at:

https://emtrivino.github.io/orchestra/

The site is currently implemented as a zero-dependency Node static site generator. It builds semantic HTML pages from structured data, uses custom responsive CSS, includes SEO metadata, embeds the orchestra Facebook feed, and publishes the generated `dist/` folder through GitHub Actions.

## Frontend stack

- Node.js static site generator
- Semantic HTML
- Custom responsive CSS
- Structured content in JavaScript modules
- GitHub Pages deployment via GitHub Actions

## Local development

Install dependencies using the lockfile:

```bash
npm ci
```

Start the local development server:

```bash
npm run dev
```

Open the local site at:

```text
http://localhost:3000/orchestra/
```

The dev server rebuilds the static site and serves the GitHub Pages base path locally.

## Build

Generate the production files in `dist/`:

```bash
npm run build
```

The build output includes:

- `dist/index.html`
- `dist/styles.css`
- `dist/favicon.svg`
- `dist/robots.txt`
- `dist/sitemap.xml`
- `dist/.nojekyll`
- static HTML pages for all routes

## Preview production build

After building, preview the generated `dist/` folder:

```bash
npm run preview
```

Open:

```text
http://localhost:4173/orchestra/
```

## Deployment

Deployment is configured in `.github/workflows/deploy.yml`. See `GITHUB_PAGES_SETUP.md` for a beginner-friendly GitHub UI checklist if the workflow does not appear in the Actions tab.

To deploy:

1. Push changes to the `main` branch.
2. GitHub Actions runs `npm ci` and `npm run build`.
3. The workflow uploads `./dist` as a GitHub Pages artifact.
4. GitHub Pages deploys the artifact.

Final public URL:

```text
https://emtrivino.github.io/orchestra/
```

You may still need to enable GitHub Pages manually in the repository settings:

- Go to **Settings → Pages**.
- Under **Build and deployment**, choose **GitHub Actions** as the source.

## Where to edit content

- `src/data/site.mjs` – navigation, concerts, facts, news, repertoire, musician sections, partner placeholders, Facebook URL, and eBillett URL.
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
