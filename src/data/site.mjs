export const facebookUrl = "https://www.facebook.com/profile.php?id=100062928895060";
export const ticketUrl = "https://checkout.ebillett.no/359/events/19/purchase/setup";
export const contactEmail = "post@askersymfoniorkester.no";
export const basePath = "/orchestra";
export const siteUrl = "https://emtrivino.github.io/orchestra";
export const imageBaseUrl = "https://raw.githubusercontent.com/emtrivino/orchestra/main/public";

export const nav = [
  ["Konserter", "/konserter/"],
  ["Bli med", "/bli-med/"],
  ["Om oss", "/om-oss/"],
  ["Kontakt", "/kontakt/"],
];

export const facts = [
  ["1972", "stiftet"],
  ["Asker", "lokalt orkester"],
  ["Carl Nilsen", "dirigent"],
];

export const heroImage = {
  src: "/images/orchestra_and_choird.jpg",
  width: 1600,
  height: 1065,
  alt: "Asker Symfoniorkester på konsertscenen",
};

export const concerts = [
  {
    slug: "sommerkonsert-asker-kulturskole",
    title: "Sommerkonsert med solister fra Asker kulturskole",
    date: "2026-06-07",
    displayDate: "7. juni 2026",
    time: "19.00",
    venue: "Østenstad kirke",
    type: "Sommerkonsert",
    conductor: "Carl Nilsen",
    ticketUrl,
    soloists: [
      "Aurora Sommerfeldt Floden, bratsj",
      "Eline Øverli Waaler, fløyte",
      "Linnea Line, piano",
      "Anja Møgedal Skjellestad, saxofon",
    ],
    programme: [
      "Edvard Grieg: Peer Gynt Suite nr. 1 og 2",
      "Wolfgang Amadeus Mozart: Andante for fløyte og orkester",
      "Francis Poulenc: Klaverkonsert, 1. sats",
      "Kjell Marcussen: Pavane for bratsj og orkester",
      "Gabriel Pierné: Canzonetta for saxofon og orkester",
    ],
    desc: "Unge solister fra Asker kulturskole møter orkesteret i en lys sommerkonsert.",
  },
];
