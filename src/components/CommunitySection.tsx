import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'
import EditorialImage from './EditorialImage.tsx'

interface CommunitySectionProps {
  content: SiteContent['community']
}

export default function CommunitySection({ content }: CommunitySectionProps) {
  return (
    <Section id="community" background="cream" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <EditorialImage image="community" src="/paideia/images/comunidad-v2.jpg" width={1536} height={1024} className="aspect-[16/7]" />
      <div className="grid gap-6 md:grid-cols-3">
          {content.pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 100}>
              <article className="h-full rounded-[2rem] border border-stone/20 bg-white p-8">
                <h3 className="font-serif text-2xl text-charcoal">{pillar.title}</h3>
                <p className="mt-4 leading-8 text-earth">{pillar.text}</p>
              </article>
            </Reveal>
          ))}
      </div>
        <Reveal delay={240} className="mx-auto w-full max-w-4xl">
          <div className="rounded-[2rem] bg-green px-8 py-10 text-center text-cream md:px-12 md:py-14">
            <p className="text-sm uppercase tracking-[0.28em] text-cream/70">{content.eyebrow}</p>
            <p className="mt-5 font-serif text-3xl leading-snug md:text-4xl">“{content.quote}”</p>
          </div>
        </Reveal>
    </Section>
  )
}
