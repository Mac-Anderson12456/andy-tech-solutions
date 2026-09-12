// Short, reusable UI strings (nav, buttons, labels, footer chrome).
// Longer page copy lives directly in each page file as bilingual objects,
// which keeps paragraph-level translations easy to find and edit.
export const translations = {
  en: {
    nav_home: 'Home',
    nav_services: 'Services',
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_blog: 'Blog',
    nav_contact: 'Contact',
    nav_requestService: 'Request a Service',

    footer_navigate: 'Navigate',
    footer_services: 'Services',
    footer_contact: 'Contact',
    footer_rights: 'All rights reserved.',
    footer_foundedBy: 'Founded by Mac Anderson',
    footer_tagline: 'Reliable Technology. Practical Solutions. Professional Service.',

    common_readMore: 'Read more',
    common_viewAll: 'View all',
    common_requestQuote: 'Request a Quote',
    common_call: 'Call',
    common_whatsapp: 'WhatsApp',
    common_email: 'Email',
    common_serviceArea: 'Service Area',
    common_hours: 'Hours',
    common_backToBlog: 'Back to Blog',
    common_backHome: 'Back to Home',
    common_min: 'min read',

    lang_switchTo: 'Passer au français',
  },
  fr: {
    nav_home: 'Accueil',
    nav_services: 'Services',
    nav_about: 'À propos',
    nav_projects: 'Projets',
    nav_blog: 'Blog',
    nav_contact: 'Contact',
    nav_requestService: 'Demander un service',

    footer_navigate: 'Navigation',
    footer_services: 'Services',
    footer_contact: 'Contact',
    footer_rights: 'Tous droits réservés.',
    footer_foundedBy: 'Fondé par Mac Anderson',
    footer_tagline: 'Technologie fiable. Solutions pratiques. Service professionnel.',

    common_readMore: 'Lire la suite',
    common_viewAll: 'Voir tout',
    common_requestQuote: 'Demander un devis',
    common_call: 'Appeler',
    common_whatsapp: 'WhatsApp',
    common_email: 'E-mail',
    common_serviceArea: 'Zone desservie',
    common_hours: 'Horaires',
    common_backToBlog: 'Retour au blog',
    common_backHome: "Retour à l'accueil",
    common_min: 'min de lecture',

    lang_switchTo: 'Switch to English',
  },
}

export const getT = (lang) => (key) => translations[lang]?.[key] ?? translations.en[key] ?? key
