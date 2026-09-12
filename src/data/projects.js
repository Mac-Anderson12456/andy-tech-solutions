// context values are stable ids used to label cards honestly. Display text
// is translated via CONTEXT_LABELS, never implying a named client unless
// that's actually true.
export const CONTEXT = {
  FIELD: 'FIELD',
  DEMO: 'DEMO',
  TRAINING: 'TRAINING',
}

export const CONTEXT_LABELS = {
  FIELD: { en: 'Field Installation', fr: 'Installation sur le terrain' },
  DEMO: { en: 'Demo Project', fr: 'Projet de démonstration' },
  TRAINING: { en: 'Training / Community Program', fr: 'Formation / Programme communautaire' },
}

// Canonical (English) category ids used for filtering; display labels are
// translated via CATEGORY_LABELS.
export const categories = [
  'All',
  'CCTV',
  'Networking',
  'Starlink',
  'Solar',
  'Computer Maintenance',
  'Web Development',
  'UI/UX',
]

export const CATEGORY_LABELS = {
  All: { en: 'All', fr: 'Tout' },
  CCTV: { en: 'CCTV', fr: 'Vidéosurveillance' },
  Networking: { en: 'Networking', fr: 'Réseau' },
  Starlink: { en: 'Starlink', fr: 'Starlink' },
  Solar: { en: 'Solar', fr: 'Solaire' },
  'Computer Maintenance': { en: 'Computer Maintenance', fr: 'Maintenance informatique' },
  'Web Development': { en: 'Web Development', fr: 'Développement web' },
  'UI/UX': { en: 'UI/UX', fr: 'UI/UX' },
}

