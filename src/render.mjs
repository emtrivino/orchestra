import { basePath, concerts, contactEmail, facebookUrl, facts, heroImage, imageBaseUrl, nav, siteUrl } from "./data/site.mjs";

const esc = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const sitePath = (path) => `${basePath}${path}`;
const href = (path) => (path.startsWith("/") ? sitePath(path) : path);
const asset = (path) => (path.startsWith("/images/") ? `${imageBaseUrl}${path}` : sitePath(path));
const pageTitle = (title) => `${title} | Asker Symfoniorkester`;
const mailto = (subject = "Kontakt Asker Symfoniorkester") => `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}`;

function link(path, label, className = "") {
  return `<a${className ? ` class="${className}"` : ""} href="${href(path)}">${label}</a>`;
}

function shell(title, description, body) {
  return `<!doctype html>
<html lang="nb">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${pageTitle(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta property="og:title" content="${pageTitle(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${siteUrl}">
  <link rel="icon" href="${sitePath("/favicon.svg")}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,500;6..72,600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${sitePath("/styles.css")}">
</head>
<body>
  <header class="site-header">
    <nav class="container nav" aria-label="Hovednavigasjon">
      <a class="brand" href="${sitePath("/")}" aria-label="Asker Symfoniorkester hjem"><span class="brand-mark" aria-hidden="true">♪</span><span>Asker Symfoniorkester</span></a>
      <div class="nav-links">${nav.map(([label, path]) => link(path, label)).join("")}</div>
    </nav>
  </header>
  <main>${body}</main>
  ${footer()}
</body>
</html>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <a class="brand footer-brand" href="${sitePath("/")}"><span class="brand-mark" aria-hidden="true">♪</span><span>Asker Symfoniorkester</span></a>
        <p>Klassisk musikk, fellesskap og spilleglede i Asker siden 1972.</p>
      </div>
      <address>
        <strong>Kontakt</strong><br>
        <a href="mailto:${contactEmail}">${contactEmail}</a><br>
        <a href="${facebookUrl}" rel="noopener">Facebook</a><br>
        Asker, Norge
      </address>
    </div>
  </footer>`;
}

function subHero(kicker, title, text) {
  return `<section class="sub-hero"><div class="container narrow"><p class="kicker">${kicker}</p><h1>${title}</h1><p>${text}</p></div></section>`;
}

function simplePage(title, kicker, description, content) {
  return shell(title, description, `${subHero(kicker, title, description)}<section class="container section">${content}</section>`);
}

function imageTag(image) {
  return `<img src="${asset(image.src)}" width="${image.width}" height="${image.height}" alt="${esc(image.alt)}" decoding="async">`;
}

function concertMeta(concert) {
  return `<dl class="event-meta">
    <div><dt>Dato</dt><dd>${concert.displayDate}</dd></div>
    <div><dt>Tid</dt><dd>kl. ${concert.time}</dd></div>
    <div><dt>Sted</dt><dd>${concert.venue}</dd></div>
    <div><dt>Dirigent</dt><dd>${concert.conductor}</dd></div>
  </dl>`;
}

function concertCard(concert, featured = false) {
  return `<article class="event-card${featured ? " event-card-featured" : ""}">
    <div class="event-date"><span>7</span><small>juni 2026</small></div>
    <div class="event-content">
      <p class="kicker">${concert.type}</p>
      <h2>${concert.title}</h2>
      <p>${concert.desc}</p>
      ${concertMeta(concert)}
      <div class="actions">${concert.ticketUrl ? `<a class="button" href="${concert.ticketUrl}" rel="noopener">Billetter</a>` : ""}${link(`/konserter/${concert.slug}/`, "Detaljer", concert.ticketUrl ? "button secondary" : "button")}</div>
    </div>
  </article>`;
}

function joinPanel() {
  return `<section id="bli-med-kort" class="container section join-panel">
    <div>
      <p class="kicker">Bli med</p>
      <h2>Vil du spille med oss?</h2>
      <p>Vi ønsker nye strykere, blåsere og slagverkere velkommen til et varmt og ambisiøst orkestermiljø.</p>
    </div>
    <a class="button" href="${mailto("Bli med i Asker Symfoniorkester")}">Ta kontakt</a>
  </section>`;
}

