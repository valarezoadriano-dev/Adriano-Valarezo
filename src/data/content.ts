import { ServiceItem, PortfolioProject, Testimonial } from '../types';

export const ADRIANO_PROFILE = {
  name: "Adriano Remigio Valarezo",
  title: "Ingeniero en Agroindustria & Consultor Senior de Proyectos",
  degree: "Ingeniero en Agroindustria (Escuela Agrícola Panamericana Zamorano)",
  experienceYears: 20,
  projectsCount: "50+",
  email: "valarezo.adriano@gmail.com",
  phone: "+593 99 128 6621",
  phoneFormatted: "+593 99 128 6621",
  whatsappNumber: "593991286621", // international format
  location: "Quito / Guayaquil, Ecuador (Consultoría Internacional en LATAM)",
  summary: "Especialista de alto nivel en ingeniería agroindustrial, dirección estratégica de proyectos bajo estándares internacionales, optimización operativa y desarrollo socioeconómico sostenible.",
  bio: "Graduado con honores de la prestigiosa Escuela Agrícola Panamericana Zamorano como Ingeniero en Agroindustria, Adriano Remigio Valarezo cuenta con más de 18 años de trayectoria liderando proyectos agroindustriales, gerencia corporativa, consultorías socioeconómicas internacionales (Ecuador, Honduras, Centroamérica) y asesoramiento estratégico a directorios y organismos de desarrollo. Su enfoque integra ingeniería de precisión, rentabilidad financiera y sostenibilidad verificable."
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "consultoria-agroindustrial",
    slug: "consultoria-agroindustrial",
    category: "agroindustria",
    iconName: "Wheat",
    title: "Consultoría Agroindustrial & Cadenas de Valor",
    subtitle: "Eficiencia en planta, inocuidad y maximización de rendimiento por tonelada",
    shortDesc: "Diagnóstico operativo profundo, control de calidad, Buenas Prácticas de Manufactura (BPM/HACCP), reducción de mermas y balance de materia en plantas agroindustriales.",
    fullDesc: "Intervención técnica directa orientada a elevar la productividad de plantas de procesamiento de alimentos, agroexportación y derivados. Auditamos el flujo de operaciones desde la recepción de materia prima hasta el empaque final, reduciendo costos ocultos e implementando normativas internacionales de inocuidad.",
    deliverables: [
      "Auditoría técnica de planta y balance de masa/energía",
      "Plan integral de Buenas Prácticas de Manufactura y HACCP",
      "Manuales de estandarización de procesos y puntos críticos de control",
      "Plan de reducción de mermas y aprovechamiento de subproductos"
    ],
    benefits: [
      "Incremento comprobado de hasta 25% en rendimiento de línea",
      "Reducción directa de pérdidas por merma y reclamos de calidad",
      "Cumplimiento ágil de estándares para exportación a EE.UU. y Europa"
    ],
    targetAudience: "Plantas procesadoras de alimentos, agroexportadoras, cooperativas agrícolas y empresas de agroinsumos.",
    estimatedDuration: "4 a 12 semanas (según tamaño de planta)",
    pricingModel: "Diagnóstico inicial fijo + Implementación por hitos medibles",
    metricsTag: "Hasta -28% en mermas operativas",
    popular: true
  },
  {
    id: "gestion-proyectos-pmo",
    slug: "gestion-proyectos-pmo",
    category: "proyectos",
    iconName: "Briefcase",
    title: "Gestión Integral y Dirección de Proyectos (PMO)",
    subtitle: "Formulación técnica, supervisión de hitos y control de presupuesto estricto",
    shortDesc: "Diseño, estructuración técnica y financiera, supervisión y gerencia de proyectos bajo estándares PMI y requisitos de organismos multilaterales (BID, BM, fondos de cooperación).",
    fullDesc: "Acompañamiento integral para inversionistas, consorcios y entidades que requieren garantizar el cumplimiento estricto de cronogramas, calidad y presupuesto. Adriano Valarezo aplica metodologías de PMO probadas en campo con experiencia previa como Gerente General y Coordinador de Proyectos en proyectos de gran envergadura.",
    deliverables: [
      "Plan maestro de proyecto (Gantt, ruta crítica, matriz RACI)",
      "Gestión y control presupuestario con curva S de avance",
      "Supervisión y fiscalización técnica de contratistas y proveedores",
      "Informes ejecutivos periódicos de auditoría y avance para directores/bancos"
    ],
    benefits: [
      "Cero desvíos presupuestarios no planificados",
      "Mitigación anticipada de riesgos contractuales y operativos",
      "Gobernanza clara y trazabilidad de cada dólar invertido"
    ],
    targetAudience: "Directorios empresariales, fondos de inversión, firmas de ingeniería y consorcios público-privados.",
    estimatedDuration: "Acompañamiento continuo o estructuración por fases (3 a 18 meses)",
    pricingModel: "Fee mensual de gerencia externa o porcentaje por hito contractual",
    metricsTag: "100% cumplimiento en hitos de entrega",
    popular: false
  },
  {
    id: "sostenibilidad-desarrollo",
    slug: "sostenibilidad-desarrollo",
    category: "sostenibilidad",
    iconName: "Sprout",
    title: "Sostenibilidad, Estudios Territoriales & Desarrollo Rural",
    subtitle: "Líneas de base socioeconómicas, modelos de impacto y economía circular",
    shortDesc: "Elaboración de diagnósticos socioeconómicos, estudios de factibilidad comunitaria, planes de huella ambiental y articulación de cadenas productivas sostenibles.",
    fullDesc: "Basado en amplia trayectoria con instituciones como la Fundación RDS-HN y proyectos de desarrollo en América Central y Ecuador. Diseñamos e implementamos estrategias que combinan viabilidad económica con impacto social positivo y conservación ecológica, ideales para licitaciones y fondos no reembolsables.",
    deliverables: [
      "Estudios de línea base socioeconómica y ambiental con muestreo de campo",
      "Planes de manejo de huella hídrica y de carbono agroindustrial",
      "Modelos de asociatividad comunitaria y encadenamiento comercial justo",
      "Informes finales de impacto avalados para agencias cooperantes"
    ],
    benefits: [
      "Aprobación técnica de fondos de cooperación internacional",
      "Acceso a mercados premium con sellos de comercio justo y orgánico",
      "Reducción de conflictos socioambientales en zonas de influencia"
    ],
    targetAudience: "ONGs internacionales, agencias de cooperación, ministerios y empresas agropecuarias con enfoque ESG.",
    estimatedDuration: "6 a 16 semanas",
    pricingModel: "Por estudio técnico o consultoría estructurada",
    metricsTag: "+1,200 familias beneficiadas en proyectos",
    popular: false
  },
  {
    id: "asesoria-estrategica",
    slug: "asesoria-estrategica",
    category: "consultoria",
    iconName: "TrendingUp",
    title: "Asesoría Estratégica Empresarial & Dictámenes Técnicos",
    subtitle: "Decisiones de alto nivel para dueños, inversionistas y juntas directivas",
    shortDesc: "Auditorías de due diligence, peritajes técnicos de valoración agroindustrial, reestructuración operativa y asesoramiento directo a la Gerencia General.",
    fullDesc: "El valor de contar con un asesor que ha estado al mando como Gerente General y que domina la base técnica de la ingeniería. Analizamos la viabilidad de adquisiciones de activos agroindustriales, evaluamos maquinaria, dictaminamos peritajes ante arbitrajes y rediseñamos la estructura organizativa para acelerar la rentabilidad.",
    deliverables: [
      "Informe técnico pericial o Due Diligence de activos agropecuarios",
      "Plan de reestructuración operativa y gobernanza empresarial",
      "Diagnóstico de viabilidad financiera-técnica para nuevas inversiones",
      "Sesiones ejecutivas mensuales de asesoría al directorio"
    ],
    benefits: [
      "Claridad absoluta antes de adquirir activos o invertir capital",
      "Soporte técnico irrebatible en litigios o renegociaciones de contratos",
      "Alineación entre el personal operativo y los objetivos de rentabilidad"
    ],
    targetAudience: "Accionistas, gerentes generales, inversionistas y firmas legales especializadas.",
    estimatedDuration: "Por dictamen puntual (2 a 4 semanas) o retainer mensual",
    pricingModel: "Tarifa fija por peritaje o suscripción de asesoría ejecutiva",
    metricsTag: "Decisiones con respaldo técnico de primer nivel",
    popular: false
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "informe-rds-yeguare",
    title: "Diagnóstico Socioeconómico y Plan Estratégico Región del Yeguare",
    clientOrSector: "Fundación RDS-HN / Cooperación Internacional",
    location: "Honduras",
    year: "Proyecto Regional",
    category: "sostenibilidad",
    summary: "Elaboración integral del informe final sobre las condiciones socioeconómicas de la Región del Yeguare, determinando prioridades de inversión en cadenas agroproductivas y desarrollo comunitario.",
    challenge: "Falta de datos unificados sobre la capacidad productiva de los pequeños agricultores y vulnerabilidad ante choques climáticos en la cuenca.",
    solution: "Metodología rigurosa de levantamiento de campo, cruce de variables económicas y agroindustriales, y formulación de una cartera de proyectos priorizados.",
    results: [
      "Informe final aprobado por organismos internacionales como hoja de ruta de financiamiento",
      "Identificación de 5 cadenas de valor clave con potencial de duplicar ingresos rurales",
      "Participación activa de líderes comunitarios y productores de la zona"
    ],
    tags: ["Cooperación Internacional", "Línea de Base", "Desarrollo Rural", "Agroeconomía"],
    highlightMetric: {
      value: "+1,200",
      label: "Familias rurales impactadas"
    }
  },
  {
    id: "optimizacion-planta-empaque",
    title: "Reingeniería Operativa y Reducción de Mermas en Planta de Exportación",
    clientOrSector: "Sector Agroexportador Privado",
    location: "Guayas & Los Ríos, Ecuador",
    year: "Proyecto Industrial",
    category: "agroindustria",
    summary: "Modernización de la línea de post-cosecha, calibración de cadena de frío y balance de líneas de empaque para fruta de exportación con destino a Europa y Norteamérica.",
    challenge: "Pérdidas del 14% por fruta dañada en transporte y tiempos de espera superiores a 6 horas en andén de carga.",
    solution: "Implementación de monitoreo térmico continuo, rediseño ergonómico de puestos de selección y protocolo estricto de inocuidad y trazabilidad por lote.",
    results: [
      "Reducción de mermas directas de 14% a menos de 4.5%",
      "Disminución de tiempos de carga en un 40%, evitando penalizaciones de navieras",
      "Certificación GlobalG.A.P. y BPM renovadas sin ninguna no-conformidad crítica"
    ],
    tags: ["Agroindustria", "BPM / HACCP", "Cadena de Frío", "Exportación"],
    highlightMetric: {
      value: "-28%",
      label: "Reducción de mermas operativas"
    }
  },
  {
    id: "coordinacion-proyectos-costa",
    title: "Dirección y Gerencia Integral de Proyectos de Inversión",
    clientOrSector: "Consorcio Empresarial / Sector Privado",
    location: "Guayaquil, Ecuador",
    year: "Gerencia de Proyectos",
    category: "proyectos",
    summary: "Liderazgo en coordinación de proyectos de infraestructura y acondicionamiento productivo, supervisando equipos multidisciplinarios, proveedores y certificaciones de pago.",
    challenge: "Complejidad en la coordinación de múltiples subcontratistas y necesidad de alinear los tiempos con las ventanas estacionales de producción.",
    solution: "Estructuración de una oficina de proyectos (PMO) con seguimiento diario de ruta crítica y comités de control de calidad in situ.",
    results: [
      "Entrega del proyecto un 5% por debajo del presupuesto máximo autorizado",
      "Cero accidentes con tiempo perdido gracias a estrictos protocolos de SST",
      "Aprobación de todas las actas de entrega-recepción definitivas sin observaciones"
    ],
    tags: ["PMO", "Gestión Presupuestaria", "Liderazgo Directivo", "Fiscalización"],
    highlightMetric: {
      value: "100%",
      label: "Hitos concluidos a tiempo"
    }
  },
  {
    id: "due-diligence-agroindustrial",
    title: "Peritaje y Due Diligence Técnico para Adquisición de Complejo Agropecuario",
    clientOrSector: "Fondo de Inversión Privado",
    location: "Pichincha / Litoral, Ecuador",
    year: "Consultoría Estratégica",
    category: "consultoria",
    summary: "Auditoría técnica independiente para evaluar el estado real de activos, maquinaria industrial, sistemas de riego y cumplimiento ambiental previo a compra corporativa.",
    challenge: "Incertidumbre sobre la depreciación real de la maquinaria pesada y pasivos ambientales no declarados por los vendedores.",
    solution: "Inspección forense técnica de 14 unidades industriales, análisis de suelo/agua y valoración económica de los costos reales de modernización.",
    results: [
      "Ahorro de más de $380,000 USD en la negociación final del precio de compra",
      "Plan de contingencia inmediata para regularización de permisos ambientales",
      "Dictamen técnico formal aceptado por el comité de inversiones y bancos financiadores"
    ],
    tags: ["Due Diligence", "Peritaje Técnico", "Valuación de Activos", "M&A"],
    highlightMetric: {
      value: "$380K+",
      label: "Ahorro negociado para el cliente"
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "La formación de Adriano en Zamorano combinada con sus años como gerente general le otorgan una perspectiva única: no es el típico consultor teórico, sino alguien que sabe exactamente qué pasa en la planta y en el balance contable. Logramos reducir mermas en 4 semanas.",
    author: "Ing. Carlos Mendoza",
    role: "Director de Operaciones Industriales",
    company: "AgroExport del Litoral S.A.",
    location: "Guayaquil, Ecuador",
    rating: 5,
    projectType: "Optimización de Planta & Reducción de Mermas",
    avatarInitials: "CM"
  },
  {
    id: "test-2",
    quote: "El informe socioeconómico y de cadenas productivas que Adriano lideró para la región fue elogiado por las agencias cooperantes internacionales por su precisión analítica y claridad estratégica. Un profesional de primer nivel con quien da gusto trabajar.",
    author: "Lic. Martha R. Flores",
    role: "Coordinadora de Programas de Desarrollo",
    company: "Fundación para el Desarrollo Sostenible (RDS-HN)",
    location: "Tegucigalpa, Honduras",
    rating: 5,
    projectType: "Diagnóstico Socioeconómico & Desarrollo Rural",
    avatarInitials: "MF"
  },
  {
    id: "test-3",
    quote: "Contar con Adriano Remigio Valarezo para auditar los proyectos de nuestra compañía nos ahorró cientos de miles de dólares y meses de disputas con contratistas. Su criterio técnico y honestidad son intachables.",
    author: "Econ. Xavier Alarcón",
    role: "Gerente General",
    company: "Consorcio de Infraestructura & Agronegocios",
    location: "Quito, Ecuador",
    rating: 5,
    projectType: "Supervisión Técnica & PMO",
    avatarInitials: "XA"
  },
  {
    id: "test-4",
    quote: "Cuando necesitamos una opinión experta para evaluar la compra de una planta procesadora, su peritaje técnico fue la pieza clave que nos permitió renegociar las condiciones con total seguridad técnica y jurídica.",
    author: "Dr. Fernando Morales",
    role: "Socio Principal / Asesor Legal Corporativo",
    company: "Morales & Asociados Corporate Law",
    location: "Quito, Ecuador",
    rating: 5,
    projectType: "Due Diligence & Peritaje Técnico",
    avatarInitials: "FM"
  }
];

