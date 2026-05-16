import { aboutSections, basePath, board, concerts, contactEmail, facebookUrl, facts, frontImages, imageBaseUrl, nav, news, partners, repertoire, sections, siteUrl, ticketUrl, videos } from "./data/site.mjs";

const esc = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const sitePath = (path) => `${basePath}${path}`;
const href = (path) => (path.startsWith("/") ? sitePath(path) : path);
const asset = (path) => (path.startsWith("/images/orchestra") ? `${imageBaseUrl}${path}` : sitePath(path));
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
        <p>${link("/konserter/", "Konserter")}<br>${link("/sesongen/", "Sesongen")}<br>${link("/aktuelt/", "Aktuelt")}<br>${link("/repertoar/", "Repertoar")}</p>
      </section>
      <section>
        <h2>Delta</h2>
        <p>${link("/bli-med/", "Bli med")}<br>${link("/stott-oss/", "Støtt oss")}<br>${link("/medlemmer/", "For medlemmer")}<br>${link("/musikere/", "Musikere")}</p>
      </section>
      <section>
        <h2>Kontakt</h2>
        <p><a href="mailto:${contactEmail}">${contactEmail}</a><br><a href="${facebookUrl}" rel="noopener">Facebook</a><br>Asker, Norge</p>
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
      <div class="actions">${concert.ticketUrl ? `<a class="button" href="${concert.ticketUrl}" rel="noopener">Billetter</a>` : ""}${link(`/konserter/${concert.slug}/`, "Les mer", concert.ticketUrl ? "button ghost" : "button")}</div>
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

function imageTag(image, attrs = "") {
  return `<img src="${asset(image.src)}" width="${image.width}" height="${image.height}" alt="${esc(image.alt)}" decoding="async"${attrs ? ` ${attrs}` : ""}>`;
}

function youtubeEmbed(url) {
  const parsed = new URL(url);
  const id = parsed.searchParams.get("v");
  const start = parsed.searchParams.get("t")?.replace("s", "");
  return `https://www.youtube-nocookie.com/embed/${id}${start ? `?start=${Number.parseInt(start, 10) || 0}` : ""}`;
}

function videoLinks() {
  return `<div class="video-grid">${videos
    .map(
      ([label, url]) => `<article class="video-card">
        <iframe src="${youtubeEmbed(url)}" title="${esc(label)} fra Asker Symfoniorkester" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div><span>${esc(label)}</span><a href="${url}" rel="noopener">Åpne på YouTube</a></div>
      </article>`,
    )
    .join("")}</div>`;
}

