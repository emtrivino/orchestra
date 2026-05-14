import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { basePath } from "../src/config.mjs";

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8"
};

const normalizedBase = basePath === "/" ? "" : basePath.replace(/\/$/, "");

async function resolveFile(pathname) {
  let urlPath = pathname;

  if (normalizedBase && urlPath === "/") {
    return { redirect: `${normalizedBase}/` };
  }

  if (normalizedBase && urlPath.startsWith(`${normalizedBase}/`)) {
    urlPath = urlPath.slice(normalizedBase.length) || "/";
  }

  let file = normalize(join("dist", urlPath));
  if (urlPath.endsWith("/")) {
    file = join(file, "index.html");
  }

  const fileStat = await stat(file).catch(() => null);
  if (fileStat?.isFile()) {
    return { file };
  }

  const directoryIndex = join("dist", urlPath, "index.html");
  const indexStat = await stat(directoryIndex).catch(() => null);
  if (indexStat?.isFile()) {
    return { file: directoryIndex };
  }

  return { file: "dist/404.html", status: 404 };
}

export function startServer({ port = 3000, label = "preview" } = {}) {
  const server = createServer(async (req, res) => {
    try {
      const pathname = new URL(req.url || "/", "http://localhost").pathname;
      const result = await resolveFile(pathname);

      if (result.redirect) {
        res.writeHead(302, { location: result.redirect });
        res.end();
        return;
      }

      const data = await readFile(result.file);
      res.writeHead(result.status ?? 200, {
        "content-type": contentTypes[extname(result.file)] || "application/octet-stream"
      });
      res.end(data);
    } catch {
      res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
      res.end("Internal server error");
    }
  });

  server.listen(port, () => {
    console.log(`Asker Symfoniorkester ${label}: http://localhost:${port}${normalizedBase || ""}/`);
  });

  return server;
}
