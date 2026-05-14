export const basePath = process.env.SITE_BASE_PATH ?? "/orchestra";
export const siteUrl = "https://emtrivino.github.io/orchestra";

const normalizedBase = basePath === "/" ? "" : basePath.replace(/\/$/, "");

export function withBase(path = "/") {
  if (/^https?:\/\//.test(path) || path.startsWith("mailto:") || path.startsWith("#")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (!normalizedBase) {
    return normalizedPath;
  }

  return `${normalizedBase}${normalizedPath}`;
}

export function canonicalUrl(route = "/") {
  const normalizedRoute = route === "/" ? "" : route.replace(/\/$/, "");
  return `${siteUrl}${normalizedRoute}/`;
}
