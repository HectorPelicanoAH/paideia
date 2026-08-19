import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'
import EditorialImage from './EditorialImage.tsx'

interface MastersSectionProps {
  content: SiteContent['masters']
}

export default function MastersSection({ content }: MastersSectionProps) {
  return (
    <Section id="masters" background="cream" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(300px,.85fr)_minmax(0,1.15fr)]">
        <EditorialImage image="masters" src="/paideia/images/maestros-transmision.webp" width={1448} height={1086} className="min-h-[440px]" />
        <div className="grid gap-6">
        {content.profiles.map((profile, index) => (
          <Reveal key={profile.title} delay={index * 100}>
            <article className="h-full rounded-[2rem] border border-stone/20 bg-white p-8">
              <h3 className="font-serif text-2xl text-charcoal">{profile.title}</h3>
              <p className="mt-4 leading-8 text-earth">{profile.text}</p>
            </article>
          </Reveal>
        ))}
        </div>
      </div>
      <Reveal delay={240}>
        <p className="max-w-3xl text-lg leading-8 text-charcoal">{content.closing}</p>
      </Reveal>
    </Section>
  )
}
