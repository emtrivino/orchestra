import { cp, copyFile, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { pages } from "../src/render.mjs";
import { siteUrl } from "../src/data/site.mjs";

const outputDirs = ["dist", "docs"];
const renderedPages = pages();

for (const outputDir of outputDirs) {
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });
  await copyFile("src/styles.css", join(outputDir, "styles.css"));
  await copyFile("public/favicon.svg", join(outputDir, "favicon.svg"));
  await cp("public/images", join(outputDir, "images"), { recursive: true });

  for (const [route, html] of renderedPages) {
    const file = route === "/" ? join(outputDir, "index.html") : join(outputDir, route, "index.html");
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html);
  }

  await writeFile(
    join(outputDir, "robots.txt"),
    `User-agent: *\nAllow: /orchestra/\nSitemap: ${siteUrl}/sitemap.xml\n`,
  );
  await writeFile(
    join(outputDir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${renderedPages
      .map(([route]) => `<url><loc>${siteUrl}${route === "/" ? "/" : route.slice(0)}</loc></url>`)
      .join("")}</urlset>`,
  );
}

console.log(`Built ${renderedPages.length} pages to ${outputDirs.join(" and ")}/`);
