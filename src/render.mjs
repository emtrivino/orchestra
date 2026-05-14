import {
  concerts,
  facebookUrl,
  facts,
  nav,
  news,
  partners,
  repertoire,
  sections,
  ticketUrl
} from "./data/site.mjs";
import { canonicalUrl, withBase } from "./config.mjs";

const icon = "♪";
const pageDescription = "Asker Symfoniorkester samler engasjerte amatørmusikere fra Asker og omegn til musikalske opplevelser med kvalitet og lokal tilhørighet.";

const fmt = (date, options = { weekday: "long", day: "numeric", month: "long", year: "numeric" }) =>
  new Intl.DateTimeFormat("nb-NO", options).format(new Date(date));

const esc = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const internalLink = (href, label) => `<a href="${withBase(href)}">${label}</a>`;

function shell(title, description, body, route = "/") {
  const safeTitle = esc(`${title} | Asker Symfoniorkester`);
  const safeDescription = esc(description);

  return `<!doctype html>
<html lang="nb">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${safeTitle}</title>
  <meta name="description" content="${safeDescription}">
  <meta property="og:title" content="${safeTitle}">
  <meta property="og:description" content="${safeDescription}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonicalUrl(route)}">
  <link rel="canonical" href="${canonicalUrl(route)}">
  <link rel="icon" href="${withBase("/favicon.svg")}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${withBase("/styles.css")}">
</head>
<body>
  <header class="header">
    <nav class="wrap nav" aria-label="Hovednavigasjon">
      <a class="brand" href="${withBase("/")}"><span class="mark">${icon}</span><span class="serif">Asker Symfoniorkester</span></a>
      <div class="links">${nav.map(([label, href]) => internalLink(href, label)).join("")}</div>
      <a class="btn" href="${ticketUrl}">Billetter</a>
    </nav>
  </header>
  <main>${body}</main>
  ${footer()}
</body>
</html>`;
}

function footer() {
  return `<footer class="footer">
  <div class="wrap footer-grid">
    <div>
      <div class="brand"><span class="mark">${icon}</span><span class="serif">Asker Symfoniorkester</span></div>
      <p class="lead small">Klassisk musikk, fellesskap og spilleglede siden 1972. Et ambisiøst amatørorkester med lokal forankring i Asker.</p>
    </div>
    <div>
      <p class="eyebrow">Lenker</p>
      ${nav.slice(0, 6).map(([label, href]) => `<p>${internalLink(href, label)}</p>`).join("")}
    </div>
    <div>
      <p class="eyebrow">Kontakt</p>
      <p>post@askersymfoniorkester.no</p>
      <p>Asker, Norge</p>
      <p><a href="${facebookUrl}">Facebook</a></p>
    </div>
    <div class="card">
      <p class="eyebrow">Støtt oss</p>
      <h2 class="serif">Grasrotandelen</h2>
      <p>Velg Asker Symfoniorkester hos Norsk Tipping.</p>
      <a class="btn" href="${withBase("/stott-oss/")}">Les mer</a>
    </div>
  </div>
</footer>`;
}

function hero(eyebrow, title, text) {
  return `<section class="hero visual">
  <div class="orb"></div>
  <div class="wrap">
    <p class="eyebrow">${eyebrow}</p>
    <h1 class="hero-title">${title}</h1>
    <p class="lead">${text}</p>
  </div>
</section>`;
}

function intro(eyebrow, title, text = "") {
  return `<div class="intro">
  <p class="eyebrow">${eyebrow}</p>
  <h2 class="display">${title}</h2>
  ${text ? `<p class="lead">${text}</p>` : ""}
</div>`;
}

function concertCard(concert, featured = true) {
  return `<article class="concert glass ${featured ? "featured" : ""}">
  <div class="concert-art visual staff">
    <span class="pill">${concert.type}</span>
    <div><p>${concert.venue}</p><h2>${concert.title}</h2></div>
  </div>
  <div class="concert-body">
    <div class="meta"><span>${fmt(concert.date)}</span><span>kl. ${concert.time}</span><span>${concert.venue}</span></div>
    <p class="lead concert-lead">${concert.desc}</p>
    <p class="eyebrow">Program</p>
    <ul class="list">${concert.programme.map((work) => `<li>${esc(work)}</li>`).join("")}</ul>
    <p><a class="btn" href="${ticketUrl}">Billetter</a> <a class="btn secondary" href="${withBase(`/konserter/${concert.slug}/`)}">Les mer</a></p>
  </div>
</article>`;
}

