import { images } from '../data/images'
import { CONTEXT, CONTEXT_LABELS, CATEGORY_LABELS } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'

const contextStyle = {
  [CONTEXT.FIELD]: 'bg-signal/10 text-signal-dark',
  [CONTEXT.DEMO]: 'bg-wire/10 text-wire-dark',
  [CONTEXT.TRAINING]: 'bg-volt/10 text-volt-dark',
}

export default function ProjectCard({ project }) {
  const { language } = useLanguage()
  const image = images[project.image]
  const title = project.title[language]
  const description = project.description[language]
  const categoryLabel = CATEGORY_LABELS[project.category]?.[language] || project.category
  const contextLabel = CONTEXT_LABELS[project.context]?.[language] || project.context

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-sm">
      {image && (
        <div className="aspect-[4/3] w-full overflow-hidden bg-ink/5">
          <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-ink/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-slate">
            {categoryLabel}
          </span>
          <span
            className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
              contextStyle[project.context] || 'bg-ink/5 text-slate'
            }`}
          >
            {contextLabel}
          </span>
        </div>
        <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
        <p className="text-sm text-slate">{description}</p>
        {project.equipment?.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
            {project.equipment.map((eq) => (
              <span key={eq} className="rounded border border-ink/10 px-2 py-1 text-[11px] text-slate">
                {eq}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
