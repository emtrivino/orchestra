from html import escape

from data import (
    ABOUT_SECTIONS,
    BOARD,
    CONCERTS,
    CONTACT_EMAIL,
    FACEBOOK_URL,
    FACTS,
    FRONT_IMAGES,
    NAVIGATION,
    NEWS,
    REPERTOIRE,
    SECTIONS,
)


def e(value):
    return escape(str(value), quote=True)


def static_path(filename):
    return f"/static/{filename}"


def nav_html():
    links = "".join(f'<a href="{url}">{e(label)}</a>' for label, url in NAVIGATION)
    return f'<a class="brand" href="/">Asker Symfoniorkester</a><div class="nav-links">{links}</div>'


def layout(title, content):
    return f"""<!doctype html>
<html lang="no">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{e(title)} · Asker Symfoniorkester</title>
  <meta name="description" content="En enkel side for Asker Symfoniorkester med konserter, medlemsinfo og kontakt.">
  <link rel="icon" href="{static_path('favicon.svg')}" type="image/svg+xml">
  <link rel="stylesheet" href="{static_path('styles.css')}">
</head>
<body>
  <header class="site-header"><nav class="nav container" aria-label="Hovedmeny">{nav_html()}</nav></header>
  <main>{content}</main>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div><strong>Asker Symfoniorkester</strong><p>Et lokalt orkesterfellesskap for unge og voksne amatørmusikere.</p></div>
      <div><strong>Kontakt</strong><p><a href="mailto:{e(CONTACT_EMAIL)}">{e(CONTACT_EMAIL)}</a></p></div>
      <div><strong>Sosialt</strong><p><a href="{e(FACEBOOK_URL)}" rel="noopener">Facebook</a></p></div>
    </div>
  </footer>
</body>
</html>"""


def button(url, label, extra_class=""):
    return f'<a class="button {extra_class}" href="{e(url)}" rel="noopener">{e(label)}</a>'


def plain_list(items):
    return "<ul>" + "".join(f"<li>{e(item)}</li>" for item in items) + "</ul>"


def page_hero(kicker, title, lead):
    return f"""<section class="page-hero container">
  <p class="kicker">{e(kicker)}</p>
  <h1>{e(title)}</h1>
  <p class="lead">{e(lead)}</p>
</section>"""


def home_page():
    concert = CONCERTS[0]
    facts = "".join(f"<div><strong>{e(value)}</strong><span>{e(label)}</span></div>" for value, label in FACTS)
    gallery = "".join(f'<img src="{static_path(src)}" alt="{e(alt)}">' for src, alt in FRONT_IMAGES)
    content = f"""
<section class="hero container">
  <div class="hero-text">
    <p class="kicker">Asker · siden 1972</p>
    <h1>Musikk som puster med byen.</h1>
    <p class="lead">Asker Symfoniorkester samler generasjoner av amatørmusikere rundt store konsertopplevelser.</p>
    <div class="actions">{button('/konserter/', 'Se konserter')}{button('/bli-med/', 'Bli med', 'secondary')}</div>
  </div>
  <div class="hero-image-card"><img src="{static_path(FRONT_IMAGES[0][0])}" alt="{e(FRONT_IMAGES[0][1])}"></div>
</section>
<section class="container section-grid">
  <article class="card large-card">
    <p class="kicker">{e(concert['type'])}</p>
    <h2>{e(concert['title'])}</h2>
    <p>{e(concert['description'])}</p>
    <ul class="plain-list"><li><strong>Dato:</strong> {e(concert['date'])}</li><li><strong>Tid:</strong> kl. {e(concert['time'])}</li><li><strong>Sted:</strong> {e(concert['venue'])}</li></ul>
    {button('/konserter/' + concert['slug'] + '/', 'Les mer')}
  </article>
  <aside class="card facts-card"><p class="kicker">Kort fortalt</p><div class="facts">{facts}</div></aside>
</section>
<section class="container gallery" aria-label="Bilder fra orkesteret">{gallery}</section>
"""
    return layout("Asker Symfoniorkester", content)


def concerts_page():
    cards = "".join(
        f"""<article class="card"><p class="kicker">{e(concert['type'])}</p><h2>{e(concert['title'])}</h2><p>{e(concert['description'])}</p><ul class="plain-list"><li>{e(concert['date'])} · kl. {e(concert['time'])}</li><li>{e(concert['venue'])}</li></ul>{button('/konserter/' + concert['slug'] + '/', 'Detaljer')}</article>"""
        for concert in CONCERTS
    )
    return layout("Konserter", page_hero("Program", "Konserter", "Her viser vi bekreftede konserter med praktisk informasjon og billetter.") + f'<section class="container cards">{cards}</section>')


