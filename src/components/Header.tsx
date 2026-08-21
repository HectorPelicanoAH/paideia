import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage.tsx'
import type { LanguageCode } from '../content/index.ts'
import { pageSlugs, siteNavigation } from '../content/siteNavigation.ts'

const languageOptions: LanguageCode[] = ['es', 'ca', 'eu', 'gl']

export default function Header() {
  const { content, language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const mobileMenuText = language === 'eu' ? 'Menua' : 'Menú'
  const navigation = siteNavigation[language]

  const handleLanguageChange = (nextLanguage: LanguageCode) => {
    setLanguage(nextLanguage)
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-stone/20 bg-cream/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex min-h-16 items-center justify-between gap-6 py-2">
          <a href="#top" className="flex shrink-0 items-center gap-3 text-green" aria-label="PAIDEIA" onClick={() => setIsOpen(false)}>
            <img src="/paideia/brand/paideia-mark.svg" alt="" width="44" height="44" className="h-11 w-11" />
            <span className="font-serif text-xl tracking-[.18em]">PAIDEIA</span>
          </a>

          <nav className="hidden min-w-0 flex-1 xl:block" aria-label={navigation.mainMenu}>
            <ul className="flex items-center justify-center gap-5 text-sm text-earth">
              <li><a href="/paideia/" aria-current="page" className="font-semibold text-green">{navigation.presentation}</a></li>
              {pageSlugs.map((slug) => (
                <li key={slug}><a className="transition-colors hover:text-green focus-visible:text-green" href={`/paideia/${slug}/`}>{navigation.pages[slug]}</a></li>
              ))}
            </ul>
          </nav>

          <button type="button" aria-expanded={isOpen} aria-controls="mobile-nav" aria-label={isOpen ? content.header.closeLabel : content.header.menuLabel} className="inline-flex rounded-full border border-stone/40 px-4 py-2 text-sm text-charcoal xl:hidden" onClick={() => setIsOpen((open) => !open)}>
            {isOpen ? '×' : mobileMenuText}
          </button>

          <div className="hidden shrink-0 items-center gap-2 xl:flex" role="group" aria-label={content.header.languageSelectorLabel}>
            {languageOptions.map((option) => {
              const active = option === language
              return <button key={option} type="button" lang={option} aria-pressed={active} onClick={() => setLanguage(option)} className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${active ? 'bg-charcoal text-cream' : 'text-earth hover:bg-stone/20'}`}>{option}</button>
            })}
          </div>
        </div>

        <nav className="hidden border-t border-stone/20 xl:block" aria-label={navigation.homeSections}>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 py-3 text-[.78rem] text-earth/80">
            {content.header.nav.map((item) => <li key={item.href} className="shrink-0"><a className="transition-colors hover:text-green focus-visible:text-green" href={item.href}>{item.label}</a></li>)}
          </ul>
        </nav>
      </div>

      {isOpen ? (
        <div id="mobile-nav" className="absolute inset-x-0 top-full max-h-[calc(100dvh-65px)] overflow-y-auto overscroll-contain border-t border-stone/20 bg-cream shadow-xl xl:hidden">
          <div className="mx-auto max-w-7xl px-5 py-6 pb-10 sm:px-8">
            <nav aria-label={navigation.mainMenu}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-green">{navigation.mainMenu}</p>
              <ul className="grid gap-1 text-base text-earth sm:grid-cols-2">
                <li><a aria-current="page" className="block rounded-xl bg-white px-3 py-3 font-semibold text-green" href="/paideia/" onClick={() => setIsOpen(false)}>{navigation.presentation}</a></li>
                {pageSlugs.map((slug) => <li key={slug}><a className="block rounded-xl px-3 py-3 transition-colors hover:bg-white" href={`/paideia/${slug}/`} onClick={() => setIsOpen(false)}>{navigation.pages[slug]}</a></li>)}
              </ul>
            </nav>

            <nav className="mt-6 border-t border-stone/20 pt-6" aria-label={navigation.homeSections}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-green">{navigation.homeSections}</p>
              <ul className="grid gap-x-4 gap-y-1 text-sm text-earth sm:grid-cols-2">
                {content.header.nav.map((item) => <li key={item.href}><a className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-white" href={item.href} onClick={() => setIsOpen(false)}>{item.label}</a></li>)}
              </ul>
            </nav>

            <div className="mt-6 border-t border-stone/20 pt-6" role="group" aria-label={content.header.languageSelectorLabel}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-earth/70">{content.header.languageSelectorLabel}</p>
              <div className="flex flex-wrap gap-2">
                {languageOptions.map((option) => {
                  const active = option === language
                  return <button key={option} type="button" lang={option} aria-pressed={active} onClick={() => handleLanguageChange(option)} className={`rounded-full px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition ${active ? 'bg-charcoal text-cream' : 'bg-white text-earth hover:bg-stone/20'}`}>{option}</button>
                })}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
