import { useEffect, useState, type FormEvent } from 'react'
import type { LanguageCode } from '../content/index.ts'
import { pageSlugs, siteNavigation } from '../content/siteNavigation.ts'
import { interiorContent } from './content/index.ts'
import type { InteriorSection, PageSlug } from './types.ts'
import { useInteriorLanguage } from './useInteriorLanguage.tsx'
import './interior.css'

const SITE = 'https://hectorpelicanoah.github.io/paideia'
const languageCodes: LanguageCode[] = ['es', 'ca', 'eu', 'gl']

function readSlug(): PageSlug {
  const segment = window.location.pathname.split('/').filter(Boolean).at(-1)
  return pageSlugs.includes(segment as PageSlug) ? segment as PageSlug : 'proyecto'
}

function updateMetadata(slug: PageSlug, title: string, description: string, locale: string) {
  const canonical = `${SITE}/${slug}/`
  document.title = `${title} · PAIDEIA`
  const setMeta = (selector: string, value: string) => {
    document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', value)
  }
  setMeta('meta[name="description"]', description)
  setMeta('meta[property="og:title"]', `${title} · PAIDEIA`)
  setMeta('meta[property="og:description"]', description)
  setMeta('meta[property="og:locale"]', locale)
  setMeta('meta[property="og:url"]', canonical)
  document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', canonical)
}

function LanguageSelector({ label }: { label: string }) {
  const { language, setLanguage } = useInteriorLanguage()
  return <div className="interior-language" role="group" aria-label={label}>
    {languageCodes.map(code => <button key={code} type="button" lang={code} aria-pressed={language === code} onClick={() => setLanguage(code)}>{code}</button>)}
  </div>
}