function facebook() {
  const href = encodeURIComponent(facebookUrl);
  return `<section class="fb glass">
  <p class="eyebrow">Facebook</p>
  <h2 class="serif">Siste fra orkesteret</h2>
  <iframe title="Asker Symfoniorkester Facebook feed" src="https://www.facebook.com/plugins/page.php?href=${href}&tabs=timeline&width=500&height=560&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
  <p><a href="${facebookUrl}">Åpne Facebook-siden</a></p>
</section>`;
}

function homePage() {
  return `<section class="hero visual">
  <div class="orb"></div>
  <div class="wrap hero-grid">
    <div>
      <p class="eyebrow">Asker • siden 1972</p>
      <h1 class="hero-title">Asker Symfoniorkester</h1>
      <p class="lead">Klassisk musikk, fellesskap og spilleglede siden 1972. Et ambisiøst amatørorkester med varme konsertopplevelser i Asker og omegn.</p>
      <p><a class="btn" href="#neste-konsert">Se neste konsert</a> <a class="btn secondary" href="${withBase("/bli-med/")}">Bli med i orkesteret</a></p>
    </div>
    <div class="photo glass visual"><div class="photo-inner staff"></div></div>
  </div>
</section>
<section id="neste-konsert" class="wrap section">
  ${intro("Neste konsert", "Unge solister, sommerlys og klassiske favoritter", "Neste prosjekt samler Asker Symfoniorkester og solister fra Asker kulturskole i Østenstad kirke.")}
  ${concertCard(concerts[0])}
</section>
<section class="wrap section grid2">
  <div>
    ${intro("Om orkesteret", "Ambisiøst amatørorkester med hjerte for Asker", "Asker Symfoniorkester samler engasjerte amatørmusikere fra Asker og omegn til symfoniske konsertopplevelser.")}
    <div class="stats">${facts.map(([value, label]) => `<div class="stat"><strong>${value}</strong><span>${label}</span></div>`).join("")}</div>
  </div>
  <div class="grid2">${["Konserter", "Fellesskap", "Repertoar", "Rekruttering"].map((title) => `<div class="card"><p class="eyebrow">${title}</p><h3>${title}</h3><p class="list">Premium kulturprofil, tydelig informasjon og varmt lokalt fellesskap.</p></div>`).join("")}</div>
</section>
<section class="wrap section grid2">
  <div>
    ${intro("Aktuelt", "Nytt fra orkesteret")}
    ${news.map(([title, date, text]) => `<article class="card"><p class="eyebrow">${date}</p><h3>${title}</h3><p class="list">${text}</p></article>`).join("")}
  </div>
  ${facebook()}
</section>
<section class="wrap section">
  <div class="cta"><h2 class="display">Støtt musikken i lokalmiljøet</h2><p class="lead">Din støtte bidrar til noter, lokaler, solister, unge musikere og åpne konsertopplevelser i Asker.</p><a class="btn" href="${withBase("/stott-oss/")}">Støtt oss</a></div>
</section>`;
}

function simplePage(title, heading, content, route) {
  return shell(
    title,
    heading,
    `${hero(title, heading, pageDescription)}<section class="wrap section">${content}</section>`,
    route
  );
}

