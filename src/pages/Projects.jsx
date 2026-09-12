import { useState, useMemo } from 'react'
import SEO from '../components/SEO'
import StatusPill from '../components/StatusPill'
import ProjectCard from '../components/ProjectCard'
import { projects, categories, CATEGORY_LABELS } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'

const copy = {
  en: {
    seoTitle: 'Projects',
    seoDescription:
      'A portfolio of real CCTV, networking, Starlink, solar, computer maintenance, and web development work from Andy TecH Solutions.',
    pill: 'Portfolio',
    title: 'Work across every service',
    intro:
      'Real field installations and practice builds, labeled honestly. Nothing here is presented as a named client engagement unless it actually is one.',
    filterHeading: 'Filter and browse projects',
    empty: 'No projects in this category yet.',
  },
  fr: {
    seoTitle: 'Projets',
    seoDescription:
      'Un portfolio de travaux réels en vidéosurveillance, réseau, Starlink, solaire, maintenance informatique et développement web réalisés par Andy TecH Solutions.',
    pill: 'Portfolio',
    title: 'Des réalisations dans chaque service',
    intro:
      "De vraies installations sur le terrain et des projets d'entraînement, étiquetés honnêtement. Rien ici n'est présenté comme une mission client nommée, sauf si c'en est vraiment une.",
    filterHeading: 'Filtrer et parcourir les projets',
    empty: 'Aucun projet dans cette catégorie pour le moment.',
  },
}

export default function Projects() {
  const { language } = useLanguage()
  const c = copy[language]
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <>
      <SEO title={c.seoTitle} description={c.seoDescription} path="/projects" />

      <section className="border-b border-ink/8 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 lg:py-20">
          <StatusPill className="mx-auto w-fit" tone="signal">
            {c.pill}
          </StatusPill>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {c.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate">{c.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
        <h2 className="sr-only">{c.filterHeading}</h2>
        <div className="flex flex-wrap gap-2" role="group" aria-label={c.filterHeading}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? 'border-ink bg-ink text-white'
                  : 'border-ink/12 text-slate hover:border-ink/30 hover:text-ink'
              }`}
            >
              {CATEGORY_LABELS[cat]?.[language] || cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {filtered.length === 0 && <p className="mt-10 text-center text-slate">{c.empty}</p>}
      </section>
    </>
  )
}
