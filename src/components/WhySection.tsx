import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'

interface WhySectionProps {
  content: SiteContent['why']
}

export default function WhySection({ content }: WhySectionProps) {
  return (
    <Section id="why" background="white" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
        <div className="space-y-6">
          {content.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 100}>
              <p className="text-base leading-8 text-earth md:text-lg">{paragraph}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={220}>
          <div className="rounded-[2rem] bg-cream p-8 lg:p-10">
            <p className="font-serif text-2xl leading-relaxed text-charcoal md:text-3xl">“{content.pullQuote}”</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