function joinForm(title, formType = "recruitment") {
  const isContact = formType === "contact";
  const subject = encodeURIComponent(isContact ? "Kontakt fra nettsiden" : "Bli med i Asker Symfoniorkester");
  const topicLabel = isContact ? "Tema" : "Instrument";
  const topicName = isContact ? "tema" : "instrument";
  const topicAutocomplete = isContact ? "off" : "off";

  return `<div class="grid2">
  <div>
    ${intro("Rekruttering", "Et varmt og ambisiøst fellesskap", "Vi ønsker dyktige amatørmusikere, studenter, tidligere profesjonelle og voksne som vil tilbake til musikken velkommen.")}
    ${["Hvem ser vi etter?", "Hvordan foregår en prøve?", "Hva forventes?"].map((item) => `<article class="card"><h3>${item}</h3><p class="list">Du bør beherske instrumentet godt, møte forberedt og ønske å bidra sosialt og musikalsk.</p></article>`).join("")}
  </div>
  <form class="form glass" action="mailto:post@askersymfoniorkester.no?subject=${subject}" method="post" enctype="text/plain">
    <h2 class="display">${title}</h2>
    <p class="list">Skjemaet åpner e-postprogrammet ditt og fyller ut en melding til post@askersymfoniorkester.no.</p>
    <label for="${formType}-name">Navn<input id="${formType}-name" name="navn" autocomplete="name" required></label>
    <label for="${formType}-topic">${topicLabel}<input id="${formType}-topic" name="${topicName}" autocomplete="${topicAutocomplete}" required></label>
    <label for="${formType}-email">E-post<input id="${formType}-email" name="epost" type="email" autocomplete="email" required></label>
    <label for="${formType}-message">Melding<textarea id="${formType}-message" name="melding" rows="7" required></textarea></label>
    <button type="submit" class="btn">Send melding</button>
  </form>
</div>`;
}

