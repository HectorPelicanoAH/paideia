import type { PropsWithChildren } from 'react'
import Reveal from './Reveal.tsx'

interface SectionProps extends PropsWithChildren {
  id: string
  eyebrow: string
  title: string
  intro: string
  background?: 'white' | 'cream'
}

export default function Section({
  children,
  id,
  eyebrow,
  title,
  intro,
  background = 'white',
}: SectionProps) {
  const backgroundClass = background === 'cream' ? 'bg-cream' : 'bg-white'

  return (
    <section id={id} className={`${backgroundClass} scroll-mt-24 py-20 md:py-28`}>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 sm:px-8 lg:px-12">
        <Reveal className="max-w-3xl">
          <div className="mb-5 h-px w-14 bg-warm" aria-hidden="true" />
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.32em] text-green">
            {eyebrow}
          </p>
          <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-earth md:text-lg">
            {intro}
          </p>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
