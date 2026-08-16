import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'

interface ContactSectionProps {
  content: SiteContent['contact']
}

const fieldClasses =
  'mt-2 w-full rounded-2xl border border-stone/30 bg-white px-4 py-3 text-base text-charcoal outline-none transition placeholder:text-stone focus:border-green focus:ring-2 focus:ring-green/20'

export default function ContactSection({ content }: ContactSectionProps) {
  return (
    <Section id="contact" background="cream" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)]">
        <Reveal>
          <form action="#" className="rounded-[2rem] bg-white p-8 shadow-[0_24px_80px_rgba(45,42,38,0.08)]">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="block text-sm font-medium text-charcoal">
                {content.form.nameLabel}
                <input className={fieldClasses} name="name" type="text" required />
              </label>
              <label className="block text-sm font-medium text-charcoal">
                {content.form.emailLabel}
                <input className={fieldClasses} name="email" type="email" autoComplete="email" required />
              </label>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <label className="block text-sm font-medium text-charcoal">
                {content.form.roleLabel}
                <select className={fieldClasses} name="role" defaultValue="participant" required>
                  {content.form.roleOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium text-charcoal">
                {content.form.municipalityLabel}
                <input className={fieldClasses} name="municipality" type="text" />
              </label>
            </div>

            <label className="mt-6 block text-sm font-medium text-charcoal">
              {content.form.messageLabel}
              <textarea className={`${fieldClasses} min-h-40 resize-y`} name="message" required />
            </label>

            <p className="mt-4 text-sm leading-7 text-earth">{content.form.placeholderNote}</p>
            <button
              type="submit"
              className="mt-8 inline-flex rounded-full bg-green px-6 py-4 text-sm font-semibold text-cream transition hover:bg-green-light"
            >
              {content.form.submitLabel}
            </button>
          </form>
        </Reveal>

        <Reveal delay={180}>
          <div className="rounded-[2rem] border border-stone/20 bg-charcoal p-8 text-cream">
            <p className="text-sm uppercase tracking-[0.28em] text-cream/70">Nota</p>
            <p className="mt-5 text-lg leading-8 text-cream/90">{content.note}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
