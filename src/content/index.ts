import ca from './ca.ts'
import es from './es.ts'
import eu from './eu.ts'
import gl from './gl.ts'

export type LanguageCode = 'ca' | 'es' | 'eu' | 'gl'

export interface NavItem {
  label: string
  href: string
}

export interface HighlightItem {
  title: string
  text: string
}

export interface SeasonItem {
  name: string
  actions: string[]
  description: string
}

export interface StatItem {
  value: string
  label: string
  description: string
}

export interface ParticipateCard {
  title: string
  prompt: string
  description: string
  cta: string
}

export interface RoleOption {
  value: string
  label: string
}

export interface SiteContent {
  languageLabel: string
  languages: Record<LanguageCode, string>
  meta: {
    title: string
    description: string
    ogTitle: string
    ogDescription: string
    siteName: string
    locale: string
  }
  header: {
    homeLabel: string
    nav: NavItem[]
    languageSelectorLabel: string
    menuLabel: string
    closeLabel: string
    participateLabel: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    primaryCta: string
    secondaryCta: string
    asideQuote: string
  }
  why: {
    eyebrow: string
    title: string
    intro: string
    paragraphs: string[]
    pullQuote: string
  }
  what: {
    eyebrow: string
    title: string
    intro: string
    points: HighlightItem[]
    closing: string
  }
  learning: {
    eyebrow: string
    title: string
    intro: string
    steps: HighlightItem[]
    closing: string
  }
  seasons: {
    eyebrow: string
    title: string
    intro: string
    seasons: SeasonItem[]
  }
  community: {
    eyebrow: string
    title: string
    intro: string
    pillars: HighlightItem[]
    quote: string
  }
  territory: {
    eyebrow: string
    title: string
    intro: string
    paragraphs: string[]
    stats: StatItem[]
  }
  masters: {
    eyebrow: string
    title: string
    intro: string
    profiles: HighlightItem[]
    closing: string
  }
  economy: {
    eyebrow: string
    title: string
    intro: string
    models: HighlightItem[]
    closing: string
  }
  pilot: {
    eyebrow: string
    title: string
    intro: string
    phases: HighlightItem[]
    villageQuote: string
  }
  participate: {
    eyebrow: string
    title: string
    intro: string
    cards: ParticipateCard[]
  }
  manifesto: {
    eyebrow: string
    title: string
    intro: string
    beliefs: string[]
    closing: string
  }
  contact: {
    eyebrow: string
    title: string
    intro: string
    noteLabel: string
    note: string
    form: {
      nameLabel: string
      emailLabel: string
      roleLabel: string
      municipalityLabel: string
      messageLabel: string
      submitLabel: string
      placeholderNote: string
      roleOptions: RoleOption[]
    }
  }
  footer: {
    tagline: string
    contactPrompt: string
    linksLabel: string
    rights: string
    madeFor: string
  }
}

export const contentByLanguage: Record<LanguageCode, SiteContent> = {
  ca,
  es,
  eu,
  gl,
}

export { ca, es, eu, gl }
