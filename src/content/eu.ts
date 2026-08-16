import type { SiteContent } from './index.ts'

const eu: SiteContent = {
  languageLabel: 'Hizkuntza',
  languages: {
    ca: 'Katalana',
    es: 'Gaztelania',
    eu: 'Euskara',
    gl: 'Galegoa',
  },
  meta: {
    title: 'PAIDEIA — Bizitzen ikasteko komunitate bat',
    description:
      'PAIDEIA herri txikietan errotutako ikaskuntza komunitatea da: eginez ikasi, jakintzak berreskuratu eta belaunaldien artean transmititu.',
    ogTitle: 'PAIDEIA — Bizitzen ikasteko komunitate bat',
    ogDescription:
      'Lurraldean errotutako bizi-ikusmolde bat: eginez ikasi, zaindu, partekatu eta belaunaldien artean jakintza transmititu.',
    siteName: 'PAIDEIA',
    locale: 'eu_ES',
  },
  header: {
    homeLabel: 'Hasierara joan',
    nav: [
      { label: 'Zergatik', href: '#why' },
      { label: 'Zer da', href: '#what' },
      { label: 'Eginez ikasi', href: '#learning' },
      { label: 'Teknologia eta bizitza', href: '#technology' },
      { label: 'Urtaroen erritmoa', href: '#seasons' },
      { label: 'Komunitatea', href: '#community' },
      { label: 'Lurraldea', href: '#territory' },
      { label: 'Maisuak', href: '#masters' },
      { label: 'Ekonomia', href: '#economy' },
      { label: 'Pilotua', href: '#pilot' },
      { label: 'Parte hartu', href: '#participate' },
      { label: 'Manifestua', href: '#manifesto' },
      { label: 'Kontaktua', href: '#contact' },
    ],
    languageSelectorLabel: 'Aukeratu hizkuntza',
    menuLabel: 'Ireki nabigazio menua',
    closeLabel: 'Itxi nabigazio menua',
    participateLabel: 'Parte hartu',
  },
  hero: {
    title: 'PAIDEIA',
    subtitle: 'Bizitzen ikasteko komunitate bat.',
    description:
      'Eginez ikasteko, jakintzak berreskuratzeko, komunitate bati ekarpena egiteko eta ikasitakoa besteekin partekatzeko tokia.',
    primaryCta: 'Parte izan nahi dut',
    secondaryCta: 'Proiektua ezagutu',
    asideQuote: 'Herria ez litzateke PAIDEIAren agertokia izango. Bere parte izango litzateke.',
  },
  why: {
    eyebrow: 'Zergatik sortu da',
    title: 'Zentzuaren, ofizioaren eta loturaren galerari emandako erantzuna.',
    intro:
      'PAIDEIA kontsumitzeko prestatutako jende asko dagoela ikustean jaio da, baina benetan baliagarri, beharrezko eta egiten duenarekin konektatuta sentitzeko gune gutxi daudela ohartzean.',
    paragraphs: [
      'Ez dugu soilik jendea landara erakartzea bilatzen. Bizimodu bat aurkitzea nahi dugu, errealitate zehatz batean inplikatuko dituena, erantzukizunekin, harremanekin eta partekatutako ikaskuntzekin.',
      'Herri txikiek erritmoak, ogibideak, azpiegiturak eta memoria gordetzen dituzte. Ehun hori ahultzen denean, ez da jarduera ekonomikoa bakarrik galtzen: elkarrekiko mendekotasuna eta ondo egindako lanaren duintasuna ulertzeko modu bat ere galtzen da.',
      'PAIDEIAk berriro saiatzeko, huts egiteko, zerbitzatzeko eta ikaskuntza praktika bizi bihurtzeko lekua proposatzen du. Ez igarobideko esperientzia gisa, baizik eta denborarekin, lurrarekin eta besteekin lotzeko modu gisa.',
    ],
    pullQuote:
      'Jendea baliagarri senti dadin nahi dugu, komunitate baten parte eta beste batzuei transmititzeko moduko jakinduria eskuratzeko gai.',
  },
  what: {
    eyebrow: 'Zer da PAIDEIA',
    title: 'Ez da eskola bat. Ez da turismoa. Ez da GKE bat.',
    intro:
      'PAIDEIA lurraldean errotutako ikaskuntza eta ekoizpen komunitatea da. Eguneroko bizitza antolatzeko modu bat, ikastea, lan egitea, zaintzea eta elkarrekin bizitzea berriro lotuta egon daitezen.',
    points: [
      {
        title: 'Bizimodu bat',
        text: 'PAIDEIA ez da programa isolatu bat; ikaskuntza egunerokoaren eta toki jakin batekiko konpromisoaren parte den bizitzeko era bat da.',
      },
      {
        title: 'Belaunaldien arteko gunea',
        text: 'Gazteek, helduek eta adinekoek denbora, jakintza eta erantzukizunak partekatzen dituzte. Transmisioa ez da soilik irakasletik ikaslera jaisten: komunitatean bertan zirkulatzen du.',
      },
      {
        title: 'Ofizioa duen komunitatea',
        text: 'Jakintza praktikoek, eskuzkoek eta antolakuntzakoek hausnarketaren balio bera dute. Eskuekin gauzak egitea pentsatzeko modu bat ere bada.',
      },
      {
        title: 'Herrarentzat erabilgarria den egitura',
        text: 'Ikasten eta ekoizten denak tokiko bizitzarentzat zentzua izan behar du: konpondu, zaindu, landu, gorde, eraldatu eta lurraldea bizirik mantendu.',
      },
    ],
    closing: 'PAIDEIA partaidetza aktiboaren modu bat da: ekarpena egiten dugun bitartean ikastea.',
  },
  learning: {
    eyebrow: 'Eginez ikasi',
    title: 'Ikaskuntza partekatutako praktika gisa.',
    intro:
      'Hemen ez da lehenik ikasten eta gero aplikatzen. Benetako lan baten bidez ikasten da, benetako materialarekin, benetako ondorioekin eta prozesua laguntzen dakiten pertsonekin.',
    steps: [
      {
        title: 'Zentzudun lana',
        text: 'Jarduera bakoitzak premia zehatz bati erantzuten dio: teilatu bat konpondu, baratzea prestatu, kontserbak antolatu, ofizio bat dokumentatu edo espazio komun bat zaindu.',
      },
      {
        title: 'Behaketa eta errepikapena',
        text: 'Ikastea esperientzia duen norbait nola aritzen den begiratzea da, keinuak errepikatzea, erritmoak ulertzea eta ondo egindako lanari eusten dioten irizpideak aurkitzea.',
      },
      {
        title: 'Barneratutako hausnarketa',
        text: 'Elkarrizketa, irakurketa eta dokumentazioa prozesuaren barruan gertatzen dira. Pentsamendua ez da ekintzatik bereizten; interpretatu eta hobetu egiten du.',
      },
      {
        title: 'Transmisioa',
        text: 'Pertsona batek ikasten duena zerbitzurako gaitasun bihurtzen da, eta geroago beste bati irakasteko gaitasun ere bai.',
      },
    ],
    closing: 'Lan egitea duintasun, ikaskuntza eta zerbitzu iturri izan daitekeela sinesten dugu.',
  },
  technology: {
    eyebrow: 'Teknologia bizitzaren zerbitzura',
    title: 'Giza eskalako teknologia pertsonak eta lurraldea zaintzeko.',
    intro:
      'PAIDEIAk ez du teknologia baztertzen, ezta iraganera itzuli nahi ere. Gaur egungo teknologiak erabili nahi ditugu pertsonen eta tokiaren bizitza benetan hobetzen dutenean.',
    positioning:
      'Automatizazioa, energia berriztagarriak, tresna digitalak, fabrikazio aurreratua eta adimen artifiziala baliagarriak izan daitezke autonomia, irizpidea eta zerbitzurako gaitasuna indartzen badituzte. Teknologia pertsonen zerbitzura egon behar da, ez pertsonak teknologiaren zerbitzura.',
    principles: [
      {
        title: 'Handitu, ez ordezkatu',
        text: 'Giza gaitasunak handitzen dituzten eta hobeto lan egiten laguntzen duten tresnak bilatzen ditugu, ulertzeko, sortzeko, konpontzeko eta erabakitzeko gaitasuna alferrik galdu gabe.',
      },
      {
        title: 'Helburua duen efizientzia',
        text: 'Efizientzia autonomia, segurtasuna, denbora eta ongizatea irabazteko nahi dugu, ez mugarik gabe ekoitzi eta kontsumitzeko logika batean sartzeko.',
      },
      {
        title: 'Giza eskala',
        text: 'Testuingurura eta lurraldearen benetako beharretara egokitutako teknologiak aukeratzen ditugu. Handia edo sofistikatua izatea ez da beti hobea.',
      },
      {
        title: 'Natura muga gisa',
        text: 'Erabaki teknologiko bakoitzak baliabideak, energia, materialak eta hondakinak kontuan hartu behar ditu. Ez ditugu onartzen gaurko onurak lurraldeari edo etorkizuneko belaunaldiei kostua pasatuz lortzea.',
      },
      {
        title: 'Tresna ezagutzea',
        text: 'Ikasteak erabiltzen dugun teknologia ulertzea ere badakar. Ahal denean, ezagutza, konponketa, mantentzea eta autonomia lehenesten ditugu kutxa beltzen mendekotasunaren aurrean.',
      },
    ],
    mainMessage: 'Ez dugu etorkizuna baztertzen. Giza eskalan eraiki nahi dugu.',
    featuredQuote:
      'Galdera ez da ea teknologiarekin egin dezakegun. Galdera da ea teknologiarekin egiteak hobeto bizitzen laguntzen digun.',
  },
  seasons: {
    eyebrow: 'Urtaroen erritmoa',
    title: 'Egiten duguna orientatzeko egutegi bizia.',
    intro:
      'PAIDEIA lurraldeko benetako denboraren arabera antolatzen da. Urtaroak ez dira apaingarri hutsa: lehentasunak, ahaleginak eta bizikidetza moduak markatzen dituzte.',
    seasons: [
      {
        name: 'Udaberria',
        actions: ['erein', 'landatu', 'konpondu', 'hasi'],
        description: 'Prozesuak martxan jartzeko, espazioak prestatzeko eta bide berriak energia partekatuarekin zabaltzeko garaia.',
      },
      {
        name: 'Uda',
        actions: ['zaindu', 'lan egin', 'jaso', 'elkarrekin bizi'],
        description: 'Intentsitate garaia, etengabeko zaintza eta lanaren eta presentziaren inguruan sostengatutako bizitza kolektiboa.',
      },
      {
        name: 'Udazkena',
        actions: ['uztatu', 'eraldatu', 'kontserbatu'],
        description: 'Ekoitzitakoa antolatzeko, forma emateko eta nola gorde eta partekatu pentsatzeko unea.',
      },
      {
        name: 'Negua',
        actions: ['konpondu', 'ikasi', 'irakurri', 'solastu', 'prestatu'],
        description: 'Atseden aktiboko, mantentze-lanetako, ikasketako eta hurrengo zikloa prestatzeko denbora.',
      },
    ],
  },
  community: {
    eyebrow: 'Komunitatea',
    title: 'Komunitatea ez da testuingurua: metodoa da.',
    intro:
      'PAIDEIA eguneroko bizikidetzan eraikitzen da. Denbora, espazioak, tresnak eta erantzukizunak partekatzea ikaskuntzaren parte da.',
    pillars: [
      {
        title: 'Bizitza komuna',
        text: 'Otorduak, batzarrak, espazioen mantentzea eta elkar zaintzea ogibideen pedagogia beraren parte dira.',
      },
      {
        title: 'Elkarrekikotasuna',
        text: 'Komunitate bat eraikitzen da bere kideek elkarri zer eskaini badute: denbora, ofizioa, entzuteko gaitasuna, memoria edo lana.',
      },
      {
        title: 'Erantzukizun partekatua',
        text: 'Ez dago ikuslerik. Denek parte hartzen dute beren une, esperientzia eta eskuragarritasunaren arabera.',
      },
    ],
    quote:
      'Komunitate bat eraikitzen dela sinesten dugu, haren kideek elkarri zerbait eskaini diezaioketenean.',
  },
  territory: {
    eyebrow: 'Lurraldea',
    title: 'Sustraitzea, ez landa-eszenografia.',
    intro:
      'Lurraldea ez da esperientzia polit baten atzeko irudia: arreta, lana eta jarraipena eskatzen dituen errealitate zehatza da.',
    paragraphs: [
      'Herri bakoitzak bere paisaia, baliabideak, mugak, memoria, beharrak eta aukerak ditu. PAIDEIAk berezitasun hori entzun eta bertara egokitzen du bere modua.',
      'Lurraldeari ekarpena egiteak bideak, etxeak, baratzeak, ura, basoak, artxiboak, ogibideak eta giza loturak zaintzea esan nahi du. Bizitza partekatuak azpiegitura material eta kulturalak ere behar dituela onartzea da.',
    ],
    stats: [
      {
        value: 'Bizirik dauden ogibideak',
        label: 'Irauten duten jakintzak',
        description: 'Herrian edo inguruan oraindik dauden ezagutza praktikoak identifikatu eta aktibatzea.',
      },
      {
        value: 'Partekatutako denbora',
        label: 'Presentzia iraunkorra',
        description: 'Jarraitutasunak une bateko intentsitateak baino gehiago balio du: itzuli, zaindu eta toki bat ulertzeko adina denbora geratu behar da.',
      },
      {
        value: 'Sustraitze erabilgarria',
        label: 'Ekarpen zehatza',
        description: 'Egiten dugunak lurraldea apur bat bizigarriagoa, zainduagoa eta bizitza transmititzeko gaiagoa utzi behar du.',
      },
    ],
  },
  masters: {
    eyebrow: 'Maisuak',
    title: 'Egiten dakienak irakats dezake.',
    intro:
      'PAIDEIAko maisuak ez dira tituludun adituak bakarrik. Jakintza gorpuztua, irizpidea, pazientzia eta transmititzeko gogoa duten pertsonak dira.',
    profiles: [
      {
        title: 'Ofizioa eta esperientzia',
        text: 'Nekazariak, arotzak, sukaldariak, abeltzainak, igeltseroak, artisauak, liburuzainak edo prozesu jakin bat ondo ezagutzen duten pertsonak.',
      },
      {
        title: 'Hurbileko pedagogia',
        text: 'Hemen irakastea praktikatik laguntzea da: erakutsi, zuzendu, konfiantza eman, denbora eskaini eta errepikapenari lekua egitea.',
      },
      {
        title: 'Partekatutako autoritatea',
        text: 'Maisua ez da urruneko figura bat. Bizitza komunean parte hartzen du eta egoteko, hitz egiteko eta zailtasunari erantzuteko modu bat ere transmititzen du.',
      },
    ],
    closing: 'Herriek galdu behar ez liratekeen jakintzak gordetzen dituztela sinesten dugu.',
  },
  economy: {
    eyebrow: 'Ekonomia eta ekoizpena',
    title: 'Bizitza sostengatzeko ekoiztu, ez soilik saltzeko.',
    intro:
      'PAIDEIAk benetako ekonomia behar du. Ikaskuntza sakonago bihurtzen da balioa, erabilgarritasuna eta jarraitutasuna duten ekoizpen-prozesuetan parte hartzen duenean.',
    models: [
      {
        title: 'Lekuari lotutako ekoizpena',
        text: 'Baratzeak, kontserbak, egurra, sukaldaritza, mantentze-lanak, dokumentazioa edo lurraldeko benetako baliabide eta beharrei erantzuten dieten zerbitzuak.',
      },
      {
        title: 'Lanaren duintasuna',
        text: 'Lana ez da diru-sarrerak lortzeko bitarteko hutsa. Irizpidea, autonomia eta ekarpenaren zentzua eskuratzeko modu bat ere bada.',
      },
      {
        title: 'Giza neurria',
        text: 'Herriarekin, paisaiarekin eta bertan bizi direnekin harremana hautsi gabe hazi daitezkeen proiektuak interesatzen zaizkigu.',
      },
      {
        title: 'Ikaskuntza ekonomikoa',
        text: 'Ekoizteak kostuak, erritmoak, merkaturatzea, jasangarritasuna eta baliabideen gobernu partekatua ulertzea ere esan nahi du.',
      },
    ],
    closing: 'Pertsona batek bizirik sentitzeko kontsumitzea baino gehiago behar duela sinesten dugu.',
  },
  pilot: {
    eyebrow: 'Proiektu pilotua',
    title: 'Herri txiki batean hasi, anbizio handiz eta eskala egokian.',
    intro:
      'PAIDEIAren pilotuak bizi-ikusmolde hau toki zehatz batean probatu nahi du, komunitate txiki batekin, eramangarriak diren erritmoekin eta herriarentzat erabilgarriak diren jarduerekin.',
    phases: [
      {
        title: 'Tokiaren entzutea',
        text: 'Beharrak, ogibideak, erabil daitezkeen espazioak, pertsona giltzarriak eta udalarekin nahiz tokiko komunitatearekin lankidetzarako aukerak mapatzea.',
      },
      {
        title: 'Lehen komunitatea aktibatzea',
        text: 'Denbora, erantzukizunak eta benetako ikaskuntza partekatzeko prest dauden parte-hartzaileak, maisuak eta laguntzaileak biltzea.',
      },
      {
        title: 'Proiektu erabilgarriak martxan jartzea',
        text: 'Metodoari eusteko eta konfiantza sortzeko gai diren konponketa, ekoizpen, dokumentazio edo zaintza jarduera zehatzak abiatzea.',
      },
      {
        title: 'Ebaluazioa eta transmisioa',
        text: 'Funtzionatzen duena dokumentatu, ez dabilena zuzendu eta beste herri batzuetan errepikatzeko aukera prestatzea.',
      },
    ],
    villageQuote: 'Herria ez litzateke PAIDEIAren agertokia izango. Bere parte izango litzateke.',
  },
  participate: {
    eyebrow: 'Parte hartzeko hiru bide',
    title: 'Pertsona eta herri bakoitza leku desberdin batetik sar daiteke.',
    intro:
      'PAIDEIAk askotariko konplizitateak behar ditu. Batzuek lurraldea eskaintzen dute, beste batzuek jakintza transmititzen dute, eta beste batzuk ikasteko eta ekarpena egiteko gogoz iristen dira.',
    cards: [
      {
        title: 'Udalerria naiz',
        prompt: 'PAIDEIA nire herrian aztertu nahi dut.',
        description: 'Epe luzeko begiradaz espazioak, ogibideak eta tokiko komunitatea aktibatuko dituen proposamena bilatzen dut.',
        cta: 'Pilotuaz hitz egin',
      },
      {
        title: 'Maisua naiz',
        prompt: 'Irakasteko zerbait daukat.',
        description: 'Jakintza praktiko edo kulturala transmititu nahi dut, hura balioetsi eta haziko duen komunitate baten parte izanez.',
        cta: 'Nire ofizioa partekatu',
      },
      {
        title: 'Parte hartu nahi dut',
        prompt: 'Ikasi eta parte izan nahi dut.',
        description: 'Bizitzen, lan egiten, zaintzen eta besteekin elkarbizitzen ikasteko benetako eta zorrotza den esperientzia baten bila nabil.',
        cta: 'Nire burua aurkeztu',
      },
    ],
  },
  manifesto: {
    eyebrow: 'Manifestua',
    title: 'Eusten dioguna.',
    intro:
      'PAIDEIA baieztapen bat ere bada. Lanari, komunitateari, jakinduriari eta bizitza onari buruzko sinesmen multzo bat.',
    beliefs: [
      'Ez dugu soilik jendea landara erakartzea nahi.',
      'Jendea baliagarri senti dadin nahi dugu, komunitate baten parte eta beste batzuei transmititzeko moduko jakinduria eskuratzeko gai.',
      'Pertsona batek bizirik sentitzeko kontsumitzea baino gehiago behar duela sinesten dugu.',
      'Eskuekin gauzak egitea pentsatzeko modu bat ere izan daitekeela sinesten dugu.',
      'Lan egitea duintasun, ikaskuntza eta zerbitzu iturri izan daitekeela sinesten dugu.',
      'Herriek galdu behar ez liratekeen jakintzak gordetzen dituztela sinesten dugu.',
      'Komunitate bat eraikitzen dela sinesten dugu, haren kideek elkarri zerbait eskaini diezaioketenean.',
      'Bizitzen ikastea inoiz amaitzen ez den lana dela sinesten dugu.',
    ],
    closing: 'Ikasi · Egin · Zaindu · Partekatu · Transmititu',
  },
  contact: {
    eyebrow: 'Kontaktua',
    title: 'Jarrai dezagun solasean.',
    intro:
      'Udalerria, maisua, laguntzailea edo parte-hartzaile posiblea bazara, idatzi iezaguzu eta ahal bezain laster erantzungo dizugu.',
    form: {
      nameLabel: 'Izena',
      emailLabel: 'Posta elektronikoa',
      roleLabel: 'Ni naiz:',
      municipalityLabel: 'Udalerria/Probintzia (aukerakoa)',
      messageLabel: 'Mezua',
      submitLabel: 'Kontsulta bidali',
      sendingLabel: 'Bidaltzen...',
      successMessage: 'Eskerrik asko. Zure mezua ondo bidali da.',
      errorMessage: 'Ezin izan dugu zure mezua bidali. Saiatu berriro minutu batzuk barru.',
      placeholderNote: 'Kontaiguzu zer interesatzen zaizun, zer ekar dezakezun edo zein herri duzun buruan.',
      roleOptions: [
        { value: 'municipality', label: 'Udalerria' },
        { value: 'master', label: 'Maisua' },
        { value: 'collaborator', label: 'Laguntzailea' },
        { value: 'participant', label: 'Parte-hartzailea' },
        { value: 'other', label: 'Bestelakoa' },
      ],
    },
  },
  footer: {
    tagline: 'PAIDEIA · Bizitzen ikasteko komunitate bat.',
    contactPrompt: 'Ikaskuntza, lana eta komunitatea bizirik dauden herrietan errotzea.',
    linksLabel: 'Atalak',
    rights: 'Eskubide guztiak erreserbatuta.',
    madeFor: 'GitHub Pages-en argitaratzeko diseinatua.',
  },
}

export default eu
