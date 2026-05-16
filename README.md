# Asker Symfoniorkester – static website

Minimal, responsive website for **Asker Symfoniorkester**. The site is generated with a small dependency-free Node.js renderer and is ready for GitHub Pages from:

```text
https://emtrivino.github.io/orchestra/
```

The build writes the same static site to both `dist/` and `docs/`. GitHub Pages should publish from **main → /docs**.

## Project structure

```text
src/
  data/site.mjs     # Main content: concerts, contact, board, about text, links, images
  render.mjs        # HTML templates and page composition
  styles.css        # Minimal 2026 visual design and responsive rules
scripts/
  build.mjs         # Builds dist/ and docs/
  dev.mjs           # Local preview server
  lint.mjs          # Lightweight render/SEO check
public/
  favicon.svg       # Site icon
  images/           # Source image assets
docs/               # Built GitHub Pages output
dist/               # Local build output
```

## Local workflow

```bash
npm install
npm run lint
npm run build
npm run dev
```

Open the local preview at:

```text
http://localhost:3000
```

## How to update the most relevant content

Most day-to-day changes happen in `src/data/site.mjs`.

### Next concert

Edit the single object in `concerts`:

- `title` – concert title shown on the home page and concert page.
- `date`, `time`, `venue` – practical information.
- `ticketUrl` – eBillett or external ticket link.
- `soloists` and `programme` – lists shown on the concert detail page.
- `desc` – short, mobile-friendly summary.

Only confirmed concerts with ticket information should be added. The concert overview intentionally stays simple and shows the next ticketed concert.

### Contact and board

Edit:

- `contactEmail` for the main email address.
- `board` for Leder, Kasserer and Styremedlemmer.

The contact form is static and opens the visitor’s email program with a `mailto:` action.

### About page

Edit `aboutSections` for the orchestra description, rehearsals, salongorkester and history. Keep paragraphs short so the mobile page stays simple and ordered.

### Front page images and videos

Edit:

- `frontImages` for image metadata and alt text.
- `videos` for YouTube links embedded on the front page.

## Design notes

- The hero title is intentionally smaller than before so “Musikk som puster med byen.” works on desktop and mobile.
- Mobile layout prioritizes: next concert, short orchestra summary, rehearsal info, contact and Facebook.
- The visual style uses a white base, soft borders, minimal cards and restrained motion for a clean 2026 feel.

## Publishing on GitHub Pages

1. Go to repository **Settings**.
2. Open **Pages**.
3. Set **Source** to **Deploy from a branch**.
4. Set **Branch** to **main**.
5. Set **Folder** to **/docs**.
6. Save and open:

```text
https://emtrivino.github.io/orchestra/
```
