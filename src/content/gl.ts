import type { SiteContent } from './index.ts'

const gl: SiteContent = {
  languageLabel: 'Idioma',
  languages: {
    ca: 'Catalán',
    es: 'Castelán',
    eu: 'Éuscaro',
    gl: 'Galego',
  },
  meta: {
    title: 'PAIDEIA — Unha comunidade para aprender a vivir',
    description:
      'PAIDEIA é unha comunidade de aprendizaxe enraizada en aldeas e vilas pequenas: aprender facendo, recuperar saberes e transmitilos entre xeracións.',
    ogTitle: 'PAIDEIA — Unha comunidade para aprender a vivir',
    ogDescription:
      'Unha idea de vida vencellada ao territorio: aprender facendo, coidar, compartir e transmitir saberes entre xeracións.',
    siteName: 'PAIDEIA',
    locale: 'gl_ES',
  },
  header: {
    homeLabel: 'Ir ao inicio',
    nav: [
      { label: 'Que é', href: '#what' },
      { label: 'Por que', href: '#why' },
      { label: 'Aprender facendo', href: '#learning' },
      { label: 'Tecnoloxía e vida', href: '#technology' },
      { label: 'Ritmo das estacións', href: '#seasons' },
      { label: 'Comunidade', href: '#community' },
      { label: 'Territorio', href: '#territory' },
      { label: 'Mestres', href: '#masters' },
      { label: 'Economía', href: '#economy' },
      { label: 'Piloto', href: '#pilot' },
      { label: 'Participar', href: '#participate' },
      { label: 'Manifesto', href: '#manifesto' },
      { label: 'Contacto', href: '#contact' },
    ],
    languageSelectorLabel: 'Escolle idioma',
    menuLabel: 'Abrir o menú de navegación',
    closeLabel: 'Pechar o menú de navegación',
    participateLabel: 'Quero participar',
  },
  hero: {
    status: 'PROXECTO EN CONSTRUCIÓN · FASE FUNDACIONAL',
    eyebrow: 'ARRAIGADOS AO TERRITORIO · ABERTOS AO FUTURO',
    title: 'PAIDEIA',
    subtitle: 'Aprender, traballar e vivir en comunidade nunha vila pequena.',
    description:
      'PAIDEIA conecta persoas de distintas xeracións para aprender facendo e responder a necesidades reais do territorio.',
    signals: ['Aprendizaxe práctica', 'Vida en comunidade', 'Contribución local'],
    primaryCta: 'Coñecer o proxecto',
    secondaryCta: 'Ver como comezar',
    asideQuote: 'A aldea non sería o escenario de PAIDEIA. Sería parte dela.',
  },
  why: {
    eyebrow: 'Por que existe',
    title: 'Unha resposta á perda de sentido, de oficio e de vínculo.',
    intro:
      'PAIDEIA nace cando vemos que hai moita xente preparada para consumir, pero poucos espazos reais para sentirse útil, necesaria e conectada co que fai.',
    paragraphs: [
      'Non queremos simplemente atraer xente ao rural. Queremos que atopen unha maneira de vivir que os implique nunha realidade concreta, con responsabilidades, relacións e aprendizaxes compartidas.',
      'As aldeas e vilas pequenas gardan ritmos, oficios, infraestruturas e memoria. Cando ese tecido se debilita, non se perde só actividade económica: pérdese tamén unha maneira de entender a dependencia mutua e a dignidade do traballo ben feito.',
      'PAIDEIA propón un lugar onde volver probar, equivocarse, servir e converter a aprendizaxe nunha práctica viva. Non como unha experiencia de paso, senón como unha forma de se relacionar co tempo, coa terra e coas demais persoas.',
    ],
    pullQuote:
      'Queremos que as persoas se sintan útiles, parte dunha comunidade e capaces de adquirir sabedoría para a transmitir a outras.',
  },
  what: {
    eyebrow: 'Que é PAIDEIA',
    title: 'Unha comunidade que aprende facendo e contribúe ao lugar que habita.',
    intro:
      'Mozas, adultos e maiores comparten vida cotiá, oficios e responsabilidades nunha vila pequena. O que aprenden convértese en traballo útil para a comunidade e o territorio.',
    points: [
      {
        title: 'Unha idea de vida',
        text: 'PAIDEIA non é un programa illado, senón unha maneira de vivir na que a aprendizaxe forma parte do día a día e do compromiso cun lugar concreto.',
      },
      {
        title: 'Un espazo interxeracional',
        text: 'Mozas, adultos e maiores comparten tempo, saberes e responsabilidades. A transmisión non baixa só dunha persoa experta a outra que aprende: circula dentro da propia comunidade.',
      },
      {
        title: 'Unha comunidade con oficio',
        text: 'Os saberes prácticos, manuais e organizativos teñen o mesmo valor ca a reflexión. Facer cousas coas mans tamén pode ser unha forma de pensar.',
      },
      {
        title: 'Unha estrutura útil para o lugar',
        text: 'O que se aprende e produce ten que ter sentido para a vida local: reparar, coidar, cultivar, conservar, transformar e manter vivo o territorio.',
      },
    ],
    closing: 'PAIDEIA é unha forma de pertenza activa: aprender mentres contribuímos.',
  },
  learning: {
    eyebrow: 'Aprender facendo',
    title: 'A aprendizaxe como práctica compartida.',
    intro:
      'Aquí non se aprende primeiro para aplicar despois. Apréndese mentres se fai un traballo real, con materia real, con consecuencias reais e con persoas que saben acompañar o proceso.',
    steps: [
      {
        title: 'Traballo con sentido',
        text: 'Cada actividade responde a unha necesidade concreta: reparar un tellado, preparar unha horta, organizar conservas, documentar un oficio ou coidar un espazo común.',
      },
      {
        title: 'Observación e repetición',
        text: 'Aprender significa mirar como traballa alguén con experiencia, repetir xestos, entender os ritmos e descubrir os criterios que sosteñen un traballo ben feito.',
      },
      {
        title: 'Reflexión incorporada',
        text: 'A conversa, a lectura e a documentación teñen lugar dentro do proceso. O pensamento non queda separado da acción, senón que a interpreta e a mellora.',
      },
      {
        title: 'Transmisión',
        text: 'O que unha persoa aprende convértese en capacidade de servizo e, máis adiante, en capacidade de ensinarllo a outra.',
      },
    ],
    closing: 'Cremos que o traballo pode ser unha fonte de dignidade, aprendizaxe e servizo.',
  },
  technology: {
    eyebrow: 'Tecnoloxía ao servizo da vida',
    title: 'Tecnoloxía con escala humana para coidar persoas e territorio.',
    intro:
      'PAIDEIA non rexeita a tecnoloxía nin quere volver ao pasado. Queremos empregar as tecnoloxías contemporáneas cando realmente melloran a vida das persoas e do lugar.',
    positioning:
      'Automatización, enerxías renovables, ferramentas dixitais, fabricación avanzada e intelixencia artificial poden ser útiles se reforzan autonomía, criterio e capacidade de servizo. A tecnoloxía debe estar ao servizo das persoas, non as persoas ao servizo da tecnoloxía.',
    principles: [
      {
        title: 'Amplificar, non substituír',
        text: 'Buscamos ferramentas que aumenten as capacidades humanas e axuden a traballar mellor, sen eliminar de maneira innecesaria a capacidade de comprender, crear, reparar e decidir.',
      },
      {
        title: 'Eficiencia con propósito',
        text: 'Queremos eficiencia para gañar autonomía, seguridade, tempo e benestar, non para entrar nunha lóxica de producir e consumir sen límite.',
      },
      {
        title: 'Escala humana',
        text: 'Escollemos tecnoloxías axeitadas ao contexto e ás necesidades reais do territorio. O grande ou sofisticado non é sempre o mellor.',
      },
      {
        title: 'Natureza como límite',
        text: 'Cada decisión tecnolóxica debe considerar recursos, enerxía, materiais e residuos. Non aceptamos beneficios presentes que trasladen custos ao territorio ou ás xeracións futuras.',
      },
      {
        title: 'Coñecer a ferramenta',
        text: 'Aprender tamén implica comprender a tecnoloxía que usamos. Sempre que sexa posible, priorizamos coñecemento, reparación, mantemento e autonomía fronte á dependencia de caixas negras.',
      },
    ],
    mainMessage: 'Non rexeitamos o futuro. Queremos construílo a escala humana.',
    featuredQuote:
      'A pregunta non é se podemos facelo con tecnoloxía. A pregunta é se facelo con tecnoloxía nos axuda a vivir mellor.',
  },
  seasons: {
    eyebrow: 'Ritmo das estacións',
    title: 'Un calendario vivo para orientar o que facemos.',
    intro:
      'PAIDEIA organízase segundo o tempo real do territorio. As estacións non son decoración: marcan prioridades, esforzos e formas de convivencia.',
    seasons: [
      {
        name: 'Primavera',
        actions: ['sementar', 'plantar', 'reparar', 'comezar'],
        description: 'Tempo de poñer en marcha procesos, preparar espazos e abrir camiños novos con enerxía compartida.',
      },
      {
        name: 'Verán',
        actions: ['coidar', 'traballar', 'recoller', 'convivir'],
        description: 'Momento de intensidade, coidado constante e vida colectiva sostida arredor do traballo e da presenza.',
      },
      {
        name: 'Outono',
        actions: ['colleitar', 'transformar', 'conservar'],
        description: 'Hora de ordenar o producido, darlle forma e pensar como se garda e como se comparte.',
      },
      {
        name: 'Inverno',
        actions: ['reparar', 'estudar', 'ler', 'conversar', 'preparar'],
        description: 'Tempo de pausa activa, mantemento, estudo e preparación do seguinte ciclo.',
      },
    ],
  },
  community: {
    eyebrow: 'Comunidade',
    title: 'A comunidade non é contexto: é método.',
    intro:
      'PAIDEIA constrúese na convivencia cotiá. Compartir tempo, espazos, ferramentas e responsabilidades forma parte da aprendizaxe.',
    pillars: [
      {
        title: 'Vida en común',
        text: 'As comidas, as asembleas, o mantemento dos espazos e o coidado mutuo forman parte da mesma pedagoxía cós oficios.',
      },
      {
        title: 'Reciprocidade',
        text: 'Unha comunidade constrúese cando os seus membros teñen algo que ofrecerse entre si: tempo, oficio, escoita, memoria ou traballo.',
      },
      {
        title: 'Responsabilidade compartida',
        text: 'Non hai espectadores. Todo o mundo participa segundo a súa etapa, a súa experiencia e a súa dispoñibilidade.',
      },
    ],
    quote:
      'Cremos que unha comunidade se constrúe cando os seus membros teñen algo que ofrecerse mutuamente.',
  },
  territory: {
    eyebrow: 'Territorio',
    title: 'Raigame, non decorado rural.',
    intro:
      'O territorio non é o fondo dunha experiencia bonita: é a realidade concreta que pide atención, traballo e continuidade.',
    paragraphs: [
      'Cada lugar ten paisaxe, recursos, límites, memoria, necesidades e posibilidades propias. PAIDEIA escoita esa singularidade e adapta a súa maneira de estar a ela.',
      'Contribuír ao territorio significa coidar camiños, casas, hortas, auga, montes, arquivos, oficios e vínculos humanos. Significa asumir que a vida compartida tamén necesita infraestruturas materiais e culturais.',
    ],
    stats: [
      {
        value: 'Oficios vivos',
        label: 'Saberes que continúan',
        description: 'Identificar e activar coñecementos prácticos que aínda existen na aldea ou na súa contorna.',
      },
      {
        value: 'Tempo compartido',
        label: 'Presenza sostida',
        description: 'A continuidade importa máis ca a intensidade puntual: hai que volver, coidar e quedar o tempo suficiente para entender un lugar.',
      },
      {
        value: 'Raigame útil',
        label: 'Contribución concreta',
        description: 'O que facemos debe deixar o territorio un chisco máis habitable, máis coidado e máis capaz de transmitir vida.',
      },
    ],
  },
  masters: {
    eyebrow: 'Mestres',
    title: 'Todas as persoas temos algo que aprender e algo que ensinar.',
    intro:
      'En PAIDEIA, mestre é quen ten un coñecemento que paga a pena compartir. Pode vir dun oficio, de anos de experiencia, dunha profesión, dunha afección ou de algo aprendido de quen estivo antes.',
    profiles: [
      {
        title: 'Coñecementos que forman parte da vida',
        text: 'Cultivar a terra, podar unha árbore, levantar un muro, cociñar, coser, reparar, traballar a madeira, coñecer o bosque, utilizar unha ferramenta ou comprender unha tecnoloxía.',
      },
      {
        title: 'Pedagoxía de proximidade',
        text: 'Ensinar aquí é acompañar desde a práctica: mostrar, corrixir, confiar, dar tempo e facerlle sitio á repetición.',
      },
      {
        title: 'Autoridade compartida',
        text: 'O mestre non é unha figura distante. Forma parte da vida común e transmite tamén unha maneira de estar, de falar e de responder diante da dificultade.',
      },
    ],
    closing: 'Recibir → practicar → comprender → achegar → transmitir.',
  },
  economy: {
    eyebrow: 'Economía e produción',
    title: 'Producir para soster a vida, non só para vender.',
    intro:
      'PAIDEIA necesita unha economía real. A aprendizaxe faise máis fonda cando participa en procesos produtivos con valor, utilidade e continuidade.',
    models: [
      {
        title: 'Produción situada',
        text: 'Hortas, conservas, madeira, cociña, mantemento, documentación ou servizos que responden a recursos e necesidades reais do territorio.',
      },
      {
        title: 'Dignidade do traballo',
        text: 'O traballo non é só un medio para conseguir ingresos. É tamén unha maneira de adquirir criterio, autonomía e sentido de contribución.',
      },
      {
        title: 'Escala humana',
        text: 'Interésannos proxectos que poidan medrar sen romper a relación coa aldea, coa paisaxe nin coas persoas que viven nela.',
      },
      {
        title: 'Aprendizaxe económica',
        text: 'Producir tamén significa entender custos, ritmos, comercialización, sustentabilidade e goberno compartido dos recursos.',
      },
    ],
    closing: 'Cremos que unha persoa necesita algo máis ca consumir para se sentir viva.',
  },
  pilot: {
    eyebrow: 'Proxecto piloto',
    title: 'Comezar nun lugar pequeno, con gran ambición e escala xusta.',
    intro:
      'O piloto de PAIDEIA quere poñer a proba esta idea de vida nun lugar concreto, cunha comunidade reducida, ritmos asumibles e actividades útiles para a aldea.',
    phases: [
      {
        title: 'Escoita do lugar',
        text: 'Mapear necesidades, oficios, espazos dispoñibles, persoas clave e oportunidades de colaboración co concello e coa comunidade local.',
      },
      {
        title: 'Activación dunha primeira comunidade',
        text: 'Convocar participantes, mestres e colaboradoras dispostos a compartir tempo, responsabilidades e aprendizaxe real.',
      },
      {
        title: 'Posta en marcha de proxectos útiles',
        text: 'Iniciar actividades concretas de reparación, produción, documentación ou coidado capaces de soster o método e xerar confianza.',
      },
      {
        title: 'Avaliación e transmisión',
        text: 'Documentar o que funciona, corrixir o que non e preparar unha posible réplica noutros pobos.',
      },
    ],
    villageQuote: 'A aldea non sería o escenario de PAIDEIA. Sería parte dela.',
  },
  participate: {
    eyebrow: 'Tres maneiras de participar',
    title: 'Cada persoa e cada lugar poden entrar desde un sitio distinto.',
    intro:
      'PAIDEIA necesita complicidades diversas. Hai quen ofrece territorio, quen transmite un saber e quen chega con ganas de aprender e contribuír.',
    cards: [
      {
        title: 'Son Concello',
        prompt: 'Quero explorar PAIDEIA no meu pobo.',
        description: 'Busco unha proposta que active espazos, oficios e comunidade local cunha ollada de longo percorrido.',
        cta: 'Falar do piloto',
      },
      {
        title: 'Quero compartir o que sei',
        prompt: 'Teño algo que ensinar.',
        description: 'Quero transmitir un saber práctico ou cultural e formar parte dunha comunidade que o valore e o faga medrar.',
        cta: 'Quero compartir o que sei',
      },
      {
        title: 'Quero Participar',
        prompt: 'Quero aprender e formar parte.',
        description: 'Busco unha experiencia esixente e real onde aprender a vivir, traballar, coidar e convivir con outras persoas.',
        cta: 'Presentarme',
      },
    ],
  },
  manifesto: {
    eyebrow: 'Manifesto',
    title: 'O que afirmamos.',
    intro:
      'PAIDEIA é tamén unha afirmación. Un conxunto de conviccións sobre o traballo, a comunidade, a sabedoría e a boa vida.',
    beliefs: [
      'Non queremos simplemente atraer xente ao rural.',
      'Queremos que as persoas se sintan útiles, parte dunha comunidade e capaces de adquirir sabedoría para a transmitir a outras.',
      'Cremos que unha persoa necesita algo máis ca consumir para se sentir viva.',
      'Cremos que facer cousas coas mans tamén pode ser unha forma de pensar.',
      'Cremos que o traballo pode ser unha fonte de dignidade, aprendizaxe e servizo.',
      'Cremos que os pobos gardan coñecementos que non deberían desaparecer.',
      'Cremos que unha comunidade se constrúe cando os seus membros teñen algo que ofrecerse mutuamente.',
      'Cremos que aprender a vivir é unha tarefa que nunca remata.',
    ],
    closing: 'Aprender · Facer · Coidar · Compartir · Transmitir',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Sigamos a conversa.',
    intro:
      'Se es concello, mestre, colaboradora ou posible participante, escríbenos e responderemos canto antes.',
    form: {
      nameLabel: 'Nome',
      emailLabel: 'Correo electrónico',
      roleLabel: 'Son:',
      municipalityLabel: 'Concello/Provincia (opcional)',
      messageLabel: 'Mensaxe',
      submitLabel: 'Enviar consulta',
      sendingLabel: 'Enviando...',
      successMessage: 'Grazas. A túa mensaxe enviouse correctamente.',
      errorMessage: 'Non puidemos enviar a túa mensaxe. Téntao de novo nuns minutos.',
      placeholderNote: 'Cóntanos que che interesa, que podes achegar ou que pobo tes na cabeza.',
      roleOptions: [
        { value: 'municipality', label: 'Concello' },
        { value: 'master', label: 'Mestre' },
        { value: 'collaborator', label: 'Colaborador/a' },
        { value: 'participant', label: 'Participante' },
        { value: 'other', label: 'Outro' },
      ],
    },
  },
  footer: {
    tagline: 'PAIDEIA · Unha comunidade para aprender a vivir.',
    contactPrompt: 'Enraizar aprendizaxe, traballo e comunidade en lugares vivos.',
    linksLabel: 'Seccións',
    rights: 'Todos os dereitos reservados.',
    madeFor: 'Deseñado para unha futura publicación en GitHub Pages.',
  },
}

export default gl
