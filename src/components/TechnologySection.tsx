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
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.principles.map((principle, index) => (
          <Reveal key={principle.title} delay={index * 90} className="flex">
            <article className="flex flex-1 flex-col rounded-[2rem] border border-stone/20 bg-cream p-6 sm:p-8">
              <h3 className="font-serif text-xl text-charcoal sm:text-2xl">{principle.title}</h3>
              <p className="mt-4 leading-7 text-earth">{principle.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={240}>
        <div className="rounded-[2rem] border border-green/20 bg-cream p-6 sm:p-8">
          <p className="text-base leading-8 text-charcoal sm:text-lg">{content.mainMessage}</p>
          <p className="mt-4 font-serif text-xl leading-8 text-charcoal sm:mt-6 sm:text-2xl sm:leading-9">
            "{content.featuredQuote}"
          </p>
        </div>
      </Reveal>
    </Section>
  )
}
