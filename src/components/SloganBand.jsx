import { LogoMark } from './Logo'
import { useLanguage } from '../i18n/LanguageContext'

const pillars = [
  { en: 'Reliable Technology.', fr: 'Technologie fiable.', dot: 'bg-volt' },
  { en: 'Practical Solutions.', fr: 'Solutions pratiques.', dot: 'bg-signal' },
  { en: 'Professional Service.', fr: 'Service professionnel.', dot: 'bg-wire' },
]

export default function SloganBand() {
  const { language } = useLanguage()

  return (
    <section className="bg-ink-soft" aria-label={language === 'fr' ? 'Notre devise' : 'Our motto'}>
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-10 sm:px-8 md:flex-row md:justify-center md:gap-10">
        <LogoMark className="h-20 shrink-0 md:h-24" variant="white" />
        <p className="flex flex-col items-center gap-2 text-center font-display text-xl font-semibold text-paper sm:text-2xl md:flex-row md:gap-6">
          {pillars.map((p) => (
            <span key={p.en} className="inline-flex items-center gap-2.5">
              <span className={`h-2 w-2 rounded-full ${p.dot}`} aria-hidden="true" />
              {p[language]}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
