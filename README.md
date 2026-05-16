# Asker Symfoniorkester – static GitHub Pages site

This repository contains a lightweight, fully static website for **Asker Symfoniorkester**. It is designed to work directly on GitHub Pages without Python, Flask, Node, npm, or any build step.

The current site focuses on **Sommerkonsert 2026** and the essential sections:

- Home
- Sommerkonsert 2026
- Join the orchestra / Bli med
- Contact / Kontakt

## Project structure

```text
docs/
  index.html              # Static website entry point used by GitHub Pages
  static/
    styles.css            # Site styling
    favicon.svg           # Site icon
    images/               # Optimized, essential image assets
```

## GitHub Pages setup

To publish the website at `https://emtrivino.github.io/orchestra/`, configure GitHub Pages like this:

1. Go to the repository on GitHub.
2. Open **Settings**.
3. Open **Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Set **Branch** to **main**.
6. Set **Folder** to **/docs**.
7. Click **Save**.

After GitHub Pages finishes deploying, the website should be available at:

```text
https://emtrivino.github.io/orchestra/
```

## Local preview

No server is required. You can open the site directly in a browser:

```text
docs/index.html
```

Because all asset paths are relative, the same files work both when opened locally and when served under the GitHub Pages project path `/orchestra/`.

## Editing content

Edit the website directly in `docs/index.html`. Edit visual styles in `docs/static/styles.css`. Keep links and assets relative unless linking to an external website.
