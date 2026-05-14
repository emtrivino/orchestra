import { basePath, concerts, contactEmail, facebookUrl, facts, nav, news, partners, repertoire, sections, siteUrl, ticketUrl } from "./data/site.mjs";

const esc = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const sitePath = (path) => `${basePath}${path}`;
const href = (path) => (path.startsWith("/") ? sitePath(path) : path);
const fmt = (date, opts = { weekday: "long", day: "numeric", month: "long", year: "numeric" }) => new Intl.DateTimeFormat("nb-NO", opts).format(new Date(date));
const pageTitle = (title) => `${title} | Asker Symfoniorkester`;
const mailAction = `mailto:${contactEmail}`;

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
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,500;6..72,600;6..72,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${sitePath("/styles.css")}">
</head>
<body>
  <header class="site-header">
    <nav class="container nav" aria-label="Hovednavigasjon">
      <a class="brand" href="${sitePath("/")}" aria-label="Asker Symfoniorkester hjem"><span class="brand-mark">♪</span><span>Asker Symfoniorkester</span></a>
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
      <section>
        <a class="brand footer-brand" href="${sitePath("/")}"><span class="brand-mark">♪</span><span>Asker Symfoniorkester</span></a>
        <p>Klassisk musikk, fellesskap og spilleglede i Asker siden 1972.</p>
      </section>
      <section>
        <h2>Besøk</h2>
        <p>${link("/konserter/", "Konserter")}<br>${link("/sesongen/", "Sesongen")}<br>${link("/aktuelt/", "Aktuelt")}</p>
      </section>
      <section>
        <h2>Delta</h2>
        <p>${link("/bli-med/", "Bli med")}<br>${link("/stott-oss/", "Støtt oss")}<br>${link("/medlemmer/", "For medlemmer")}</p>
      </section>
      <section>
        <h2>Kontakt</h2>
        <p><a href="mailto:${contactEmail}">${contactEmail}</a><br><a href="${facebookUrl}">Facebook</a><br>Asker, Norge</p>
      </section>
    </div>
  </footer>`;
}

function sectionIntro(kicker, title, text = "") {
  return `<div class="section-intro"><p class="kicker">${kicker}</p><h2>${title}</h2>${text ? `<p>${text}</p>` : ""}</div>`;
}

function subHero(kicker, title, text) {
  return `<section class="sub-hero"><div class="container narrow"><p class="kicker">${kicker}</p><h1>${title}</h1><p>${text}</p></div></section>`;
}

function concertCard(concert, featured = false) {
  return `<article class="event-card${featured ? " event-card-featured" : ""}">
    <div class="event-date"><span>${fmt(concert.date, { day: "numeric", month: "short" })}</span><small>${fmt(concert.date, { year: "numeric" })}</small></div>
    <div class="event-content">
      <p class="kicker">${concert.type}</p>
      <h3>${concert.title}</h3>
      <p>${concert.desc}</p>
      <dl class="event-meta"><div><dt>Tid</dt><dd>kl. ${concert.time}</dd></div><div><dt>Sted</dt><dd>${concert.venue}</dd></div><div><dt>Dirigent</dt><dd>${concert.conductor}</dd></div></dl>
      <div class="actions"><a class="button" href="${ticketUrl}">Billetter</a>${link(`/konserter/${concert.slug}/`, "Les mer", "button ghost")}</div>
    </div>
  </article>`;
}

function contactForm(title, context = "Kontakt") {
  return `<form class="form-card" action="${mailAction}" method="post" enctype="text/plain">
    <h2>${title}</h2>
    <label for="name-${context}">Navn</label>
    <input id="name-${context}" name="navn" type="text" autocomplete="name" required>
    <label for="email-${context}">E-post</label>
    <input id="email-${context}" name="epost" type="email" autocomplete="email" required>
    <label for="subject-${context}">${context === "rekruttering" ? "Instrument" : "Tema"}</label>
    <input id="subject-${context}" name="tema" type="text" required>
    <label for="message-${context}">Melding</label>
    <textarea id="message-${context}" name="melding" rows="7" required></textarea>
    <button class="button" type="submit">Send melding</button>
    <p class="form-note">Skjemaet åpner e-postprogrammet ditt. Du kan også skrive direkte til <a href="mailto:${contactEmail}">${contactEmail}</a>.</p>
  </form>`;
}

function simplePage(title, kicker, description, content) {
  return shell(title, description, `${subHero(kicker, title, description)}<section class="container section">${content}</section>`);
}

function home() {
  const next = concerts[0];
  return shell("Hjem", "Asker Symfoniorkester – klassisk musikk, fellesskap og konsertopplevelser i Asker.", `
    <section class="home-hero">
      <div class="container hero-grid">
        <div>
          <p class="kicker">Asker • siden 1972</p>
          <h1>Symfonisk ro, kraft og fellesskap.</h1>
          <p class="hero-copy">Asker Symfoniorkester er et ambisiøst amatørorkester som skaper varme, nære og levende konsertopplevelser i Asker.</p>
          <div class="actions"><a class="button" href="#neste-konsert">Neste konsert</a>${link("/bli-med/", "Bli med", "button ghost")}</div>
        </div>
        <aside class="hero-note" aria-label="Neste konsert">
          <p class="kicker">Neste konsert</p>
          <h2>${next.title}</h2>
          <p>${fmt(next.date)} · kl. ${next.time}<br>${next.venue}</p>
          <a href="${sitePath(`/konserter/${next.slug}/`)}">Se konsertdetaljer</a>
        </aside>
      </div>
    </section>
    <section id="neste-konsert" class="container section">${sectionIntro("Neste konsert", "Sommerlys og unge solister", "Et åpent møte mellom unge talenter fra Asker kulturskole og orkesterets symfoniske klang.")}${concertCard(next, true)}</section>
    <section class="container section split"><div>${sectionIntro("Om orkesteret", "Et levende orkester med lokal forankring", "Vi samler engasjerte musikere til ukentlige prøver, store verk og konserter for publikum i Asker og omegn.")} ${link("/om-oss/", "Les mer om oss", "text-link")}</div><div class="fact-grid">${facts.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("")}</div></section>
    <section class="container section">${sectionIntro("Sesongen", "Kommende konserter", "En ren oversikt over sesongens konserter og konsertsteder.")}<div class="event-list">${concerts.slice(1).map((c) => concertCard(c)).join("")}</div></section>
    <section class="container section card-grid two"><article class="feature-card"><p class="kicker">Bli med</p><h2>Finn din plass i orkesteret.</h2><p>Vi ønsker nye strykere, blåsere og slagverkere velkommen til et varmt og ambisiøst miljø.</p>${link("/bli-med/", "Kontakt oss", "text-link")}</article><article class="feature-card"><p class="kicker">Støtt oss</p><h2>Bidra til levende musikkliv.</h2><p>Din støtte hjelper oss med noter, lokaler, solister og konserter for lokalsamfunnet.</p>${link("/stott-oss/", "Slik kan du støtte", "text-link")}</article></section>`);
}

export function pages() {
  const pagesOut = [["/", home()]];
  pagesOut.push(["/konserter/", simplePage("Konserter", "Program", "Kommende konserter med Asker Symfoniorkester.", `${sectionIntro("Oversikt", "Kommende konserter")}
    <div class="event-list">${concerts.map((c) => concertCard(c, c === concerts[0])).join("")}</div>`) ]);

  for (const c of concerts) {
    pagesOut.push([`/konserter/${c.slug}/`, simplePage(c.title, c.type, c.desc, `<div class="detail-layout">
      <article class="panel"><p class="kicker">Program</p><h2>Musikken</h2><ul>${c.programme.map((work) => `<li>${esc(work)}</li>`).join("")}</ul><p class="kicker">Solister</p><ul>${c.soloists.map((soloist) => `<li>${esc(soloist)}</li>`).join("")}</ul></article>
      <aside class="panel quiet"><h2>Praktisk informasjon</h2><p><strong>${fmt(c.date)}</strong><br>kl. ${c.time}<br>${c.venue}<br>Dirigent: ${c.conductor}</p><a class="button" href="${ticketUrl}">Billetter</a></aside>
    </div>`) ]);
  }

  pagesOut.push(["/sesongen/", simplePage("Sesongen", "2026/27", "En sesong med nærhet, klang og klassiske oppdagelser.", `<div class="timeline">${concerts.map((c) => `<article><time>${fmt(c.date, { day: "numeric", month: "long", year: "numeric" })}</time><h2>${c.title}</h2><p>${c.venue} · ${c.type}</p></article>`).join("")}</div>`) ]);
  pagesOut.push(["/om-oss/", simplePage("Om oss", "Historie", "Et levende symfoniorkester i Asker siden 1972.", `${sectionIntro("Identitet", "Spilleglede med symfoniske ambisjoner", "Orkesteret gir amatørmusikere en arena for utvikling, stort repertoar og konserter med lokal betydning.")}<div class="fact-grid wide">${facts.map(([v, l]) => `<div><strong>${v}</strong><span>${l}</span></div>`).join("")}</div><article class="panel"><p class="kicker">Dirigent</p><h2>Carl Nilsen</h2><p>Dirigenten leder orkesterets musikalske arbeid og skaper trygge rammer for ambisiøst amatørmusikalsk samspill.</p></article>`) ]);
  pagesOut.push(["/musikere/", simplePage("Musikere", "Orkesteret", "Instrumentgruppene som utgjør Asker Symfoniorkester.", `<div class="card-grid">${sections.map((s) => `<article class="feature-card"><p class="kicker">Instrumentgruppe</p><h2>${s}</h2><p>Musikerliste oppdateres fortløpende.</p></article>`).join("")}</div>`) ]);
  pagesOut.push(["/bli-med/", simplePage("Bli med", "Rekruttering", "Finn plass i et varmt og ambisiøst orkesterfellesskap.", `<div class="split"><div>${sectionIntro("Velkommen", "Har du lyst til å spille symfonisk musikk?", "Du bør beherske instrumentet godt, møte forberedt og ønske å bidra både sosialt og musikalsk.")}<div class="stack"><article class="panel"><h2>Hvem søker vi?</h2><p>Stryk, treblås, messing og slagverk på godt amatørnivå.</p></article><article class="panel"><h2>Prøver</h2><p>Orkesteret møtes jevnlig i Asker, med ekstra prøver inn mot konserter.</p></article></div></div>${contactForm("Send oss en melding", "rekruttering")}</div>`) ]);
  pagesOut.push(["/repertoar/", simplePage("Repertoar", "Musikken", "Fra nordiske klanger til klassiske hovedverk.", `<div class="card-grid">${repertoire.map((r) => `<article class="feature-card"><p class="kicker">Repertoar</p><h2>${r}</h2><p>Et utvalg av komponister og uttrykk orkesteret arbeider med.</p></article>`).join("")}</div>`) ]);
  pagesOut.push(["/medlemmer/", simplePage("For medlemmer", "Praktisk", "Praktisk informasjon for musikere i orkesteret.", `<div class="card-grid two"><article class="feature-card"><h2>Prøveplan</h2><p>Tirsdag 18. august: første prøve<br>Tirsdag 1. september: gruppeprøver<br>Helgeseminar: dato annonseres<br>Generalprøve: uken før konsert</p></article>${["Noter", "Oppmøtetider", "Meldinger fra dirigent og styre", "Praktisk informasjon"].map((t) => `<article class="feature-card"><h2>${t}</h2><p>Oppdatert intern informasjon legges inn her.</p></article>`).join("")}</div>`) ]);
  pagesOut.push(["/stott-oss/", simplePage("Støtt oss", "Bidra", "Hjelp oss å skape levende orkestermusikk i Asker.", `<div class="split"><article class="panel"><p class="kicker">Grasrotandelen</p><h2>Velg oss hos Norsk Tipping</h2><p>Gjennom Grasrotandelen kan du støtte Asker Symfoniorkester uten ekstra kostnad.</p></article><div class="card-grid compact">${partners.map((p) => `<div class="partner-card">${p}</div>`).join("")}</div></div>`) ]);
  pagesOut.push(["/aktuelt/", simplePage("Aktuelt", "Nyheter", "Nyheter, prosjekter og meldinger fra Asker Symfoniorkester.", `<div class="card-grid">${news.map(([title, date, text]) => `<article class="feature-card"><p class="kicker">${date}</p><h2>${title}</h2><p>${text}</p></article>`).join("")}</div><p class="external-note">Følg oss også på <a href="${facebookUrl}">Facebook</a> for løpende oppdateringer.</p>`) ]);
  pagesOut.push(["/kontakt/", simplePage("Kontakt", "Kontakt", "Ta kontakt med Asker Symfoniorkester.", `<div class="split">${contactForm("Kontaktskjema", "kontakt")}<aside class="panel quiet"><h2>Kontaktpunkter</h2><p>Generell kontakt: <a href="mailto:${contactEmail}">${contactEmail}</a><br>Rekruttering: <a href="mailto:${contactEmail}">${contactEmail}</a><br>Facebook: <a href="${facebookUrl}">åpne side</a><br>Område: Asker og omegn</p></aside></div>`) ]);
  return pagesOut;
}
