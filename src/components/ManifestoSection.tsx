import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'

interface ManifestoSectionProps {
  content: SiteContent['manifesto']
}

export default function ManifestoSection({ content }: ManifestoSectionProps) {
  return (
    <Section id="manifesto" background="cream" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div className="grid gap-4">
        {content.beliefs.map((belief, index) => (
          <Reveal key={belief} delay={index * 70}>
            <div className="rounded-[1.75rem] border border-stone/20 bg-white px-6 py-5 md:px-8">
              <p className="text-lg leading-8 text-charcoal md:text-xl">{belief}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={260}>
        <p className="text-center font-serif text-3xl text-charcoal md:text-4xl">{content.closing}</p>
      </Reveal>
    </Section>
  )
}
