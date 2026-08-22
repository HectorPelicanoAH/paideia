import type { SiteContent } from '../content/index.ts'
import ContactForm from './ContactForm.tsx'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'

interface ContactSectionProps {
  content: SiteContent['contact']
}

export default function ContactSection({ content }: ContactSectionProps) {
  return (
    <Section id="contact" background="cream" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <ContactForm content={content.form} />
        </Reveal>
      </div>
    </Section>
  )
}