function InteriorHeader({ slug, sections, languageLabel }: { slug: PageSlug; sections: InteriorSection[]; languageLabel: string }) {
  const { language } = useInteriorLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const navigation = siteNavigation[language]
  const menuText = language === 'eu' ? 'Menua' : 'Menú'
  return <header className="interior-header">
    <div className="interior-header-primary">
      <a className="interior-brand" href="/paideia/" aria-label="PAIDEIA">
        <img src="/paideia/brand/paideia-mark.svg" alt="" width="48" height="48" />
        <span>PAIDEIA</span>
      </a>
      <nav className="interior-main-nav" aria-label={navigation.mainMenu}>
        <a href="/paideia/">{navigation.presentation}</a>
        {pageSlugs.map(pageSlug => <a key={pageSlug} href={`/paideia/${pageSlug}/`} aria-current={pageSlug === slug ? 'page' : undefined}>{navigation.pages[pageSlug]}</a>)}
      </nav>
      <div className="interior-header-actions">
        <LanguageSelector label={languageLabel} />
        <button className="interior-menu-toggle" type="button" aria-expanded={isOpen} aria-controls="interior-mobile-nav" aria-label={isOpen ? navigation.closeMenu : navigation.openMenu} onClick={() => setIsOpen(open => !open)}>{isOpen ? '×' : menuText}</button>
      </div>
    </div>
    <nav className="interior-section-nav" aria-label={navigation.pageSections}>
      {sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
    </nav>
    {isOpen ? <div id="interior-mobile-nav" className="interior-mobile-nav">
      <nav aria-label={navigation.mainMenu}>
        <p>{navigation.mainMenu}</p>
        <a href="/paideia/" onClick={() => setIsOpen(false)}>{navigation.presentation}</a>
        {pageSlugs.map(pageSlug => <a key={pageSlug} href={`/paideia/${pageSlug}/`} aria-current={pageSlug === slug ? 'page' : undefined} onClick={() => setIsOpen(false)}>{navigation.pages[pageSlug]}</a>)}
      </nav>
      <nav aria-label={navigation.pageSections}>
        <p>{navigation.pageSections}</p>
        {sections.map(section => <a key={section.id} href={`#${section.id}`} onClick={() => setIsOpen(false)}>{section.title}</a>)}
      </nav>
      <LanguageSelector label={languageLabel} />
    </div> : null}
  </header>
}

function SectionBlock({ section, roadmap }: { section: InteriorSection; roadmap: boolean }) {
  return <section id={section.id} className={`interior-section${roadmap && section.eyebrow ? ' roadmap-step' : ''}`}>
    {section.eyebrow ? <p className="interior-eyebrow">{section.eyebrow}</p> : null}
    <h2>{section.title}</h2>
    {section.paragraphs?.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    {section.bullets ? <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul> : null}
    {section.steps ? <ol className="interior-cycle" aria-label={section.title}>{section.steps.map(item => <li key={item}>{item}</li>)}</ol> : null}
    {section.quote ? <blockquote>{section.quote}</blockquote> : null}
  </section>
}

function ContactForm() {
  const { language } = useInteriorLanguage()
  const form = interiorContent[language].ui.form
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const node = event.currentTarget
    const data = new FormData(node)
    const recipient = String.fromCharCode(102,48,97,99,101,54,49,50,49,57,56,101,101,53,55,48,50,50,102,50,52,49,52,102,55,56,51,99,48,48,49,97)
    setStatus('sending')
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipient}`, { method: 'POST', headers: { Accept: 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify({ name: data.get('name'), email: data.get('email'), profile: data.get('profile'), place: data.get('place'), contribution: data.get('contribution'), message: data.get('message'), _honey: data.get('_honey'), _subject: 'Nuevo contacto desde PAIDEIA · páginas interiores', _captcha: 'false', _template: 'table' }) })
      if (!response.ok) throw new Error()
      node.reset(); setStatus('success')
    } catch { setStatus('error') }
  }
  return <form className="interior-form" onSubmit={submit}>
    <div className="form-grid"><label>{form.name}<input name="name" autoComplete="name" required /></label><label>{form.email}<input name="email" type="email" autoComplete="email" required /></label></div>
    <label>{form.profile}<select name="profile" required>{form.profiles.map(item => <option key={item}>{item}</option>)}</select></label>
    <label>{form.place}<input name="place" autoComplete="address-level2" /></label>
    <label>{form.contribution}<textarea name="contribution" rows={3} required /></label>
    <label>{form.message}<textarea name="message" rows={5} required /></label>
    <label className="form-consent"><input name="privacy" type="checkbox" required /> <span>{form.privacy}</span></label>
    <label className="form-trap" aria-hidden="true">Website<input name="_honey" tabIndex={-1} autoComplete="off" /></label>
    <p className="form-status" aria-live="polite">{status === 'sending' ? form.sending : status === 'success' ? form.success : status === 'error' ? form.error : ''}</p>
    <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? form.sending : form.submit}</button>
  </form>
}

function PageNavigation({ slug, label }: { slug: PageSlug; label: string }) {
  const { language } = useInteriorLanguage()
  const current = pageSlugs.indexOf(slug)
  const nextSlugs = [pageSlugs[(current + 1) % pageSlugs.length], pageSlugs[(current + 2) % pageSlugs.length]]
  return <nav className="interior-page-nav" aria-label={label}><p>{label}</p><div>{nextSlugs.map(next => <a key={next} href={`/paideia/${next}/`}><span>{interiorContent[language].nav[next]}</span><b aria-hidden="true">↗</b></a>)}</div></nav>
}

export default function InteriorApp() {
  const slug = readSlug()
  const { language } = useInteriorLanguage()
  const localized = interiorContent[language]
  const page = localized.pages[slug]
  useEffect(() => updateMetadata(slug, page.title, page.description, language), [language, page, slug])
  return <div className="interior-shell">
    <a className="interior-skip" href="#interior-main">{localized.ui.contents}</a>
    <InteriorHeader slug={slug} sections={page.sections} languageLabel={localized.ui.languageName} />
    <main id="interior-main">
      <section className="interior-hero">
        <p className="interior-kicker">{localized.ui.foundational}</p>
        <h1>{page.title}</h1><p className="interior-intro">{page.intro}</p>
        {page.status ? <p className="interior-status">{page.status}</p> : null}
      </section>
      <div className="interior-layout">
        <div className="interior-content">
          {slug === 'origen' ? <figure className="interior-profile"><img src="/paideia/images/hector-huerto.jpg" alt={localized.ui.photoAlt} width="750" height="1200" loading="eager" /><figcaption>Héctor · L’Argentera</figcaption></figure> : null}
          {page.sections.map(section => <SectionBlock key={section.id} section={section} roadmap={slug === 'como-empezar'} />)}
          {slug === 'participa' ? <ContactForm /> : null}
        </div>
      </div>
      <PageNavigation slug={slug} label={localized.ui.explore} />
    </main>
    <footer className="interior-footer"><img src="/paideia/brand/paideia-mark.svg" alt="" width="36" height="36" /><p>{localized.ui.footer}</p><a href="/paideia/">{localized.ui.backHome}</a></footer>
  </div>
}