export const projects = [
  {
    id: 'solar-powered-cctv',
    title: { en: 'Solar-Powered CCTV Camera', fr: 'Caméra de vidéosurveillance solaire' },
    category: 'CCTV',
    context: CONTEXT.FIELD,
    description: {
      en: 'A solar-powered PTZ security camera mounted and wired for a property with unreliable grid power, combining CCTV and solar into one self-sufficient unit.',
      fr: "Une caméra de sécurité PTZ solaire installée et câblée pour une propriété à l'alimentation électrique instable, combinant vidéosurveillance et énergie solaire en une seule unité autonome.",
    },
    equipment: ['Solar panel', 'PTZ IP camera', 'Wall mount bracket'],
    image: 'cctv-solar-camera',
  },
  {
    id: 'cctv-nvr-setup',
    title: { en: 'Multi-Camera CCTV & NVR Setup', fr: 'Installation vidéosurveillance multi-caméras et NVR' },
    category: 'CCTV',
    context: CONTEXT.FIELD,
    description: {
      en: 'Staging and configuration of a five-camera CCTV kit with a network video recorder, network switch, and Cat6 cabling ahead of installation.',
      fr: "Préparation et configuration d'un kit de cinq caméras avec enregistreur réseau, commutateur réseau et câblage Cat6 avant installation.",
    },
    equipment: ['5x IP cameras', 'NVR', 'Network switch', 'Cat6 cable'],
    image: 'cctv-kit',
  },
  {
    id: 'starlink-deployment',
    title: { en: 'Starlink Kit Deployment', fr: 'Déploiement de kits Starlink' },
    category: 'Starlink',
    context: CONTEXT.FIELD,
    description: {
      en: 'Preparing multiple Starlink kits, dish, router, and cabling, for installation across separate sites.',
      fr: "Préparation de plusieurs kits Starlink (antenne, routeur, câblage) pour installation sur différents sites.",
    },
    equipment: ['Starlink dish', 'Starlink router', 'Mounting cable'],
    image: 'starlink-kits',
  },
  {
    id: 'router-networking',
    title: { en: 'Router Installation & Wi-Fi Setup', fr: 'Installation de routeur et configuration Wi-Fi' },
    category: 'Networking',
    context: CONTEXT.FIELD,
    description: {
      en: 'Unboxing and configuring a multi-antenna router on-site to extend reliable Wi-Fi coverage.',
      fr: "Déballage et configuration sur site d'un routeur multi-antennes pour étendre la couverture Wi-Fi.",
    },
    equipment: ['Tenda multi-antenna router'],
    image: 'router-networking',
  },
  {
    id: 'network-rack',
    title: { en: 'Network Rack & Panel Work', fr: 'Travail sur baie réseau et panneau électrique' },
    category: 'Networking',
    context: CONTEXT.FIELD,
    description: {
      en: 'Working through a patch panel and breaker/network rack to troubleshoot and organize an existing installation.',
      fr: "Intervention sur un panneau de brassage et une baie réseau/disjoncteurs pour dépanner et organiser une installation existante.",
    },
    equipment: ['Patch panel', 'Network rack', 'Cat6 cabling'],
    image: 'network-rack-work',
  },
  {
    id: 'solar-street-light',
    title: { en: 'Solar LED Street Light Installation', fr: "Installation d'un lampadaire solaire LED" },
    category: 'Solar',
    context: CONTEXT.FIELD,
    description: {
      en: 'Preparing a solar LED street light unit and panel for mounting and commissioning.',
      fr: "Préparation d'un lampadaire solaire LED et de son panneau pour montage et mise en service.",
    },
    equipment: ['Solar LED street light', 'Solar panel'],
    image: 'solar-street-light',
  },
  {
    id: 'laptop-hardware-repair',
    title: { en: 'Laptop Hardware Diagnosis & Repair', fr: "Diagnostic et réparation matérielle d'ordinateur portable" },
    category: 'Computer Maintenance',
    context: CONTEXT.FIELD,
    description: {
      en: 'Disassembling a laptop to inspect the motherboard, RAM, and battery, and sourcing the correct replacement parts.',
      fr: "Démontage d'un ordinateur portable pour inspecter la carte mère, la RAM et la batterie, et trouver les bonnes pièces de remplacement.",
    },
    equipment: ['HP laptop', 'Replacement components'],
    image: 'laptop-repair',
  },
  {
    id: 'webdev-dental-demo',
    title: { en: 'Dental Clinic Website: Practice Build', fr: "Site web de clinique dentaire : projet d'entraînement" },
    category: 'Web Development',
    context: CONTEXT.DEMO,
    description: {
      en: 'A front-end practice project for a fictional dental clinic: a calm, trust-focused homepage plus a booking page with an embedded map and contact form. Built to practice layout, UI/UX, and booking-flow design, not a live client site.',
      fr: "Un projet d'entraînement front-end pour une clinique dentaire fictive : une page d'accueil rassurante et une page de réservation avec carte intégrée et formulaire de contact. Réalisé pour pratiquer la mise en page et le design UI/UX, ce n'est pas un site client réel.",
    },
    equipment: ['HTML/CSS/JS', 'Figma UI/UX design'],
    image: 'webdev-dental-demo-1',
  },
  {
    id: 'webdev-bowling-demo',
    title: { en: 'Bowling Pro Shop Website: Practice Build', fr: "Site web de magasin de bowling : projet d'entraînement" },
    category: 'Web Development',
    context: CONTEXT.DEMO,
    description: {
      en: 'A practice e-commerce-style front-end for a fictional bowling equipment shop, including a product-focused hero and a photo gallery. Built to practice front-end and JavaScript development, not a live client site.',
      fr: "Un front-end e-commerce d'entraînement pour un magasin d'équipement de bowling fictif, avec une page d'accueil produit et une galerie photo. Réalisé pour pratiquer le développement front-end, ce n'est pas un site client réel.",
    },
    equipment: ['HTML/CSS/JS', 'UI/UX design'],
    image: 'webdev-bowling-demo-1',
  },
  {
    id: 'jongo-hub-network-training',
    title: { en: 'Network Topology & Diagnostics Practice', fr: 'Pratique de topologie réseau et diagnostic' },
    category: 'UI/UX',
    context: CONTEXT.TRAINING,
    description: {
      en: 'Working through network topology diagrams and diagnostics tools at Jongo Hub as part of ongoing technical development.',
      fr: "Travail sur des diagrammes de topologie réseau et des outils de diagnostic à Jongo Hub, dans le cadre d'une formation technique continue.",
    },
    equipment: ['Network simulation software'],
    image: 'jongo-hub-network-diagram',
  },
]
