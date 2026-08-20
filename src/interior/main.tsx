import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InteriorApp from './InteriorApp.tsx'
import { InteriorLanguageProvider } from './useInteriorLanguage.tsx'

createRoot(document.getElementById('root')!).render(<StrictMode><InteriorLanguageProvider><InteriorApp /></InteriorLanguageProvider></StrictMode>)
