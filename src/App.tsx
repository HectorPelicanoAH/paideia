import { useEffect } from 'react'
import CommunitySection from './components/CommunitySection.tsx'
import ContactSection from './components/ContactSection.tsx'
import EconomySection from './components/EconomySection.tsx'
import Footer from './components/Footer.tsx'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import LearningSection from './components/LearningSection.tsx'
import ManifestoSection from './components/ManifestoSection.tsx'
import MastersSection from './components/MastersSection.tsx'
import ParticipateSection from './components/ParticipateSection.tsx'
import PilotSection from './components/PilotSection.tsx'
import SeasonsSection from './components/SeasonsSection.tsx'
import TerritorySection from './components/TerritorySection.tsx'
import WhatSection from './components/WhatSection.tsx'
import WhySection from './components/WhySection.tsx'
import { useLanguage } from './hooks/useLanguage.tsx'

const SITE_URL = 'https://hectorpelicanoah.github.io/paideia/'

export default function App() {
  const { content } = useLanguage()

  useEffect(() => {
    document.title = content.meta.title

    const updateMeta = (selector: string, value: string) => {
      const node = document.querySelector<HTMLMetaElement>(selector)
      if (node) {
        node.content = value
      }
    }

    updateMeta('meta[name="description"]', content.meta.description)
    updateMeta('meta[property="og:title"]', content.meta.ogTitle)
    updateMeta('meta[property="og:description"]', content.meta.ogDescription)
    updateMeta('meta[property="og:locale"]', content.meta.locale)
    updateMeta('meta[property="og:url"]', SITE_URL)
    updateMeta('meta[name="twitter:title"]', content.meta.ogTitle)
    updateMeta('meta[name="twitter:description"]', content.meta.ogDescription)
  }, [content])

  return (
    <div className="bg-white font-sans text-charcoal antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-charcoal focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero content={content.hero} />
        <WhySection content={content.why} />
        <WhatSection content={content.what} />
        <LearningSection content={content.learning} />
        <SeasonsSection content={content.seasons} />
        <CommunitySection content={content.community} />
        <TerritorySection content={content.territory} />
        <MastersSection content={content.masters} />
        <EconomySection content={content.economy} />
        <PilotSection content={content.pilot} />
        <ParticipateSection content={content.participate} />
        <ManifestoSection content={content.manifesto} />
        <ContactSection content={content.contact} />
      </main>
      <Footer content={{ footer: content.footer, header: content.header }} />
    </div>
  )
}
