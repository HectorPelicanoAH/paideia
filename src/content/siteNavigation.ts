import type { LanguageCode } from './index.ts'
import type { PageSlug } from '../interior/types.ts'

interface SiteNavigationLabels {
  mainMenu: string
  openMenu: string
  closeMenu: string
  homeSections: string
  pageSections: string
  presentation: string
  pages: Record<PageSlug, string>
}

export const pageSlugs: PageSlug[] = ['proyecto', 'territorio', 'como-empezar', 'origen', 'participa']

export const siteNavigation: Record<LanguageCode, SiteNavigationLabels> = {
  es: {
    mainMenu: 'Navegación principal',
    openMenu: 'Abrir menú de navegación',
    closeMenu: 'Cerrar menú de navegación',
    homeSections: 'Secciones de la presentación',
    pageSections: 'Secciones de esta página',
    presentation: 'Presentación',
    pages: { proyecto: 'El proyecto', territorio: 'Territorio', 'como-empezar': 'Cómo empezar', origen: 'Origen', participa: 'Participa' },
  },
  ca: {
    mainMenu: 'Navegació principal',
    openMenu: 'Obrir menú de navegació',
    closeMenu: 'Tancar menú de navegació',
    homeSections: 'Seccions de la presentació',
    pageSections: 'Seccions d’aquesta pàgina',
    presentation: 'Presentació',
    pages: { proyecto: 'El projecte', territorio: 'Territori', 'como-empezar': 'Com començar', origen: 'Origen', participa: 'Participa' },
  },
  eu: {
    mainMenu: 'Nabigazio nagusia',
    openMenu: 'Nabigazio-menua ireki',
    closeMenu: 'Nabigazio-menua itxi',
    homeSections: 'Aurkezpeneko atalak',
    pageSections: 'Orrialde honetako atalak',
    presentation: 'Aurkezpena',
    pages: { proyecto: 'Proiektua', territorio: 'Lurraldea', 'como-empezar': 'Nola hasi', origen: 'Jatorria', participa: 'Parte hartu' },
  },
  gl: {
    mainMenu: 'Navegación principal',
    openMenu: 'Abrir menú de navegación',
    closeMenu: 'Pechar menú de navegación',
    homeSections: 'Seccións da presentación',
    pageSections: 'Seccións desta páxina',
    presentation: 'Presentación',
    pages: { proyecto: 'O proxecto', territorio: 'Territorio', 'como-empezar': 'Como comezar', origen: 'Orixe', participa: 'Participa' },
  },
}
