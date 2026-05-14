import { mkdir, rm, writeFile, copyFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { pages } from "../src/render.mjs";
await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await copyFile("src/styles.css", "dist/styles.css");
await copyFile("public/favicon.svg", "dist/favicon.svg");
for (const [route, html] of pages()) {
  const file = route === "/" ? "dist/index.html" : join("dist", route, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
}
await writeFile("dist/robots.txt", "User-agent: *\nAllow: /\nSitemap: https://askersymfoniorkester.no/sitemap.xml\n");
await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages().map(([route])=>`<url><loc>https://askersymfoniorkester.no${route}</loc></url>`).join("")}</urlset>`);
console.log(`Built ${pages().length} pages to dist/`);
