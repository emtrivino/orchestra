# GitHub Pages setup checklist

This repository is ready to deploy the generated static website to:

```text
https://emtrivino.github.io/orchestra/
```

## Recommended option: GitHub Actions

1. Go to **Settings → Actions → General**.
2. Select **Allow all actions and reusable workflows**.
3. Click **Save** if the button is enabled.
4. Go to **Settings → Pages**.
5. Under **Build and deployment → Source**, select **GitHub Actions**.
6. Go to **Actions**.
7. Open **Deploy to GitHub Pages**.
8. Click **Run workflow**.
9. Select branch **main**.
10. Wait for the run to finish green.
11. Open `https://emtrivino.github.io/orchestra/`.

## If the workflow does not appear

The `main` branch on GitHub must contain this file:

```text
.github/workflows/deploy.yml
```

If the workflow still does not appear after pushing `main`, use the fallback option below.

## Fallback option: deploy from `/docs`

The build script mirrors the generated website to both `dist/` and `docs/`.

If GitHub Actions is confusing or unavailable:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **Deploy from a branch**.
3. Under **Branch**, choose:
   - Branch: `main`
   - Folder: `/docs`
4. Click **Save**.
5. Wait a few minutes.
6. Open `https://emtrivino.github.io/orchestra/`.

Do **not** choose `main` + `/(root)` unless root files are intentionally configured for publishing. This project publishes from GitHub Actions (`dist`) or from `main` + `/docs`.

## If an old pull request has conflicts

Close the old conflicted pull request and delete its branch. Do not resolve generated `dist/` or `docs/` conflicts manually in GitHub. The correct source of truth is the `main` branch with the workflow and build scripts.
