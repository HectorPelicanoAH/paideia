import type { SiteContent } from '../content/index.ts'

interface FooterProps {
  content: Pick<SiteContent, 'footer' | 'header'>
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-charcoal py-14 text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:px-12">
        <div>
          <a href="#top" className="inline-flex items-center gap-4 font-serif text-3xl tracking-[0.16em] text-cream">
            <span className="inline-flex rounded-2xl bg-cream p-2" aria-hidden="true">
              <img src="/paideia/brand/paideia-mark.svg" alt="" width="48" height="48" className="h-12 w-12" />
            </span>
            <span>PAIDEIA</span>
          </a>
          <p className="mt-5 max-w-xl text-lg leading-8 text-cream/80">{content.footer.tagline}</p>
          <p className="mt-3 max-w-xl leading-8 text-cream/60">{content.footer.contactPrompt}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cream/60">{content.footer.linksLabel}</p>
            <ul className="mt-4 grid gap-2 text-sm text-cream/80">
              {content.header.nav.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <a className="transition hover:text-white" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cream/60">PAIDEIA</p>
            <a
              href="https://www.instagram.com/sumuspaideia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram · @sumuspaideia"
              className="mt-5 inline-flex items-center gap-3 rounded-full border border-cream/20 px-4 py-2.5 text-sm font-medium text-cream/80 transition hover:border-cream/50 hover:bg-cream/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/70"
            >
              <svg aria-hidden="true" className="size-5" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.4" cy="6.7" r="1" fill="currentColor" />
              </svg>
              <span>@sumuspaideia</span>
            </a>
            <p className="mt-6 text-sm text-cream/60">© {new Date().getFullYear()} · {content.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
