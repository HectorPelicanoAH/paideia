import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'
import EditorialImage from './EditorialImage.tsx'

interface LearningSectionProps {
  content: SiteContent['learning']
}

export default function LearningSection({ content }: LearningSectionProps) {
  return (
    <Section id="learning" background="white" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <EditorialImage image="learning" src="/paideia/images/aprender-haciendo.webp" width={1448} height={1086} className="aspect-[16/7]" imageClassName="object-[center_58%]" />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {content.steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 80}>
            <article className="h-full rounded-[2rem] border border-stone/20 bg-cream p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-green">0{index + 1}</p>
              <h3 className="mt-4 font-serif text-2xl text-charcoal">{step.title}</h3>
              <p className="mt-4 leading-8 text-earth">{step.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={240}>
        <p className="max-w-3xl text-lg leading-8 text-charcoal">{content.closing}</p>
      </Reveal>
    </Section>
  )
}
