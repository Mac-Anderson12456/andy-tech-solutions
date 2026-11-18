import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import Logo from './Logo'
import SocialLinks from './SocialLinks'
import { WhatsAppIcon } from './icons/BrandIcons'
import { navLinks } from '../data/nav'
import { services } from '../data/services'
import { contact } from '../data/socials'
import { useLanguage } from '../i18n/LanguageContext'

function ContactLine({ icon: Icon, value, href, label }) {
  const display = value || `[${label}]`
  const content = (
    <span className={`text-sm ${value ? 'text-paper/80' : 'text-paper/60 italic'}`}>{display}</span>
  )
  return (
    <li className="flex items-start gap-2.5">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={1.8} />
      {value && href ? (
        <a href={href} className="text-sm text-paper/80 hover:text-white">
          {display}
        </a>
      ) : (
        content
      )}
    </li>
  )
}

export default function Footer() {
  const { t, pick } = useLanguage()
  const year = new Date().getFullYear()
  const whatsappHref = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/[^\d]/g, '')}`
    : null

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
          <Logo dark />
          <p className="max-w-xs text-sm leading-relaxed text-paper/70">{t('footer_tagline')}</p>
          <SocialLinks dark />
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-paper/50">
            {t('footer_navigate')}
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-paper/80 hover:text-white">
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-paper/50">
            {t('footer_services')}
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`} className="text-sm text-paper/80 hover:text-white">
                  {pick(s.name.en, s.name.fr)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-wider text-paper/50">
            {t('footer_contact')}
          </h2>
          <ul className="mt-4 flex flex-col gap-3">
            <ContactLine icon={Phone} value={contact.phone} href={contact.phone ? `tel:${contact.phone.replace(/\s+/g, '')}` : null} label={t('common_call')} />
            <ContactLine icon={WhatsAppIcon} value={contact.whatsapp} href={whatsappHref} label={t('common_whatsapp')} />
            <ContactLine icon={Mail} value={contact.email} href={contact.email ? `mailto:${contact.email}` : null} label={t('common_email')} />
            <ContactLine icon={MapPin} value={contact.address} label={t('common_serviceArea')} />
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-3 px-5 py-6 text-xs text-paper/50 sm:flex-row sm:justify-between sm:px-8">
          <p>© {year} Andy TecH Solutions. {t('footer_rights')}</p>
          <p>{t('footer_foundedBy')}</p>
        </div>
      </div>
    </footer>
  )
}
