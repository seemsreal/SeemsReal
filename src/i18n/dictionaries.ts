export type Lang = "en" | "de" | "fr" | "es" | "it";

export const languages: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "de", label: "DE" },
  { id: "fr", label: "FR" },
  { id: "es", label: "ES" },
  { id: "it", label: "IT" },
];

export type Dictionary = {
  landingCta: string;
  navWork: string;
  navOffer: string;
  navContact: string;
  whatWeDo: string;
  headlineLine1: string;
  headlineLine2: string;
  ledeLead: string;
  ledeRest: string;
  ledeClose: string;
  selectedWork: string;
  workEmpty: string;
  catAll: string;
  catSwimwear: string;
  catBeauty: string;
  catJewelry: string;
  catFashion: string;
  aiTag: string;
  metaFilm: string;
  metaIoniClient: string;
  metaIoniDirection: string;
  metaEditorial: string;
  metaProduct: string;
  metaStillLife: string;
  metaAi: string;
  offer: string;
  pkg1Num: string;
  pkg1Title: string;
  pkg1Price: string;
  pkg1Lead: string;
  pkg1Body: string;
  pkg1Includes: string[];
  pkg2Num: string;
  pkg2Title: string;
  pkg2Price: string;
  pkg2Lead: string;
  pkg2Body: string;
  pkg2Includes: string[];
  pkg3Num: string;
  pkg3Title: string;
  pkg3Price: string;
  pkg3Lead: string;
  pkg3Body: string;
  pkg3Cta: string;
  process: string;
  processKicker: string;
  processTitle: string;
  processP1: string;
  processP2: string;
  processP3: string;
  contactLabel: string;
  contactNote: string;
  imprint: string;
  privacy: string;
  terms: string;
  aiTransparency: string;
  legalLabel: string;
};

