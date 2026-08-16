import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'

interface MastersSectionProps {
  content: SiteContent['masters']
}

export default function MastersSection({ content }: MastersSectionProps) {
  return (
    <Section id="masters" background="white" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div className="grid gap-6 md:grid-cols-3">
        {content.profiles.map((profile, index) => (
          <Reveal key={profile.title} delay={index * 100}>
            <article className="h-full rounded-[2rem] bg-cream p-8">
              <h3 className="font-serif text-2xl text-charcoal">{profile.title}</h3>
              <p className="mt-4 leading-8 text-earth">{profile.text}</p>
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
