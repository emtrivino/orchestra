CONTACT_EMAIL = "leder@asym.no"
FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100062928895060"
TICKET_URL = "https://checkout.ebillett.no/359/events/19/purchase/setup"

NAVIGATION = [
    ("Inicio", "#orquesta"),
    ("Concert", "#concert"),
    ("Unirse", "#unirse"),
    ("Contacto", "#contacto"),
]

GALLERY_IMAGES = [
    {
        "src": "images/orchestra_and_choird.jpg",
        "alt": "Asker Symfoniorkester junto a un coro",
    },
    {
        "src": "images/orchestra_piano.jpg",
        "alt": "Asker Symfoniorkester con piano solista",
    },
    {
        "src": "images/orchestra_with_abba.jpg",
        "alt": "Asker Symfoniorkester en una presentación colorida",
    },
    {
        "src": "images/orchestra_1.jpg",
        "alt": "Músicos de Asker Symfoniorkester en ensayo o concierto",
    },
    {
        "src": "images/orchestra_playing.jpg",
        "alt": "Asker Symfoniorkester tocando en vivo",
    },
]

HERO_IMAGE = GALLERY_IMAGES[0] | {"width": 1600, "height": 1065}

CONCERT = {
    "title": "Sommerkonsert med solister fra Asker kulturskole",
    "date": "7. juni 2026",
    "time": "19.00",
    "venue": "Østenstad kirke",
    "conductor": "Carl Nilsen",
    "ticket_url": TICKET_URL,
    "description": "Un concierto de verano, sencillo y cercano, con jóvenes solistas de Asker kulturskole.",
    "programme": [
        "Grieg: Peer Gynt Suite nr. 1 og 2",
        "Mozart: Andante for fløyte og orkester",
        "Poulenc: Klaverkonsert, 1. sats",
        "Marcussen: Pavane for bratsj og orkester",
        "Pierné: Canzonetta for saxofon og orkester",
    ],
    "soloists": [
        "Aurora Sommerfeldt Floden, bratsj",
        "Eline Øverli Waaler, fløyte",
        "Linnea Line, piano",
        "Anja Møgedal Skjellestad, saxofon",
    ],
}

ABOUT = {
    "title": "Orquesta local en Asker",
    "text": "Asker Symfoniorkester es una orquesta para jóvenes y adultos aficionados: música, comunidad y desarrollo musical entre generaciones.",
    "facts": ["Desde 1972", "Ca. 35 músicos", "Ensayos los martes", "Repertorio clásico y nuevos proyectos"],
    "history": "Nacimos en 1972 y seguimos enriqueciendo la vida musical local. El objetivo es simple: dar a jóvenes y adultos una vida con música, colaboración y alegría de tocar juntos.",
    "salon": "También tenemos un salongorkester que recupera el ambiente elegante de los cafés noruegos, con piezas conocidas y pequeñas sorpresas.",
    "rehearsal": "Ensayamos cada martes en Borgen ungdomsskole, de 19.00 a 21.45. Puedes pasar por un ensayo si tienes preguntas.",
}

VIDEOS = [
    {
        "title": "Presentación 1",
        "url": "https://www.youtube.com/watch?v=3dWpDRrjYIo",
        "embed": "https://www.youtube.com/embed/3dWpDRrjYIo",
    },
    {
        "title": "Presentación 2",
        "url": "https://www.youtube.com/watch?v=mNQeoPL2SS4&t=175s",
        "embed": "https://www.youtube.com/embed/mNQeoPL2SS4?start=175",
    },
    {
        "title": "Presentación 3",
        "url": "https://www.youtube.com/watch?v=G1MlTpqn-3I&t=448s",
        "embed": "https://www.youtube.com/embed/G1MlTpqn-3I?start=448",
    },
    {
        "title": "Presentación 4",
        "url": "https://www.youtube.com/watch?v=5MuOO9f0heU",
        "embed": "https://www.youtube.com/embed/5MuOO9f0heU",
    },
]

JOIN_TEXT = "¿Tocas cuerda, viento, metal o percusión? Escríbenos y cuéntanos tu experiencia."

BOARD = [
    ("Leder", "Ingrid Dahl"),
    ("Kasserer", "Anette Robsahm Røhmen"),
]
