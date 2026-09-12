import { socials } from '../data/socials'
import { FacebookIcon, InstagramIcon, TikTokIcon } from './icons/BrandIcons'

const platforms = [
  { key: 'facebook', label: 'Facebook', Icon: FacebookIcon },
  { key: 'instagram', label: 'Instagram', Icon: InstagramIcon },
  { key: 'tiktok', label: 'TikTok', Icon: TikTokIcon },
]

export default function SocialLinks({ dark = false, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {platforms.map(({ key, label, Icon }) => {
        const url = socials[key]
        const disabled = !url
        const sharedClasses = `flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
          dark
            ? 'border-white/20 text-white/70 hover:border-white/40 hover:text-white'
            : 'border-ink/15 text-slate hover:border-ink/30 hover:text-ink'
        }`

        if (disabled) {
          return (
            <span
              key={key}
              role="img"
              title={`${label}: link coming soon`}
              aria-label={`${label} link not yet added`}
              className={`${sharedClasses} cursor-not-allowed opacity-40`}
            >
              <Icon className="h-4 w-4" />
            </span>
          )
        }

        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Andy TecH Solutions on ${label}`}
            title={label}
            className={sharedClasses}
          >
            <Icon className="h-4 w-4" />
          </a>
        )
      })}
    </div>
  )
}
