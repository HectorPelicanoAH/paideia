import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'

interface WhatSectionProps {
  content: SiteContent['what']
}

export default function WhatSection({ content }: WhatSectionProps) {
  return (
    <Section id="what" background="white" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div className="grid gap-6 md:grid-cols-2">
        {content.points.map((point, index) => (
          <Reveal key={point.title} delay={index * 90}>
            <article className="h-full rounded-[2rem] border border-stone/20 bg-cream p-8">
              <h3 className="font-serif text-2xl text-charcoal">{point.title}</h3>
              <p className="mt-4 leading-8 text-earth">{point.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={220}>
        <p className="max-w-3xl text-lg leading-8 text-charcoal">{content.closing}</p>
      </Reveal>
    </Section>
  )
}
