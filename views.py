from html import escape

from data import ABOUT, BOARD, CONCERT, CONTACT_EMAIL, FACEBOOK_URL, HERO_IMAGE, JOIN_TEXT, NAVIGATION


def e(value):
    return escape(str(value), quote=True)


def static_path(filename):
    return f"/static/{filename}"


def nav_html():
    links = "".join(f'<a href="{e(url)}">{e(label)}</a>' for label, url in NAVIGATION)
    return f'<a class="brand" href="/">Asker Symfoniorkester</a><div class="nav-links">{links}</div>'


def layout(title, content, preload_image=False):
    return f"""<!doctype html>
<html lang="no">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{e(title)} · Asker Symfoniorkester</title>
  <meta name="description" content="Página simple y liviana de Asker Symfoniorkester.">
  <link rel="icon" href="{static_path('favicon.svg')}" type="image/svg+xml">
  {f'<link rel="preload" href="{static_path(HERO_IMAGE["src"])}" as="image">' if preload_image else ''}
  <link rel="stylesheet" href="{static_path('styles.css')}">
</head>
<body>
  <header class="site-header"><nav class="nav container">{nav_html()}</nav></header>
  <main>{content}</main>
  <footer class="site-footer"><div class="container footer-content"><span>Asker Symfoniorkester</span><a href="mailto:{e(CONTACT_EMAIL)}">{e(CONTACT_EMAIL)}</a><a href="{e(FACEBOOK_URL)}" rel="noopener">Facebook</a></div></footer>
</body>
</html>"""


def button(url, label, extra_class=""):
    return f'<a class="button {extra_class}" href="{e(url)}" rel="noopener">{e(label)}</a>'


def page_header(kicker, title, text):
    return f'<section class="page-header container"><p class="kicker">{e(kicker)}</p><h1>{e(title)}</h1><p>{e(text)}</p></section>'


def home_page():
    facts = "".join(f"<li>{e(fact)}</li>" for fact in ABOUT["facts"])
    content = f"""
<section class="hero container">
  <div class="hero-copy">
    <p class="kicker">Asker · música local</p>
    <h1>Orquesta simple, cercana y viva.</h1>
    <p>{e(ABOUT['text'])}</p>
    <div class="actions">{button('/konsert/', 'Ver concierto')}{button('/kontakt/', 'Contacto', 'secondary')}</div>
  </div>
  <img class="hero-image" src="{static_path(HERO_IMAGE['src'])}" alt="{e(HERO_IMAGE['alt'])}" width="{HERO_IMAGE['width']}" height="{HERO_IMAGE['height']}" fetchpriority="high">
</section>
<section class="container summary-grid">
  <article class="card">
    <p class="kicker">Próximo concierto</p>
    <h2>{e(CONCERT['title'])}</h2>
    <p>{e(CONCERT['date'])} · kl. {e(CONCERT['time'])} · {e(CONCERT['venue'])}</p>
    {button('/konsert/', 'Detalles')}
  </article>
  <article class="card light-card">
    <p class="kicker">Resumen</p>
    <h2>{e(ABOUT['title'])}</h2>
    <ul class="fact-list">{facts}</ul>
  </article>
</section>
"""
    return layout("Inicio", content, preload_image=True)


def concert_page():
    programme = "".join(f"<li>{e(item)}</li>" for item in CONCERT["programme"])
    soloists = "".join(f"<li>{e(item)}</li>" for item in CONCERT["soloists"])
    content = page_header("Concierto", CONCERT["title"], CONCERT["description"])
    content += f"""<section class="container summary-grid">
  <article class="card"><h2>Información</h2><p><strong>{e(CONCERT['date'])}</strong><br>kl. {e(CONCERT['time'])}<br>{e(CONCERT['venue'])}<br>Dirigent: {e(CONCERT['conductor'])}</p>{button(CONCERT['ticket_url'], 'Comprar billetes')}</article>
  <article class="card light-card"><h2>Programa</h2><ul>{programme}</ul><h2>Solistas</h2><ul>{soloists}</ul></article>
</section>"""
    return layout("Concierto", content)


def join_page():
    content = page_header("Unirse", "¿Quieres tocar con nosotros?", JOIN_TEXT)
    content += f'<section class="container one-card"><article class="card"><p>Ensayamos los martes en Asker. Envíanos un mensaje con tu instrumento y experiencia.</p>{button("mailto:" + CONTACT_EMAIL + "?subject=Jeg%20vil%20bli%20med", "Enviar e-mail")}</article></section>'
    return layout("Unirse", content)


def contact_page():
    board = "".join(f"<div><dt>{e(role)}</dt><dd>{e(name)}</dd></div>" for role, name in BOARD)
    content = page_header("Contacto", "Escríbenos", "Para preguntas sobre conciertos, colaboración o membresía.")
    content += f'<section class="container summary-grid"><article class="card"><h2>Email</h2><p><a href="mailto:{e(CONTACT_EMAIL)}">{e(CONTACT_EMAIL)}</a></p>{button("mailto:" + CONTACT_EMAIL, "Enviar mensaje")}</article><article class="card light-card"><h2>Styret</h2><dl class="board-list">{board}</dl></article></section>'
    return layout("Contacto", content)


def not_found_page():
    return layout("404", page_header("404", "Página no encontrada", "La dirección no existe.") + '<section class="container one-card"><a class="button" href="/">Volver al inicio</a></section>')
