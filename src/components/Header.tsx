import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage.tsx'
import type { LanguageCode } from '../content/index.ts'

export default function Header() {
  const { content, language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (nextLanguage: LanguageCode) => {
    setLanguage(nextLanguage)
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-stone/20 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <a
          href="#top"
          aria-label={content.header.homeLabel}
          className="font-serif text-2xl tracking-[0.18em] text-charcoal transition-colors hover:text-green"
        >
          PAIDEIA
        </a>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? content.header.closeLabel : content.header.menuLabel}
          className="inline-flex rounded-full border border-stone/40 px-4 py-2 text-sm text-charcoal md:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? '×' : 'Menú'}
        </button>

        <div className="hidden items-center gap-6 md:flex">
          <nav aria-label={content.footer.linksLabel}>
            <ul className="flex flex-wrap items-center gap-4 text-sm text-earth">
              {content.header.nav.map((item) => (
                <li key={item.href}>
                  <a className="transition-colors hover:text-green focus-visible:text-green" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2" aria-label={content.header.languageSelectorLabel}>
            {(['ca', 'es', 'eu', 'gl'] as LanguageCode[]).map((option) => {
              const active = option === language
              return (
                <button
                  key={option}
                  type="button"
                  lang={option}
                  aria-pressed={active}
                  onClick={() => setLanguage(option)}
                  className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                    active ? 'bg-charcoal text-cream' : 'bg-cream text-earth hover:bg-stone/20'
                  }`}
                >
                  {option}
                </button>
              )
            })}
          </div>

          <a
            href="#participate"
            className="rounded-full bg-green px-5 py-3 text-sm font-medium text-cream transition hover:bg-green-light"
          >
            {content.header.participateLabel}
          </a>
        </div>
      </div>

      {isOpen ? (
        <div id="mobile-nav" className="fixed inset-x-0 bottom-0 top-[72px] z-50 overflow-y-auto border-t border-stone/20 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-5 py-6 pb-10 sm:px-8">
            <nav aria-label={content.footer.linksLabel}>
              <ul className="grid gap-3 text-base text-earth">
                {content.header.nav.map((item) => (
                  <li key={item.href}>
                    <a className="block rounded-2xl px-3 py-2 hover:bg-cream" href={item.href} onClick={() => setIsOpen(false)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-6 flex flex-wrap gap-2" aria-label={content.header.languageSelectorLabel}>
              {(['ca', 'es', 'eu', 'gl'] as LanguageCode[]).map((option) => {
                const active = option === language
                return (
                  <button
                    key={option}
                    type="button"
                    lang={option}
                    aria-pressed={active}
                    onClick={() => handleLanguageChange(option)}
                    className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] ${
                      active ? 'bg-charcoal text-cream' : 'bg-cream text-earth'
                    }`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
