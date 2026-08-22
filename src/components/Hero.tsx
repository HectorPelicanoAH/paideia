import { useEffect, useState } from 'react'
import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'
import EditorialImage from './EditorialImage.tsx'

interface HeroProps {
  content: SiteContent['hero']
}

export default function Hero({ content }: HeroProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      return undefined
    }

    const onScroll = () => {
      setOffset(window.scrollY * 0.18)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="top" className="relative overflow-hidden bg-cream pb-16 pt-10 md:pb-24 md:pt-16">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_right,_rgba(168,144,128,0.22),_transparent_44%),radial-gradient(circle_at_bottom_left,_rgba(74,93,74,0.18),_transparent_38%)]"
        style={{ transform: `translateY(${offset}px)` }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:px-12">
        <Reveal className="max-w-3xl">
          <p className="mb-6 inline-flex rounded-full border border-warm/70 bg-warm/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">{content.status}</p>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-green">{content.eyebrow}</p>
          <h1 className="font-serif text-5xl leading-[.95] text-charcoal sm:text-6xl lg:text-7xl">{content.title}</h1>
          <p className="mt-6 font-serif text-2xl leading-tight text-earth sm:text-3xl lg:text-4xl">
            {content.subtitle}
          </p>
          <p className="mt-7 max-w-2xl border-l-2 border-warm pl-5 font-serif text-lg leading-8 text-charcoal">
            {content.meaning}
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-earth">{content.description}</p>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3" aria-label={content.subtitle}>
            {content.signals.map((signal) => (
              <li key={signal} className="flex items-center gap-2 text-sm font-semibold text-charcoal">
                <span className="h-2 w-2 rounded-full bg-warm" aria-hidden="true" />
                {signal}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/paideia/proyecto/"
              className="inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-4 text-sm font-semibold text-cream transition hover:bg-earth"
            >
              {content.primaryCta}
            </a>
            <a
              href="/paideia/como-empezar/"
              className="inline-flex items-center justify-center rounded-full border border-earth/30 px-6 py-4 text-sm font-semibold text-charcoal transition hover:border-green hover:text-green"
            >
              {content.secondaryCta}
            </a>
          </div>
        </Reveal>

        <Reveal delay={180} className="relative">
          <EditorialImage image="hero" src="/paideia/images/hero-aprender-haciendo-v2.webp" width={1536} height={1024} priority className="aspect-[4/5] shadow-[0_28px_90px_rgba(41,40,36,.16)] sm:aspect-[3/2] lg:aspect-[4/5]" imageClassName="object-[66%_center]" />
          <aside className="relative -mt-16 ml-5 max-w-md rounded-[1.5rem] border border-stone/30 bg-white/95 p-6 shadow-xl backdrop-blur sm:ml-10 lg:absolute lg:-bottom-8 lg:-left-14 lg:mt-0">
            <p className="font-serif text-xl leading-relaxed text-charcoal">“{content.asideQuote}”</p>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
