export const services = [
  {
    id: 'it-computer',
    icon: 'Laptop',
    name: { en: 'IT & Computer Services', fr: 'Services informatiques' },
    description: {
      en: 'Diagnostics and repair for slow, faulty, or infected computers, handled carefully and explained clearly.',
      fr: "Diagnostic et réparation pour les ordinateurs lents, défectueux ou infectés, traités avec soin et expliqués clairement.",
    },
    tasks: {
      en: [
        'Computer diagnostics',
        'Hardware troubleshooting',
        'Software troubleshooting',
        'Virus & malware cleanup',
        'Operating system installation',
        'Software installation',
        'System updates',
        'PC optimization',
      ],
      fr: [
        'Diagnostic informatique',
        'Dépannage matériel',
        'Dépannage logiciel',
        'Suppression de virus et logiciels malveillants',
        "Installation du système d'exploitation",
        'Installation de logiciels',
        'Mises à jour système',
        "Optimisation du PC",
      ],
    },
    benefits: {
      en: [
        'Faster, more reliable machines',
        'Clear explanation of what was wrong',
        'No unnecessary parts or software',
      ],
      fr: [
        'Des machines plus rapides et plus fiables',
        "Une explication claire du problème",
        "Aucune pièce ou logiciel inutile",
      ],
    },
    image: 'laptop-repair',
  },
  {
    id: 'networking-security',
    icon: 'Router',
    name: { en: 'Networking & Security', fr: 'Réseau et sécurité' },
    description: {
      en: 'Router setup, Wi-Fi coverage, and basic network security for homes, shops, and offices.',
      fr: "Configuration de routeur, couverture Wi-Fi et sécurité réseau de base pour les maisons, boutiques et bureaux.",
    },
    tasks: {
      en: [
        'Router installation',
        'Router configuration',
        'Wi-Fi setup',
        'Network troubleshooting',
        'Network configuration',
        'Network optimization',
        'Basic network security',
      ],
      fr: [
        'Installation de routeur',
        'Configuration de routeur',
        'Configuration Wi-Fi',
        'Dépannage réseau',
        'Configuration réseau',
        'Optimisation réseau',
        'Sécurité réseau de base',
      ],
    },
    benefits: {
      en: [
        'Stable, full-coverage Wi-Fi',
        'Fewer dropped connections',
        'Sensible security defaults',
      ],
      fr: [
        'Un Wi-Fi stable et bien couvert',
        'Moins de coupures de connexion',
        'Des réglages de sécurité raisonnables',
      ],
    },
    image: 'router-networking',
  },
  {
    id: 'cctv-surveillance',
    icon: 'Camera',
    name: { en: 'CCTV & Surveillance', fr: 'Vidéosurveillance' },
    description: {
      en: 'Camera installation and configuration for homes, shops, and compounds, viewable from your phone.',
      fr: 'Installation et configuration de caméras pour maisons, boutiques et concessions, consultables depuis votre téléphone.',
    },
    tasks: {
      en: [
        'CCTV installation',
        'Camera configuration',
        'Network camera setup',
        'CCTV troubleshooting',
        'CCTV maintenance',
      ],
      fr: [
        'Installation de vidéosurveillance',
        'Configuration des caméras',
        'Configuration de caméras réseau',
        'Dépannage de vidéosurveillance',
        'Maintenance de vidéosurveillance',
      ],
    },
    benefits: {
      en: [
        'Remote viewing from your phone',
        'Cameras positioned for real coverage',
        'Ongoing maintenance support',
      ],
      fr: [
        'Visionnage à distance depuis votre téléphone',
        'Caméras positionnées pour une vraie couverture',
        'Support de maintenance continu',
      ],
    },
    image: 'cctv-kit',
  },
  {
    id: 'starlink',
    icon: 'Satellite',
    name: { en: 'Starlink Solutions', fr: 'Solutions Starlink' },
    description: {
      en: 'Starlink installation and Wi-Fi distribution so every room gets a strong, dependable signal.',
      fr: "Installation Starlink et distribution Wi-Fi pour un signal fort et fiable dans chaque pièce.",
    },
    tasks: {
      en: [
        'Starlink installation',
        'Starlink setup',
        'Router configuration',
        'Wi-Fi distribution',
        'Connectivity troubleshooting',
        'Network optimization',
      ],
      fr: [
        'Installation Starlink',
        'Configuration Starlink',
        'Configuration de routeur',
        'Distribution Wi-Fi',
        'Dépannage de connectivité',
        'Optimisation réseau',
      ],
    },
    benefits: {
      en: [
        'Internet in low-coverage areas',
        'Signal distributed across the property',
        'Troubleshooting when things slow down',
      ],
      fr: [
        'Internet dans les zones mal couvertes',
        'Signal distribué dans toute la propriété',
        'Dépannage en cas de ralentissement',
      ],
    },
    image: 'starlink-kits',
  },
  {
    id: 'solar',
    icon: 'Sun',
    name: { en: 'Solar Technology', fr: 'Technologie solaire' },
    description: {
      en: 'Solar panel and system installation sized to what you actually need to run.',
      fr: "Installation de panneaux et de systèmes solaires dimensionnés selon vos besoins réels.",
    },
    tasks: {
      en: ['Solar panel installation', 'Solar system setup', 'Troubleshooting', 'Maintenance and support'],
      fr: ['Installation de panneaux solaires', 'Mise en place du système solaire', 'Dépannage', 'Maintenance et support'],
    },
    benefits: {
      en: [
        'Power through grid outages',
        'Systems sized to your real load',
        'Ongoing maintenance available',
      ],
      fr: [
        "De l'électricité même en cas de coupure",
        'Des systèmes dimensionnés à votre charge réelle',
        'Maintenance continue disponible',
      ],
    },
    image: 'solar-street-light',
  },
  {
    id: 'web-digital',
    icon: 'Code2',
    name: { en: 'Web & Digital Solutions', fr: 'Solutions web et numériques' },
    description: {
      en: 'Websites and digital setup built with modern front-end tools and a clean, usable design.',
      fr: "Sites web et présence numérique conçus avec des outils modernes et un design clair et fonctionnel.",
    },
    tasks: {
      en: [
        'Business website development',
        'Front-end development',
        'JavaScript development',
        'UI/UX design',
        'Figma design',
        'Website maintenance',
        'GitHub / project management',
        'Digital presence setup',
      ],
      fr: [
        "Développement de sites web professionnels",
        'Développement front-end',
        'Développement JavaScript',
        'Design UI/UX',
        'Design sur Figma',
        'Maintenance de site web',
        'GitHub / gestion de projet',
        'Mise en place de présence numérique',
      ],
    },
    benefits: {
      en: [
        'A site that works on every device',
        'Design mockups before we build',
        'Ongoing maintenance available',
      ],
      fr: [
        'Un site qui fonctionne sur tous les appareils',
        'Des maquettes avant la construction',
        'Maintenance continue disponible',
      ],
    },
    image: 'webdev-dental-demo-1',
  },
]

export const getServiceById = (id) => services.find((s) => s.id === id)

// Maps each service category to the matching option value in the Contact
// page's "Service Required" dropdown (canonical English values, used
// internally regardless of display language).
export const serviceToContactOption = {
  'it-computer': 'Computer Troubleshooting',
  'networking-security': 'Networking',
  'cctv-surveillance': 'CCTV Installation',
  starlink: 'Starlink Installation',
  solar: 'Solar Installation',
  'web-digital': 'Website Development',
}
