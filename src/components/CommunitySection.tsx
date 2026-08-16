import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'

interface CommunitySectionProps {
  content: SiteContent['community']
}

export default function CommunitySection({ content }: CommunitySectionProps) {
  return (
    <Section id="community" background="white" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
        <div className="grid gap-6 md:grid-cols-3">
          {content.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 100}>
              <article className="h-full rounded-[2rem] border border-stone/20 p-8">
                <h3 className="font-serif text-2xl text-charcoal">{pillar.title}</h3>
                <p className="mt-4 leading-8 text-earth">{pillar.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={240}>
          <div className="rounded-[2rem] bg-green px-8 py-10 text-cream">
            <p className="text-sm uppercase tracking-[0.28em] text-cream/70">Comunitat</p>
            <p className="mt-5 font-serif text-3xl leading-relaxed">“{content.quote}”</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