function home() {
  const next = concerts[0];
  return shell("Hjem", "Asker Symfoniorkester – klassisk musikk, fellesskap og konsertopplevelser i Asker.", `
    <section class="home-hero immersive">
      <div class="container hero-grid modern-hero">
        <div class="hero-copy-block">
          <p class="kicker">Asker • symfonisk fellesskap</p>
          <h1>Musikk som puster med byen.</h1>
          <p class="hero-copy">Asker Symfoniorkester samler sterke amatørmusikere, unge solister og publikum rundt levende klassiske konsertopplevelser.</p>
          <div class="actions"><a class="button" href="${next.ticketUrl ?? ticketUrl}" rel="noopener">Kjøp billetter</a><a class="button ghost" href="#opplev">Se mer</a></div>
        </div>
        <div class="hero-media" aria-label="Visuelle glimt fra orkesteret">
          <figure class="hero-backdrop">${imageTag(frontImages[1], "fetchpriority=\"high\"")}</figure>
          ${frontImages.slice(0, 3).map((image, index) => `<figure class="hero-image hero-image-${index + 1}">${imageTag(image, index === 0 ? "fetchpriority=\"high\"" : "loading=\"lazy\"")}</figure>`).join("")}
        </div>
      </div>
    </section>
    <section id="opplev" class="container section editorial-strip">
      <article class="next-card"><p class="kicker">Neste konsert</p><h2>${next.title}</h2><p>${fmt(next.date)} · kl. ${next.time}<br>${next.venue}</p><div class="actions"><a class="button" href="${next.ticketUrl ?? ticketUrl}" rel="noopener">Billetter hos eBillett</a>${link(`/konserter/${next.slug}/`, "Detaljer", "button ghost")}</div></article>
      <div class="micro-about"><p class="kicker">Kort fortalt</p><p>Et orkester med røtter i Asker siden 1972 — rom for store verk, nye samarbeid og musikere som vil utvikle seg sammen.</p><div class="fact-grid mini">${facts.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("")}</div></div>
    </section>
    <section class="container section media-gallery" aria-label="Bilder fra Asker Symfoniorkester">
      ${frontImages.map((image, index) => `<figure class="gallery-item gallery-item-${index + 1}">${imageTag(image, "loading=\"lazy\"")}</figure>`).join("")}
    </section>
    <section class="container section video-section">
      ${sectionIntro("Video", "Se orkesteret spille", "Utvalgte opptak fra YouTube er lagt rett på forsiden, responsivt og uten ekstra distraksjoner.")}
      ${videoLinks()}
    </section>
    <section class="container section flow-section">
      <div>${sectionIntro("Om orkesteret", "Et helt liv med musikk", "Askers eneste symfoniorkester for unge og voksne amatørmusikere: ca. 35 medlemmer, ukentlige øvelser og prosjekter som bygger fellesskap på tvers av generasjoner.")}<article class="panel"><h2>Prøver</h2><p>Vi øver hver tirsdag på Borgen ungdomsskole kl. 19.00–21.45. Kom gjerne innom en øvelse hvis du har spørsmål.</p>${link("/om-oss/", "Les mer om oss", "text-link")}</article></div>
      <aside class="social-card">${imageTag(frontImages[3], "loading=\"lazy\"")}<h2>Følg orkesteret</h2><p>Hold deg oppdatert på konserter, bilder og korte glimt fra prøver og prosjekter.</p><a class="text-link" href="${facebookUrl}" rel="noopener">Følg oss på Facebook</a></aside>
    </section>
    <section class="container section callout-row">
      <article class="feature-card"><p class="kicker">Bli med</p><h2>Spill med oss.</h2><p>Vi ønsker nye strykere, blåsere og slagverkere velkommen til et varmt og ambisiøst miljø.</p>${link("/bli-med/", "Send melding", "text-link")}</article>
      <article class="feature-card accent-card"><p class="kicker">Støtt oss</p><h2>Hjelp musikken videre.</h2><p>Din støtte bidrar til noter, lokaler, solister og konserter for lokalsamfunnet.</p>${link("/stott-oss/", "Slik kan du støtte", "text-link")}</article>
    </section>`);
}

