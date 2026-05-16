FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100062928895060"
TICKET_URL = "https://checkout.ebillett.no/359/events/19/purchase/setup"
CONTACT_EMAIL = "leder@asym.no"

NAVIGATION = [
    ("Hjem", "/"),
    ("Konserter", "/konserter/"),
    ("Om oss", "/om-oss/"),
    ("Bli med", "/bli-med/"),
    ("Aktuelt", "/aktuelt/"),
    ("Kontakt", "/kontakt/"),
]

FACTS = [
    ("1972", "stiftet"),
    ("ca. 35", "medlemmer"),
    ("17–84", "år"),
    ("Tirsdag", "øvelse"),
]

FRONT_IMAGES = [
    ("images/orchestra_1.jpg", "Asker Symfoniorkester på scenen under konsert"),
    ("images/orchestra_playing.jpg", "Musikere i Asker Symfoniorkester spiller sammen"),
    ("images/orchestra_with_abba.jpg", "Asker Symfoniorkester med vokalister og fullt ensemble"),
]

CONCERTS = [
    {
        "slug": "sommerkonsert-asker-kulturskole",
        "title": "Sommerkonsert med solister fra Asker kulturskole",
        "date": "7. juni 2026",
        "time": "19.00",
        "venue": "Østenstad kirke",
        "type": "Neste konsert",
        "conductor": "Carl Nilsen",
        "ticket_url": TICKET_URL,
        "description": "Unge solister fra Asker kulturskole møter orkesteret i Østenstad kirke.",
        "soloists": [
            "Aurora Sommerfeldt Floden, bratsj",
            "Eline Øverli Waaler, fløyte",
            "Linnea Line, piano",
            "Anja Møgedal Skjellestad, saxofon",
        ],
        "programme": [
            "Edvard Grieg: Peer Gynt Suite nr. 1 og 2",
            "Wolfgang Amadeus Mozart: Andante for fløyte og orkester",
            "Francis Poulenc: Klaverkonsert, 1. sats",
            "Kjell Marcussen: Pavane for bratsj og orkester",
            "Gabriel Pierné: Canzonetta for saxofon og orkester",
        ],
    }
]

ABOUT_SECTIONS = [
    {
        "title": "Orkesteret",
        "text": [
            "Asker Symfoniorkester er kommunens eneste symfoniorkester for unge og voksne amatørmusikere.",
            "Vi har ca. 35 medlemmer i alderen 17–84 år og har vært en del av Asker siden 1972.",
        ],
    },
    {
        "title": "Musikken",
        "text": [
            "Repertoaret går fra klassiske hovedverk til nordiske klanger og nye prosjekter.",
            "Vi samarbeider ofte med unge solister, kor i regionen og Asker kulturskole.",
        ],
    },
    {
        "title": "Prøver",
        "text": [
            "Vi øver hver tirsdag på Borgen ungdomsskole kl. 19.00–21.45.",
            "Kom gjerne innom en øvelse hvis du har spørsmål.",
        ],
    },
]

BOARD = [
    ("Leder", "Ingrid Dahl"),
    ("Kasserer", "Anette Robsahm Røhmen"),
    ("Styremedlem", "Kristina Øglænd Sveen"),
    ("Styremedlem", "Marie Østensen"),
    ("Styremedlem", "Steinar Hopland"),
    ("Styremedlem", "Richard Blichfeldt"),
]

NEWS = [
    ("Billetter til sommerkonserten", "7. juni 2026", "Billettsalget er åpnet til konserten i Østenstad kirke.", TICKET_URL),
    ("Følg orkesteret på Facebook", "Løpende", "Se oppdateringer, bilder og glimt fra prøver og konserter.", FACEBOOK_URL),
    ("Vi søker nye musikere", "Løpende opptak", "Spiller du stryk, blås eller slagverk på godt amatørnivå? Ta kontakt med oss.", None),
]

REPERTOIRE = ["Grieg", "Mozart", "Poulenc", "Sibelius", "Beethoven", "Tsjajkovskij", "Nordiske komponister", "Samtidsmusikk"]
SECTIONS = ["Fiolin", "Bratsj", "Cello", "Kontrabass", "Treblås", "Messing", "Slagverk"]
