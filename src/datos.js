// Datos locales de DBT: módulos, habilidades y recursos de ayuda.

// ================= MÓDULOS =================
export const modules = [
  {
    id: "mindfulness",
    name: "Mindfulness",
    emoji: "🧘",
    tint: "#E3EFEC",
    shortDescription: "Atención plena al momento presente.",
    description:
      "Las habilidades de mindfulness (atención plena) entrenan la capacidad de notar lo que ocurre dentro y fuera de ti en el momento presente, sin juzgarlo. Son la base de los demás módulos.",
  },
  {
    id: "tolerancia-malestar",
    name: "Tolerancia al malestar",
    emoji: "🔥",
    tint: "#F6E9DF",
    shortDescription: "Atravesar momentos difíciles sin empeorarlos.",
    description:
      "Estas habilidades ayudan a sobrellevar situaciones de mucho malestar emocional sin recurrir a conductas que puedan hacerte daño después. No buscan eliminar el dolor, sino ayudarte a atravesarlo.",
  },
  {
    id: "regulacion-emocional",
    name: "Regulación emocional",
    emoji: "❤️",
    tint: "#F5E4E7",
    shortDescription: "Comprender y modular las emociones.",
    description:
      "Aquí se practica identificar y nombrar emociones, entender para qué sirven y reducir la vulnerabilidad emocional cuidando el cuerpo y las rutinas.",
  },
  {
    id: "efectividad-interpersonal",
    name: "Efectividad interpersonal",
    emoji: "🤝",
    tint: "#E4E9F5",
    shortDescription: "Pedir, decir no y cuidar las relaciones.",
    description:
      "Estas habilidades te ayudan a comunicar lo que necesitas, poner límites y mantener relaciones sanas, cuidando también tu autorrespeto.",
  },
];

export const getModuleById = (id) => modules.find((m) => m.id === id);