export function pages() {
  const out = [];

  out.push(["/", shell("Hjem", "Klassisk musikk, fellesskap og spilleglede siden 1972.", homePage(), "/")]);

  out.push([
    "/konserter/",
    shell(
      "Konserter",
      "Kommende konserter for Asker Symfoniorkester.",
      `${hero("Konserter", "Kommende konsertopplevelser", "Utforsk sesongens konserter, program, solister og praktisk informasjon.")}<section class="wrap section cards">${concerts.map((concert) => concertCard(concert)).join("")}</section>`,
      "/konserter/"
    )
  ]);

  for (const concert of concerts) {
    const route = `/konserter/${concert.slug}/`;
    out.push([
      route,
      shell(
        concert.title,
        concert.desc,
        `${hero(concert.type, concert.title, concert.desc)}<section class="wrap section grid2"><article class="glass panel"><h2 class="display">Program</h2><ul class="list">${concert.programme.map((work) => `<li>${esc(work)}</li>`).join("")}</ul><h2 class="serif subhead">Solister</h2><ul class="list">${concert.soloists.map((soloist) => `<li>${esc(soloist)}</li>`).join("")}</ul></article><aside class="card"><p class="eyebrow">Praktisk informasjon</p><h2 class="serif">${fmt(concert.date)}</h2><p>kl. ${concert.time}<br>${concert.venue}<br>Dirigent: ${concert.conductor}</p><a class="btn" href="${ticketUrl}">Kjøp billett</a><button class="btn secondary">Del konsert</button></aside></section>`,
        route
      )
    ]);
  }

  out.push([
    "/sesongen/",
    simplePage(
      "Sesongen 2026/27",
      "En sesong med nærhet, klang og oppdagelser",
      `<div class="grid2">${["Velkommen til en ny sesong", "Høydepunkter", "For familier og nye lyttere", "Lokalt kulturliv i Asker"].map((title) => `<article class="card"><h3>${title}</h3><p class="list">Konserter som oppleves både høytidelige og åpne, med musikalsk kvalitet og lokal tilhørighet.</p></article>`).join("")}</div><div class="timeline">${concerts.map((concert) => `<div class="timeline-row"><span>${fmt(concert.date, { day: "numeric", month: "long", year: "numeric" })}</span><strong>${concert.title}</strong><span>${concert.venue}</span></div>`).join("")}</div>`,
      "/sesongen/"
    )
  ]);

  out.push([
    "/om-oss/",
    simplePage(
      "Om orkesteret",
      "Et levende symfoniorkester i Asker siden 1972",
      `${intro("Historie og identitet", "Spilleglede med symfoniske ambisjoner", "Siden 1972 har orkesteret gitt amatørmusikere en arena for å utvikle seg, spille stort repertoar og skape konserter for lokalmiljøet.")}<div class="stats">${facts.map(([value, label]) => `<div class="stat"><strong>${value}</strong><span>${label}</span></div>`).join("")}</div><article class="card"><p class="eyebrow">Dirigent</p><h3>Carl Nilsen</h3><p class="list">Dirigenten leder orkesterets musikalske arbeid og skaper trygge rammer for ambisiøst amatørmusikalsk samspill.</p></article>`,
      "/om-oss/"
    )
  ]);

  out.push([
    "/musikere/",
    simplePage(
      "Musikere",
      "Orkesterets stemmer",
      `<div class="grid3">${sections.map((section) => `<article class="card"><p class="eyebrow">Instrumentgruppe</p><h3>${section}</h3><p class="list">Navn kommer<br>Navn kommer<br>Navn kommer</p></article>`).join("")}</div><div class="cta"><h2 class="display">Spiller du et orkesterinstrument?</h2><a class="btn" href="${withBase("/bli-med/")}">Kontakt oss</a></div>`,
      "/musikere/"
    )
  ]);

  out.push(["/bli-med/", simplePage("Bli med", "Finn plass i orkesterklangen", joinForm("Send oss en melding"), "/bli-med/")]);
  out.push([
    "/repertoar/",
    simplePage("Repertoar", "Fra nordiske klanger til klassiske hovedverk", `<div class="grid4">${repertoire.map((item) => `<article class="card"><p class="eyebrow">Repertoar</p><h3>${item}</h3><p class="list">Programdetaljer og tidligere verk kan legges inn her.</p></article>`).join("")}</div>`, "/repertoar/")
  ]);
  out.push([
    "/medlemmer/",
    simplePage("For medlemmer", "Praktisk informasjon for orkesteret", `<div class="grid2"><article class="card"><h3>Prøveplan</h3><p class="list">Tirsdag 18. august: Første prøve<br>Tirsdag 1. september: Gruppeprøver<br>Helgeseminar: dato annonseres<br>Generalprøve: uken før konsert</p></article>${["Praktisk informasjon", "Noter", "Oppmøtetider", "Meldinger fra dirigent og styre"].map((title) => `<article class="card"><h3>${title}</h3><p class="list">Plassholder for oppdatert intern informasjon.</p></article>`).join("")}</div>`, "/medlemmer/")
  ]);
  out.push([
    "/stott-oss/",
    simplePage("Støtt oss", "Hjelp oss å skape levende orkestermusikk i Asker", `<div class="grid2"><article class="glass panel"><p class="eyebrow">Grasrotandelen</p><h2 class="display">Velg oss hos Norsk Tipping</h2><p class="lead">Gjennom Grasrotandelen kan du støtte Asker Symfoniorkester uten ekstra kostnad.</p></article><div class="grid2">${["Noter og leie av verk", "Konsertlokaler", "Solister og unge musikere", "Lokale samarbeidsprosjekter"].map((item) => `<div class="card">${item}</div>`).join("")}</div></div><div class="grid4">${partners.map((partner) => `<div class="logo-box">${partner}</div>`).join("")}</div>`, "/stott-oss/")
  ]);
  out.push([
    "/aktuelt/",
    simplePage("Aktuelt", "Nyheter, prosjekter og meldinger", `<div class="grid2"><div>${news.map(([title, date, text]) => `<article class="card"><p class="eyebrow">${date}</p><h3>${title}</h3><p class="list">${text}</p></article>`).join("")}</div>${facebook()}</div>`, "/aktuelt/")
  ]);
  out.push([
    "/kontakt/",
    simplePage("Kontakt", "Ta kontakt med orkesteret", `${joinForm("Kontaktskjema", "contact")}<div class="card"><h3>Kontaktpunkter</h3><p class="list">Generell kontakt: post@askersymfoniorkester.no<br>Rekruttering: post@askersymfoniorkester.no<br>Facebook: <a href="${facebookUrl}">åpne side</a><br>Kart/venue-plassholder: Asker og omegn</p></div>`, "/kontakt/")
  ]);

  return out;
}
