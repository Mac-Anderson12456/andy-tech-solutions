import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getT } from './translations'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'andytech-lang'

function detectInitialLanguage() {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'en' || saved === 'fr') return saved
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(detectInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((l) => (l === 'en' ? 'fr' : 'en')),
      t: getT(language),
      // pick(enValue, frValue): convenience for inline bilingual strings
      pick: (en, fr) => (language === 'fr' ? fr ?? en : en),
    }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
