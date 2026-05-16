from html import escape

from data import ABOUT, BOARD, CONCERT, CONTACT_EMAIL, FACEBOOK_URL, GALLERY_IMAGES, HERO_IMAGE, JOIN_TEXT, NAVIGATION, VIDEOS


def e(value):
    return escape(str(value), quote=True)


ASSET_PREFIX = "/static/"


def static_path(filename):
    return f"{ASSET_PREFIX}{filename}"


def nav_html():
    links = "".join(f'<a href="{e(url)}">{e(label)}</a>' for label, url in NAVIGATION)
    return f'<a class="brand" href="#orquesta">Asker Symfoniorkester</a><div class="nav-links">{links}</div>'


def layout(title, content, preload_image=False):
    return f"""<!doctype html>
<html lang="es">
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


def image_carousel():
    slides = "".join(
        f'<figure class="carousel-slide slide-{index}"><img src="{static_path(image["src"])}" alt="{e(image["alt"])}"><figcaption>{e(image["alt"])}</figcaption></figure>'
        for index, image in enumerate(GALLERY_IMAGES, start=1)
    )
    dots = "".join(f"<span></span>" for _ in GALLERY_IMAGES)
    return f'<div class="image-carousel" aria-label="Imágenes de la orquesta">{slides}<div class="carousel-dots">{dots}</div></div>'


def videos_section():
    videos = "".join(
        f"""<article class="video-card">
  <iframe src="{e(video['embed'])}" title="{e(video['title'])}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <p>{e(video['title'])}</p>
</article>"""
        for video in VIDEOS
    )
    return f"""<section id="videos" class="container section-block videos-section">
  <div class="section-heading">
    <p class="kicker">Videos</p>
    <h2>Presentaciones</h2>
    <p>Un vistazo liviano a la orquesta en acción, sin agregar otro botón al menú.</p>
  </div>
  <div class="video-grid">{videos}</div>
</section>"""


def home_page():
    facts = "".join(f"<li>{e(fact)}</li>" for fact in ABOUT["facts"])
    programme = "".join(f"<li>{e(item)}</li>" for item in CONCERT["programme"])
    soloists = "".join(f"<li>{e(item)}</li>" for item in CONCERT["soloists"])
    board = "".join(f"<div><dt>{e(role)}</dt><dd>{e(name)}</dd></div>" for role, name in BOARD)
    content = f"""
<section id="orquesta" class="hero container">
  <div class="hero-copy">
    <p class="kicker">Asker · música local</p>
    <h1>Asker Symfoniorkester</h1>
    <p>{e(ABOUT['text'])}</p>
    <div class="actions">{button('#concert', 'Concert')}{button('#contacto', 'Contacto', 'secondary')}</div>
  </div>
  {image_carousel()}
</section>
<section class="container summary-grid intro-grid">
  <article class="card color-card">
    <p class="kicker">La orquesta</p>
    <h2>{e(ABOUT['title'])}</h2>
    <ul class="fact-list">{facts}</ul>
  </article>
  <article class="card light-card">
    <p class="kicker">Historia</p>
    <h2>Desde 1972</h2>
    <p>{e(ABOUT['history'])}</p>
    <p>{e(ABOUT['salon'])}</p>
  </article>
</section>
<section id="concert" class="container section-block concert-panel">
  <div class="section-heading">
    <p class="kicker">Concert</p>
    <h2>{e(CONCERT['title'])}</h2>
    <p>{e(CONCERT['description'])}</p>
  </div>
  <div class="summary-grid">
    <article class="card"><h3>Información</h3><p><strong>{e(CONCERT['date'])}</strong><br>kl. {e(CONCERT['time'])}<br>{e(CONCERT['venue'])}<br>Dirigent: {e(CONCERT['conductor'])}</p>{button(CONCERT['ticket_url'], 'Comprar billetes')}</article>
    <article class="card light-card"><h3>Programa</h3><ul>{programme}</ul><h3>Solistas</h3><ul>{soloists}</ul></article>
  </div>
</section>
{videos_section()}
<section id="unirse" class="container summary-grid section-block">
  <article class="card color-card"><p class="kicker">Unirse</p><h2>¿Quieres tocar con nosotros?</h2><p>{e(JOIN_TEXT)}</p><p>{e(ABOUT['rehearsal'])}</p>{button('mailto:' + CONTACT_EMAIL + '?subject=Jeg%20vil%20bli%20med', 'Enviar e-mail')}</article>
  <article id="contacto" class="card"><p class="kicker">Contacto</p><h2>Escríbenos</h2><p><a href="mailto:{e(CONTACT_EMAIL)}">{e(CONTACT_EMAIL)}</a></p><dl class="board-list">{board}</dl></article>
</section>
"""
    return layout("Inicio", content, preload_image=True)


def concert_page():
    return home_page()


def join_page():
    return home_page()


def contact_page():
    return home_page()


def not_found_page():
    return layout("404", page_header("404", "Página no encontrada", "La dirección no existe.") + '<section class="container one-card"><a class="button" href="/#orquesta">Volver al inicio</a></section>')
