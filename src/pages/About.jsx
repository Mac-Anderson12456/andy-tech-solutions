import { Code2, Cable, GraduationCap, Compass } from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import StatusPill from '../components/StatusPill'
import Button from '../components/Button'
import { images } from '../data/images'
import { useLanguage } from '../i18n/LanguageContext'

const experience = [
  {
    icon: Code2,
    place: 'Jongo Hub',
    period: { en: 'Digital & web development', fr: 'Développement numérique et web' },
    points: {
      en: [
        'Website development and front-end / JavaScript development',
        'UI/UX design with Figma',
        'GitHub and project management workflows',
        'Digital platform and LinkedIn/page management',
      ],
      fr: [
        'Développement de sites web et développement front-end / JavaScript',
        'Design UI/UX avec Figma',
        'Flux de travail GitHub et gestion de projet',
        'Gestion de plateformes numériques et de pages LinkedIn',
      ],
    },
  },
  {
    icon: Cable,
    place: 'FrancelCityTech, Buea',
    period: { en: 'Practical field experience', fr: 'Expérience pratique de terrain' },
    points: {
      en: [
        'CCTV installation and troubleshooting',
        'Starlink installation and configuration',
        'Solar panel and system installation',
        'Router installation, configuration, and network troubleshooting',
        'Computer maintenance, virus removal, OS installation, and PC optimization',
      ],
      fr: [
        'Installation et dépannage de vidéosurveillance',
        'Installation et configuration Starlink',
        'Installation de panneaux et systèmes solaires',
        'Installation de routeurs, configuration et dépannage réseau',
        "Maintenance informatique, suppression de virus, installation du système et optimisation du PC",
      ],
    },
  },
]

const approach = [
  {
    icon: Compass,
    title: { en: 'Diagnose before we quote', fr: 'Diagnostiquer avant de chiffrer' },
    text: {
      en: 'We look at the actual problem first, with no guesswork and no unnecessary parts.',
      fr: "Nous examinons d'abord le vrai problème, sans suppositions ni pièces inutiles.",
    },
  },
  {
    icon: GraduationCap,
    title: { en: "Explain, don't just fix", fr: "Expliquer, pas seulement réparer" },
    text: {
      en: 'You should understand what went wrong and what we did about it.',
      fr: "Vous devriez comprendre ce qui n'allait pas et ce que nous avons fait.",
    },
  },
]

const copy = {
  en: {
    seoTitle: 'About',
    seoDescription:
      'Meet Mac Anderson, founder of Andy TecH Solutions, and the practical technology experience behind the business.',
    whoWeAre: 'Who we are',
    founderName: 'Mac Anderson, Founder',
    intro1:
      'Andy TecH Solutions was started to bring practical, dependable technology support to individuals, homes, and small businesses: the kind of help that fixes the actual problem instead of selling you more than you need.',
    intro2:
      'Founder Mac Anderson combines digital and web development experience gained at Jongo Hub with hands-on field work in networking, CCTV, Starlink, and solar systems from FrancelCityTech in Buea.',
    missionTitle: 'Our Mission',
    missionText:
      'To make reliable technology accessible and understandable, helping homes, offices, and small businesses stay connected, secure, and productive without unnecessary complexity or cost.',
    whatWeDoTitle: 'What We Do',
    whatWeDoText:
      'IT and computer support, networking and security, CCTV and surveillance, Starlink connectivity, solar power systems, and web and digital solutions: six practical service areas, one team.',
    experienceEyebrow: 'Technical experience',
    experienceTitle: 'Where the experience comes from',
    experienceIntro:
      'No exaggerated titles or invented years, just where the practical skills were built.',
    approachEyebrow: 'Our approach',
    approachTitle: 'How we work',
    trustTitle: 'Why customers can trust us',
    trustText:
      "We don't claim to be the biggest or the only option. We aim to be the most straightforward one: honest assessments, practical solutions, and technology explained in plain terms.",
    cta: 'Request a Service',
    readStory: 'Read the full story',
  },
  fr: {
    seoTitle: 'À propos',
    seoDescription:
      "Découvrez Mac Anderson, fondateur d'Andy TecH Solutions, et l'expérience technique pratique derrière l'entreprise.",
    whoWeAre: 'Qui nous sommes',
    founderName: 'Mac Anderson, Fondateur',
    intro1:
      "Andy TecH Solutions a été créée pour apporter un support technologique pratique et fiable aux particuliers, aux foyers et aux petites entreprises : le genre d'aide qui règle le vrai problème au lieu de vous vendre plus que nécessaire.",
    intro2:
      "Le fondateur Mac Anderson combine une expérience en développement numérique et web acquise chez Jongo Hub avec un travail de terrain en réseau, vidéosurveillance, Starlink et systèmes solaires chez FrancelCityTech à Buea.",
    missionTitle: 'Notre mission',
    missionText:
      "Rendre la technologie fiable accessible et compréhensible, en aidant les foyers, bureaux et petites entreprises à rester connectés, sécurisés et productifs sans complexité ni coût inutile.",
    whatWeDoTitle: 'Ce que nous faisons',
    whatWeDoText:
      "Support informatique, réseau et sécurité, vidéosurveillance, connectivité Starlink, systèmes solaires, et solutions web et numériques : six domaines de service pratiques, une seule équipe.",
    experienceEyebrow: 'Expérience technique',
    experienceTitle: "D'où vient l'expérience",
    experienceIntro:
      "Pas de titres exagérés ni d'années inventées, juste l'endroit où les compétences pratiques ont été acquises.",
    approachEyebrow: 'Notre approche',
    approachTitle: 'Comment nous travaillons',
    trustTitle: 'Pourquoi les clients peuvent nous faire confiance',
    trustText:
      "Nous ne prétendons pas être les plus grands ni la seule option. Nous visons à être les plus directs : des évaluations honnêtes, des solutions pratiques et une technologie expliquée simplement.",
    cta: 'Demander un service',
    readStory: 'Lire toute l\u2019histoire',
  },
}

