from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse

from views import concert_page, contact_page, home_page, join_page, not_found_page

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
            if requested_path == STATIC_DIR or STATIC_DIR in requested_path.parents:
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
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(page.encode("utf-8"))

    def end_headers(self):
        if urlparse(self.path).path.startswith("/static/"):
            self.send_header("Cache-Control", "public, max-age=86400")
        super().end_headers()


def route(path):
    routes = {
        "/": home_page,
        "/konsert/": concert_page,
        "/konserter/": concert_page,
        "/konserter/sommerkonsert-asker-kulturskole/": concert_page,
        "/bli-med/": join_page,
        "/kontakt/": contact_page,
    }
    page_builder = routes.get(path)
    if page_builder:
        return page_builder(), 200
    return not_found_page(), 404


def main():
    server = ThreadingHTTPServer((HOST, PORT), OrchestraHandler)
    print(f"Servidor listo en http://{HOST}:{PORT}")
    print("Presiona Ctrl+C para detenerlo.")
    server.serve_forever()


if __name__ == "__main__":
    main()
