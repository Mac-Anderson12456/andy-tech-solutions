import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { images } from '../data/images'
import { getServiceById } from '../data/services'
import { useLanguage } from '../i18n/LanguageContext'

export default function BlogCard({ post }) {
  const { language, t } = useLanguage()
  const image = images[post.image]
  const service = getServiceById(post.category)
  const dateLabel = new Date(post.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      {image && (
        <div className="aspect-[16/10] w-full overflow-hidden bg-ink/5">
          <img
            src={image}
            alt={post.title[language]}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-slate">
          {service && <span className="rounded-full bg-wire/10 px-2.5 py-1 text-wire-dark">{service.name[language]}</span>}
          <span>{dateLabel}</span>
          <span>
            {post.readMinutes} {t('common_min')}
          </span>
        </div>
        <h3 className="font-display text-lg font-semibold text-ink">{post.title[language]}</h3>
        <p className="text-sm text-slate">{post.excerpt[language]}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-volt-dark">
          {t('common_readMore')}
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}
