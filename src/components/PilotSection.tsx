import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'

interface PilotSectionProps {
  content: SiteContent['pilot']
}

export default function PilotSection({ content }: PilotSectionProps) {
  return (
    <Section id="pilot" background="white" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
        <div className="grid gap-6 md:grid-cols-2">
          {content.phases.map((phase, index) => (
            <Reveal key={phase.title} delay={index * 90}>
              <article className="h-full rounded-[2rem] border border-stone/20 p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-green">0{index + 1}</p>
                <h3 className="mt-4 font-serif text-2xl text-charcoal">{phase.title}</h3>
                <p className="mt-4 leading-8 text-earth">{phase.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={240} className="flex items-stretch">
          <div className="flex w-full flex-col justify-between rounded-[2rem] bg-cream p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-green">Pilot</p>
            <p className="mt-6 font-serif text-3xl leading-relaxed text-charcoal">“{content.villageQuote}”</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
