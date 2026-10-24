export interface SecurityAuditItem {
  id: string;
  date: string;
  title: string;
  category: 'ciberseguridad' | 'privacidad' | 'infraestructura' | 'cumplimiento';
  description: string;
  status: 'completado' | 'en_monitoreo';
  verifiedBy: string;
}

export interface SecurityGuarantee {
  iconName: string;
  title: string;
  description: string;
  standard: string;
}

export const SECURITY_COMPLIANCE_INFO = {
  version: "2026.4",
  lastAuditDate: "23 de octubre de 2026",
  reviewCycle: "Monitoreo continuo automatizado y revisión técnica mensual",
  nextScheduledAudit: "23 de noviembre de 2026",
  lawReference: "Ley Orgánica de Protección de Datos Personales (LOPDP Ecuador) y estándares internacionales ISO/IEC 27001",
  dataController: "Ing. Adriano Remigio Valarezo",
  contactEmail: "valarezo.adriano@gmail.com",
  phone: "+593 99 128 6621",
  coverage: "Nacional (Ecuador) e Internacional (LATAM y Centroamérica)",
  encryptionStandard: "Cifrado en tránsito TLS 1.3 / HTTPS 256-bit",
  ndaAvailable: true,
  summary: "Compromiso permanente con la integridad, confidencialidad, disponibilidad y protección de los datos técnicos, financieros y personales suministrados por empresas, inversionistas y clientes."
};

export const SECURITY_GUARANTEES: SecurityGuarantee[] = [
  {
    iconName: "Lock",
    title: "Cifrado Estricto en Tránsito (TLS 1.3)",
    description: "Todas las comunicaciones, formularios de diagnóstico y envío de parámetros técnicos se transmiten mediante canales cifrados con certificados de seguridad de última generación.",
    standard: "HTTPS / TLS 1.3 con HSTS"
  },
  {
    iconName: "FileCheck",
    title: "Acuerdos de Confidencialidad (NDA) por Defecto",
    description: "Cualquier información técnica sobre plantas industriales, balances de materia, fórmulas o estados financieros compartida cuenta con el respaldo de secreto profesional y compromiso de no divulgación vinculante.",
    standard: "Secreto Profesional & NDA Formal"
  },
  {
    iconName: "Shield",
    title: "Cumplimiento Estricto de la LOPDP Ecuador",
    description: "Tratamiento legítimo, proporcional y finalista de datos personales. No comercializamos, alquilamos ni transferimos bases de datos a terceros con fines publicitarios.",
    standard: "LOPDP Ecuador (Registro Oficial 459)"
  },
  {
    iconName: "UserCheck",
    title: "Garantía de Derechos ARCO sin Costo",
    description: "Cualquier usuario o empresa puede solicitar el acceso, rectificación, actualización o eliminación definitiva de sus datos y registros de contacto en un plazo máximo de 48 horas.",
    standard: "Atención directa por el Responsable"
  }
];

export const SECURITY_AUDIT_LOG: SecurityAuditItem[] = [
  {
    id: "sec-2026-10-23",
    date: "23 de octubre de 2026",
    title: "Implementación del Centro Activo de Seguridad y Cabeceras HTTP Restrictivas",
    category: "ciberseguridad",
    description: "Despliegue de cabeceras de seguridad CSP (Content-Security-Policy), X-Content-Type-Options, Referrer-Policy, endpoint de telemetría de seguridad y módulo de gestión de derechos ARCO.",
    status: "completado",
    verifiedBy: "Ing. Adriano Remigio Valarezo"
  },
  {
    id: "sec-2026-10-06",
    date: "06 de octubre de 2026",
    title: "Auditoría de Integridad de URLs, Rastreo Limpio y Sitemap XML sin Fragmentos",
    category: "infraestructura",
    description: "Normalización de URLs canónicas sin fugas de fragmentos para Google Search Console y eliminación de rutas vulnerables a redirecciones no autorizadas.",
    status: "completado",
    verifiedBy: "Consultoría SEO & Sistemas"
  },
  {
    id: "sec-2026-09-28",
    date: "28 de septiembre de 2026",
    title: "Validación de Canales Seguros en Incrustaciones Multimedia (Vimeo y YouTube)",
    category: "ciberseguridad",
    description: "Configuración de iframes seguros con atributos sandbox, referrer-policy restrictivo y orígenes verificados para reproducción de material audiovisual en planta.",
    status: "completado",
    verifiedBy: "Auditoría Técnica Web"
  },
  {
    id: "sec-2026-09-18",
    date: "18 de septiembre de 2026",
    title: "Protocolo de Custodia de Documentos de Licitación, TDRs y Activos Industriales",
    category: "privacidad",
    description: "Estandarización del canal seguro para recepción de términos de referencia confidenciales y acuerdos de no divulgación previa a diagnósticos en planta.",
    status: "completado",
    verifiedBy: "Dirección de Proyectos"
  }
];

export const ARCO_RIGHTS_INFO = [
  {
    right: "Acceso",
    detail: "Conocer exactamente qué datos suyos o de su empresa reposan en nuestros registros de contacto y diagnóstico."
  },
  {
    right: "Rectificación",
    detail: "Modificar, actualizar o corregir cualquier dato impreciso o desactualizado."
  },
  {
    right: "Cancelación / Supresión",
    detail: "Solicitar la eliminación definitiva de sus datos una vez finalizada la necesidad técnica o consulta comercial."
  },
  {
    right: "Oposición",
    detail: "Oponerse al tratamiento de sus datos para cualquier finalidad que no sea estrictamente técnica o contractual."
  }
];