function home() {
  const concert = concerts[0];
  return shell("Hjem", "Asker Symfoniorkester – klassisk musikk, fellesskap og spilleglede i Asker siden 1972.", `
    <section class="home-hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="kicker">Asker • symfonisk fellesskap</p>
          <h1>Asker Symfoniorkester</h1>
          <p class="lead">Klassisk musikk, fellesskap og spilleglede i Asker siden 1972.</p>
          <div class="actions"><a class="button" href="#sommerkonsert">Se sommerkonserten</a>${link("/bli-med/", "Bli med i orkesteret", "button secondary")}</div>
        </div>
        <figure class="hero-image">${imageTag(heroImage)}</figure>
      </div>
    </section>
    <section id="sommerkonsert" class="container section featured-concert">
      <div class="section-intro"><p class="kicker">Neste konsert</p><h2>Sommerkonsert 2026</h2></div>
      ${concertCard(concert, true)}
    </section>
    ${joinPanel()}`);
}

function concertsPage() {
  return simplePage("Konserter", "Sommerkonsert 2026", "Én tydelig konsert: Sommerkonsert med solister fra Asker kulturskole 7. juni 2026.", `<div class="event-list">${concerts.map((concert) => concertCard(concert, true)).join("")}</div>`);
}

function concertDetailPage(concert) {
  return simplePage(concert.title, concert.type, concert.desc, `<div class="detail-layout">
    <article class="panel">
      <p class="kicker">Konsert</p>
      <h2>${concert.title}</h2>
      <p>${concert.desc}</p>
      ${concertMeta(concert)}
      <div class="actions">${concert.ticketUrl ? `<a class="button" href="${concert.ticketUrl}" rel="noopener">Billetter</a>` : ""}${link("/kontakt/", "Kontakt oss", "button secondary")}</div>
    </article>
    <article class="panel quiet">
      <h2>Program og solister</h2>
      <h3>Program</h3>
      <ul>${concert.programme.map((work) => `<li>${esc(work)}</li>`).join("")}</ul>
      <h3>Solister</h3>
      <ul>${concert.soloists.map((soloist) => `<li>${esc(soloist)}</li>`).join("")}</ul>
    </article>
  </div>`);
}

function joinPage() {
  return simplePage("Bli med", "Rekruttering", "Nye musikere er velkommen i Asker Symfoniorkester.", `<div class="text-layout">
    <article class="panel">
      <h2>Vil du spille symfonisk musikk?</h2>
      <p>Vi ønsker nye strykere, blåsere og slagverkere velkommen til et varmt og ambisiøst orkestermiljø.</p>
      <p>Fortell kort hvilket instrument du spiller og litt om erfaringen din, så tar vi kontakt.</p>
      <a class="button" href="${mailto("Bli med i Asker Symfoniorkester")}">Send e-post</a>
    </article>
  </div>`);
}

function aboutPage() {
  return simplePage("Om oss", "Om orkesteret", "Asker Symfoniorkester er et lokalt symfoniorkester i Asker, stiftet i 1972.", `<div class="text-layout">
    <article class="panel">
      <h2>Et lokalt orkester i Asker</h2>
      <p>Asker Symfoniorkester er et lokalt symfoniorkester for musikere som vil spille klassisk musikk sammen i et godt fellesskap.</p>
      <p>Orkesteret har vært en del av musikklivet i Asker siden 1972. Vi arbeider seriøst, men med varm og inkluderende tone.</p>
    </article>
    <div class="fact-grid">${facts.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("")}</div>
  </div>`);
}

function contactPage() {
  return simplePage("Kontakt", "Kontakt", "Kontakt Asker Symfoniorkester på e-post eller Facebook.", `<div class="contact-grid">
    <article class="panel">
      <h2>Kontakt oss</h2>
      <p>Har du spørsmål om konserten, orkesteret eller medlemskap? Send oss gjerne en e-post.</p>
      <p><a href="mailto:${contactEmail}">${contactEmail}</a></p>
      <a class="button" href="${mailto()}">Send e-post</a>
    </article>
    <article class="panel quiet">
      <h2>Følg oss</h2>
      <p><a href="${facebookUrl}" rel="noopener">Facebook</a></p>
      <p>Asker, Norge</p>
    </article>
  </div>`);
}

export function pages() {
  const pagesOut = [
    ["/", home()],
    ["/konserter/", concertsPage()],
    ["/bli-med/", joinPage()],
    ["/om-oss/", aboutPage()],
    ["/kontakt/", contactPage()],
  ];

  for (const concert of concerts) {
    pagesOut.push([`/konserter/${concert.slug}/`, concertDetailPage(concert)]);
  }

  return pagesOut;
}
