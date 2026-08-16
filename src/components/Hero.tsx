import { useEffect, useState } from 'react'
import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'

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
    <section id="top" className="relative overflow-hidden bg-cream pb-20 pt-16 md:pb-28 md:pt-24">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_right,_rgba(168,144,128,0.22),_transparent_44%),radial-gradient(circle_at_bottom_left,_rgba(74,93,74,0.18),_transparent_38%)]"
        style={{ transform: `translateY(${offset}px)` }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)] lg:px-12">
        <Reveal className="max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.4em] text-green">Editorial rural commons</p>
          <h1 className="font-serif text-5xl leading-none text-charcoal sm:text-6xl lg:text-7xl">{content.title}</h1>
          <p className="mt-6 font-serif text-3xl leading-tight text-earth sm:text-4xl lg:text-5xl">
            {content.subtitle}
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-earth">{content.description}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#participate"
              className="inline-flex items-center justify-center rounded-full bg-charcoal px-6 py-4 text-sm font-semibold text-cream transition hover:bg-earth"
            >
              {content.primaryCta}
            </a>
            <a
              href="#pilot"
              className="inline-flex items-center justify-center rounded-full border border-earth/30 px-6 py-4 text-sm font-semibold text-charcoal transition hover:border-green hover:text-green"
            >
              {content.secondaryCta}
            </a>
          </div>
        </Reveal>

        <Reveal delay={180} className="flex items-end">
          <aside className="w-full rounded-[2rem] border border-stone/30 bg-white/80 p-8 shadow-[0_24px_80px_rgba(45,42,38,0.08)] backdrop-blur">
            <p className="text-sm uppercase tracking-[0.28em] text-green">PAIDEIA</p>
            <p className="mt-6 font-serif text-2xl leading-relaxed text-charcoal">“{content.asideQuote}”</p>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
