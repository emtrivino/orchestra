import { copyFile, cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { canonicalUrl } from "../src/config.mjs";
import { pages } from "../src/render.mjs";

const renderedPages = pages();

await rm("dist", { recursive: true, force: true });
await rm("docs", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await copyFile("src/styles.css", "dist/styles.css");
await copyFile("public/favicon.svg", "dist/favicon.svg");

for (const [route, html] of renderedPages) {
  const file = route === "/" ? "dist/index.html" : join("dist", route, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}

const notFoundHtml = renderedPages.find(([route]) => route === "/")?.[1] ?? "Not found";
await writeFile("dist/404.html", notFoundHtml);
await writeFile("dist/.nojekyll", "");
await writeFile("dist/robots.txt", "User-agent: *\nAllow: /\nSitemap: https://emtrivino.github.io/orchestra/sitemap.xml\n");
await writeFile(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${renderedPages
    .map(([route]) => `\n  <url><loc>${canonicalUrl(route)}</loc></url>`)
    .join("")}\n</urlset>\n`
);

// GitHub Pages can deploy the `dist` artifact through Actions. We also mirror
// the exact same generated site to `docs/` so the repository can be published
// from Settings → Pages → Deploy from a branch → main → /docs if Actions is not
// visible or not available yet.
await cp("dist", "docs", { recursive: true });

console.log(`Built ${renderedPages.length} pages to dist/ and docs/`);
