"""Generate the static files used by GitHub Pages.

The local Python server keeps absolute /static/ asset URLs so nested test routes work.
For GitHub Pages we generate a root index.html with repo-relative static/ URLs, which
works both on a custom domain and on project pages such as /orchestra/.
"""
from pathlib import Path

import views

ROOT = Path(__file__).parent

REDIRECTS = {
    "konsert": "concert",
    "konserter": "concert",
    "konserter/sommerkonsert-asker-kulturskole": "concert",
    "bli-med": "unirse",
    "kontakt": "contacto",
}


def write_text(path, content):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def redirect_page(anchor, depth=1):
    target = f"{'../' * depth}index.html#{anchor}"
    return f"""<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="refresh" content="0; url={target}">
  <title>Redirigiendo · Asker Symfoniorkester</title>
</head>
<body>
  <p>Redirigiendo a <a href="{target}">Asker Symfoniorkester</a>.</p>
</body>
</html>
"""


def build():
    views.ASSET_PREFIX = "static/"
    write_text(ROOT / "index.html", views.home_page())
    write_text(ROOT / ".nojekyll", "")
    for route, anchor in REDIRECTS.items():
        depth = len(Path(route).parts)
        write_text(ROOT / route / "index.html", redirect_page(anchor, depth))
    write_text(ROOT / "404.html", redirect_page("orquesta", 0))


if __name__ == "__main__":
    build()
