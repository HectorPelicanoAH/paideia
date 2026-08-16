/* oxlint-disable react/only-export-components */

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import { contentByLanguage, type LanguageCode } from '../content/index.ts'

interface LanguageContextValue {
  language: LanguageCode
  setLanguage: (language: LanguageCode) => void
}

const STORAGE_KEY = 'paideia-language'
const LanguageContext = createContext<LanguageContextValue | null>(null)

const detectLanguage = (): LanguageCode => {
  if (typeof window === 'undefined') {
    return 'ca'
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'ca' || stored === 'es' || stored === 'eu' || stored === 'gl') {
    return stored
  }

  const browserLanguage = window.navigator.language.slice(0, 2)
  if (browserLanguage === 'ca' || browserLanguage === 'es' || browserLanguage === 'eu' || browserLanguage === 'gl') {
    return browserLanguage
  }

  return 'ca'
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<LanguageCode>(detectLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(() => ({ language, setLanguage }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return {
    ...context,
    content: contentByLanguage[context.language],
  }
}
