export const facebookUrl = "https://www.facebook.com/profile.php?id=100062928895060";
export const ticketUrl = "https://checkout.ebillett.no/359/events/19/purchase/setup";
export const contactEmail = "leder@asym.no";
export const basePath = "/orchestra";
export const siteUrl = "https://emtrivino.github.io/orchestra";
export const imageBaseUrl = "https://raw.githubusercontent.com/emtrivino/orchestra/main/public";

export const nav = [
  ["Konserter", "/konserter/"],
  ["Om oss", "/om-oss/"],
  ["Bli med", "/bli-med/"],
  ["Aktuelt", "/aktuelt/"],
  ["Kontakt", "/kontakt/"],
];

export const facts = [
  ["1972", "stiftet"],
  ["ca. 35", "medlemmer"],
  ["17–84", "år"],
  ["Tirsdag", "øvelse"],
];

export const frontImages = [
  { src: "/images/orchestra_1.jpg", width: 3364, height: 1246, alt: "Asker Symfoniorkester på scenen under konsert" },
  { src: "/images/orchestra_playing.jpg", width: 2048, height: 1152, alt: "Musikere i Asker Symfoniorkester spiller sammen" },
  { src: "/images/orchestra_with_abba.jpg", width: 2048, height: 1365, alt: "Asker Symfoniorkester med vokalister og fullt ensemble" },
  { src: "/images/orchestra_piano.jpg", width: 2015, height: 1134, alt: "Pianist og orkester i samspill" },
  { src: "/images/orchestra_and_choird.jpg", width: 1600, height: 1065, alt: "Orkester og kor deler konsertscenen" },
];

export const videos = [
  ["Konsertopptak I", "https://www.youtube.com/watch?v=H15EEgzzeFc"],
  ["Konsertopptak II", "https://www.youtube.com/watch?v=3dWpDRrjYIo"],
  ["Konsertopptak III", "https://www.youtube.com/watch?v=6eLTL9Wy9vw&t=24s"],
  ["Konsertopptak IV", "https://www.youtube.com/watch?v=mNQeoPL2SS4"],
];

export const concerts = [
  {
    slug: "sommerkonsert-asker-kulturskole",
    title: "Sommerkonsert med solister fra Asker kulturskole",
    date: "2026-06-07",
    time: "19.00",
    venue: "Østenstad kirke",
    type: "Neste konsert",
    conductor: "Carl Nilsen",
    ticketUrl,
    soloists: ["Aurora Sommerfeldt Floden, bratsj", "Eline Øverli Waaler, fløyte", "Linnea Line, piano", "Anja Møgedal Skjellestad, saxofon"],
    programme: ["Edvard Grieg: Peer Gynt Suite nr. 1 og 2", "Wolfgang Amadeus Mozart: Andante for fløyte og orkester", "Francis Poulenc: Klaverkonsert, 1. sats", "Kjell Marcussen: Pavane for bratsj og orkester", "Gabriel Pierné: Canzonetta for saxofon og orkester"],
    desc: "Unge solister fra Asker kulturskole møter orkesteret i Østenstad kirke. Billetter er tilgjengelige hos eBillett.",
    supporters: ["NASOL", "Sparebankstiftelsen DNB"],
  },
];

export const aboutSections = [
  {
    title: "Orkesteret",
    text: [
      "Asker Symfoniorkester er kommunens eneste symfoniorkester for unge og voksne amatørmusikere. Vi har ca. 35 medlemmer i alderen 17–84 år.",
      "Siden oppstarten i 1972 har vi jobbet kontinuerlig for å berike det lokale musikkmiljøet. Visjonen er et helt liv med musikk, samhold på tvers av generasjoner og mestringsfølelse.",
      "Vi skal være en møteplass og arena for musikalsk utvikling og inkluderende fellesskap for flere generasjoner av amatørmusikere.",
    ],
  },
  {
    title: "Musikken",
    text: [
      "Repertoaret spenner fra uroppførelser til klassiske verk fra den romantiske perioden.",
      "Vi samarbeider ofte med unge solister fra Barratt Due, musikkhøyskolen, kor i regionen og Asker kulturskole.",
      "Orkesteret engasjerer profesjonelle dirigenter for hvert prosjekt og støttes av Asker kommune.",
    ],
  },
  {
    title: "Prøver",
    text: ["Vi øver hver tirsdag på Borgen ungdomsskole kl. 19.00–21.45.", "Kom gjerne innom en øvelse hvis du har spørsmål."],
  },
  {
    title: "Salongorkester",
    text: [
      "Asker Symfoniorkester har også sitt eget salongorkester.",
      "Salongorkesteret løfter frem tradisjoner fra norske kafeer og restauranter, med wienerklassisk taffelmusikk, norske komponister og kapellmestrenes egne perler.",
      "Publikum inviteres til en musikalsk reise tilbake til Cafeteaterets glade og elegante atmosfære, med både kjente klassiske stykker og overraskelser.",
    ],
  },
  {
    title: "Historie",
    text: ["Asker Symfoniorkester ble startet i 1972. Orkesterets faste dirigent var i nesten 30 år fiolinisten, dirigenten og musikkskolerektoren Arne Hagen.", "Orkesterets første konsert var i 1973 på Tveter gård under ledelse av Arne Hagen."],
  },
];

export const board = [
  ["Leder", "Ingrid Dahl"],
  ["Kasserer", "Anette Robsahm Røhmen"],
  ["Styremedlem", "Kristina Øglænd Sveen"],
  ["Styremedlem", "Marie Østensen"],
  ["Styremedlem", "Steinar Hopland"],
  ["Styremedlem", "Richard Blichfeldt"],
];

export const news = [
  ["Billetter til sommerkonserten", "7. juni 2026", "Billettsalget er åpnet til konserten i Østenstad kirke med unge solister fra Asker kulturskole.", ticketUrl],
  ["Følg orkesteret på Facebook", "Løpende", "Se oppdateringer, bilder og små glimt fra prøver, konserter og lokalt musikkliv.", facebookUrl],
  ["Vi søker nye musikere", "Løpende opptak", "Spiller du stryk, blås eller slagverk på godt amatørnivå? Ta kontakt med oss.", "/bli-med/"],
];

export const repertoire = ["Grieg", "Mozart", "Poulenc", "Sibelius", "Beethoven", "Tsjajkovskij", "Nordiske komponister", "Samtidsmusikk"];
export const sections = ["Fiolin", "Bratsj", "Cello", "Kontrabass", "Treblås", "Messing", "Slagverk"];
export const partners = ["NASOL", "Sparebankstiftelsen DNB", "Asker kulturskole", "Norsk Tipping / Grasrotandelen"];
