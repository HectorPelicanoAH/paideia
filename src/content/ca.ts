import type { SiteContent } from './index.ts'

const ca: SiteContent = {
  languageLabel: 'Idioma',
  languages: {
    ca: 'Català',
    es: 'Castellà',
    eu: 'Euskara',
    gl: 'Galego',
  },
  meta: {
    title: 'PAIDEIA — Una comunitat per aprendre a viure',
    description:
      'PAIDEIA és una comunitat d’aprenentatge arrelada a pobles petits: aprendre fent, recuperar coneixements i transmetre saviesa entre generacions.',
    ogTitle: 'PAIDEIA — Una comunitat per aprendre a viure',
    ogDescription:
      'Una idea de vida arrelada al territori: aprendre fent, cuidar, compartir i transmetre coneixements entre generacions.',
    siteName: 'PAIDEIA',
    locale: 'ca_ES',
  },
  header: {
    homeLabel: 'Anar a l’inici',
    nav: [
      { label: 'Per què', href: '#why' },
      { label: 'Què és', href: '#what' },
      { label: 'Aprendre fent', href: '#learning' },
      { label: 'Ritme estacional', href: '#seasons' },
      { label: 'Comunitat', href: '#community' },
      { label: 'Territori', href: '#territory' },
      { label: 'Mestres', href: '#masters' },
      { label: 'Economia', href: '#economy' },
      { label: 'Pilot', href: '#pilot' },
      { label: 'Participar', href: '#participate' },
      { label: 'Manifest', href: '#manifesto' },
      { label: 'Contacte', href: '#contact' },
    ],
    languageSelectorLabel: 'Selecciona idioma',
    menuLabel: 'Obre el menú de navegació',
    closeLabel: 'Tanca el menú de navegació',
    participateLabel: 'Formar-ne part',
  },
  hero: {
    title: 'PAIDEIA',
    subtitle: 'Una comunitat per aprendre a viure.',
    description:
      'Un lloc on aprendre fent, recuperar coneixements, contribuir a una comunitat i transmetre allò que hem après.',
    primaryCta: 'Vull formar-ne part',
    secondaryCta: 'Conèixer el projecte',
    asideQuote: 'El poble no seria l’escenari de PAIDEIA. Seria part d’ella.',
  },
  why: {
    eyebrow: 'Per què existeix',
    title: 'Una resposta a la pèrdua de sentit, d’ofici i de vincle.',
    intro:
      'PAIDEIA neix quan ens adonem que hi ha moltes persones preparades per consumir, però poques amb espais reals per sentir-se útils, necessàries i connectades amb allò que fan.',
    paragraphs: [
      'No volem simplement atraure persones al camp. Volem que trobin una manera de viure que les impliqui en una realitat concreta, amb responsabilitats, relacions i aprenentatges compartits.',
      'Els pobles petits conserven ritmes, oficis, infraestructures i memòria. Quan aquest teixit es debilita, no només es perd activitat econòmica: també es perd una manera d’entendre la dependència mútua i la dignitat del treball ben fet.',
      'PAIDEIA proposa un lloc on tornar a provar, equivocar-se, fer servei i convertir l’aprenentatge en una pràctica viva. No com una experiència de pas, sinó com una manera de relacionar-se amb el temps, la terra i els altres.',
    ],
    pullQuote:
      'Volem que les persones se sentin útils, part d’una comunitat i capaces d’adquirir saviesa per poder transmetre-la a altres.',
  },
  what: {
    eyebrow: 'Què és PAIDEIA',
    title: 'No és una escola. No és turisme. No és una ONG.',
    intro:
      'PAIDEIA és una comunitat d’aprenentatge i producció arrelada al territori. Una forma d’organitzar la vida quotidiana perquè aprendre, treballar, cuidar i conviure tornin a estar connectats.',
    points: [
      {
        title: 'Una idea de vida',
        text: 'PAIDEIA no és un programa aïllat, sinó una manera de viure en què l’aprenentatge forma part del dia a dia i del compromís amb un lloc concret.',
      },
      {
        title: 'Un espai intergeneracional',
        text: 'Persones joves, adultes i grans comparteixen temps, coneixements i responsabilitats. La transmissió no baixa només d’un professor a un alumne: circula dins la comunitat.',
      },
      {
        title: 'Una comunitat amb ofici',
        text: 'Els sabers pràctics, manuals i organitzatius tenen el mateix valor que la reflexió. Fer coses amb les mans també pot ser una forma de pensar.',
      },
      {
        title: 'Una estructura útil per al poble',
        text: 'El que s’aprèn i es produeix ha de tenir sentit per a la vida local: reparar, cuidar, cultivar, conservar, transformar i mantenir viu el territori.',
      },
    ],
    closing: 'PAIDEIA és una forma de pertinença activa: aprendre mentre contribuïm.',
  },
  learning: {
    eyebrow: 'Aprendre fent',
    title: 'L’aprenentatge com a pràctica compartida.',
    intro:
      'Aquí no s’aprèn primer per aplicar després. S’aprèn mentre es fa una feina real, amb matèria real, amb conseqüències reals i amb persones que saben acompanyar el procés.',
    steps: [
      {
        title: 'Treball amb sentit',
        text: 'Cada activitat respon a una necessitat concreta: reparar una teulada, preparar un hort, organitzar una conservació, documentar un ofici o cuidar un espai comú.',
      },
      {
        title: 'Observació i repetició',
        text: 'Aprendre vol dir mirar com treballa algú amb experiència, repetir gestos, entendre els ritmes i descobrir els criteris que sostenen una feina ben feta.',
      },
      {
        title: 'Reflexió incorporada',
        text: 'La conversa, la lectura i la documentació tenen lloc dins del procés. El pensament no queda separat de l’acció, sinó que la interpreta i la millora.',
      },
      {
        title: 'Transmissió',
        text: 'Allò que una persona aprèn es converteix en capacitat de servei i, més endavant, en capacitat d’ensenyar a una altra persona.',
      },
    ],
    closing: 'Creiem que el treball pot ser una font de dignitat, aprenentatge i servei.',
  },
  seasons: {
    eyebrow: 'Ritme de les estacions',
    title: 'Un calendari viu per orientar el que fem.',
    intro:
      'PAIDEIA s’organitza segons el temps real del territori. Les estacions no són decorat: marquen les prioritats, els esforços i les formes de convivència.',
    seasons: [
      {
        name: 'Primavera',
        actions: ['sembrar', 'plantar', 'reparar', 'començar'],
        description: 'Temps d’engegar processos, preparar espais i obrir camins nous amb energia compartida.',
      },
      {
        name: 'Estiu',
        actions: ['cuidar', 'treballar', 'recollir', 'conviure'],
        description: 'Moment d’intensitat, cura constant i vida col·lectiva sostinguda al voltant del treball i la presència.',
      },
      {
        name: 'Tardor',
        actions: ['collir', 'transformar', 'conservar'],
        description: 'Hora d’ordenar el que s’ha produït, donar-li forma i pensar com es guarda i es comparteix.',
      },
      {
        name: 'Hivern',
        actions: ['reparar', 'estudiar', 'llegir', 'conversar', 'preparar'],
        description: 'Temps de pausa activa, manteniment, estudi i preparació del cicle següent.',
      },
    ],
  },
  community: {
    eyebrow: 'Comunitat',
    title: 'La comunitat no és context: és mètode.',
    intro:
      'PAIDEIA es construeix en la convivència quotidiana. Compartir temps, espais, eines i responsabilitats és part de l’aprenentatge.',
    pillars: [
      {
        title: 'Vida comuna',
        text: 'Els àpats, les assemblees, el manteniment dels espais i la cura dels altres formen part de la mateixa pedagogia que els oficis.',
      },
      {
        title: 'Reciprocitat',
        text: 'Una comunitat es construeix quan els seus membres tenen alguna cosa per oferir-se mútuament: temps, ofici, escolta, memòria o treball.',
      },
      {
        title: 'Responsabilitat compartida',
        text: 'No hi ha espectadors. Tothom participa segons la seva etapa, la seva experiència i la seva disponibilitat.',
      },
    ],
    quote:
      'Creiem que una comunitat es construeix quan els seus membres tenen alguna cosa per oferir-se mútuament.',
  },
  territory: {
    eyebrow: 'Territori',
    title: 'Arrelament, no decorat rural.',
    intro:
      'El territori no és el fons d’una experiència bonica: és la realitat concreta que demana atenció, treball i continuïtat.',
    paragraphs: [
      'Cada poble té paisatge, recursos, límits, memòria, necessitats i possibilitats pròpies. PAIDEIA escolta aquesta singularitat i hi adapta la seva forma d’estar.',
      'Contribuir al territori vol dir cuidar camins, cases, horts, aigua, boscos, arxius, oficis i vincles humans. Vol dir assumir que la vida compartida també necessita infraestructures materials i culturals.',
    ],
    stats: [
      {
        value: 'Oficis vius',
        label: 'Sabers que continuen',
        description: 'Identificar i activar coneixements pràctics que encara existeixen al poble o al seu entorn.',
      },
      {
        value: 'Temps compartit',
        label: 'Presència sostinguda',
        description: 'La continuïtat importa més que la intensitat puntual: cal tornar, cuidar i quedar-se prou temps per entendre un lloc.',
      },
      {
        value: 'Arrelament útil',
        label: 'Contribució concreta',
        description: 'Allò que fem ha de deixar el territori una mica més habitable, més cuidat i més capaç de transmetre vida.',
      },
    ],
  },
  masters: {
    eyebrow: 'Mestres',
    title: 'Qui sap fer, pot ensenyar.',
    intro:
      'Els mestres de PAIDEIA no són només experts titulats. Són persones amb un saber incorporat, amb criteri, paciència i voluntat de transmetre.',
    profiles: [
      {
        title: 'Ofici i experiència',
        text: 'Pageses, fusters, cuineres, ramaders, paletes, artesanes, bibliotecaris o persones que coneixen bé un procés concret.',
      },
      {
        title: 'Pedagogia de la proximitat',
        text: 'Ensenyar aquí és acompanyar des de la pràctica: mostrar, corregir, confiar, donar temps i fer lloc a la repetició.',
      },
      {
        title: 'Autoritat compartida',
        text: 'El mestre no és una figura distant. Forma part de la vida comuna i transmet també una manera d’estar, de parlar i de respondre davant la dificultat.',
      },
    ],
    closing: 'Creiem que els pobles conserven coneixements que no haurien de desaparèixer.',
  },
  economy: {
    eyebrow: 'Economia i producció',
    title: 'Produir per sostenir la vida, no només per vendre.',
    intro:
      'PAIDEIA necessita una economia real. L’aprenentatge es fa més profund quan participa en processos productius que tenen valor, utilitat i continuïtat.',
    models: [
      {
        title: 'Producció situada',
        text: 'Horts, conserves, fusta, cuina, manteniment, documentació o serveis que responen a recursos i necessitats reals del territori.',
      },
      {
        title: 'Dignitat del treball',
        text: 'El treball no és només un mitjà per obtenir ingressos. També és una manera d’adquirir criteri, autonomia i sentit de contribució.',
      },
      {
        title: 'Escala humana',
        text: 'Ens interessen projectes que puguin créixer sense trencar la relació amb el poble, el paisatge ni les persones que hi viuen.',
      },
      {
        title: 'Aprenentatge econòmic',
        text: 'Produir també vol dir entendre costos, ritmes, comercialització, sostenibilitat i govern compartit dels recursos.',
      },
    ],
    closing: 'Creiem que una persona necessita alguna cosa més que consumir per sentir-se viva.',
  },
  pilot: {
    eyebrow: 'Projecte pilot',
    title: 'Començar en un poble petit, ambició gran i escala justa.',
    intro:
      'El pilot de PAIDEIA vol posar a prova aquesta idea de vida en un lloc concret, amb una comunitat reduïda, ritmes assumibles i activitats útils per al poble.',
    phases: [
      {
        title: 'Escolta del lloc',
        text: 'Mapar necessitats, oficis, espais disponibles, persones clau i oportunitats de col·laboració amb el municipi i la comunitat local.',
      },
      {
        title: 'Activació d’una primera comunitat',
        text: 'Convocar participants, mestres i col·laboradors disposats a compartir temps, responsabilitats i aprenentatge real.',
      },
      {
        title: 'Posada en marxa de projectes útils',
        text: 'Iniciar activitats concretes de reparació, producció, documentació o cura que puguin sostenir el mètode i generar confiança.',
      },
      {
        title: 'Avaluació i transmissió',
        text: 'Documentar allò que funciona, corregir el que no i preparar la possible replicació en altres pobles.',
      },
    ],
    villageQuote: 'El poble no seria l’escenari de PAIDEIA. Seria part d’ella.',
  },
  participate: {
    eyebrow: 'Tres maneres de participar',
    title: 'Cada persona i cada poble hi poden entrar des d’un lloc diferent.',
    intro:
      'PAIDEIA necessita complicitats diverses. Hi ha qui ofereix territori, qui transmet un saber i qui arriba amb ganes d’aprendre i contribuir.',
    cards: [
      {
        title: 'Sóc Municipi',
        prompt: 'Vull explorar PAIDEIA al meu poble.',
        description: 'Busco una proposta que activi espais, oficis i comunitat local amb una mirada de llarg termini.',
        cta: 'Parlem del pilot',
      },
      {
        title: 'Sóc Mestre',
        prompt: 'Tinc alguna cosa per ensenyar.',
        description: 'Vull transmetre un saber pràctic o cultural i formar part d’una comunitat que el valori i el faci créixer.',
        cta: 'Compartir el meu ofici',
      },
      {
        title: 'Vull Participar',
        prompt: 'Vull aprendre i formar-ne part.',
        description: 'Busco una experiència exigent i real on aprendre a viure, treballar, cuidar i conviure amb altres.',
        cta: 'Presentar-me',
      },
    ],
  },
  manifesto: {
    eyebrow: 'Manifest',
    title: 'El que sostenim.',
    intro:
      'PAIDEIA és també una afirmació. Un conjunt de conviccions sobre el treball, la comunitat, la saviesa i la vida bona.',
    beliefs: [
      'No volem simplement atraure persones al camp.',
      'Volem que les persones se sentin útils, part d’una comunitat i capaces d’adquirir saviesa per poder transmetre-la a altres.',
      'Creiem que una persona necessita alguna cosa més que consumir per sentir-se viva.',
      'Creiem que fer coses amb les mans també pot ser una forma de pensar.',
      'Creiem que el treball pot ser una font de dignitat, aprenentatge i servei.',
      'Creiem que els pobles conserven coneixements que no haurien de desaparèixer.',
      'Creiem que una comunitat es construeix quan els seus membres tenen alguna cosa per oferir-se mútuament.',
      'Creiem que aprendre a viure és una tasca que mai no acaba.',
    ],
    closing: 'Aprendre · Fer · Cuidar · Compartir · Transmetre',
  },
  contact: {
    eyebrow: 'Contacte',
    title: 'Continuem la conversa.',
    intro:
      'Si ets municipi, mestre, col·laborador o participant potencial, escriu-nos. Aquest formulari està preparat per connectar-se amb el futur canal de contacte del projecte.',
    noteLabel: 'Nota',
    note: 'Formulari de demostració: actualment no envia dades, però ja està preparat per integrar-hi un backend o un servei de formularis.',
    form: {
      nameLabel: 'Nom',
      emailLabel: 'Correu electrònic',
      roleLabel: 'Sóc:',
      municipalityLabel: 'Municipi/Província (opcional)',
      messageLabel: 'Missatge',
      submitLabel: 'Enviar consulta',
      placeholderNote: 'Explica’ns què t’interessa, què pots aportar o quin poble tens al cap.',
      roleOptions: [
        { value: 'municipality', label: 'Municipi' },
        { value: 'master', label: 'Mestre' },
        { value: 'collaborator', label: 'Col·laborador' },
        { value: 'participant', label: 'Participant' },
        { value: 'other', label: 'Altre' },
      ],
    },
  },
  footer: {
    tagline: 'PAIDEIA · Una comunitat per aprendre a viure.',
    contactPrompt: 'Arrelar aprenentatge, treball i comunitat en pobles vius.',
    linksLabel: 'Seccions',
    rights: 'Tots els drets reservats.',
    madeFor: 'Dissenyat per a una futura publicació a GitHub Pages.',
  },
}

export default ca
