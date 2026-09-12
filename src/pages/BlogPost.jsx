import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import SEO from '../components/SEO'
import Button from '../components/Button'
import { getPostBySlug, blogPosts } from '../data/blog'
import { getServiceById } from '../data/services'
import { images } from '../data/images'
import { useLanguage } from '../i18n/LanguageContext'

const copy = {
  en: { relatedService: 'Related service', needHelp: 'Need help with this?', requestService: 'Request a Service' },
  fr: { relatedService: 'Service associé', needHelp: 'Besoin d\u2019aide sur ce sujet ?', requestService: 'Demander un service' },
}

function ContentBlock({ block }) {
  if (block.type === 'h2') {
    return <h2 className="mt-8 font-display text-xl font-semibold text-ink">{block.text}</h2>
  }
  if (block.type === 'ul') {
    return (
      <ul className="mt-3 flex flex-col gap-2">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-slate">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }
  return <p className="mt-3 leading-relaxed text-slate">{block.text}</p>
}

export default function BlogPost() {
  const { slug } = useParams()
  const { language, t } = useLanguage()
  const c = copy[language]
  const post = getPostBySlug(slug)

  if (!post) return <Navigate to="/blog" replace />

  const service = getServiceById(post.category)
  const image = images[post.image]
  const dateLabel = new Date(post.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const more = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2)

  return (
    <>
      <SEO title={post.title[language]} description={post.excerpt[language]} path={`/blog/${post.slug}`} />

      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-8 lg:py-16">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-slate hover:text-ink">
          <ArrowLeft className="h-4 w-4" />
          {t('common_backToBlog')}
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-slate">
          {service && (
            <span className="rounded-full bg-wire/10 px-2.5 py-1 text-wire-dark">{service.name[language]}</span>
          )}
          <span>{dateLabel}</span>
          <span>
            {post.readMinutes} {t('common_min')}
          </span>
        </div>

        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          {post.title[language]}
        </h1>
        <p className="mt-4 text-lg text-slate">{post.excerpt[language]}</p>

        {image && (
          <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-ink/5">
            <img src={image} alt={post.title[language]} className="h-full w-full object-cover" />
          </div>
        )}

        <div className="mt-8">
          {post.content[language].map((block, i) => (
            <ContentBlock key={i} block={block} />
          ))}
        </div>

        {service && (
          <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-ink/8 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate">{c.relatedService}</p>
              <p className="mt-1 font-display font-semibold text-ink">{service.name[language]}</p>
            </div>
            <Button to={`/contact?service=${encodeURIComponent(post.category)}`} variant="primary" className="shrink-0">
              {c.requestService}
            </Button>
          </div>
        )}

        {more.length > 0 && (
          <div className="mt-12 border-t border-ink/8 pt-8">
            <h2 className="font-display text-lg font-semibold text-ink">
              {language === 'fr' ? 'À lire aussi' : 'Read next'}
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-ink/8 bg-white p-4 hover:border-ink/20"
                >
                  <span className="font-medium text-ink">{p.title[language]}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-slate group-hover:text-ink" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  )
}
