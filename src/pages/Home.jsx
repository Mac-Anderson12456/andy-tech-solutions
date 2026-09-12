import { ArrowUpRight, Wrench, Users, MessageCircle, ShieldCheck } from 'lucide-react'
import SEO from '../components/SEO'
import Button from '../components/Button'
import StatusPill from '../components/StatusPill'
import SectionHeading from '../components/SectionHeading'
import NetworkDiagram from '../components/NetworkDiagram'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import Testimonials from '../components/Testimonials'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { images } from '../data/images'
import { useLanguage } from '../i18n/LanguageContext'

const whyUs = [
  {
    icon: Wrench,
    title: { en: 'Practical, hands-on experience', fr: 'Une expérience pratique de terrain' },
    text: {
      en: 'Real field work across IT, networking, CCTV, Starlink, and solar, not just theory.',
      fr: 'Du vrai travail de terrain en informatique, réseau, vidéosurveillance, Starlink et solaire, pas juste de la théorie.',
    },
  },
  {
    icon: ShieldCheck,
    title: { en: 'Honest communication', fr: 'Une communication honnête' },
    text: {
      en: 'You get a clear diagnosis and straight answers before any work begins.',
      fr: 'Vous obtenez un diagnostic clair et des réponses franches avant le début des travaux.',
    },
  },
  {
    icon: Users,
    title: { en: 'One point of contact', fr: 'Un seul interlocuteur' },
    text: {
      en: 'From computers to cameras to connectivity, one team handles it end to end.',
      fr: "Des ordinateurs aux caméras en passant par la connectivité, une seule équipe gère tout de bout en bout.",
    },
  },
  {
    icon: MessageCircle,
    title: { en: 'Reliable follow-up', fr: 'Un suivi fiable' },
    text: {
      en: 'Support does not stop at installation. Maintenance is part of the service.',
      fr: "Le support ne s'arrête pas à l'installation. La maintenance fait partie du service.",
    },
  },
]

const quickAnswers = [
  {
    q: { en: 'What we do', fr: 'Ce que nous faisons' },
    a: {
      en: 'Practical technology services: IT, networking, CCTV, Starlink, solar, and web development.',
      fr: 'Des services technologiques pratiques : informatique, réseau, vidéosurveillance, Starlink, solaire et développement web.',
    },
  },
  {
    q: { en: 'Who we serve', fr: 'Qui nous servons' },
    a: {
      en: 'Individuals, homes, offices, shops, schools, and small businesses.',
      fr: 'Particuliers, foyers, bureaux, boutiques, écoles et petites entreprises.',
    },
  },
  {
    q: { en: 'Why trust us', fr: 'Pourquoi nous faire confiance' },
    a: {
      en: 'Real field experience, honest pricing conversations, and clear communication.',
      fr: 'Une vraie expérience de terrain, des échanges honnêtes sur les prix et une communication claire.',
    },
  },
  {
    q: { en: 'How to start', fr: 'Comment commencer' },
    a: {
      en: 'Send a service request and we will respond and schedule a visit or call.',
      fr: 'Envoyez une demande de service, nous répondrons et planifierons une visite ou un appel.',
    },
  },
]

const statusTags = ['IT & Repairs', 'Networking', 'CCTV', 'Starlink', 'Solar', 'Web Dev']
const statusTagsFr = ['Info & Réparations', 'Réseau', 'Vidéosurveillance', 'Starlink', 'Solaire', 'Web']

