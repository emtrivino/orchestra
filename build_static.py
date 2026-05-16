"""Generate the static files used by GitHub Pages.

The local Python server keeps absolute /static/ asset URLs so nested test routes work.
For GitHub Pages this script generates pages with repo-relative static/ URLs, which
works both on a custom domain and on project pages such as /orchestra/.
"""
import argparse
import shutil
from pathlib import Path

import views

ROOT = Path(__file__).parent
STATIC_DIR = ROOT / "static"

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


def copy_static_assets(output_dir):
    target = output_dir / "static"
    if target.exists():
        shutil.rmtree(target)
    shutil.copytree(STATIC_DIR, target)


def build(output_dir=ROOT):
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    views.ASSET_PREFIX = "static/"

    write_text(output_dir / "index.html", views.home_page())
    write_text(output_dir / ".nojekyll", "")
    for route, anchor in REDIRECTS.items():
        depth = len(Path(route).parts)
        write_text(output_dir / route / "index.html", redirect_page(anchor, depth))
    write_text(output_dir / "404.html", redirect_page("orquesta", 0))

    if output_dir.resolve() != ROOT.resolve():
        copy_static_assets(output_dir)


def parse_args():
    parser = argparse.ArgumentParser(description="Build the static GitHub Pages site.")
    parser.add_argument(
        "--output",
        default=str(ROOT),
        help="Output directory for the static site. Defaults to the repository root.",
    )
    return parser.parse_args()


if __name__ == "__main__":
    args = parse_args()
    build(args.output)