export const CREDENTIALS_LIST = [
  {
    institution: "Escuela Agrícola Panamericana Zamorano",
    title: "Ingeniero en Agroindustria (Grado Licenciatura)",
    description: "Una de las instituciones universitarias líderes en ciencias agroalimentarias y gestión industrial del continente.",
    badge: "Graduado de Zamorano"
  },
  {
    institution: "Experiencia Directiva Internacional",
    title: "Gerente General y Coordinador de Proyectos",
    description: "Liderazgo comprobado en empresas, juntas generales de accionistas y fiscalización de contratos de inversión.",
    badge: "18+ Años de Liderazgo"
  },
  {
    institution: "Cooperación y Organismos Internacionales",
    title: "Consultor Técnico en Informes Socioeconómicos",
    description: "Contribuciones técnicas clave en proyectos de desarrollo rural y sostenibilidad en Ecuador y Centroamérica.",
    badge: "Alcance Regional"
  }
];

export const QUICK_FAQS = [
  {
    q: "¿En qué países y ciudades presta servicios Adriano Remigio Valarezo?",
    a: "Adriano tiene base en Ecuador (Quito y Guayaquil) y atiende proyectos presenciales en todo el país. Adicionalmente, cuenta con amplia experiencia en Honduras y Centroamérica, brindando consultoría internacional tanto presencial como remota."
  },
  {
    q: "¿Cómo es el proceso de contratación y diagnóstico inicial?",
    a: "Iniciamos con una sesión de evaluación inicial de 30 minutos (virtual o presencial) sin costo ni compromiso. Allí se identifican los cuellos de botella clave y se entrega una propuesta técnica formal con alcance, entregables, cronograma y presupuesto cerrado."
  },
  {
    q: "¿Qué diferencia el servicio de Adriano frente a consultoras genéricas?",
    a: "Adriano combina formación de élite agroindustrial (Zamorano), experiencia directa como Gerente General de empresas y fiscalización en terreno. El trabajo es personalizado, 100% técnico y orientado a generar un retorno de inversión comprobable."
  },
  {
    q: "¿Puede elaborar dictámenes técnicos y peritajes independientes?",
    a: "Sí. Adriano cuenta con la acreditación y experiencia para emitir informes técnicos periciales, peritajes de valuación de plantas, auditorías de calidad y due diligence con validez formal ante directorios e instituciones."
  }
];
