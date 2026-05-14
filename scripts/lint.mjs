import { pages } from "../src/render.mjs";
const rendered = pages();
const failures = [];
for (const [route, html] of rendered) {
  if (!html.includes("<title>")) failures.push(`${route}: missing title`);
  if (!html.includes("<meta name=\"description\"")) failures.push(`${route}: missing meta description`);
  if (html.includes("undefined")) failures.push(`${route}: contains undefined`);
}
if (failures.length) { console.error(failures.join("\n")); process.exit(1); }
console.log(`Linted ${rendered.length} rendered pages`);
