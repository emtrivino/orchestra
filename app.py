from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse

from views import (
    about_page,
    concert_detail_page,
    concerts_page,
    contact_page,
    home_page,
    join_page,
    news_page,
    not_found_page,
    repertoire_page,
)

HOST = "127.0.0.1"
PORT = 5000
BASE_DIR = Path(__file__).parent
STATIC_DIR = (BASE_DIR / "static").resolve()


class OrchestraHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        parsed_path = urlparse(path).path
        if parsed_path.startswith("/static/"):
            relative_path = unquote(parsed_path.removeprefix("/static/"))
            requested_path = (STATIC_DIR / relative_path).resolve()
            if STATIC_DIR in requested_path.parents or requested_path == STATIC_DIR:
                return str(requested_path)
            return str(STATIC_DIR / "missing-file")
        return str(BASE_DIR)

    def do_GET(self):
        parsed_path = urlparse(self.path).path
        if parsed_path.startswith("/static/"):
            return super().do_GET()

        page, status = route(parsed_path)
        self.send_response(status)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.end_headers()
        self.wfile.write(page.encode("utf-8"))


def route(path):
    routes = {
        "/": home_page,
        "/konserter/": concerts_page,
        "/om-oss/": about_page,
        "/bli-med/": join_page,
        "/aktuelt/": news_page,
        "/kontakt/": contact_page,
        "/repertoar/": repertoire_page,
    }

    if path in routes:
        return routes[path](), 200

    if path.startswith("/konserter/") and path.endswith("/"):
        slug = path.removeprefix("/konserter/").removesuffix("/")
        page = concert_detail_page(slug)
        if page is not None:
            return page, 200

    return not_found_page(), 404


def main():
    server = ThreadingHTTPServer((HOST, PORT), OrchestraHandler)
    print(f"Servidor listo en http://{HOST}:{PORT}")
    print("Presiona Ctrl+C para detenerlo.")
    server.serve_forever()


if __name__ == "__main__":
    main()
