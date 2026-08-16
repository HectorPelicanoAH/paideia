import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'

interface TechnologySectionProps {
  content: SiteContent['technology']
}

export default function TechnologySection({ content }: TechnologySectionProps) {
  return (
    <Section id="technology" background="cream" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <Reveal>
        <p className="max-w-4xl text-lg leading-8 text-charcoal">{content.positioning}</p>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {content.principles.map((principle, index) => (
          <Reveal key={principle.title} delay={index * 90}>
            <article className="h-full rounded-[2rem] border border-stone/20 bg-white p-8">
              <h3 className="font-serif text-2xl text-charcoal">{principle.title}</h3>
              <p className="mt-4 leading-8 text-earth">{principle.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={240}>
        <div className="rounded-[2rem] border border-green/20 bg-white p-8">
          <p className="text-lg leading-8 text-charcoal">{content.mainMessage}</p>
          <p className="mt-6 font-serif text-2xl leading-9 text-charcoal">{content.featuredQuote}</p>
        </div>
      </Reveal>
    </Section>
  )
}
