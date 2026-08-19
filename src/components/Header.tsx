import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage.tsx'
import type { LanguageCode } from '../content/index.ts'

const languageOptions: LanguageCode[] = ['es', 'ca', 'eu', 'gl']

export default function Header() {
  const { content, language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const mobileMenuText = language === 'eu' ? 'Menua' : 'Menú'

  const handleLanguageChange = (nextLanguage: LanguageCode) => {
    setLanguage(nextLanguage)
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-stone/20 bg-cream/95 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex min-h-16 items-center justify-between py-2">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-3 text-green"
          aria-label="PAIDEIA"
          onClick={() => setIsOpen(false)}
        >
          <img src="/paideia/brand/paideia-mark.svg" alt="" width="44" height="44" className="h-11 w-11" />
          <span className="font-serif text-xl tracking-[.18em]">PAIDEIA</span>
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={
            isOpen
              ? content.header.closeLabel
              : content.header.menuLabel
          }
          className="inline-flex rounded-full border border-stone/40 px-4 py-2 text-sm text-charcoal md:hidden"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? '×' : mobileMenuText}
        </button>

        <div className="hidden items-center gap-5 md:flex">
          {/* Desktop language selector */}
          <div
            className="flex items-center gap-2"
            aria-label={content.header.languageSelectorLabel}
          >
            {languageOptions.map(
              (option) => {
                const active = option === language

                return (
                  <button
                    key={option}
                    type="button"
                    lang={option}
                    aria-pressed={active}
                    onClick={() => setLanguage(option)}
                    className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                      active
                        ? 'bg-charcoal text-cream'
                        : 'bg-cream text-earth hover:bg-stone/20'
                    }`}
                  >
                    {option}
                  </button>
                )
              },
            )}
          </div>

          {/* Desktop CTA */}
          <a
            href="#participate"
            className="rounded-full bg-green px-5 py-3 text-sm font-medium text-cream transition hover:bg-green-light"
          >
            {content.header.participateLabel}
          </a>
        </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden border-t border-stone/20 md:block" aria-label={content.footer.linksLabel}>
          <ul className="flex items-center justify-center gap-5 overflow-x-auto py-3 text-[.82rem] text-earth lg:gap-7">
            {content.header.nav.slice(0, 8).map((item) => (
              <li key={item.href} className="shrink-0">
                <a className="transition-colors hover:text-green focus-visible:text-green" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isOpen ? (
        <div
          id="mobile-nav"
          className="
            fixed
            inset-x-0
            top-[65px]
            z-40
            max-h-[calc(100dvh-65px)]
            overflow-y-auto
            overscroll-contain
            border-t
            border-stone/20
            bg-cream
            md:hidden
          "
        >
          <div className="mx-auto max-w-7xl px-5 py-6 pb-12 sm:px-8">
            {/* Navigation links */}
            <nav aria-label={content.footer.linksLabel}>
              <ul className="grid gap-3 text-base text-earth">
                {content.header.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      className="block rounded-2xl px-3 py-3 transition-colors hover:bg-cream"
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile language selector */}
            <div
              className="mt-6 border-t border-stone/20 pt-6"
              aria-label={content.header.languageSelectorLabel}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-earth/70">
                {content.header.languageSelectorLabel}
              </p>

              <div className="flex flex-wrap gap-2">
                {languageOptions.map(
                  (option) => {
                    const active = option === language

                    return (
                      <button
                        key={option}
                        type="button"
                        lang={option}
                        aria-pressed={active}
                        onClick={() =>
                          handleLanguageChange(option)
                        }
                        className={`rounded-full px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                          active
                            ? 'bg-charcoal text-cream'
                            : 'bg-cream text-earth hover:bg-stone/20'
                        }`}
                      >
                        {option}
                      </button>
                    )
                  },
                )}
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="mt-6 border-t border-stone/20 pt-6">
              <a
                href="#participate"
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-full bg-green px-5 py-4 text-center text-sm font-medium text-cream transition hover:bg-green-light"
              >
                {content.header.participateLabel}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