def concert_detail_page(slug):
    concert = next((item for item in CONCERTS if item["slug"] == slug), None)
    if concert is None:
        return None
    content = page_hero(concert["type"], concert["title"], f"{concert['date']} · kl. {concert['time']} · {concert['venue']}")
    content += f"""<section class="container section-grid">
  <article class="card"><h2>Program</h2>{plain_list(concert['programme'])}<h2>Solister</h2>{plain_list(concert['soloists'])}</article>
  <aside class="card dark-card"><h2>Praktisk</h2><p><strong>Dirigent:</strong> {e(concert['conductor'])}</p><p><strong>Sted:</strong> {e(concert['venue'])}</p><p><strong>Tid:</strong> {e(concert['date'])} kl. {e(concert['time'])}</p>{button(concert['ticket_url'], 'Kjøp billetter', 'inverted')}</aside>
</section>"""
    return layout(concert["title"], content)


def about_page():
    facts = "".join(f"<div><strong>{e(value)}</strong><span>{e(label)}</span></div>" for value, label in FACTS)
    cards = "".join(
        f"<article class='card'><h2>{e(section['title'])}</h2>{''.join(f'<p>{e(paragraph)}</p>' for paragraph in section['text'])}</article>"
        for section in ABOUT_SECTIONS
    )
    content = page_hero("Orkesteret", "Om oss", "Askers symfoniorkester for unge og voksne amatørmusikere.")
    content += f'<section class="container facts wide">{facts}</section><section class="container cards">{cards}</section>'
    return layout("Om oss", content)


def join_page():
    tags = "".join(f"<span>{e(section)}</span>" for section in SECTIONS)
    content = page_hero("Rekruttering", "Bli med", "Har du lyst til å spille symfonisk musikk i et varmt og ambisiøst fellesskap?")
    content += f"""<section class="container section-grid">
  <article class="card"><h2>Hvem søker vi?</h2><p>Vi ønsker nye musikere på godt amatørnivå. Særlig stryk, treblås, messing og slagverk er velkommen til å ta kontakt.</p><div class="tag-list">{tags}</div></article>
  <aside class="card dark-card"><h2>Kontakt oss</h2><p>Fortell kort hva du spiller og hvilken erfaring du har.</p>{button('mailto:' + CONTACT_EMAIL + '?subject=Jeg%20vil%20bli%20med', 'Send e-post', 'inverted')}</aside>
</section>"""
    return layout("Bli med", content)


def news_page():
    cards = ""
    for title, date, text, url in NEWS:
        link = f'<a class="text-link" href="{e(url)}" rel="noopener">Les mer</a>' if url else ""
        cards += f'<article class="card"><p class="kicker">{e(date)}</p><h2>{e(title)}</h2><p>{e(text)}</p>{link}</article>'
    content = page_hero("Nyheter", "Aktuelt", "Små oppdateringer fra konserter, prøver og lokalt musikkliv.") + f'<section class="container cards">{cards}</section>'
    return layout("Aktuelt", content)


def contact_page():
    board = "".join(f"<div><dt>{e(role)}</dt><dd>{e(name)}</dd></div>" for role, name in BOARD)
    content = page_hero("Kontakt", "Kontakt oss", "Send oss gjerne en e-post hvis du har spørsmål om konserter, medlemskap eller samarbeid.")
    content += f"""<section class="container section-grid">
  <article class="card dark-card"><h2>E-post</h2><p><a href="mailto:{e(CONTACT_EMAIL)}">{e(CONTACT_EMAIL)}</a></p>{button('mailto:' + CONTACT_EMAIL, 'Skriv til oss', 'inverted')}</article>
  <aside class="card"><h2>Styret</h2><dl class="board-list">{board}</dl></aside>
</section>"""
    return layout("Kontakt", content)


def repertoire_page():
    cards = "".join(f"<article class='card'><h2>{e(item)}</h2></article>" for item in REPERTOIRE)
    return layout("Repertoar", page_hero("Musikken", "Repertoar", "Fra nordiske klanger til klassiske hovedverk.") + f'<section class="container cards">{cards}</section>')


def not_found_page():
    return layout("Ikke funnet", page_hero("404", "Siden finnes ikke", "Sjekk adressen eller gå tilbake til forsiden.") + '<section class="container"><a class="button" href="/">Til forsiden</a></section>')
