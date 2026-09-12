import { Package } from 'lucide-react'
import SEO from '../components/SEO'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import Button from '../components/Button'
import StatusPill from '../components/StatusPill'
import { services } from '../data/services'
import { contact } from '../data/socials'
import { useLanguage } from '../i18n/LanguageContext'
import { WhatsAppIcon } from '../components/icons/BrandIcons'

const copy = {
  en: {
    seoTitle: 'Services',
    seoDescription:
      'IT support, networking, CCTV installation, Starlink setup, solar installation, and web development services from Andy TecH Solutions.',
    pill: 'Our Services',
    title: 'Six services. One reliable team.',
    intro:
      "Every service below is something we've actually done in the field. Prices depend on the scope of the job, so request a quote and we'll walk you through it.",
    browseHeading: 'Browse services by category',
    equipmentEyebrow: 'Looking for equipment?',
    equipmentTitle: 'Need a specific router, camera, panel, or kit?',
    equipmentText:
      "If you already know what equipment you need, whether it's a router, a CCTV camera, a solar panel, or a Starlink kit, reach out directly and we'll help you source and install it.",
    ctaEyebrow: 'Not sure where to start?',
    ctaTitle: "Describe the problem, we'll point you in the right direction",
    ctaButton: 'Request a Service',
  },
  fr: {
    seoTitle: 'Services',
    seoDescription:
      "Support informatique, réseau, installation de vidéosurveillance, configuration Starlink, installation solaire et développement web par Andy TecH Solutions.",
    pill: 'Nos services',
    title: 'Six services. Une équipe fiable.',
    intro:
      "Chaque service ci-dessous est quelque chose que nous avons réellement fait sur le terrain. Les prix dépendent de l'ampleur du travail, alors demandez un devis et nous vous expliquerons tout.",
    browseHeading: 'Parcourir les services par catégorie',
    equipmentEyebrow: "Besoin d'un équipement ?",
    equipmentTitle: "Besoin d'un routeur, d'une caméra, d'un panneau ou d'un kit précis ?",
    equipmentText:
      "Si vous savez déjà quel équipement vous voulez, qu'il s'agisse d'un routeur, d'une caméra de vidéosurveillance, d'un panneau solaire ou d'un kit Starlink, contactez-nous directement et nous vous aiderons à vous le procurer et à l'installer.",
    ctaEyebrow: 'Vous ne savez pas par où commencer ?',
    ctaTitle: 'Décrivez le problème, nous vous orienterons dans la bonne direction',
    ctaButton: 'Demander un service',
  },
}

export default function Services() {
  const { language, t } = useLanguage()
  const c = copy[language]
  const whatsappHref = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/[^\d]/g, '')}`
    : null

  return (
    <>
      <SEO title={c.seoTitle} description={c.seoDescription} path="/services" />

      <section className="border-b border-ink/8 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 lg:py-20">
          <StatusPill className="mx-auto w-fit" tone="wire">
            {c.pill}
          </StatusPill>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {c.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate">{c.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <h2 className="sr-only">{c.browseHeading}</h2>
        <div className="mb-10 flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-ink/10 px-3.5 py-1.5 text-sm text-slate hover:border-wire-dark/40 hover:text-wire-dark"
            >
              {s.name[language]}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} expanded />
          ))}
        </div>
      </section>

      {/* EQUIPMENT CTA */}
      <section className="border-y border-ink/8 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
          <div className="flex flex-col items-start gap-6 rounded-2xl bg-ink p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-volt/15 text-volt">
                <Package className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-signal">
                  {c.equipmentEyebrow}
                </span>
                <h2 className="mt-1 font-display text-xl font-semibold text-paper">{c.equipmentTitle}</h2>
                <p className="mt-2 max-w-xl text-sm text-paper/70">{c.equipmentText}</p>
              </div>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              {contact.phone && (
                <Button href={`tel:${contact.phone.replace(/\s+/g, '')}`} variant="primary">
                  {t('common_call')}
                </Button>
              )}
              {whatsappHref && (
                <Button href={whatsappHref} variant="outline-light">
                  <WhatsAppIcon className="h-4 w-4" /> {t('common_whatsapp')}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-5 py-16 text-center sm:px-8">
          <SectionHeading eyebrow={c.ctaEyebrow} title={c.ctaTitle} align="center" className="mx-auto text-center" />
          <Button to="/contact" variant="primary">
            {c.ctaButton}
          </Button>
        </div>
      </section>
    </>
  )
}
