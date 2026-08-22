import type { InteriorLanguageContent } from '../types.ts'

const es: InteriorLanguageContent = {
  ui: {
    languageName: 'Idioma', languages: { es: 'Castellano', ca: 'Catalán', eu: 'Euskera', gl: 'Gallego' },
    backHome: 'Volver al inicio', contents: 'En esta página', openContents: 'Mostrar índice',
    foundational: 'PAIDEIA se encuentra en fase fundacional', explore: 'Seguir explorando', previous: 'Anterior', next: 'Siguiente',
    footer: 'Una propuesta abierta para aprender a vivir, cuidar el territorio y transmitir lo que sabemos.',
    photoAlt: 'Héctor en un huerto de L’Argentera, sosteniendo tomates recién recogidos',
    form: {
      name: 'Nombre', email: 'Correo electrónico', profile: 'Perfil', place: 'Localidad o territorio',
      contribution: 'Cómo te gustaría contribuir', message: 'Mensaje',
      privacy: 'Acepto que mis datos se utilicen únicamente para responder a este contacto.',
      submit: 'Enviar mensaje', sending: 'Enviando…', success: 'Gracias. Tu mensaje se ha enviado correctamente.', error: 'No se ha podido enviar. Inténtalo de nuevo.',
      profiles: ['Quiero ayudar a fundar PAIDEIA', 'Soy un municipio', 'Quiero compartir lo que sé', 'Quiero participar', 'Represento a una entidad', 'Puedo aportar recursos'],
    },
  },
  nav: { proyecto: 'El proyecto', territorio: 'Territorio', 'como-empezar': 'Cómo empezar', origen: 'Origen', participa: 'Participa' },
  pages: {
    proyecto: {
      title: 'Una comunidad para aprender a vivir',
      intro: 'PAIDEIA propone recuperar la relación entre conocimiento, trabajo, territorio y comunidad mediante una forma de aprendizaje basada en hacer, cuidar, comprender, compartir y transmitir.',
      description: 'La filosofía de PAIDEIA: una comunidad de aprendizaje, trabajo y vida arraigada en un pequeño municipio.',
      sections: [
        { id: 'significado', title: 'Qué significa PAIDEIA', paragraphs: ['Paideia (παιδεία) es un término griego relacionado con la educación y la formación de la persona. No se limitaba a adquirir información: abarcaba el desarrollo del criterio, el carácter, las capacidades y la participación en la vida de la comunidad.', 'PAIDEIA recoge esa idea como inspiración, no como un modelo histórico que debamos reproducir. La traslada al presente para preguntarse cómo aprender durante toda la vida mediante el conocimiento, el trabajo, el cuidado, la convivencia y la transmisión.'] },
        { id: 'que-es', title: 'Qué es PAIDEIA', paragraphs: ['Una propuesta de comunidad de aprendizaje, trabajo y vida arraigada en un pequeño municipio. No es una escuela convencional, un programa asistencial ni una iniciativa turística.', 'PAIDEIA se encuentra en fase fundacional: describe una dirección y unos principios que deberán contrastarse con un territorio y con las personas implicadas.'] },
        { id: 'por-que', title: 'Por qué nace', paragraphs: ['Nace de una desconexión más amplia que el despoblamiento: nos hemos alejado de muchos procesos que sostienen la vida —producir, reparar, cultivar, cocinar, cuidar, comprender y transmitir— y de las personas que conservan esos saberes.'] },
        { id: 'principios', title: 'Los cinco principios', paragraphs: ['Los cinco elementos del símbolo representan un movimiento común. El punto central es el propósito que los reúne: aprender a vivir.'], bullets: ['Aprender · abrirse a comprender.', 'Hacer · convertir el conocimiento en práctica.', 'Cuidar · atender personas, vínculos y territorio.', 'Compartir · poner capacidades en común.', 'Transmitir · evitar que el conocimiento termine con nosotros.'] },
        { id: 'aprender-haciendo', title: 'Aprender haciendo', paragraphs: ['El aprendizaje partiría de necesidades y proyectos reales, no de asignaturas aisladas. Podría consistir en reparar un espacio, cuidar un terreno, conservar una cosecha, documentar un oficio o colaborar en una necesidad comunitaria.', 'Los proyectos concretos deberán definirse con el municipio, los maestros y los profesionales adecuados.'] },
        { id: 'ritmos', title: 'Los ritmos de la vida', paragraphs: ['Las estaciones, el clima, los ciclos naturales, las necesidades del territorio y los ritmos de las personas orientan el proceso. Respetar esos ritmos no significa ausencia de compromiso: significa acordar responsabilidades realistas y sostenerlas.'] },
        { id: 'reciprocidad', title: 'Comunidad y reciprocidad', paragraphs: ['Quienes participen aprenderán del pueblo y también contribuirán a él. PAIDEIA no llega para enseñarle a un municipio cómo vivir, sino para aprender con sus habitantes y construir una relación útil en ambas direcciones.'] },
        { id: 'maestros', title: 'Maestros y transmisión', paragraphs: ['Un maestro no tiene que ser profesor ni poseer un título. Puede transmitir un conocimiento nacido de un oficio, una profesión, una afición, una experiencia o un aprendizaje familiar.'], steps: ['Recibir', 'Practicar', 'Comprender', 'Aportar', 'Transmitir'] },
        { id: 'tecnologia', title: 'Tecnología con propósito', paragraphs: ['PAIDEIA no rechaza la tecnología ni idealiza el pasado. Prioriza herramientas comprensibles, reparables, eficientes, útiles, adaptadas a escala humana, compatibles con los límites ecológicos y al servicio de una mayor autonomía.'] },
        { id: 'no-es', title: 'Qué no es PAIDEIA', bullets: ['No es una escuela convencional.', 'No es una comuna aislada.', 'No es turismo rural.', 'No es un programa que pretende salvar a los pueblos.', 'No rechaza el dinero ni la tecnología.', 'No promete un mismo camino para todas las personas.'] },
      ],
    },
    territorio: {
      title: 'Cuidar las condiciones que sostienen la vida',
      intro: 'PAIDEIA aspira a que su presencia contribuya a recuperar la capacidad del territorio para sostener vida, conocimiento, comunidad y actividad económica.',
      description: 'Territorio, regeneración, sostenibilidad y economía al servicio de la vida en la propuesta PAIDEIA.',
      sections: [
        { id: 'escenario', title: 'El territorio no es un escenario', paragraphs: ['El municipio, sus habitantes, campos, bosques, talleres, edificios, conocimientos y necesidades forman parte del aprendizaje. Ningún piloto debería diseñarse al margen de esa realidad.'] },
        { id: 'regenerar', title: 'Qué significa regenerar', paragraphs: ['No basta con reducir el daño. Regenerar significa contribuir a que suelo, agua, biodiversidad, edificios y relaciones comunitarias estén mejor preparados para sostener vida en el futuro.', 'Es un compromiso y un criterio de decisión, no un impacto que podamos prometer antes de medirlo.'] },
        { id: 'principios', title: 'Principios ecológicos', bullets: ['Recuperar edificios y terrenos antes de ocupar nuevos espacios.', 'Favorecer materiales locales, duraderos y reparables.', 'Proteger el suelo y aumentar su fertilidad.', 'Gestionar el agua como recurso limitado.', 'Favorecer biodiversidad y resiliencia.', 'Reducir residuos mediante reparación y reutilización.', 'Adaptar la producción a la capacidad del territorio.', 'Cuidar los bosques con criterios ecológicos y de prevención de incendios.', 'Evaluar el impacto real de las actuaciones.'] },
        { id: 'espacios', title: 'Recuperación de espacios', paragraphs: ['La rehabilitación podría unir aprendizaje, patrimonio, actividad comunitaria y futuras posibilidades de vivienda o trabajo. Las actuaciones técnicas deberán contar con profesionales, permisos, supervisión y la normativa aplicable.'] },
        { id: 'produccion', title: 'Producción con límites', paragraphs: ['La producción puede servir para aprender y generar valor, pero no debe degradar el territorio ni crecer ilimitadamente. La escala deberá responder a la capacidad ecológica y humana del lugar.'] },
        { id: 'economia', title: 'Economía al servicio de la vida', paragraphs: ['Queremos explorar un modelo mixto. No se espera que una pequeña producción financie inmediatamente toda la estructura.'], bullets: ['Administraciones y convocatorias públicas.', 'Fundaciones, entidades y empresas colaboradoras.', 'Donaciones y cesión de espacios, herramientas o materiales.', 'Aportaciones de participantes cuando sea posible.', 'Ingresos de productos, servicios o actividades.', 'Proyectos autónomos o cooperativos que puedan surgir.'] },
        { id: 'criterio', title: 'Un criterio para decidir', quote: 'Una actividad no será valiosa únicamente porque enseñe o genere ingresos. También deberá respetar los límites del territorio y, siempre que sea posible, contribuir a su regeneración.' },
      ],
    },
    'como-empezar': {
      title: 'Empezar pequeño. Aprender de la realidad.',
      intro: 'PAIDEIA no necesita comenzar como una gran institución. Necesita reunir un núcleo humano capaz, escuchar un territorio y construir un primer piloto que pueda ponerse a prueba con honestidad.',
      description: 'Roadmap fundacional, escala inicial y recursos necesarios para poner a prueba un primer piloto de PAIDEIA.',
      status: 'FASE ACTUAL: CONSTRUCCIÓN DEL NÚCLEO FUNDADOR',
      sections: [
        { id: 'fase-1', eyebrow: 'Fase 1 · Actual', title: 'Reunir el núcleo fundador', paragraphs: ['Objetivo: pasar de una iniciativa impulsada inicialmente por una persona a un pequeño equipo que comparta responsabilidad y convierta la visión en decisiones.'], bullets: ['Entre 3 y 6 personas comprometidas como referencia inicial, no como requisito cerrado.', 'Definir principios, límites y forma de gobierno.', 'Distribuir responsabilidades y contrastar el modelo con profesionales.', 'Estudiar una forma jurídica y estimar la economía del piloto.', 'Crear una primera red de colaboradores.'] },
        { id: 'fase-2', eyebrow: 'Fase 2', title: 'Escuchar y elegir un territorio', bullets: ['Conversar con municipios, entidades y vecindario.', 'Identificar conocimientos, oficios y posibles maestros.', 'Detectar espacios y terrenos y comprender necesidades reales.', 'Evaluar vivienda, agua, movilidad, conectividad y servicios.'] },
        { id: 'fase-3', eyebrow: 'Fase 3', title: 'Diseñar el piloto', bullets: ['Definir participantes y entre 2 y 4 proyectos reales.', 'Reunir maestros y profesionales.', 'Resolver convivencia y acompañamiento.', 'Preparar presupuesto, financiación, seguros, permisos y prevención de riesgos.', 'Establecer indicadores y protección específica si participan menores.'] },
        { id: 'fase-4', eyebrow: 'Fase 4', title: 'Realizar, evaluar y corregir', bullets: ['Ejecutar los proyectos.', 'Evaluar aprendizaje, autonomía y convivencia.', 'Medir utilidad comunitaria e impacto territorial.', 'Calcular el coste real.', 'Decidir qué mantener, modificar o abandonar.'] },
        { id: 'fase-5', eyebrow: 'Fase 5', title: 'Consolidar o compartir', paragraphs: ['Solo después del piloto se valorará consolidar el proyecto o ayudar a que aparezcan otras comunidades. Una posible red compartiría aprendizajes y principios, no funcionaría como expansión centralizada o franquicia.'] },
        { id: 'piloto', title: 'Primer piloto · aproximación inicial', bullets: ['Un municipio pequeño.', 'Entre 8 y 12 participantes.', 'Varios meses.', 'Una casa o espacio base.', 'Maestros locales y profesionales externos.', 'Entre 2 y 4 proyectos reales.', 'Evaluación personal, comunitaria, económica y territorial.'], paragraphs: ['Son una primera escala de trabajo, no compromisos cerrados.'] },
        { id: 'capacidades', title: 'Capacidades necesarias', bullets: ['Visión y coordinación.', 'Operaciones y administración.', 'Acompañamiento educativo.', 'Facilitación y convivencia.', 'Territorio y regeneración.', 'Oficios y seguridad.', 'Economía y producción.', 'Comunicación y alianzas.', 'Comunidad y conocimiento local.'], quote: 'No buscamos reunir títulos ni completar un organigrama. Buscamos personas fiables, capaces de escuchar, colaborar y asumir responsabilidades reales.' },
        { id: 'recursos', title: 'Qué se necesita para el piloto', bullets: ['Personas y municipio.', 'Espacio base y vivienda.', 'Terrenos, talleres y herramientas.', 'Alimentación y movilidad.', 'Financiación.', 'Seguros y asesoramiento legal.', 'Red de maestros y proyectos reales.', 'Tiempo para preparar el proceso.'] },
        { id: 'medicion', title: 'Cómo se mediría', bullets: ['Autonomía y capacidades.', 'Conocimientos transmitidos y continuidad.', 'Necesidades comunitarias atendidas.', 'Espacios recuperados y estado ecológico.', 'Actividades económicas iniciadas.', 'Calidad de la convivencia.', 'Coste y sostenibilidad del modelo.'] },
        { id: 'limites', title: 'Expectativas y límites', quote: 'PAIDEIA no promete resolver por sí sola el despoblamiento, el desempleo juvenil ni la pérdida de oficios. La expectativa inicial es más concreta: reunir un núcleo humano capaz, encontrar un territorio dispuesto a colaborar y comprobar mediante un piloto pequeño si esta forma de aprender, contribuir y convivir puede generar valor real.' },
      ],
    },
    origen: {
      title: 'De dónde nace PAIDEIA', intro: 'PAIDEIA nace de una forma de entender el aprendizaje: usar las manos y la cabeza, cuidar lo cercano y compartir aquello que descubrimos.', description: 'El origen de PAIDEIA y el papel inicial de Héctor en una iniciativa todavía fundacional.',
      sections: [
        { id: 'origen', title: 'Aprender con las manos y la cabeza', paragraphs: ['Soy Héctor y vivo en L’Argentera, un pequeño pueblo de Tarragona. Desde pequeño, en casa me enseñaron a usar las manos y la cabeza y a no separar una cosa de la otra.', 'Aprendí a moverme entre ámbitos muy distintos: albañilería, electricidad, fontanería, cocina, jardinería, historia, arte, filosofía o ciencia. Muchas veces fue también una cuestión de necesidad: no siempre teníamos mucho dinero, pero sí teníamos tiempo, curiosidad e ingenio para comprender cómo estaban hechas las cosas y aprender a resolverlas.', 'Eso no significa que sea experto en todas esas materias. Significa que he crecido entendiendo el conocimiento como algo vivo: se observa, se pregunta, se practica, se corrige y se comparte. Nunca dejamos de aprender.'] },
        { id: 'vida-cotidiana', title: 'Una práctica cotidiana', paragraphs: ['Hoy trabajo como informático, pero mantengo mi propio huerto, hago reformas en casa y preparo mis propios embutidos y conservas. En cada una de esas tareas busco aprender, hacer las cosas con cuidado y ofrecer a los míos la mejor calidad y lo más natural que esté a mi alcance.', 'También me gusta compartir, contar historias y curiosidades, y pensar que algún día transmitiré todo esto a mi hijo. No como una colección de respuestas cerradas, sino como una manera de mirar el mundo con atención, autonomía y ganas de seguir descubriendo.'] },
        { id: 'pregunta', title: 'De lo personal a una pregunta común', paragraphs: ['PAIDEIA nace de esa experiencia y del deseo de fomentar el saber, la calma, el ingenio, el cuidado y el altruismo. Nace también de una pregunta: ¿qué ocurriría si volviéramos a crear lugares donde aprender haciendo, sentirnos útiles, cuidar un territorio y transmitir aquello que sabemos?', 'He dado forma y hecho pública esta primera propuesta, pero no quiero construirla solo ni presentarla como una idea terminada. Tampoco pretendo ocupar un lugar de experto en ámbitos que necesitan conocimientos y experiencias diferentes de los míos.'] },
        { id: 'publico', title: 'Por qué hacerlo público', paragraphs: ['Una idea de comunidad no puede desarrollarse de manera privada o individual. Hacerla pública permite que aparezcan preguntas, desacuerdos, conocimientos y alianzas capaces de volverla más honesta y viable.'] },
        { id: 'papel', title: 'Mi papel inicial', paragraphs: ['Mi papel inicial es impulsar la conversación, conectar personas diferentes, organizar los primeros pasos y ayudar a convertir una intuición en una propuesta que pueda contrastarse con la realidad.', 'No busco seguidores para una idea terminada. Busco personas con las que cuestionarla, mejorarla y compartir progresivamente la responsabilidad. PAIDEIA no debería depender de una sola persona.'] },
        { id: 'busco', title: 'Qué busco ahora', bullets: ['Personas fundadoras.', 'Experiencia educativa y comunitaria.', 'Conocimiento ambiental y rural.', 'Maestros y profesionales.', 'Municipios interesados.', 'Asesoramiento jurídico y económico.', 'Entidades y posibles colaboradores.'] },
        { id: 'no-quiero', title: 'Qué no quiero que sea', bullets: ['Un proyecto personalista.', 'Una promesa grandilocuente.', 'Una iniciativa impuesta desde fuera.', 'Una idealización de la vida rural.', 'Una marca sin actividad real.', 'Una organización que crezca perdiendo su propósito.'] },
      ],
    },
    participa: {
      title: 'PAIDEIA empieza reuniendo capacidades diferentes', intro: 'No buscamos únicamente apoyo a una idea. Buscamos personas, municipios y entidades dispuestos a explorar qué podrían construir junto a otros.', description: 'Formas de participar en la fase fundacional de PAIDEIA y contacto.',
      sections: [
        { id: 'fundar', title: 'Quiero ayudar a fundar PAIDEIA', paragraphs: ['Para personas que quieran compartir responsabilidad, decisiones y trabajo sostenido en la etapa inicial.'] },
        { id: 'municipio', title: 'Soy un municipio', paragraphs: ['Para ayuntamientos o agentes locales que quieran explorar, sin compromisos previos, qué requeriría un posible piloto.'] },
        { id: 'compartir', title: 'Quiero compartir lo que sé', paragraphs: ['Para conocimientos procedentes de un oficio, profesión, afición, experiencia o transmisión familiar. No hace falta ser docente.'] },
        { id: 'participar', title: 'Quiero participar', paragraphs: ['Para personas interesadas en formar parte de una futura experiencia. El piloto aún no tiene convocatoria ni calendario cerrados.'] },
        { id: 'entidad', title: 'Represento a una entidad', paragraphs: ['Para asociaciones, fundaciones, empresas, administraciones o centros educativos que quieran explorar una colaboración.'] },
        { id: 'recursos', title: 'Puedo aportar recursos', paragraphs: ['Espacios, terrenos, herramientas, materiales, financiación, tiempo o conexiones pueden ser valiosos cuando respondan a necesidades reales.'] },
        { id: 'contacto', title: 'Abramos la conversación', paragraphs: ['Cuéntanos desde dónde escribes y qué te gustaría explorar. Contactar no implica compromiso por ninguna de las partes.'] },
      ],
    },
  },
}

export default es
