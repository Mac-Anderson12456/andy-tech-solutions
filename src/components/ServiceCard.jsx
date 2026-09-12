import { ArrowUpRight, Laptop, Router, Camera, Satellite, Sun, Code2, Wrench } from 'lucide-react'
import { images } from '../data/images'
import { serviceToContactOption } from '../data/services'
import { useLanguage } from '../i18n/LanguageContext'

const ICONS = { Laptop, Router, Camera, Satellite, Sun, Code2 }

export default function ServiceCard({ service, expanded = false }) {
  const { language, t } = useLanguage()
  const Icon = ICONS[service.icon] || Wrench
  const image = images[service.image]
  const contactOption = serviceToContactOption[service.id] || 'Other'

  const name = service.name[language]
  const description = service.description[language]
  const tasks = service.tasks[language]
  const benefits = service.benefits[language]
  const benefitsLabel = language === 'fr' ? 'Avantages' : 'Benefits'

  return (
    <article
      id={service.id}
      className="scroll-mt-24 flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-sm"
    >
      {image && (
        <div className="aspect-[16/10] w-full overflow-hidden bg-ink/5">
          <img
            src={image}
            alt={`${name}: Andy TecH Solutions field work`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-wire/10 text-wire">
            <Icon className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <h3 className="font-display text-lg font-semibold text-ink">{name}</h3>
        </div>

        <p className="text-sm text-slate">{description}</p>

        {expanded && (
          <>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
              {tasks.map((task) => (
                <li key={task} className="flex items-start gap-2 text-sm text-slate">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                  {task}
                </li>
              ))}
            </ul>

            <div className="mt-1 rounded-lg bg-paper-dim/60 p-4">
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-slate">{benefitsLabel}</h4>
              <ul className="mt-2 flex flex-col gap-1.5">
                {benefits.map((b) => (
                  <li key={b} className="text-sm text-ink/80">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <a
          href={`/contact?service=${encodeURIComponent(contactOption)}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-volt-dark hover:brightness-125"
        >
          {t('common_requestQuote')}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  )
}