export const dictionaries: Record<Lang, Dictionary> = {
  en: {
    landingCta: "What we do",
    navWork: "Work",
    navOffer: "Offer",
    navContact: "Contact",
    whatWeDo: "What we do",
    headlineLine1: "Big vision.",
    headlineLine2: "Without the big production.",
    ledeLead:
      "Starting a brand, building a website or expanding your portfolio?",
    ledeRest:
      "We use AI to turn your vision into elevated imagery, without the time, cost or complexity of a traditional photoshoot.",
    ledeClose: "Your product. Your vision. Made to seem real.",
    selectedWork: "Selected work",
    workEmpty: "New work coming soon.",
    catAll: "All",
    catSwimwear: "Swimwear",
    catBeauty: "Beauty",
    catJewelry: "Jewelry",
    catFashion: "Fashion",
    aiTag: "AI generated model",
    metaFilm: "Generated to look like 35mm film",
    metaIoniClient: "Client: IONI Swim",
    metaIoniDirection:
      "Creative Direction: Island escape · friendship · sun-soaked moments · coconuts · 35mm analog · visible grain · nostalgic summer",
    metaEditorial: "Editorial",
    metaProduct: "Product",
    metaStillLife: "Still life product",
    metaAi: "AI generated",
    offer: "Offer",
    pkg1Num: "Package 01",
    pkg1Title: "The Edit",
    pkg1Price: "€150",
    pkg1Lead:
      "A curated first step to get to know each other and explore what we can create together.",
    pkg1Body:
      "Five bespoke visuals, thoughtfully created around your product, aesthetic and brand identity.",
    pkg1Includes: [
      "5 bespoke visuals",
      "1 creative direction",
      "Choose up to 2 digital formats",
      "1 refinement round",
      "One-time intro per brand",
    ],
    pkg2Num: "Package 02",
    pkg2Title: "The Campaign",
    pkg2Price: "€650",
    pkg2Lead: "A complete visual world, thoughtfully created around your brand.",
    pkg2Body:
      "Twenty bespoke visuals designed to bring your products to life across multiple settings and digital formats. A cohesive visual world for your digital presence.",
    pkg2Includes: [
      "20 bespoke visuals",
      "Multiple creative directions & settings",
      "Mix & match your preferred formats",
      "Social Media · Stories · Website · Banners",
      "2 refinement rounds",
    ],
    pkg3Num: "Package 03",
    pkg3Title: "Bespoke",
    pkg3Price: "Custom pricing",
    pkg3Lead: "Made entirely around your vision.",
    pkg3Body:
      "Every brand is different. Let’s create a bespoke package tailored to your products, aesthetic, creative vision and content needs. From individual concepts to larger campaigns, we’ll shape something that fits your brand and digital presence.",
    pkg3Cta: "Let’s have a complimentary call and create something together →",
    process: "Process",
    processKicker: "What we need from you",
    processTitle: "Show us your vision.",
    processP1:
      "Share everything that defines the world you want to create · your mood, story, lighting, colours, references, moodboards and the overall feeling you want your visuals to carry.",
    processP2:
      "To create your visuals, we’ll need high-quality still-life imagery of your product, ideally captured from multiple angles.",
    processP3:
      "The better we can see and understand your product, the more accurately we can bring your vision to life.",
    contactLabel: "Project inquiries",
    contactNote: "Product, deadline, style · we’ll come back with a clear offer.",
    imprint: "Imprint",
    privacy: "Privacy",
    terms: "Terms",
    aiTransparency: "AI Transparency",
    legalLabel: "Legal",
  },
  de: {
    landingCta: "What we do",
    navWork: "Work",
    navOffer: "Offer",
    navContact: "Kontakt",
    whatWeDo: "Was wir tun",
    headlineLine1: "Große Vision.",
    headlineLine2: "Ohne große Produktion.",
    ledeLead:
      "Du gründest eine Marke, baust eine Website auf oder möchtest dein Portfolio erweitern?",
    ledeRest:
      "Wir nutzen AI, um deine Vision in hochwertige Bildwelten zu verwandeln, ohne den Zeitaufwand, die Kosten und die Komplexität eines klassischen Fotoshootings.",
    ledeClose: "Dein Produkt. Deine Vision. Made to seem real.",
    selectedWork: "Selected work",
    workEmpty: "Neue Arbeiten folgen bald.",
    catAll: "All",
    catSwimwear: "Swimwear",
    catBeauty: "Beauty",
    catJewelry: "Jewelry",
    catFashion: "Fashion",
    aiTag: "AI generated model",
    metaFilm: "Generiert im Look von 35mm Film",
    metaIoniClient: "Client: IONI Swim",
    metaIoniDirection:
      "Creative Direction: Island escape · friendship · sun-soaked moments · coconuts · 35mm analog · visible grain · nostalgic summer",
    metaEditorial: "Editorial",
    metaProduct: "Product",
    metaStillLife: "Still life product",
    metaAi: "AI generated",
    offer: "Offer",
    pkg1Num: "Package 01",
    pkg1Title: "The Edit",
    pkg1Price: "€150",
    pkg1Lead:
      "Ein kuratierter erster Schritt, um uns kennenzulernen und zu entdecken, was wir gemeinsam schaffen können.",
    pkg1Body:
      "Fünf maßgeschneiderte Visuals — rund um Produkt, Ästhetik und Markenidentität.",
    pkg1Includes: [
      "5 maßgeschneiderte Visuals",
      "1 Creative Direction",
      "Bis zu 2 digitale Formate",
      "1 Revisionsschleife",
      "Einmaliges Intro pro Brand",
    ],
    pkg2Num: "Package 02",
    pkg2Title: "The Campaign",
    pkg2Price: "€650",
    pkg2Lead: "Eine vollständige visuelle Welt — durchdacht um deine Marke.",
    pkg2Body:
      "Zwanzig maßgeschneiderte Visuals, die deine Produkte über Settings und digitale Formate hinweg zum Leben bringen. Eine kohärente visuelle Präsenz.",
    pkg2Includes: [
      "20 maßgeschneiderte Visuals",
      "Mehrere Creative Directions & Settings",
      "Formate frei kombinierbar",
      "Social Media · Stories · Website · Banners",
      "2 Revisionsschleifen",
    ],
    pkg3Num: "Package 03",
    pkg3Title: "Bespoke",
    pkg3Price: "Auf Anfrage",
    pkg3Lead: "Komplett um deine Vision herum gebaut.",
    pkg3Body:
      "Jede Marke ist anders. Wir gestalten ein Bespoke-Paket für Produkte, Ästhetik, kreative Vision und Content-Bedarf — von einzelnen Konzepten bis zu größeren Campaigns.",
    pkg3Cta: "Lass uns ein kostenloses Call machen und gemeinsam etwas schaffen →",
    process: "Process",
    processKicker: "Was wir von dir brauchen",
    processTitle: "Zeig uns deine Vision.",
    processP1:
      "Teile alles, was die Welt definiert, die du schaffen willst · Mood, Story, Licht, Farben, Referenzen, Moodboards und das Gefühl, das deine Visuals tragen sollen.",
    processP2:
      "Für deine Visuals brauchen wir hochwertige Stillleben-Aufnahmen deines Produkts — idealerweise aus mehreren Winkeln.",
    processP3:
      "Je besser wir dein Produkt sehen und verstehen, desto präziser bringen wir deine Vision zum Leben.",
    contactLabel: "Project inquiries",
    contactNote:
      "Produkt, Deadline, Stil · wir melden uns mit einem klaren Angebot.",
    imprint: "Impressum",
    privacy: "Datenschutz",
    terms: "Terms",
    aiTransparency: "AI Transparency",
    legalLabel: "Legal",
  },
  fr: {
    landingCta: "What we do",
    navWork: "Work",
    navOffer: "Offer",
    navContact: "Contact",
    whatWeDo: "Ce que nous faisons",
    headlineLine1: "Big vision.",
    headlineLine2: "Without the big production.",
    ledeLead:
      "Lancer une marque, créer un site ou développer votre portfolio ?",
    ledeRest:
      "Nous utilisons l’IA pour transformer votre vision en images élevées — sans le temps, le coût ni la complexité d’un shooting traditionnel.",
    ledeClose: "Your product. Your vision. Made to seem real.",
    selectedWork: "Selected work",
    workEmpty: "Nouveaux travaux bientôt.",
    catAll: "All",
    catSwimwear: "Swimwear",
    catBeauty: "Beauty",
    catJewelry: "Jewelry",
    catFashion: "Fashion",
    aiTag: "AI generated model",
    metaFilm: "Généré pour un rendu film 35 mm",
    metaIoniClient: "Client: IONI Swim",
    metaIoniDirection:
      "Creative Direction: Island escape · friendship · sun-soaked moments · coconuts · 35mm analog · visible grain · nostalgic summer",
    metaEditorial: "Editorial",
    metaProduct: "Product",
    metaStillLife: "Still life product",
    metaAi: "AI generated",
    offer: "Offer",
    pkg1Num: "Package 01",
    pkg1Title: "The Edit",
    pkg1Price: "€150",
    pkg1Lead:
      "Une première étape soignée pour faire connaissance et explorer ce que nous pouvons créer ensemble.",
    pkg1Body:
      "Cinq visuels sur mesure, pensés autour de votre produit, de votre esthétique et de votre identité de marque.",
    pkg1Includes: [
      "5 visuels sur mesure",
      "1 direction créative",
      "Jusqu’à 2 formats digitaux",
      "1 round de retouches",
      "Intro unique par marque",
    ],
    pkg2Num: "Package 02",
    pkg2Title: "The Campaign",
    pkg2Price: "€650",
    pkg2Lead: "Un univers visuel complet, pensé autour de votre marque.",
    pkg2Body:
      "Vingt visuels sur mesure pour faire vivre vos produits à travers plusieurs décors et formats digitaux. Une présence visuelle cohérente.",
    pkg2Includes: [
      "20 visuels sur mesure",
      "Plusieurs directions créatives & décors",
      "Formats au choix",
      "Social Media · Stories · Website · Banners",
      "2 rounds de retouches",
    ],
    pkg3Num: "Package 03",
    pkg3Title: "Bespoke",
    pkg3Price: "Sur devis",
    pkg3Lead: "Entièrement construit autour de votre vision.",
    pkg3Body:
      "Chaque marque est différente. Créons un package sur mesure adapté à vos produits, votre esthétique, votre vision créative et vos besoins de contenu.",
    pkg3Cta: "Prenons un appel offert et créons quelque chose ensemble →",
    process: "Process",
    processKicker: "Ce dont nous avons besoin",
    processTitle: "Montrez-nous votre vision.",
    processP1:
      "Partagez tout ce qui définit le monde que vous voulez créer · mood, histoire, lumière, couleurs, références, moodboards et le sentiment que vos visuels doivent porter.",
    processP2:
      "Pour créer vos visuels, nous aurons besoin d’images still-life de haute qualité de votre produit, idéalement sous plusieurs angles.",
    processP3:
      "Plus nous voyons et comprenons votre produit, plus précisément nous donnons vie à votre vision.",
    contactLabel: "Project inquiries",
    contactNote:
      "Produit, deadline, style · nous revenons avec une offre claire.",
    imprint: "Mentions légales",
    privacy: "Confidentialité",
    terms: "Terms",
    aiTransparency: "AI Transparency",
    legalLabel: "Legal",
  },
  es: {
    landingCta: "What we do",
    navWork: "Work",
    navOffer: "Offer",
    navContact: "Contacto",
    whatWeDo: "Qué hacemos",
    headlineLine1: "Big vision.",
    headlineLine2: "Without the big production.",
    ledeLead:
      "¿Empezar una marca, crear una web o ampliar tu portfolio?",
    ledeRest:
      "Usamos IA para convertir tu visión en imagery elevada — sin el tiempo, coste ni complejidad de un shooting tradicional.",
    ledeClose: "Your product. Your vision. Made to seem real.",
    selectedWork: "Selected work",
    workEmpty: "Nuevos trabajos pronto.",
    catAll: "All",
    catSwimwear: "Swimwear",
    catBeauty: "Beauty",
    catJewelry: "Jewelry",
    catFashion: "Fashion",
    aiTag: "AI generated model",
    metaFilm: "Generado con look de película 35 mm",
    metaIoniClient: "Client: IONI Swim",
    metaIoniDirection:
      "Creative Direction: Island escape · friendship · sun-soaked moments · coconuts · 35mm analog · visible grain · nostalgic summer",
    metaEditorial: "Editorial",
    metaProduct: "Product",
    metaStillLife: "Still life product",
    metaAi: "AI generated",
    offer: "Offer",
    pkg1Num: "Package 01",
    pkg1Title: "The Edit",
    pkg1Price: "€150",
    pkg1Lead:
      "Un primer paso curado para conocernos y explorar qué podemos crear juntos.",
    pkg1Body:
      "Cinco visuales a medida, pensados en torno a tu producto, estética e identidad de marca.",
    pkg1Includes: [
      "5 visuales a medida",
      "1 dirección creativa",
      "Hasta 2 formatos digitales",
      "1 ronda de refinamiento",
      "Intro única por marca",
    ],
    pkg2Num: "Package 02",
    pkg2Title: "The Campaign",
    pkg2Price: "€650",
    pkg2Lead: "Un mundo visual completo, pensado en torno a tu marca.",
    pkg2Body:
      "Veinte visuales a medida para dar vida a tus productos en múltiples escenarios y formatos digitales. Una presencia visual coherente.",
    pkg2Includes: [
      "20 visuales a medida",
      "Múltiples direcciones creativas y escenarios",
      "Formatos a tu elección",
      "Social Media · Stories · Website · Banners",
      "2 rondas de refinamiento",
    ],
    pkg3Num: "Package 03",
    pkg3Title: "Bespoke",
    pkg3Price: "Bajo petición",
    pkg3Lead: "Hecho enteramente alrededor de tu visión.",
    pkg3Body:
      "Cada marca es distinta. Creemos un paquete a medida según tus productos, estética, visión creativa y necesidades de contenido.",
    pkg3Cta: "Hagamos una llamada gratuita y creemos algo juntos →",
    process: "Process",
    processKicker: "Lo que necesitamos de ti",
    processTitle: "Muéstranos tu visión.",
    processP1:
      "Comparte todo lo que define el mundo que quieres crear · mood, historia, luz, colores, referencias, moodboards y la sensación que deben transmitir tus visuales.",
    processP2:
      "Para crear tus visuales necesitaremos imágenes still-life de alta calidad de tu producto, idealmente desde varios ángulos.",
    processP3:
      "Cuanto mejor veamos y entendamos tu producto, con más precisión daremos vida a tu visión.",
    contactLabel: "Project inquiries",
    contactNote:
      "Producto, deadline, estilo · volvemos con una oferta clara.",
    imprint: "Aviso legal",
    privacy: "Privacidad",
    terms: "Terms",
    aiTransparency: "AI Transparency",
    legalLabel: "Legal",
  },
  it: {
    landingCta: "What we do",
    navWork: "Work",
    navOffer: "Offer",
    navContact: "Contatto",
    whatWeDo: "Cosa facciamo",
    headlineLine1: "Big vision.",
    headlineLine2: "Without the big production.",
    ledeLead:
      "Lanciare un brand, creare un sito o ampliare il portfolio?",
    ledeRest:
      "Usiamo l’AI per trasformare la tua visione in imagery elevata — senza tempo, costi e complessità di uno shooting tradizionale.",
    ledeClose: "Your product. Your vision. Made to seem real.",
    selectedWork: "Selected work",
    workEmpty: "Nuovi lavori in arrivo.",
    catAll: "All",
    catSwimwear: "Swimwear",
    catBeauty: "Beauty",
    catJewelry: "Jewelry",
    catFashion: "Fashion",
    aiTag: "AI generated model",
    metaFilm: "Generato per un look da film 35 mm",
    metaIoniClient: "Client: IONI Swim",
    metaIoniDirection:
      "Creative Direction: Island escape · friendship · sun-soaked moments · coconuts · 35mm analog · visible grain · nostalgic summer",
    metaEditorial: "Editorial",
    metaProduct: "Product",
    metaStillLife: "Still life product",
    metaAi: "AI generated",
    offer: "Offer",
    pkg1Num: "Package 01",
    pkg1Title: "The Edit",
    pkg1Price: "€150",
    pkg1Lead:
      "Un primo passo curato per conoscerci ed esplorare cosa possiamo creare insieme.",
    pkg1Body:
      "Cinque visual su misura, pensati intorno al tuo prodotto, estetico e identità di brand.",
    pkg1Includes: [
      "5 visual su misura",
      "1 creative direction",
      "Fino a 2 formati digitali",
      "1 round di refinement",
      "Intro una tantum per brand",
    ],
    pkg2Num: "Package 02",
    pkg2Title: "The Campaign",
    pkg2Price: "€650",
    pkg2Lead: "Un mondo visuale completo, pensato intorno al tuo brand.",
    pkg2Body:
      "Venti visual su misura per dare vita ai tuoi prodotti attraverso setting e formati digitali. Una presenza visuale coerente.",
    pkg2Includes: [
      "20 visual su misura",
      "Più creative direction & setting",
      "Formati a scelta",
      "Social Media · Stories · Website · Banners",
      "2 round di refinement",
    ],
    pkg3Num: "Package 03",
    pkg3Title: "Bespoke",
    pkg3Price: "Su richiesta",
    pkg3Lead: "Interamente costruito intorno alla tua visione.",
    pkg3Body:
      "Ogni brand è diverso. Creiamo un package su misura per prodotti, estetico, visione creativa e bisogni di content.",
    pkg3Cta: "Facciamo una call gratuita e creiamo qualcosa insieme →",
    process: "Process",
    processKicker: "Cosa ci serve da te",
    processTitle: "Mostraci la tua visione.",
    processP1:
      "Condividi tutto ciò che definisce il mondo che vuoi creare · mood, storia, luce, colori, riferimenti, moodboard e la sensazione che i tuoi visual devono portare.",
    processP2:
      "Per creare i tuoi visual ci servono immagini still-life di alta qualità del prodotto, idealmente da più angolazioni.",
    processP3:
      "Più vediamo e comprendiamo il tuo prodotto, più accuratamente diamo vita alla tua visione.",
    contactLabel: "Project inquiries",
    contactNote:
      "Prodotto, deadline, stile · torniamo con un’offerta chiara.",
    imprint: "Note legali",
    privacy: "Privacy",
    terms: "Terms",
    aiTransparency: "AI Transparency",
    legalLabel: "Legal",
  },
};
