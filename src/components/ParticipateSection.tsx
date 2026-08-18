import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'
import EditorialImage from './EditorialImage.tsx'

interface ParticipateSectionProps {
  content: SiteContent['participate']
}

export default function ParticipateSection({ content }: ParticipateSectionProps) {
  return (
    <Section id="participate" background="white" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <EditorialImage image="participate" src="/paideia/images/participacion.webp" width={1536} height={1024} className="aspect-[16/7]" />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 100} className={index === 2 ? 'md:col-span-2 xl:col-span-1' : ''}>
            <article className="flex h-full flex-col rounded-[2rem] bg-charcoal p-8 text-cream shadow-[0_20px_70px_rgba(45,42,38,0.12)]">
              <p className="text-sm uppercase tracking-[0.28em] text-cream/70">0{index + 1}</p>
              <h3 className="mt-4 font-serif text-3xl">{card.title}</h3>
              <p className="mt-5 text-lg leading-8 text-cream">{card.prompt}</p>
              <p className="mt-4 flex-1 leading-8 text-cream/80">{card.description}</p>
              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center rounded-full bg-cream px-5 py-3 text-sm font-semibold text-charcoal transition hover:bg-white"
              >
                {card.cta}
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
