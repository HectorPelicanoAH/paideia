import type { InteriorLinkContent } from '../content/interiorLinks.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'

export default function InteriorLinksSection({ content }: { content: InteriorLinkContent }) {
  return <Section id="explore" background="white" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
    <div className="max-w-5xl overflow-hidden rounded-[1.75rem] border border-stone/30 bg-cream/20">
      {content.links.map((link, index) => <Reveal key={link.href} delay={index * 60} className="border-b border-stone/30 last:border-0">
        <a href={link.href} className="group grid grid-cols-[2rem_minmax(0,1fr)_2.25rem] gap-x-3 gap-y-2 px-5 py-5 transition-colors hover:bg-cream/70 focus-visible:bg-cream/70 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-warm sm:px-6 md:grid-cols-[2.5rem_minmax(10rem,0.65fr)_minmax(0,1fr)_2.5rem] md:items-center md:gap-6 md:py-6">
          <span className="col-start-1 row-start-1 pt-1 text-[.68rem] font-semibold tracking-[.2em] text-warm md:pt-0">0{index + 1}</span>
          <span className="col-start-2 row-start-1 font-serif text-2xl leading-tight text-green">{link.title}</span>
          <span className="col-span-2 col-start-2 row-start-2 max-w-2xl text-sm leading-6 text-earth md:col-span-1 md:col-start-3 md:row-start-1 md:text-[.95rem]">{link.description}</span>
          <span className="col-start-3 row-start-1 inline-grid size-9 place-items-center rounded-full bg-green text-sm text-cream transition-transform group-hover:translate-x-1 group-focus-visible:translate-x-1 md:col-start-4" aria-hidden="true">↗</span>
          <span className="sr-only">{content.readMore}</span>
        </a>
      </Reveal>)}
    </div>
  </Section>
}