export function pages() {
  const pagesOut = [["/", home()]];
  pagesOut.push(["/konserter/", simplePage("Konserter", "Neste konsert", "Neste publiserte konsert med billetter.", `${sectionIntro("Billetter", "Neste konsert", "Vi viser bare bekreftede konserter med billettinformasjon. Nye konserter legges ut når detaljer og billetter er klare.")}
    <div class="event-list">${concerts.map((c) => concertCard(c, c === concerts[0])).join("")}</div>`) ]);

  for (const c of concerts) {
    pagesOut.push([`/konserter/${c.slug}/`, simplePage(c.title, c.type, c.desc, `<div class="detail-layout">
      <article class="panel"><p class="kicker">Program</p><h2>Musikken</h2><ul>${c.programme.map((work) => `<li>${esc(work)}</li>`).join("")}</ul><p class="kicker">Solister</p><ul>${c.soloists.map((soloist) => `<li>${esc(soloist)}</li>`).join("")}</ul></article>
      <aside class="panel quiet"><h2>Praktisk informasjon</h2><p><strong>${fmt(c.date)}</strong><br>kl. ${c.time}<br>${c.venue}<br>Dirigent: ${c.conductor}</p>${c.ticketUrl ? `<a class="button" href="${c.ticketUrl}" rel="noopener">Billetter</a>` : link("/kontakt/", "Spør om billetter", "button")}</aside>
    </div>`) ]);
  }

  pagesOut.push(["/sesongen/", simplePage("Sesongen", "2026", "Bekreftede konserter publiseres når billetter og detaljer er klare.", `<div class="timeline">${concerts.map((c) => `<article><time>${fmt(c.date, { day: "numeric", month: "long", year: "numeric" })}</time><h2>${c.title}</h2><p>${c.venue} · ${c.type}</p></article>`).join("")}</div>`) ]);
  pagesOut.push(["/om-oss/", simplePage("Om oss", "Orkesteret", "Askers symfoniorkester for unge og voksne amatørmusikere.", `${sectionIntro("Kort fortalt", "Musikalsk utvikling og inkluderende fellesskap", "Asker Symfoniorkester er en møteplass for amatørmusikere i flere generasjoner, med røtter i Asker siden 1972.")}<div class="fact-grid wide">${facts.map(([v, l]) => `<div><strong>${v}</strong><span>${l}</span></div>`).join("")}</div><div class="about-stack">${aboutSections.map((section) => `<article class="panel"><p class="kicker">Om</p><h2>${esc(section.title)}</h2>${section.text.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}</article>`).join("")}</div>`) ]);
  pagesOut.push(["/musikere/", simplePage("Musikere", "Orkesteret", "Instrumentgruppene som utgjør Asker Symfoniorkester.", `<div class="card-grid">${sections.map((s) => `<article class="feature-card"><p class="kicker">Instrumentgruppe</p><h2>${s}</h2><p>Musikerliste oppdateres fortløpende.</p></article>`).join("")}</div>`) ]);
  pagesOut.push(["/bli-med/", simplePage("Bli med", "Rekruttering", "Finn plass i et varmt og ambisiøst orkesterfellesskap.", `<div class="split"><div>${sectionIntro("Velkommen", "Har du lyst til å spille symfonisk musikk?", "Du bør beherske instrumentet godt, møte forberedt og ønske å bidra både sosialt og musikalsk.")}<div class="stack"><article class="panel"><h2>Hvem søker vi?</h2><p>Stryk, treblås, messing og slagverk på godt amatørnivå.</p></article><article class="panel"><h2>Prøver</h2><p>Orkesteret møtes jevnlig i Asker, med ekstra prøver inn mot konserter.</p></article></div></div>${contactForm("Send oss en melding", "rekruttering")}</div>`) ]);
  pagesOut.push(["/repertoar/", simplePage("Repertoar", "Musikken", "Fra nordiske klanger til klassiske hovedverk.", `<div class="card-grid">${repertoire.map((r) => `<article class="feature-card"><p class="kicker">Repertoar</p><h2>${r}</h2><p>Et utvalg av komponister og uttrykk orkesteret arbeider med.</p></article>`).join("")}</div>`) ]);
  pagesOut.push(["/medlemmer/", simplePage("For medlemmer", "Praktisk", "Praktisk informasjon for musikere i orkesteret.", `<div class="card-grid two"><article class="feature-card"><h2>Prøveplan</h2><p>Tirsdag 18. august: første prøve<br>Tirsdag 1. september: gruppeprøver<br>Helgeseminar: dato annonseres<br>Generalprøve: uken før konsert</p></article>${["Noter", "Oppmøtetider", "Meldinger fra dirigent og styre", "Praktisk informasjon"].map((t) => `<article class="feature-card"><h2>${t}</h2><p>Oppdatert intern informasjon legges inn her.</p></article>`).join("")}</div>`) ]);
  pagesOut.push(["/stott-oss/", simplePage("Støtt oss", "Bidra", "Hjelp oss å skape levende orkestermusikk i Asker.", `<div class="split"><article class="panel"><p class="kicker">Grasrotandelen</p><h2>Velg oss hos Norsk Tipping</h2><p>Gjennom Grasrotandelen kan du støtte Asker Symfoniorkester uten ekstra kostnad.</p></article><div class="card-grid compact">${partners.map((p) => `<div class="partner-card">${p}</div>`).join("")}</div></div>`) ]);
  pagesOut.push(["/aktuelt/", simplePage("Aktuelt", "Nyheter", "Nyheter, prosjekter og meldinger fra Asker Symfoniorkester.", `<div class="card-grid">${news.map(([title, date, text, url]) => `<article class="feature-card"><p class="kicker">${date}</p><h2>${title}</h2><p>${text}</p>${url ? `<a class="text-link" href="${href(url)}" rel="noopener">Les mer</a>` : ""}</article>`).join("")}</div><p class="external-note">Følg oss også på <a href="${facebookUrl}" rel="noopener">Facebook</a> for løpende oppdateringer.</p>`) ]);
  pagesOut.push(["/kontakt/", simplePage("Kontakt", "Kontakt", "Ta kontakt med Asker Symfoniorkester.", `<div class="split">${contactForm("Kontaktskjema", "kontakt")}<aside class="panel quiet"><h2>Styret</h2><dl class="contact-list">${board.map(([role, name]) => `<div><dt>${esc(role)}</dt><dd>${esc(name)}</dd></div>`).join("")}<div><dt>E-post</dt><dd><a href="mailto:${contactEmail}">${contactEmail}</a></dd></div></dl><p>Facebook: <a href="${facebookUrl}" rel="noopener">åpne side</a><br>Område: Asker og omegn</p></aside></div>`) ]);
  return pagesOut;
}
