import type { SiteContent } from './index.ts'

const es: SiteContent = {
  languageLabel: 'Idioma',
  languages: {
    ca: 'Catalán',
    es: 'Castellano',
    eu: 'Euskera',
    gl: 'Gallego',
  },
  meta: {
    title: 'PAIDEIA — Una comunidad para aprender a vivir',
    description:
      'PAIDEIA es una comunidad de aprendizaje arraigada en pueblos pequeños: aprender haciendo, recuperar saberes y transmitir sabiduría entre generaciones.',
    ogTitle: 'PAIDEIA — Una comunidad para aprender a vivir',
    ogDescription:
      'Una idea de vida arraigada al territorio: aprender haciendo, cuidar, compartir y transmitir saberes entre generaciones.',
    siteName: 'PAIDEIA',
    locale: 'es_ES',
  },
  header: {
    homeLabel: 'Ir al inicio',
    nav: [
      { label: 'Por qué', href: '#why' },
      { label: 'Qué es', href: '#what' },
      { label: 'Aprender haciendo', href: '#learning' },
      { label: 'Tecnología y vida', href: '#technology' },
      { label: 'Ritmo estacional', href: '#seasons' },
      { label: 'Comunidad', href: '#community' },
      { label: 'Territorio', href: '#territory' },
      { label: 'Maestros', href: '#masters' },
      { label: 'Economía', href: '#economy' },
      { label: 'Piloto', href: '#pilot' },
      { label: 'Participar', href: '#participate' },
      { label: 'Manifiesto', href: '#manifesto' },
      { label: 'Contacto', href: '#contact' },
    ],
    languageSelectorLabel: 'Selecciona idioma',
    menuLabel: 'Abrir menú de navegación',
    closeLabel: 'Cerrar menú de navegación',
    participateLabel: 'Quiero participar',
  },
  hero: {
    eyebrow: 'ARRAIGADOS AL TERRITORIO · ABIERTOS AL FUTURO',
    title: 'PAIDEIA',
    subtitle: 'Una comunidad para aprender a vivir.',
    description:
      'Un lugar donde aprender haciendo, recuperar saberes, contribuir a una comunidad y transmitir lo aprendido.',
    primaryCta: 'Quiero formar parte',
    secondaryCta: 'Conocer el proyecto',
    asideQuote: 'El pueblo no sería el escenario de PAIDEIA. Sería parte de ella.',
  },
  why: {
    eyebrow: 'Por qué existe',
    title: 'Una respuesta a la pérdida de sentido, de oficio y de vínculo.',
    intro:
      'PAIDEIA nace cuando vemos que hay muchas personas preparadas para consumir, pero pocas con espacios reales para sentirse útiles, necesarias y conectadas con lo que hacen.',
    paragraphs: [
      'No queremos simplemente atraer personas al campo. Queremos que encuentren una forma de vida que las implique en una realidad concreta, con responsabilidades, relaciones y aprendizajes compartidos.',
      'Los pueblos pequeños conservan ritmos, oficios, infraestructuras y memoria. Cuando ese tejido se debilita, no solo se pierde actividad económica: también se pierde una forma de comprender la interdependencia y la dignidad del trabajo bien hecho.',
      'PAIDEIA propone un lugar donde volver a probar, equivocarse, prestar servicio y convertir el aprendizaje en una práctica viva. No como una experiencia de paso, sino como una manera de relacionarse con el tiempo, la tierra y los demás.',
    ],
    pullQuote:
      'Queremos que las personas se sientan útiles, parte de una comunidad y capaces de adquirir sabiduría para transmitirla a otras.',
  },
  what: {
    eyebrow: 'Qué es PAIDEIA',
    title: 'No es una escuela. No es turismo. No es una ONG.',
    intro:
      'PAIDEIA es una comunidad de aprendizaje y producción arraigada al territorio. Una forma de organizar la vida cotidiana para que aprender, trabajar, cuidar y convivir vuelvan a estar conectados.',
    points: [
      {
        title: 'Una idea de vida',
        text: 'PAIDEIA no es un programa aislado, sino una forma de vivir en la que el aprendizaje forma parte del día a día y del compromiso con un lugar concreto.',
      },
      {
        title: 'Un espacio intergeneracional',
        text: 'Personas jóvenes, adultas y mayores comparten tiempo, saberes y responsabilidades. La transmisión no baja solo de un profesor a un alumno: circula dentro de la comunidad.',
      },
      {
        title: 'Una comunidad con oficio',
        text: 'Los saberes prácticos, manuales y organizativos tienen el mismo valor que la reflexión. Hacer cosas con las manos también puede ser una forma de pensar.',
      },
      {
        title: 'Una estructura útil para el pueblo',
        text: 'Lo que se aprende y se produce debe tener sentido para la vida local: reparar, cuidar, cultivar, conservar, transformar y mantener vivo el territorio.',
      },
    ],
    closing: 'PAIDEIA es una forma de pertenencia activa: aprender mientras contribuimos.',
  },
  learning: {
    eyebrow: 'Aprender haciendo',
    title: 'El aprendizaje como práctica compartida.',
    intro:
      'Aquí no se aprende primero para aplicar después. Se aprende mientras se realiza un trabajo real, con materia real, con consecuencias reales y con personas capaces de acompañar el proceso.',
    steps: [
      {
        title: 'Trabajo con sentido',
        text: 'Cada actividad responde a una necesidad concreta: reparar un tejado, preparar un huerto, organizar conservas, documentar un oficio o cuidar un espacio común.',
      },
      {
        title: 'Observación y repetición',
        text: 'Aprender significa mirar cómo trabaja alguien con experiencia, repetir gestos, entender ritmos y descubrir los criterios que sostienen un trabajo bien hecho.',
      },
      {
        title: 'Reflexión incorporada',
        text: 'La conversación, la lectura y la documentación tienen lugar dentro del proceso. El pensamiento no queda separado de la acción, sino que la interpreta y la mejora.',
      },
      {
        title: 'Transmisión',
        text: 'Lo que una persona aprende se convierte en capacidad de servicio y, más adelante, en capacidad de enseñárselo a otra.',
      },
    ],
    closing: 'Creemos que el trabajo puede ser una fuente de dignidad, aprendizaje y servicio.',
  },
  technology: {
    eyebrow: 'Tecnología al servicio de la vida',
    title: 'Tecnología con escala humana para cuidar personas y territorio.',
    intro:
      'PAIDEIA no rechaza la tecnología ni quiere regresar al pasado. Queremos usar las tecnologías contemporáneas cuando de verdad mejoran la vida de las personas y del lugar.',
    positioning:
      'Automatización, energías renovables, herramientas digitales, fabricación avanzada e inteligencia artificial pueden ser útiles si fortalecen autonomía, criterio y capacidad de servicio. La tecnología debe estar al servicio de las personas, no las personas al servicio de la tecnología.',
    principles: [
      {
        title: 'Amplificar, no sustituir',
        text: 'Buscamos herramientas que aumenten capacidades humanas y ayuden a trabajar mejor, sin eliminar de forma innecesaria la capacidad de comprender, crear, reparar y decidir.',
      },
      {
        title: 'Eficiencia con propósito',
        text: 'Queremos eficiencia para ganar autonomía, seguridad, tiempo y bienestar, no para entrar en una lógica de producir y consumir sin límite.',
      },
      {
        title: 'Escala humana',
        text: 'Elegimos tecnologías adecuadas al contexto y a las necesidades reales del territorio. Lo grande o sofisticado no es siempre lo mejor.',
      },
      {
        title: 'Naturaleza como límite',
        text: 'Cada decisión tecnológica debe considerar recursos, energía, materiales y residuos. No aceptamos beneficios presentes que trasladen costes al territorio o a generaciones futuras.',
      },
      {
        title: 'Conocer la herramienta',
        text: 'Aprender también implica comprender la tecnología que usamos. Siempre que sea posible, priorizamos conocimiento, reparación, mantenimiento y autonomía frente a la dependencia de cajas negras.',
      },
    ],
    mainMessage: 'No rechazamos el futuro. Queremos construirlo a escala humana.',
    featuredQuote:
      'La pregunta no es si podemos hacerlo con tecnología. La pregunta es si hacerlo con tecnología nos ayuda a vivir mejor.',
  },
  seasons: {
    eyebrow: 'Ritmo de las estaciones',
    title: 'Un calendario vivo para orientar lo que hacemos.',
    intro:
      'PAIDEIA se organiza según el tiempo real del territorio. Las estaciones no son decorado: marcan prioridades, esfuerzos y formas de convivencia.',
    seasons: [
      {
        name: 'Primavera',
        actions: ['sembrar', 'plantar', 'reparar', 'empezar'],
        description: 'Tiempo de poner en marcha procesos, preparar espacios y abrir caminos nuevos con energía compartida.',
      },
      {
        name: 'Verano',
        actions: ['cuidar', 'trabajar', 'recoger', 'convivir'],
        description: 'Momento de intensidad, cuidado constante y vida colectiva sostenida alrededor del trabajo y la presencia.',
      },
      {
        name: 'Otoño',
        actions: ['cosechar', 'transformar', 'conservar'],
        description: 'Hora de ordenar lo producido, darle forma y pensar cómo se guarda y cómo se comparte.',
      },
      {
        name: 'Invierno',
        actions: ['reparar', 'estudiar', 'leer', 'conversar', 'preparar'],
        description: 'Tiempo de pausa activa, mantenimiento, estudio y preparación del siguiente ciclo.',
      },
    ],
  },
  community: {
    eyebrow: 'Comunidad',
    title: 'La comunidad no es contexto: es método.',
    intro:
      'PAIDEIA se construye en la convivencia cotidiana. Compartir tiempo, espacios, herramientas y responsabilidades forma parte del aprendizaje.',
    pillars: [
      {
        title: 'Vida común',
        text: 'Las comidas, las asambleas, el mantenimiento de los espacios y el cuidado mutuo forman parte de la misma pedagogía que los oficios.',
      },
      {
        title: 'Reciprocidad',
        text: 'Una comunidad se construye cuando sus miembros tienen algo que ofrecerse mutuamente: tiempo, oficio, escucha, memoria o trabajo.',
      },
      {
        title: 'Responsabilidad compartida',
        text: 'No hay espectadores. Todo el mundo participa según su etapa, su experiencia y su disponibilidad.',
      },
    ],
    quote:
      'Creemos que una comunidad se construye cuando sus miembros tienen algo que ofrecerse mutuamente.',
  },
  territory: {
    eyebrow: 'Territorio',
    title: 'Arraigo, no decorado rural.',
    intro:
      'El territorio no es el fondo de una experiencia bonita: es la realidad concreta que exige atención, trabajo y continuidad.',
    paragraphs: [
      'Cada pueblo tiene paisaje, recursos, límites, memoria, necesidades y posibilidades propias. PAIDEIA escucha esa singularidad y adapta su forma de estar a ella.',
      'Contribuir al territorio significa cuidar caminos, casas, huertos, agua, bosques, archivos, oficios y vínculos humanos. Significa asumir que la vida compartida también necesita infraestructuras materiales y culturales.',
    ],
    stats: [
      {
        value: 'Oficios vivos',
        label: 'Saberes que continúan',
        description: 'Identificar y activar conocimientos prácticos que todavía existen en el pueblo o en su entorno.',
      },
      {
        value: 'Tiempo compartido',
        label: 'Presencia sostenida',
        description: 'La continuidad importa más que la intensidad puntual: hay que volver, cuidar y quedarse el tiempo suficiente para comprender un lugar.',
      },
      {
        value: 'Arraigo útil',
        label: 'Contribución concreta',
        description: 'Lo que hacemos debe dejar el territorio un poco más habitable, más cuidado y más capaz de transmitir vida.',
      },
    ],
  },
  masters: {
    eyebrow: 'Maestros',
    title: 'Quien sabe hacer, puede enseñar.',
    intro:
      'Los maestros de PAIDEIA no son solo expertos con título. Son personas con un saber encarnado, criterio, paciencia y voluntad de transmitir.',
    profiles: [
      {
        title: 'Oficio y experiencia',
        text: 'Agricultoras, carpinteros, cocineras, ganaderos, albañiles, artesanas, bibliotecarios o personas que conocen bien un proceso concreto.',
      },
      {
        title: 'Pedagogía de proximidad',
        text: 'Enseñar aquí es acompañar desde la práctica: mostrar, corregir, confiar, dar tiempo y dejar espacio para la repetición.',
      },
      {
        title: 'Autoridad compartida',
        text: 'El maestro no es una figura distante. Forma parte de la vida común y transmite también una manera de estar, de hablar y de responder ante la dificultad.',
      },
    ],
    closing: 'Creemos que los pueblos conservan conocimientos que no deberían desaparecer.',
  },
  economy: {
    eyebrow: 'Economía y producción',
    title: 'Producir para sostener la vida, no solo para vender.',
    intro:
      'PAIDEIA necesita una economía real. El aprendizaje se vuelve más profundo cuando participa en procesos productivos con valor, utilidad y continuidad.',
    models: [
      {
        title: 'Producción situada',
        text: 'Huertos, conservas, madera, cocina, mantenimiento, documentación o servicios que responden a recursos y necesidades reales del territorio.',
      },
      {
        title: 'Dignidad del trabajo',
        text: 'El trabajo no es solo un medio para obtener ingresos. También es una forma de adquirir criterio, autonomía y sentido de contribución.',
      },
      {
        title: 'Escala humana',
        text: 'Nos interesan proyectos que puedan crecer sin romper la relación con el pueblo, el paisaje ni las personas que lo habitan.',
      },
      {
        title: 'Aprendizaje económico',
        text: 'Producir también significa entender costes, ritmos, comercialización, sostenibilidad y gobierno compartido de los recursos.',
      },
    ],
    closing: 'Creemos que una persona necesita algo más que consumir para sentirse viva.',
  },
  pilot: {
    eyebrow: 'Proyecto piloto',
    title: 'Empezar en un pueblo pequeño, con gran ambición y escala justa.',
    intro:
      'El piloto de PAIDEIA quiere poner a prueba esta idea de vida en un lugar concreto, con una comunidad reducida, ritmos asumibles y actividades útiles para el pueblo.',
    phases: [
      {
        title: 'Escucha del lugar',
        text: 'Mapear necesidades, oficios, espacios disponibles, personas clave y oportunidades de colaboración con el municipio y la comunidad local.',
      },
      {
        title: 'Activación de una primera comunidad',
        text: 'Convocar participantes, maestros y colaboradores dispuestos a compartir tiempo, responsabilidades y aprendizaje real.',
      },
      {
        title: 'Puesta en marcha de proyectos útiles',
        text: 'Iniciar actividades concretas de reparación, producción, documentación o cuidado capaces de sostener el método y generar confianza.',
      },
      {
        title: 'Evaluación y transmisión',
        text: 'Documentar lo que funciona, corregir lo que no y preparar una posible réplica en otros pueblos.',
      },
    ],
    villageQuote: 'El pueblo no sería el escenario de PAIDEIA. Sería parte de ella.',
  },
  participate: {
    eyebrow: 'Tres maneras de participar',
    title: 'Cada persona y cada pueblo pueden entrar desde un lugar distinto.',
    intro:
      'PAIDEIA necesita complicidades diversas. Hay quien ofrece territorio, quien transmite un saber y quien llega con ganas de aprender y contribuir.',
    cards: [
      {
        title: 'Soy Municipio',
        prompt: 'Quiero explorar PAIDEIA en mi pueblo.',
        description: 'Busco una propuesta que active espacios, oficios y comunidad local con una mirada de largo plazo.',
        cta: 'Hablar del piloto',
      },
      {
        title: 'Soy Maestro',
        prompt: 'Tengo algo que enseñar.',
        description: 'Quiero transmitir un saber práctico o cultural y formar parte de una comunidad que lo valore y lo haga crecer.',
        cta: 'Compartir mi oficio',
      },
      {
        title: 'Quiero Participar',
        prompt: 'Quiero aprender y formar parte.',
        description: 'Busco una experiencia exigente y real donde aprender a vivir, trabajar, cuidar y convivir con otras personas.',
        cta: 'Presentarme',
      },
    ],
  },
  manifesto: {
    eyebrow: 'Manifiesto',
    title: 'Lo que defendemos.',
    intro:
      'PAIDEIA es también una afirmación. Un conjunto de convicciones sobre el trabajo, la comunidad, la sabiduría y la vida buena.',
    beliefs: [
      'No queremos simplemente atraer personas al campo.',
      'Queremos que las personas se sientan útiles, parte de una comunidad y capaces de adquirir sabiduría para transmitirla a otras.',
      'Creemos que una persona necesita algo más que consumir para sentirse viva.',
      'Creemos que hacer cosas con las manos también puede ser una forma de pensar.',
      'Creemos que el trabajo puede ser una fuente de dignidad, aprendizaje y servicio.',
      'Creemos que los pueblos conservan conocimientos que no deberían desaparecer.',
      'Creemos que una comunidad se construye cuando sus miembros tienen algo que ofrecerse mutuamente.',
      'Creemos que aprender a vivir es una tarea que nunca termina.',
    ],
    closing: 'Aprender · Hacer · Cuidar · Compartir · Transmitir',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Sigamos la conversación.',
    intro:
      'Si eres municipio, maestro, colaborador o posible participante, escríbenos y te responderemos lo antes posible.',
    form: {
      nameLabel: 'Nombre',
      emailLabel: 'Correo electrónico',
      roleLabel: 'Soy:',
      municipalityLabel: 'Municipio/Provincia (opcional)',
      messageLabel: 'Mensaje',
      submitLabel: 'Enviar consulta',
      sendingLabel: 'Enviando...',
      successMessage: 'Gracias. Tu mensaje se ha enviado correctamente.',
      errorMessage: 'No hemos podido enviar tu mensaje. Inténtalo de nuevo en unos minutos.',
      placeholderNote: 'Cuéntanos qué te interesa, qué puedes aportar o qué pueblo tienes en mente.',
      roleOptions: [
        { value: 'municipality', label: 'Municipio' },
        { value: 'master', label: 'Maestro' },
        { value: 'collaborator', label: 'Colaborador' },
        { value: 'participant', label: 'Participante' },
        { value: 'other', label: 'Otro' },
      ],
    },
  },
  footer: {
    tagline: 'PAIDEIA · Una comunidad para aprender a vivir.',
    contactPrompt: 'Arraigar aprendizaje, trabajo y comunidad en pueblos vivos.',
    linksLabel: 'Secciones',
    rights: 'Todos los derechos reservados.',
    madeFor: 'Diseñado para una futura publicación en GitHub Pages.',
  },
}

export default es
