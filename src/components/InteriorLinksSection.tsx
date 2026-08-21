import type { InteriorLinkContent } from '../content/interiorLinks.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'

export default function InteriorLinksSection({ content }: { content: InteriorLinkContent }) {
  return <Section id="explore" background="white" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
    <div className="border-y border-stone/30">
      {content.links.map((link, index) => <Reveal key={link.href} delay={index * 60}>
        <a href={link.href} className="group grid gap-3 border-b border-stone/30 px-1 py-7 last:border-0 md:grid-cols-[4rem_minmax(0,1fr)_minmax(13rem,0.7fr)_auto] md:items-center md:gap-8 md:py-8">
          <span className="text-xs font-semibold tracking-[.2em] text-warm">0{index + 1}</span>
          <span className="font-serif text-2xl text-green md:text-3xl">{link.title}</span>
          <span className="max-w-xl text-sm leading-7 text-earth md:text-base">{link.description}</span>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal group-hover:text-green">{content.readMore}<span aria-hidden="true">↗</span></span>
        </a>
      </Reveal>)}
    </div>
  </Section>
}
