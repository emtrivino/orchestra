# GitHub Pages setup checklist

This repository is ready to deploy the generated static website to:

```text
https://emtrivino.github.io/orchestra/
```

## Required repository settings

1. Go to **Settings → Actions → General**.
2. Select **Allow all actions and reusable workflows**.
3. Click **Save** if the button is enabled.
4. Go to **Settings → Pages**.
5. Under **Build and deployment → Source**, select **GitHub Actions**.

## Required branch state

The `main` branch must contain this file:

```text
.github/workflows/deploy.yml
```

If the workflow does not appear in the **Actions** tab, it usually means the latest `main` branch on GitHub does not yet include `.github/workflows/deploy.yml`.

## Deploy

After `main` contains `.github/workflows/deploy.yml`:

1. Go to **Actions**.
2. Open **Deploy to GitHub Pages**.
3. Click **Run workflow**.
4. Select branch **main**.
5. Wait for the run to finish green.
6. Open `https://emtrivino.github.io/orchestra/`.

## If an old pull request has conflicts

Close the old conflicted pull request and delete its branch. Do not resolve generated `dist/` conflicts manually in GitHub. The correct source of truth is the `main` branch with the workflow and build scripts.
