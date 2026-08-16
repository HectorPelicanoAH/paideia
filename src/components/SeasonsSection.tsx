import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'

interface SeasonsSectionProps {
  content: SiteContent['seasons']
}

export default function SeasonsSection({ content }: SeasonsSectionProps) {
  return (
    <Section id="seasons" background="cream" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
        {content.seasons.map((season, index) => (
          <Reveal key={season.name} delay={index * 90}>
            <article className="h-full rounded-[2rem] bg-charcoal px-7 py-8 text-cream">
              <h3 className="font-serif text-3xl">{season.name}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {season.actions.map((action) => (
                  <li key={action} className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em]">
                    {action}
                  </li>
                ))}
              </ul>
              <p className="mt-6 leading-8 text-cream/80">{season.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
