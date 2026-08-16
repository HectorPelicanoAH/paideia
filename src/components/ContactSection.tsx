import { useState, type FormEvent } from 'react'
import type { SiteContent } from '../content/index.ts'
import Reveal from './Reveal.tsx'
import Section from './Section.tsx'

interface ContactSectionProps {
  content: SiteContent['contact']
}

const fieldClasses =
  'mt-2 w-full rounded-2xl border border-stone/30 bg-white px-4 py-3 text-base text-charcoal outline-none transition placeholder:text-stone focus:border-green focus:ring-2 focus:ring-green/20'

export default function ContactSection({ content }: ContactSectionProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const recipient = String.fromCharCode(
      102,
      48,
      97,
      99,
      101,
      54,
      49,
      50,
      49,
      57,
      56,
      101,
      101,
      53,
      55,
      48,
      50,
      50,
      102,
      50,
      52,
      49,
      52,
      102,
      55,
      56,
      51,
      99,
      48,
      48,
      49,
      97,
    )

    setStatus('sending')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          role: formData.get('role'),
          municipality: formData.get('municipality'),
          message: formData.get('message'),
          _honey: formData.get('_honey'),
          _subject: 'Nuevo contacto desde PAIDEIA',
          _captcha: 'false',
          _template: 'table',
        }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" background="cream" eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <form
            className="rounded-[2rem] bg-white p-8 shadow-[0_24px_80px_rgba(45,42,38,0.08)]"
            onSubmit={handleSubmit}
          >
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

            <label aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
              Website
              <input name="_honey" type="text" tabIndex={-1} autoComplete="off" />
            </label>

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
            <p
              aria-live="polite"
              className={`mt-4 text-sm leading-7 ${
                status === 'error' ? 'text-[#a6472f]' : 'text-earth'
              } ${status === 'idle' ? 'hidden' : 'block'}`}
            >
              {status === 'sending'
                ? content.form.sendingLabel
                : status === 'success'
                  ? content.form.successMessage
                  : content.form.errorMessage}
            </p>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-8 inline-flex rounded-full bg-green px-6 py-4 text-sm font-semibold text-cream transition hover:bg-green-light"
            >
              {status === 'sending' ? content.form.sendingLabel : content.form.submitLabel}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