// ================= HABILIDADES =================
export const skills = [
  // ---------------- MINDFULNESS ----------------
  {
    id: "observar",
    name: "Observar",
    moduleId: "mindfulness",
    shortDescription: "Notar lo que sucede sin reaccionar.",
    description:
      "Consiste en darte cuenta de lo que pasa en tu cuerpo, en tus pensamientos y a tu alrededor, solo percibiéndolo, sin ponerle etiquetas ni intentar cambiarlo.",
    whenToUse:
      "Cuando sientes que vas en piloto automático, cuando tu mente está muy acelerada o cuando quieres volver al presente.",
    steps: [
      "Detente un momento y dirige tu atención a una sola cosa: tu respiración, un sonido o un objeto.",
      "Nota lo que percibes con tus sentidos: formas, colores, sonidos, sensaciones en el cuerpo.",
      "Si aparece un pensamiento o una emoción, simplemente nótalo, como una nube que pasa.",
      "Cuando tu mente se distraiga, vuelve con suavidad a lo que estabas observando.",
    ],
    tip: "Distraerse es normal. Cada vez que notas que te distrajiste y vuelves, estás practicando la habilidad.",
  },
  {
    id: "describir",
    name: "Describir",
    moduleId: "mindfulness",
    shortDescription: "Poner palabras a lo que observas.",
    description:
      "Consiste en nombrar con palabras lo que observaste, ateniéndote a los hechos y separándolos de las interpretaciones o juicios.",
    whenToUse:
      "Cuando una situación te abruma y quieres tomar distancia de tus pensamientos, o antes de comunicar algo a otra persona.",
    steps: [
      "Observa primero lo que está ocurriendo.",
      "Describe los hechos con palabras simples: «Noto tensión en mis hombros», «Estoy pensando que...».",
      "Distingue hechos de interpretaciones: «Mi amigo no respondió» es un hecho; «No le importo» es una interpretación.",
      "Evita adjetivos de juicio como «terrible» o «estúpido».",
    ],
    tip: "Puedes usar frases como «Tengo el pensamiento de que...» o «Siento la emoción de...» para ganar distancia.",
  },
  {
    id: "participar",
    name: "Participar",
    moduleId: "mindfulness",
    shortDescription: "Entrar por completo en lo que haces.",
    description:
      "Consiste en involucrarte totalmente en la actividad del momento, sin quedarte pensando en cómo lo haces ni en lo que vendrá después.",
    whenToUse:
      "Cuando te sientes desconectado, cuando te cuesta disfrutar o cuando te preocupas demasiado por el futuro.",
    steps: [
      "Elige una actividad sencilla: caminar, cocinar, escuchar música, conversar.",
      "Pon tu atención en lo que estás haciendo, con todos tus sentidos.",
      "Déjate llevar por la actividad, sin evaluarte.",
      "Si tu mente se va, vuelve a la actividad sin criticarte.",
    ],
    tip: "Empieza con actividades cortas, de 5 minutos, y aumenta poco a poco.",
  },
  {
    id: "mente-sabia",
    name: "Mente sabia",
    moduleId: "mindfulness",
    shortDescription: "Equilibrar la mente emocional y la racional.",
    description:
      "La mente sabia es el punto de encuentro entre la mente emocional (lo que sientes) y la mente racional (lo que piensas). Es esa sensación interna de «saber» lo que es adecuado para ti.",
    whenToUse:
      "Cuando debes tomar una decisión y te sientes dividido entre lo que sientes y lo que piensas.",
    steps: [
      "Haz una pausa y respira lentamente unas cuantas veces.",
      "Pregúntate qué dice tu mente emocional y qué dice tu mente racional.",
      "Haz silencio interno y pregúntate: «¿Qué haría mi mente sabia?».",
      "Escucha la respuesta con calma, sin forzarla. Si no llega, puedes intentarlo de nuevo más tarde.",
    ],
    tip: "Puedes imaginar que bajas lentamente por una escalera hacia un lugar tranquilo dentro de ti.",
  },

  // ---------------- TOLERANCIA AL MALESTAR ----------------
  {
    id: "stop",
    name: "STOP",
    moduleId: "tolerancia-malestar",
    shortDescription: "Pausar antes de actuar por impulso.",
    description:
      "STOP es una habilidad para frenar una reacción impulsiva y actuar con más conciencia. Sus siglas en inglés significan: Stop, Take a step back, Observe, Proceed mindfully.",
    whenToUse:
      "Cuando sientes el impulso de reaccionar de inmediato: discutir, enviar un mensaje impulsivo o hacer algo de lo que luego podrías arrepentirte.",
    steps: [
      "Stop (Detente): no te muevas ni reacciones. Congélate un momento.",
      "Take a step back (Da un paso atrás): respira y toma distancia de la situación.",
      "Observe (Observa): nota qué sientes, qué piensas y qué está pasando a tu alrededor.",
      "Proceed mindfully (Procede con atención): decide qué acción te ayuda más con lo que quieres lograr.",
    ],
    tip: "Una sola respiración profunda ya es una pausa válida. No necesitas hacerlo perfecto.",
  },
  {
    id: "tipp",
    name: "TIPP",
    moduleId: "tolerancia-malestar",
    shortDescription: "Bajar la intensidad emocional desde el cuerpo.",
    description:
      "TIPP reúne estrategias corporales que ayudan a reducir con rapidez una activación emocional muy alta: Temperatura, Ejercicio intenso, Respiración pausada y Relajación muscular progresiva.",
    whenToUse:
      "Cuando la emoción es tan intensa que no puedes pensar con claridad y necesitas bajar el nivel de activación.",
    steps: [
      "Temperatura: lava tu rostro con agua fresca o fría durante unos segundos.",
      "Ejercicio intenso: haz actividad física breve, como caminar rápido o saltar, durante unos minutos.",
      "Respiración pausada: inhala lento y exhala más largo de lo que inhalaste, durante varios minutos.",
      "Relajación muscular: tensa un grupo muscular unos segundos y suéltalo, recorriendo el cuerpo.",
    ],
    tip: "Si tienes alguna condición médica (por ejemplo, cardíaca) consulta con un profesional de salud antes de usar frío o ejercicio intenso.",
  },
  {
    id: "accepts",
    name: "ACCEPTS",
    moduleId: "tolerancia-malestar",
    shortDescription: "Distraerte de forma saludable mientras pasa la intensidad.",
    description:
      "ACCEPTS agrupa formas de distraer la mente por un tiempo para que la emoción baje y puedas afrontar el problema con más claridad. No se trata de negar lo que sientes.",
    whenToUse:
      "Cuando no puedes resolver el problema en este momento y necesitas tolerar el malestar hasta que baje la intensidad.",
    steps: [
      "Actividades: haz algo que requiera atención (un juego, ordenar, un pasatiempo).",
      "Contribuir: ayuda a alguien o haz algo amable por otra persona.",
      "Comparaciones: recuerda momentos en que superaste algo difícil.",
      "Emociones opuestas: busca música, una película o un recuerdo que genere otra emoción.",
      "Poner a un lado: guarda el problema «en una caja» por un rato, sabiendo que volverás a él.",
      "Pensamientos: ocupa la mente con contar, rompecabezas o recitar algo.",
      "Sensaciones: usa una sensación intensa pero segura, como una ducha tibia o saborear algo.",
    ],
    tip: "La distracción es temporal. Cuando te sientas más estable, vuelve al problema con calma.",
  },
  {
    id: "autocalma",
    name: "Autocalma",
    moduleId: "tolerancia-malestar",
    shortDescription: "Calmarte con tus cinco sentidos.",
    description:
      "Consiste en tratarte con amabilidad usando los cinco sentidos para generar sensaciones de calma y confort.",
    whenToUse:
      "Cuando te sientes tenso, triste o agotado y necesitas un momento de cuidado.",
    steps: [
      "Vista: mira algo agradable, como una foto, el cielo o una planta.",
      "Oído: escucha música tranquila o sonidos de la naturaleza.",
      "Olfato: huele algo que te guste: una infusión, jabón, una flor.",
      "Gusto: toma algo despacio, prestando atención al sabor.",
      "Tacto: envuélvete en una manta suave o date una ducha tibia.",
    ],
    tip: "Haz una pequeña lista de tus cosas calmantes favoritas para tenerla a mano cuando la necesites.",
  },

  // ---------------- REGULACIÓN EMOCIONAL ----------------
  {
    id: "identificar-emociones",
    name: "Identificación de emociones",
    moduleId: "regulacion-emocional",
    shortDescription: "Ponerle nombre a lo que sientes.",
    description:
      "Nombrar una emoción con precisión ayuda a entenderla y a elegir qué hacer con ella. Incluye observar qué la disparó, cómo se siente en el cuerpo y qué impulso trae.",
    whenToUse:
      "Cuando sientes una mezcla confusa de emociones o notas malestar sin saber de dónde viene.",
    steps: [
      "Observa qué ocurrió justo antes de sentirte así.",
      "Nota qué sensaciones aparecen en tu cuerpo.",
      "Identifica qué pensamientos o interpretaciones tuviste sobre la situación.",
      "Nota qué impulso trae la emoción (huir, atacar, esconderte...).",
      "Ponle nombre: tristeza, enojo, miedo, vergüenza, alegría...",
    ],
    tip: "Cuanto más específico sea el nombre, mejor. «Frustrado» puede ser más preciso que «mal».",
  },
  {
    id: "accion-opuesta",
    name: "Acción opuesta",
    moduleId: "regulacion-emocional",
    shortDescription: "Actuar distinto a lo que pide la emoción.",
    description:
      "Cuando una emoción no encaja con los hechos o actuar según ella te perjudica, puedes hacer lo contrario a su impulso para disminuir su intensidad.",
    whenToUse:
      "Cuando la emoción es muy intensa o desproporcionada y su impulso no te ayuda, por ejemplo aislarte cuando estás triste.",
    steps: [
      "Identifica la emoción y el impulso que trae.",
      "Pregúntate si la emoción encaja con los hechos y si actuar según ella te ayuda.",
      "Si no te ayuda, elige una acción opuesta al impulso (por ejemplo, acercarte en lugar de aislarte).",
      "Hazlo con todo tu cuerpo y tu actitud, y repítelo varias veces.",
    ],
    tip: "No se trata de ignorar la emoción, sino de elegir con intención cómo actuar.",
  },
  {
    id: "please",
    name: "PLEASE",
    moduleId: "regulacion-emocional",
    shortDescription: "Cuidar el cuerpo para vivir las emociones con más estabilidad.",
    description:
      "PLEASE reúne hábitos de cuidado físico que reducen la vulnerabilidad emocional: tratar enfermedades físicas, equilibrar la alimentación, evitar sustancias que alteran el ánimo, equilibrar el sueño y hacer ejercicio.",
    whenToUse:
      "Cuando notas que tus emociones se disparan más fácil por cansancio, mala alimentación o descuido de tu cuerpo.",
    steps: [
      "PhysicaL illness: atiende tu salud física y acude a consulta cuando lo necesites.",
      "Eating: procura comer de forma equilibrada y regular.",
      "Avoid mood-altering substances: evita sustancias que alteren tu estado de ánimo.",
      "Sleep: busca dormir lo suficiente y mantener horarios regulares.",
      "Exercise: incluye algo de movimiento físico la mayoría de los días.",
    ],
    tip: "Elige un solo hábito para empezar. Los cambios pequeños y constantes funcionan mejor.",
  },
  {
    id: "funcion-emociones",
    name: "Comprender la función de las emociones",
    moduleId: "regulacion-emocional",
    shortDescription: "Entender para qué sirve lo que sientes.",
    description:
      "Las emociones cumplen funciones: nos dan información, nos preparan para actuar y comunican a otros cómo estamos. Entenderlo ayuda a relacionarte con ellas con menos rechazo.",
    whenToUse:
      "Cuando te juzgas por sentir algo o quieres entender qué mensaje trae una emoción.",
    steps: [
      "Nombra la emoción que sientes.",
      "Pregúntate qué información podría estar dándote sobre la situación.",
      "Pregúntate qué te está motivando a hacer y si te sirve.",
      "Considera qué estás comunicando con tu expresión corporal y tu tono.",
    ],
    tip: "Una emoción puede ser válida aunque la acción que pide no sea la más útil.",
  },

  // ---------------- EFECTIVIDAD INTERPERSONAL ----------------
  {
    id: "dear-man",
    name: "DEAR MAN",
    moduleId: "efectividad-interpersonal",
    shortDescription: "Pedir algo o decir no de forma clara y respetuosa.",
    description:
      "DEAR MAN es una guía para pedir lo que necesitas o rechazar una petición cuidando el objetivo de la conversación y la relación.",
    whenToUse:
      "Cuando necesitas pedir algo, poner un límite o expresar una opinión con claridad.",
    steps: [
      "Describe la situación con hechos, sin juzgar.",
      "Expresa cómo te sientes u opinas.",
      "Asertivamente pide lo que necesitas o di que no, con claridad.",
      "Refuerza: explica los beneficios positivos de acordar lo que pides.",
      "Mantente atento (Mindful) a tu objetivo, sin desviarte del tema.",
      "Aparenta seguridad con tu postura, mirada y tono de voz.",
      "Negocia: ofrece alternativas si es necesario.",
    ],
    tip: "Ensayar en voz alta o por escrito antes de la conversación suele ayudar mucho.",
  },
  {
    id: "give",
    name: "GIVE",
    moduleId: "efectividad-interpersonal",
    shortDescription: "Cuidar la relación durante una conversación.",
    description:
      "GIVE ayuda a mantener o mejorar la relación con la otra persona mientras comunicas lo que necesitas.",
    whenToUse:
      "Cuando la relación es importante para ti y quieres que la conversación sea respetuosa.",
    steps: [
      "Gentle (Amable): sin ataques, amenazas ni juicios.",
      "Interested (Interesado): escucha con atención y deja que la otra persona hable.",
      "Validate (Valida): reconoce lo que la otra persona siente o piensa, aunque no estés de acuerdo.",
      "Easy manner (Actitud tranquila): usa un tono amable y, si puedes, un poco de humor.",
    ],
    tip: "Validar no significa estar de acuerdo; significa mostrar que entiendes la perspectiva del otro.",
  },
  {
    id: "fast",
    name: "FAST",
    moduleId: "efectividad-interpersonal",
    shortDescription: "Cuidar tu autorrespeto al relacionarte.",
    description:
      "FAST te ayuda a mantener tu autorrespeto mientras haces una petición o pones un límite.",
    whenToUse:
      "Cuando sientes que podrías ceder en tus valores solo para evitar un conflicto.",
    steps: [
      "Fair (Justo): sé justo contigo y con la otra persona.",
      "(No) Apologies (Sin disculpas excesivas): no te disculpes por existir o por tener necesidades.",
      "Stick to values (Fiel a tus valores): mantén tus valores sin justificarte de más.",
      "Truthful (Veraz): evita exagerar, inventar excusas o fingir.",
    ],
    tip: "Pregúntate: «¿Cómo me gustaría sentirme conmigo mismo al terminar esta conversación?».",
  },
];

