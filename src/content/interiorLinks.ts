import type { LanguageCode } from './index.ts'

export interface InteriorLinkContent {
  eyebrow: string
  title: string
  intro: string
  readMore: string
  links: Array<{ title: string; description: string; href: string }>
}

const content: Record<LanguageCode, InteriorLinkContent> = {
  es: {
    eyebrow: 'Conocer PAIDEIA',
    title: 'Una propuesta que necesita profundidad',
    intro: 'La página principal presenta la visión. Estos recorridos desarrollan sus fundamentos, su relación con el territorio, los primeros pasos y las formas de construirla juntos.',
    readMore: 'Leer la página',
    links: [
      { title: 'El proyecto', description: 'La filosofía, los principios y la forma de aprender haciendo.', href: '/paideia/proyecto/' },
      { title: 'Territorio', description: 'Regeneración, límites ecológicos y economía al servicio de la vida.', href: '/paideia/territorio/' },
      { title: 'Cómo empezar', description: 'El roadmap fundacional, la escala del piloto y los recursos necesarios.', href: '/paideia/como-empezar/' },
      { title: 'El origen', description: 'La inquietud personal desde la que nace esta propuesta abierta.', href: '/paideia/origen/' },
      { title: 'Participa', description: 'Distintas puertas de entrada para personas, municipios y entidades.', href: '/paideia/participa/' },
    ],
  },
  ca: {
    eyebrow: 'Conèixer PAIDEIA', title: 'Una proposta que necessita profunditat', intro: 'La pàgina principal presenta la visió. Aquests recorreguts desenvolupen els fonaments, la relació amb el territori, els primers passos i les maneres de construir-la plegats.', readMore: 'Llegir la pàgina',
    links: [
      { title: 'El projecte', description: 'La filosofia, els principis i la manera d’aprendre fent.', href: '/paideia/proyecto/' },
      { title: 'Territori', description: 'Regeneració, límits ecològics i economia al servei de la vida.', href: '/paideia/territorio/' },
      { title: 'Com començar', description: 'El full de ruta fundacional, l’escala del pilot i els recursos necessaris.', href: '/paideia/como-empezar/' },
      { title: 'L’origen', description: 'La inquietud personal des de la qual neix aquesta proposta oberta.', href: '/paideia/origen/' },
      { title: 'Participa', description: 'Diferents portes d’entrada per a persones, municipis i entitats.', href: '/paideia/participa/' },
    ],
  },
  eu: {
    eyebrow: 'PAIDEIA ezagutu', title: 'Sakontasuna behar duen proposamena', intro: 'Orrialde nagusiak ikuspegia aurkezten du. Ibilbide hauek oinarriak, lurraldearekiko harremana, lehen urratsak eta elkarrekin eraikitzeko moduak garatzen dituzte.', readMore: 'Orrialdea irakurri',
    links: [
      { title: 'Proiektua', description: 'Filosofia, printzipioak eta eginez ikasteko modua.', href: '/paideia/proyecto/' },
      { title: 'Lurraldea', description: 'Birsorkuntza, muga ekologikoak eta bizitzaren zerbitzura dagoen ekonomia.', href: '/paideia/territorio/' },
      { title: 'Nola hasi', description: 'Sorrera-ibilbidea, pilotuaren eskala eta behar diren baliabideak.', href: '/paideia/como-empezar/' },
      { title: 'Jatorria', description: 'Proposamen ireki honen atzean dagoen kezka pertsonala.', href: '/paideia/origen/' },
      { title: 'Parte hartu', description: 'Pertsona, udalerri eta erakundeentzako sarrera desberdinak.', href: '/paideia/participa/' },
    ],
  },
  gl: {
    eyebrow: 'Coñecer PAIDEIA', title: 'Unha proposta que necesita profundidade', intro: 'A páxina principal presenta a visión. Estes percorridos desenvolven os fundamentos, a relación co territorio, os primeiros pasos e as formas de construíla xuntos.', readMore: 'Ler a páxina',
    links: [
      { title: 'O proxecto', description: 'A filosofía, os principios e a forma de aprender facendo.', href: '/paideia/proyecto/' },
      { title: 'Territorio', description: 'Rexeneración, límites ecolóxicos e economía ao servizo da vida.', href: '/paideia/territorio/' },
      { title: 'Como comezar', description: 'A folla de ruta fundacional, a escala do piloto e os recursos necesarios.', href: '/paideia/como-empezar/' },
      { title: 'A orixe', description: 'A inquedanza persoal da que nace esta proposta aberta.', href: '/paideia/origen/' },
      { title: 'Participa', description: 'Diferentes portas de entrada para persoas, municipios e entidades.', href: '/paideia/participa/' },
    ],
  },
}

export default content
