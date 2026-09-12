import { MessageSquareText, Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Button from './Button'
import { useLanguage } from '../i18n/LanguageContext'

// No testimonials have been collected yet. Rather than invent quotes and
// attribute them to fictional customers, this section is built and styled
// to display real reviews the moment they exist, with an honest state
// until then.
const testimonials = []

const copy = {
  en: {
    eyebrow: 'What customers say',
    title: 'Customer reviews',
    emptyTitle: "We're just getting started",
    emptyText:
      "We haven't published customer reviews yet. As jobs are completed, real feedback will appear here.",
    cta: 'Be one of our first reviews',
  },
  fr: {
    eyebrow: 'Avis clients',
    title: 'Avis clients',
    emptyTitle: 'Nous démarrons tout juste',
    emptyText:
      "Nous n'avons pas encore publié d'avis clients. Au fur et à mesure des interventions, de vrais avis apparaîtront ici.",
    cta: 'Soyez parmi nos premiers avis',
  },
}

export default function Testimonials() {
  const { language } = useLanguage()
  const c = copy[language]

  return (
    <section className="border-t border-ink/8 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading eyebrow={c.eyebrow} title={c.title} align="center" className="mx-auto text-center" />

        {testimonials.length === 0 ? (
          <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-4 rounded-2xl border border-dashed border-ink/15 bg-paper px-8 py-12 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-wire/10 text-wire">
              <MessageSquareText className="h-6 w-6" strokeWidth={1.6} />
            </span>
            <h3 className="font-display text-lg font-semibold text-ink">{c.emptyTitle}</h3>
            <p className="text-sm text-slate">{c.emptyText}</p>
            <Button to="/contact" variant="outline" className="mt-2">
              {c.cta}
            </Button>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((tItem) => (
              <div key={tItem.id} className="flex flex-col gap-3 rounded-2xl border border-ink/8 bg-paper p-6">
                <div className="flex gap-0.5 text-volt-dark">
                  {Array.from({ length: tItem.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-ink/80">{tItem.quote[language]}</p>
                <p className="mt-auto text-xs font-mono uppercase tracking-wide text-slate">{tItem.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