export const getSkillsByModule = (moduleId) =>
  skills.filter((s) => s.moduleId === moduleId);

export const getSkillById = (id) => skills.find((s) => s.id === id);

// ================= RECURSOS DE AYUDA =================
// Recursos oficiales de Colombia. No agregar números sin verificar la fuente oficial.
export const emergencyResources = [
  {
    id: "linea-106",
    title: "Línea 106",
    description: "Orientación y apoyo en salud mental.",
    detail:
      "Servicio de orientación en salud mental del Ministerio de Salud y Protección Social. Se marca directamente desde teléfono fijo o celular.",
    buttonLabel: "📞 Llamar al 106",
    url: "tel:106",
    variant: "primary",
  },
  {
    id: "emergencias-123",
    title: "Emergencias",
    description: "Línea única de emergencias.",
    detail: "Úsala si existe peligro inmediato para ti o para otra persona.",
    buttonLabel: "📞 Llamar al 123",
    url: "tel:123",
    variant: "danger",
  },
];

export const directoryResource = {
  id: "directorio-territorial",
  title: "Directorio de líneas territoriales",
  description:
    "Además de la Línea 106, existen líneas de salud mental por departamento y ciudad. Consulta el listado oficial del Ministerio de Salud.",
  buttonLabel: "Abrir sitio oficial",
  url: "https://minsalud.gov.co/salud/publica/salud-mental/Paginas/linea-106.aspx",
  variant: "secondary",
};

export const emergencyWarning =
  "Si existe peligro inmediato o una emergencia, contacta los servicios de emergencia.";
