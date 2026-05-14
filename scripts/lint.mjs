import { pages } from "../src/render.mjs";

const rendered = pages();
const failures = [];

for (const [route, html] of rendered) {
  if (!html.includes("<title>")) failures.push(`${route}: missing title`);
  if (!html.includes("<meta name=\"description\"")) failures.push(`${route}: missing meta description`);
  if (html.includes("undefined")) failures.push(`${route}: contains undefined`);

  if (html.includes("<form")) {
    if (!html.includes('action="mailto:post@askersymfoniorkester.no')) {
      failures.push(`${route}: form is missing mailto action`);
    }
    if (!html.includes('method="post"')) {
      failures.push(`${route}: form is missing post method`);
    }
    if (!html.includes('enctype="text/plain"')) {
      failures.push(`${route}: form is missing text/plain enctype`);
    }
    if (html.includes('type="button" class="btn">Send melding')) {
      failures.push(`${route}: form submit button is still type=button`);
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log(`Linted ${rendered.length} rendered pages`);
