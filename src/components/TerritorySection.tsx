import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'
import EditorialImage from './EditorialImage.tsx'

interface TerritorySectionProps {
  content: SiteContent['territory']
}

export default function TerritorySection({ content }: TerritorySectionProps) {
  return (
    <Section id="territory" background="cream" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <EditorialImage image="territory" src="/paideia/images/territorio.webp" width={1823} height={863} className="aspect-[21/9]" />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)]">
        <div className="space-y-6">
          {content.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 100}>
              <p className="text-base leading-8 text-earth md:text-lg">{paragraph}</p>
            </Reveal>
          ))}
        </div>
        <div className="grid gap-4">
          {content.stats.map((stat, index) => (
            <Reveal key={stat.value} delay={index * 90}>
              <article className="rounded-[1.75rem] border border-stone/20 bg-white p-6">
                <p className="text-sm uppercase tracking-[0.26em] text-green">{stat.value}</p>
                <h3 className="mt-3 font-serif text-2xl text-charcoal">{stat.label}</h3>
                <p className="mt-3 leading-7 text-earth">{stat.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
