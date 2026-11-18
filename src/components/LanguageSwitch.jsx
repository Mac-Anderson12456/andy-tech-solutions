import { Languages } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageSwitch({ className = '' }) {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`EN / FR: ${t('lang_switchTo')}`}
      title={t('lang_switchTo')}
      className={`inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1.5 font-mono text-xs font-medium text-slate transition-colors hover:border-ink/30 hover:text-ink ${className}`}
    >
      <Languages className="h-3.5 w-3.5" strokeWidth={1.8} />
      <span className={language === 'en' ? 'text-ink' : 'text-slate'}>EN</span>
      <span className="text-ink/20">/</span>
      <span className={language === 'fr' ? 'text-ink' : 'text-slate'}>FR</span>
    </button>
  )
}
