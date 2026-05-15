export const facebookUrl = "https://www.facebook.com/profile.php?id=100062928895060";
export const ticketUrl = "https://checkout.ebillett.no/359/events/19/purchase/setup";
export const contactEmail = "post@askersymfoniorkester.no";
export const basePath = "/orchestra";
export const siteUrl = "https://emtrivino.github.io/orchestra";

export const nav = [
  ["Konserter", "/konserter/"],
  ["Om oss", "/om-oss/"],
  ["Bli med", "/bli-med/"],
  ["Aktuelt", "/aktuelt/"],
  ["Kontakt", "/kontakt/"],
];

export const facts = [
  ["1972", "stiftet"],
  ["35+", "musikere"],
  ["5", "konserter i året"],
  ["Asker", "lokalt forankret"],
];

export const frontImages = [
  { src: "/images/aso-stage.svg", alt: "Abstrakt sceneillustrasjon med varmt konsertlys" },
  { src: "/images/aso-strings.svg", alt: "Minimal illustrasjon inspirert av strykeinstrumenter" },
  { src: "/images/aso-motion.svg", alt: "Abstrakt bevegelse som minner om dirigentens slag" },
];

export const videos = [
  ["Konsertopptak I", "https://www.youtube.com/watch?v=H15EEgzzeFc"],
  ["Konsertopptak II", "https://www.youtube.com/watch?v=3dWpDRrjYIo"],
  ["Konsertopptak III", "https://www.youtube.com/watch?v=G1MlTpqn-3I"],
];

export const concerts = [
  {
    slug: "sommerkonsert-asker-kulturskole",
    title: "Sommerkonsert med solister fra Asker kulturskole",
    date: "2026-06-07",
    time: "19.00",
    venue: "Østenstad kirke",
    type: "Sommerkonsert",
    conductor: "Carl Nilsen",
    ticketUrl,
    soloists: ["Aurora Sommerfeldt Floden, bratsj", "Eline Øverli Waaler, fløyte", "Linnea Line, piano", "Anja Møgedal Skjellestad, saxofon"],
    programme: ["Edvard Grieg: Peer Gynt Suite nr. 1 og 2", "Wolfgang Amadeus Mozart: Andante for fløyte og orkester", "Francis Poulenc: Klaverkonsert, 1. sats", "Kjell Marcussen: Pavane for bratsj og orkester", "Gabriel Pierné: Canzonetta for saxofon og orkester"],
    desc: "Unge solister fra Asker kulturskole møter orkesteret i en lys konsert med Grieg, Mozart, Poulenc, Marcussen og Pierné.",
    supporters: ["NASOL", "Sparebankstiftelsen DNB"],
  },
  {
    slug: "hostkonsert-2026",
    title: "Høstkonsert",
    date: "2026-10-25",
    time: "18.00",
    venue: "Asker kulturhus",
    type: "Symfonisk konsert",
    conductor: "Carl Nilsen",
    soloists: ["Solist annonseres"],
    programme: ["Ludwig van Beethoven: Ouverture", "Jean Sibelius: Karelia-suite", "Nordisk verk annonseres"],
    desc: "Nordiske farger og klassisk energi i et program for både kjente og nye lyttere.",
  },
  {
    slug: "julekonsert-2026",
    title: "Julekonsert",
    date: "2026-12-13",
    time: "18.00",
    venue: "Asker kirke",
    type: "Julekonsert",
    conductor: "Carl Nilsen",
    soloists: ["Lokale gjester annonseres"],
    programme: ["Tradisjonelle julesanger i orkesterdrakt", "Pjotr Tsjajkovskij: Utdrag fra Nøtteknekkeren", "Norsk julemusikk"],
    desc: "En førjulskveld med kjente melodier, orkesterklang og rom for høytidens ro.",
  },
  {
    slug: "varkonsert-2027",
    title: "Vårkonsert",
    date: "2027-03-21",
    time: "18.00",
    venue: "Venskaben, Asker",
    type: "Kammerlig symfonisk",
    conductor: "Carl Nilsen",
    soloists: ["Solist annonseres"],
    programme: ["Wolfgang Amadeus Mozart: Symfonisk verk", "Samtidsverk av nordisk komponist", "Edvard Grieg: Lyriske stykker i orkesterarrangement"],
    desc: "Musikalsk fornyelse, elegante klassikere og lokalt orkesterfellesskap.",
  },
];

export const news = [
  ["Billetter til sommerkonserten", "7. juni 2026", "Billettsalget er åpnet til konserten i Østenstad kirke med unge solister fra Asker kulturskole.", ticketUrl],
  ["Følg orkesteret på Facebook", "Løpende", "Se oppdateringer, bilder og små glimt fra prøver, konserter og lokalt musikkliv.", facebookUrl],
  ["Vi søker nye musikere", "Løpende opptak", "Spiller du stryk, blås eller slagverk på godt amatørnivå? Ta kontakt med oss.", "/bli-med/"],
];

export const repertoire = ["Grieg", "Mozart", "Poulenc", "Sibelius", "Beethoven", "Tsjajkovskij", "Nordiske komponister", "Samtidsmusikk"];
export const sections = ["Fiolin", "Bratsj", "Cello", "Kontrabass", "Treblås", "Messing", "Slagverk"];
export const partners = ["NASOL", "Sparebankstiftelsen DNB", "Asker kulturskole", "Norsk Tipping / Grasrotandelen"];
