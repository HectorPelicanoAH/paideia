import type { SiteContent } from '../content/index.ts'

interface FooterProps {
  content: Pick<SiteContent, 'footer' | 'header'>
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-charcoal py-14 text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:px-12">
        <div>
          <a href="#top" className="font-serif text-3xl tracking-[0.16em] text-cream">
            PAIDEIA
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
            <p className="mt-6 text-sm text-cream/60">© {new Date().getFullYear()} · {content.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
