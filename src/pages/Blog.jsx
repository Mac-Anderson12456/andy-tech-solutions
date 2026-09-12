import { useState, useMemo } from 'react'
import SEO from '../components/SEO'
import StatusPill from '../components/StatusPill'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/blog'
import { services } from '../data/services'
import { useLanguage } from '../i18n/LanguageContext'

const copy = {
  en: {
    seoTitle: 'Blog',
    seoDescription:
      'Practical, honest guides on IT, networking, CCTV, Starlink, solar, and web development from Andy TecH Solutions.',
    pill: 'From the field',
    title: 'Practical guides, not sales pitches',
    intro:
      'Straightforward advice on the same six areas we work in, written to actually help you decide, not to sell you something.',
    filterHeading: 'Filter articles by topic',
    all: 'All topics',
    empty: 'No articles in this category yet.',
  },
  fr: {
    seoTitle: 'Blog',
    seoDescription:
      "Des guides pratiques et honnêtes sur l'informatique, le réseau, la vidéosurveillance, Starlink, le solaire et le développement web par Andy TecH Solutions.",
    pill: 'Depuis le terrain',
    title: 'Des guides pratiques, pas des arguments de vente',
    intro:
      "Des conseils clairs sur les six mêmes domaines dans lesquels nous travaillons, écrits pour vraiment vous aider à décider, pas pour vous vendre quelque chose.",
    filterHeading: 'Filtrer les articles par sujet',
    all: 'Tous les sujets',
    empty: 'Aucun article dans cette catégorie pour le moment.',
  },
}

export default function Blog() {
  const { language } = useLanguage()
  const c = copy[language]
  const [active, setActive] = useState('all')

  const filtered = useMemo(
    () => (active === 'all' ? blogPosts : blogPosts.filter((p) => p.category === active)),
    [active]
  )

  return (
    <>
      <SEO title={c.seoTitle} description={c.seoDescription} path="/blog" />

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
        <h2 className="sr-only">{c.filterHeading}</h2>
        <div className="flex flex-wrap gap-2" role="group" aria-label={c.filterHeading}>
          <button
            type="button"
            onClick={() => setActive('all')}
            aria-pressed={active === 'all'}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === 'all'
                ? 'border-ink bg-ink text-white'
                : 'border-ink/12 text-slate hover:border-ink/30 hover:text-ink'
            }`}
          >
            {c.all}
          </button>
          {services.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(s.id)}
              aria-pressed={active === s.id}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active === s.id
                  ? 'border-ink bg-ink text-white'
                  : 'border-ink/12 text-slate hover:border-ink/30 hover:text-ink'
              }`}
            >
              {s.name[language]}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {filtered.length === 0 && <p className="mt-10 text-center text-slate">{c.empty}</p>}
      </section>
    </>
  )
}