const copy = {
  en: {
    seoDescription:
      'Andy TecH Solutions provides reliable IT, networking, CCTV, Starlink, solar, and web development services for homes, offices, and small businesses.',
    statusPill: 'Systems Online',
    statusPillSub: 'Technology Services',
    headline1: 'Technology Solutions That Keep You',
    headlineConnected: 'Connected',
    headlineSecure: 'Secure',
    headline2: 'and Productive.',
    subhead:
      'Reliable IT, networking, CCTV, Starlink, solar, and digital solutions, built for homes, individuals, and businesses that need technology to simply work.',
    ctaPrimary: 'Request a Service',
    ctaSecondary: 'Explore Our Services',
    servicesEyebrow: 'Services',
    servicesTitle: 'Six ways we keep you running',
    servicesIntro: 'From a single laptop repair to a full network, camera, and power setup.',
    servicesViewAll: 'View all services',
    aboutEyebrow: 'About the founder',
    aboutTitle: 'Built on practical field experience',
    aboutP1:
      'Andy TecH Solutions is founded by Mac Anderson, who combines web and digital development experience from Jongo Hub with hands-on field work in networking, CCTV, Starlink, solar, and computer maintenance from FrancelCityTech in Buea.',
    aboutP2:
      'That mix of formal training and practical, real-world troubleshooting is what shapes how Andy TecH Solutions approaches every job: clear communication, realistic expectations, and work that holds up.',
    aboutCta: 'Read the full story',
    whyEyebrow: 'Why choose us',
    whyTitle: 'Genuine strengths, not slogans',
    whyIntro: 'No inflated claims, just what actually sets the work apart.',
    projectsEyebrow: 'Recent work',
    projectsTitle: 'Featured projects',
    projectsIntro: 'A look at real installations and practice builds across our service areas.',
    projectsViewAll: 'View full portfolio',
    ctaBandTitle: "Have a technology problem? Let's fix it.",
    ctaBandText: "Tell us what's going on and we'll get back to you to schedule a visit.",
    ctaBandPrimary: 'Request a Service',
    ctaBandSecondary: 'Explore Services',
  },
  fr: {
    seoDescription:
      "Andy TecH Solutions propose des services fiables d'informatique, réseau, vidéosurveillance, Starlink, solaire et développement web pour les foyers, bureaux et petites entreprises.",
    statusPill: 'Systèmes opérationnels',
    statusPillSub: 'Services technologiques',
    headline1: 'Des solutions technologiques qui vous gardent',
    headlineConnected: 'connectés',
    headlineSecure: 'sécurisés',
    headline2: 'et productifs.',
    subhead:
      "Des solutions fiables en informatique, réseau, vidéosurveillance, Starlink, solaire et numérique, conçues pour les foyers, particuliers et entreprises qui ont besoin d'une technologie qui fonctionne simplement.",
    ctaPrimary: 'Demander un service',
    ctaSecondary: 'Découvrir nos services',
    servicesEyebrow: 'Services',
    servicesTitle: 'Six façons de vous garder opérationnel',
    servicesIntro: "D'une simple réparation d'ordinateur portable à une installation complète de réseau, caméras et énergie.",
    servicesViewAll: 'Voir tous les services',
    aboutEyebrow: 'À propos du fondateur',
    aboutTitle: "Bâti sur une expérience pratique de terrain",
    aboutP1:
      "Andy TecH Solutions est fondée par Mac Anderson, qui combine une expérience en développement web et numérique acquise chez Jongo Hub avec un travail de terrain en réseau, vidéosurveillance, Starlink, solaire et maintenance informatique chez FrancelCityTech à Buea.",
    aboutP2:
      "Ce mélange de formation formelle et de dépannage pratique et concret façonne la manière dont Andy TecH Solutions aborde chaque mission : une communication claire, des attentes réalistes et un travail qui dure.",
    aboutCta: "Lire toute l'histoire",
    whyEyebrow: 'Pourquoi nous choisir',
    whyTitle: 'De vraies forces, pas des slogans',
    whyIntro: "Pas d'affirmations exagérées, juste ce qui distingue vraiment notre travail.",
    projectsEyebrow: 'Travaux récents',
    projectsTitle: 'Projets phares',
    projectsIntro: "Un aperçu de vraies installations et de projets d'entraînement dans tous nos domaines de service.",
    projectsViewAll: 'Voir tout le portfolio',
    ctaBandTitle: 'Un problème technologique ? Réglons-le.',
    ctaBandText: 'Dites-nous ce qui se passe et nous vous recontacterons pour planifier une visite.',
    ctaBandPrimary: 'Demander un service',
    ctaBandSecondary: 'Découvrir les services',
  },
}

export default function Home() {
  const { language } = useLanguage()
  const c = copy[language]
  const featured = projects.slice(0, 3)
  const tags = language === 'fr' ? statusTagsFr : statusTags

  return (
    <>
      <SEO title={language === 'fr' ? 'Accueil' : 'Home'} description={c.seoDescription} path="/" />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink/8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col items-start gap-6">
            <StatusPill tone="signal">
              {c.statusPill} · {c.statusPillSub}
            </StatusPill>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
              {c.headline1}{' '}
              <span className="text-volt-dark">{c.headlineConnected}</span>,{' '}
              <span className="text-wire">{c.headlineSecure}</span> {c.headline2}
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-slate sm:text-lg">{c.subhead}</p>
            <div className="flex flex-wrap gap-3">
              <Button to="/contact" variant="primary">
                {c.ctaPrimary}
              </Button>
              <Button to="/services" variant="outline">
                {c.ctaSecondary}
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag, i) => (
                <StatusPill key={tag} tone={['volt', 'wire', 'signal'][i % 3]}>
                  {tag}
                </StatusPill>
              ))}
            </div>
          </div>

          <NetworkDiagram className="hidden sm:block" />
        </div>
      </section>

      {/* WHAT / WHO / WHY / HOW */}
      <section className="border-b border-ink/8 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-4">
          {quickAnswers.map((item) => (
            <div key={item.q.en} className="flex flex-col gap-1.5">
              <p className="font-mono text-xs uppercase tracking-wider text-wire-dark">{item.q[language]}</p>
              <p className="text-sm text-slate">{item.a[language]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow={c.servicesEyebrow} title={c.servicesTitle} description={c.servicesIntro} />
            <Button to="/services" variant="outline" className="shrink-0">
              {c.servicesViewAll} <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="border-y border-ink/8 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={images['founder-portrait']}
              alt="Mac Anderson, founder of Andy TecH Solutions"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-4">
            <SectionHeading eyebrow={c.aboutEyebrow} title={c.aboutTitle} />
            <p className="text-slate leading-relaxed">{c.aboutP1}</p>
            <p className="text-slate leading-relaxed">{c.aboutP2}</p>
            <Button to="/about" variant="dark" className="w-fit">
              {c.aboutCta}
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow={c.whyEyebrow}
          title={c.whyTitle}
          description={c.whyIntro}
          align="center"
          className="mx-auto text-center"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map(({ icon: Icon, title, text }) => (
            <div key={title.en} className="flex flex-col items-start gap-3 rounded-2xl border border-ink/8 bg-white p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-signal/10 text-signal-dark">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <h3 className="font-display font-semibold text-ink">{title[language]}</h3>
              <p className="text-sm text-slate">{text[language]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="border-t border-ink/8 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow={c.projectsEyebrow} title={c.projectsTitle} description={c.projectsIntro} />
            <Button to="/projects" variant="outline" className="shrink-0">
              {c.projectsViewAll} <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA BAND */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold text-paper sm:text-3xl">{c.ctaBandTitle}</h2>
            <p className="mt-2 text-paper/70">{c.ctaBandText}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/contact" variant="primary">
              {c.ctaBandPrimary}
            </Button>
            <Button to="/services" variant="outline-light">
              {c.ctaBandSecondary}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
