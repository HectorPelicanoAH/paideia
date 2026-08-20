import type { LanguageCode } from '../content/index.ts'

export type PageSlug = 'proyecto' | 'territorio' | 'como-empezar' | 'origen' | 'participa'

export interface InteriorSection {
  id: string
  title: string
  eyebrow?: string
  paragraphs?: string[]
  bullets?: string[]
  quote?: string
  steps?: string[]
}

export interface InteriorPageContent {
  title: string
  intro: string
  description: string
  status?: string
  sections: InteriorSection[]
}

export interface InteriorUI {
  languageName: string
  languages: Record<LanguageCode, string>
  backHome: string
  contents: string
  openContents: string
  foundational: string
  explore: string
  previous: string
  next: string
  footer: string
  photoAlt: string
  form: {
    name: string
    email: string
    profile: string
    place: string
    contribution: string
    message: string
    privacy: string
    submit: string
    sending: string
    success: string
    error: string
    profiles: string[]
  }
}

export interface InteriorLanguageContent {
  ui: InteriorUI
  nav: Record<PageSlug, string>
  pages: Record<PageSlug, InteriorPageContent>
}