export default function About() {
  const { language } = useLanguage()
  const c = copy[language]

  return (
    <>
      <SEO title={c.seoTitle} description={c.seoDescription} path="/about" />

      <section className="border-b border-ink/8 bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div className="flex flex-col gap-5">
            <StatusPill tone="volt" className="w-fit">
              {c.whoWeAre}
            </StatusPill>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              {c.founderName}
            </h1>
            <p className="text-slate leading-relaxed">{c.intro1}</p>
            <p className="text-slate leading-relaxed">{c.intro2}</p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={images['founder-portrait']}
              alt="Mac Anderson, founder of Andy TecH Solutions, on-site in work uniform"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div className="rounded-2xl border border-ink/8 bg-white p-8">
          <h2 className="font-display text-xl font-semibold text-ink">{c.missionTitle}</h2>
          <p className="mt-3 text-slate leading-relaxed">{c.missionText}</p>
        </div>
        <div className="rounded-2xl border border-ink/8 bg-white p-8">
          <h2 className="font-display text-xl font-semibold text-ink">{c.whatWeDoTitle}</h2>
          <p className="mt-3 text-slate leading-relaxed">{c.whatWeDoText}</p>
        </div>
      </section>

      <section className="border-y border-ink/8 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <SectionHeading eyebrow={c.experienceEyebrow} title={c.experienceTitle} description={c.experienceIntro} />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {experience.map(({ icon: Icon, place, period, points }) => (
              <div key={place} className="rounded-2xl border border-ink/8 bg-paper p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-wire/10 text-wire">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-ink">{place}</h3>
                    <p className="font-mono text-xs uppercase tracking-wide text-slate">{period[language]}</p>
                  </div>
                </div>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {points[language].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl">
            <img
              src={images['network-training']}
              alt="Working through a network topology diagram during technical training"
              className="max-h-96 w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading eyebrow={c.approachEyebrow} title={c.approachTitle} />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {approach.map(({ icon: Icon, title, text }) => (
            <div key={title.en} className="flex gap-4 rounded-2xl border border-ink/8 bg-white p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-signal/10 text-signal-dark">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="font-display font-semibold text-ink">{title[language]}</h3>
                <p className="mt-1 text-sm text-slate">{text[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/8 bg-ink">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 py-16 text-center sm:px-8">
          <h2 className="font-display text-2xl font-semibold text-paper sm:text-3xl">{c.trustTitle}</h2>
          <p className="max-w-2xl text-paper/70">{c.trustText}</p>
          <Button to="/contact" variant="primary">
            {c.cta}
          </Button>
        </div>
      </section>
    </>
  )
}
