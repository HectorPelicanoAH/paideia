/* oxlint-disable react/only-export-components */

import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import type { LanguageCode } from '../content/index.ts'

const STORAGE_KEY = 'paideia-language'
const Context = createContext<{ language: LanguageCode; setLanguage: (language: LanguageCode) => void } | null>(null)

function initialLanguage(): LanguageCode {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'ca' || stored === 'eu' || stored === 'gl' ? stored : 'es'
}

export function InteriorLanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<LanguageCode>(initialLanguage)
  useEffect(() => { window.localStorage.setItem(STORAGE_KEY, language); document.documentElement.lang = language }, [language])
  const value = useMemo(() => ({ language, setLanguage }), [language])
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useInteriorLanguage() {
  const context = useContext(Context)
  if (!context) throw new Error('useInteriorLanguage must be used within InteriorLanguageProvider')
  return context
}
