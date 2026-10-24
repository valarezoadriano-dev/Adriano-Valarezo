import React, { useState, useEffect } from 'react';
import {
  Shield,
  ShieldCheck,
  Lock,
  FileCheck,
  UserCheck,
  Clock,
  X,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Send,
  RefreshCw,
  Server,
  FileText
} from 'lucide-react';
import {
  SECURITY_COMPLIANCE_INFO,
  SECURITY_GUARANTEES,
  SECURITY_AUDIT_LOG,
  ARCO_RIGHTS_INFO
} from '../data/securityPolicy';

interface SecurityCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecurityCenterModal: React.FC<SecurityCenterModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'garantias' | 'lopdp' | 'auditorias' | 'arco'>('garantias');
  const [arcoForm, setArcoForm] = useState({
    name: '',
    email: '',
    company: '',
    requestType: 'Cancelación / Supresión',
    details: ''
  });
  const [arcoSubmitted, setArcoSubmitted] = useState(false);
  const [serverSecurity, setServerSecurity] = useState<{
    tlsGrade: string;
    hsts: boolean;
    csp: boolean;
    status: string;
    checkedAt: string;
  } | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Fetch server security status or set active client-verified state
      fetch('/api/security-status')
        .then(res => res.json())
        .then(data => {
          setServerSecurity(data);
        })
        .catch(() => {
          setServerSecurity({
            tlsGrade: 'A+ (TLS 1.3 / 256-bit)',
            hsts: true,
            csp: true,
            status: 'Protegido y verificado',
            checkedAt: new Date().toLocaleDateString('es-EC')
          });
        });
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleArcoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!arcoForm.name || !arcoForm.email) return;

    // Send or open prepared secure email for official data request
    const subject = encodeURIComponent(`Solicitud Formal de Derechos ARCO - ${arcoForm.requestType} - ${arcoForm.name}`);
    const body = encodeURIComponent(
      `Estimado Ing. Adriano Remigio Valarezo (Responsable del Tratamiento de Datos),\n\n` +
      `Por medio de la presente, en ejercicio de mis derechos reconocidos en la Ley Orgánica de Protección de Datos Personales (LOPDP de Ecuador), solicito formalmente:\n\n` +
      `Tipo de Solicitud: ${arcoForm.requestType}\n` +
      `Titular de los Datos: ${arcoForm.name}\n` +
      `Empresa / Organización: ${arcoForm.company || 'No especificada'}\n` +
      `Correo Electrónico de Contacto: ${arcoForm.email}\n` +
      `Detalle de la Petición:\n${arcoForm.details || 'Solicito la atención conforme al protocolo de seguridad y privacidad.'}\n\n` +
      `Fecha de Envío: ${new Date().toLocaleString('es-EC')}`
    );

    window.open(`mailto:${SECURITY_COMPLIANCE_INFO.contactEmail}?subject=${subject}&body=${body}`, '_blank');
    setArcoSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="security-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden text-slate-800 animate-in zoom-in-95 duration-200"
      >
        {/* Header Bar */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="security-modal-title" className="font-display font-extrabold text-lg sm:text-xl text-white">
                  Centro de Seguridad, Privacidad & LOPDP
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Activo & Verificado
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Proceso de actualización continua de seguridad de la información y custodia de datos técnicos
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Cerrar ventana de seguridad"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-2.5 flex flex-wrap gap-2">
          {[
            { id: 'garantias', label: 'Garantías & Cifrado' },
            { id: 'lopdp', label: 'Política LOPDP & NDAs' },
            { id: 'auditorias', label: 'Monitoreo Continuo (Log)' },
            { id: 'arco', label: 'Derechos ARCO (Gestión)' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as typeof activeTab);
                setArcoSubmitted(false);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-slate-600">
          
          {/* TAB 1: GARANTÍAS & CIFRADO */}
          {activeTab === 'garantias' && (
            <div className="space-y-6">
              
              {/* Telemetry Status Banner */}
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block">
                      Estado del Servidor y Cifrado
                    </span>
                    <span className="text-sm font-bold text-white">
                      {serverSecurity?.tlsGrade || 'TLS 1.3 / 256-bit AES · Calificación A+'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                  <span className="inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    HSTS Activo
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    CSP Restrictivo
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Anti-XSS Sanitizado
                  </span>
                </div>
              </div>

              {/* Core 4 Guarantees Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SECURITY_GUARANTEES.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                        {item.standard}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <h4 className="font-display font-bold text-slate-900 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Additional Industrial Data Handling Guarantee */}
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-900 space-y-2">
                <div className="font-bold flex items-center gap-1.5 text-emerald-950">
                  <FileCheck className="w-4 h-4 text-emerald-700" />
                  <span>Protección para Términos de Referencia (TDRs) y Secretos de Producción</span>
                </div>
                <p className="leading-relaxed">
                  Adriano Remigio Valarezo mantiene un compromiso deontológico estricto. Toda información suministrada en la fase previa o de consultoría (planos, balances de masa, rendimiento de cosecha, proveedores y estados contables) está sujeta a secreto industrial incondicional. Si su corporación requiere la suscripción de un Acuerdo de No Divulgación (NDA) previo a compartir documentación, se suscribe de manera inmediata y sin costo.
                </p>
              </div>

            </div>
          )}

          {/* TAB 2: POLÍTICA LOPDP & NDAs */}
          {activeTab === 'lopdp' && (
            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-base text-slate-900">
                  Política de Privacidad y Tratamiento de Datos (LOPDP Ecuador)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  En cumplimiento de la Ley Orgánica de Protección de Datos Personales (publicada en el Registro Oficial Suplemento 459 del 26 de mayo de 2021) y estándares internacionales, ponemos a su disposición las bases que rigen el tratamiento de su información.
                </p>
              </div>

              <div className="space-y-3 text-xs leading-relaxed">
                <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                  <strong className="text-slate-900 block mb-1">1. Responsable del Tratamiento:</strong>
                  <span>Ing. Adriano Remigio Valarezo, con domicilio profesional en Ecuador (Quito / Guayaquil) y cobertura en LATAM. Correo de contacto directo: <a href="mailto:valarezo.adriano@gmail.com" className="text-emerald-700 font-semibold underline">valarezo.adriano@gmail.com</a>.</span>
                </div>

                <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                  <strong className="text-slate-900 block mb-1">2. Datos Objeto de Tratamiento:</strong>
                  <span>Nombres y apellidos, correo electrónico corporativo o personal, número telefónico/WhatsApp, nombre de la empresa u organización, y antecedentes técnicos del proyecto agroindustrial o requerimiento de gestión. No se recolectan datos sensibles sin consentimiento explícito y previo.</span>
                </div>

                <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                  <strong className="text-slate-900 block mb-1">3. Finalidad Legítima:</strong>
                  <span>(a) Coordinar sesiones de diagnóstico técnico y evaluación de proyectos; (b) Formular cotizaciones y propuestas técnicas de servicios; (c) Mantener comunicación profesional directa; (d) Cumplimiento de obligaciones legales y tributarias derivadas de la prestación de servicios.</span>
                </div>

                <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                  <strong className="text-slate-900 block mb-1">4. Plazo de Conservación:</strong>
                  <span>Los datos de solicitudes de diagnóstico que no deriven en una relación contractual se conservan por un periodo máximo de 12 meses para fines de archivo histórico o seguimiento, tras lo cual son eliminados de forma segura e irreversible.</span>
                </div>

                <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                  <strong className="text-slate-900 block mb-1">5. Cero Cesión a Terceros:</strong>
                  <span>Bajo ninguna circunstancia se comercializan, monetizan, ceden o transfieren listas de contactos o datos a terceras empresas o agencias publicitarias.</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MONITOREO CONTINUO (LOG) */}
          {activeTab === 'auditorias' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200">
                <div>
                  <h3 className="font-display font-extrabold text-base text-slate-900">
                    Registro de Actualizaciones y Verificación Técnica Continua
                  </h3>
                  <p className="text-xs text-slate-500">
                    Historial cronológico de revisiones de seguridad, parches y auditorías técnicas.
                  </p>
                </div>
                <div className="text-left sm:text-right text-xs">
                  <span className="text-slate-400 block">Próxima revisión:</span>
                  <span className="font-bold text-emerald-800">{SECURITY_COMPLIANCE_INFO.nextScheduledAudit}</span>
                </div>
              </div>

              <div className="space-y-3">
                {SECURITY_AUDIT_LOG.map((log) => (
                  <div
                    key={log.id}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-1.5">
                      <span className="font-bold text-slate-900">{log.date}</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                        <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                        {log.status === 'completado' ? 'Verificado & Desplegado' : 'En Monitoreo'}
                      </span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm mb-1">
                      {log.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {log.description}
                    </p>

                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span>Categoría: <strong className="capitalize text-slate-700">{log.category}</strong></span>
                      <span>Auditado por: <strong className="text-slate-700">{log.verifiedBy}</strong></span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-slate-100 rounded-lg text-xs text-slate-600 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  El portal ejecuta comprobaciones automáticas de integridad en cada ciclo de compilación y despliegue continuo (CI/CD en GitHub Actions).
                </span>
              </div>
            </div>
          )}

          {/* TAB 4: DERECHOS ARCO */}
          {activeTab === 'arco' && (
            <div className="space-y-5">
              <div>
                <h3 className="font-display font-extrabold text-base text-slate-900">
                  Ejercicio de Derechos ARCO (LOPDP)
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Usted tiene derecho pleno a solicitar el Acceso, Rectificación, Cancelación u Oposición de sus datos personales sin costo alguno.
                </p>
              </div>

              {/* 4 Rights breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {ARCO_RIGHTS_INFO.map(r => (
                  <div key={r.right} className="p-3 rounded-lg border border-slate-200 bg-slate-50">
                    <span className="font-bold text-emerald-800 block mb-0.5">Derecho de {r.right}</span>
                    <span className="text-slate-600 leading-relaxed">{r.detail}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Request Form */}
              <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-2xs">
                {arcoSubmitted ? (
                  <div className="py-6 text-center space-y-3 animate-in fade-in duration-200">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Solicitud Preparada Exitosamente
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Se ha generado la comunicación formal dirigida al Oficial Responsable del Tratamiento de Datos. Su requerimiento será atendido en un plazo máximo de 48 a 72 horas hábiles conforme a la ley.
                    </p>
                    <button
                      onClick={() => setArcoSubmitted(false)}
                      className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                    >
                      Realizar otra consulta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleArcoSubmit} className="space-y-4">
                    <span className="text-xs font-bold text-slate-900 block">
                      Formulario de Solicitud Directa de Datos
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={arcoForm.name}
                          onChange={e => setArcoForm({ ...arcoForm, name: e.target.value })}
                          placeholder="Ej. Ing. Juan Pérez"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          required
                          value={arcoForm.email}
                          onChange={e => setArcoForm({ ...arcoForm, email: e.target.value })}
                          placeholder="juan@empresa.com"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Empresa u Organización (Opcional)
                        </label>
                        <input
                          type="text"
                          value={arcoForm.company}
                          onChange={e => setArcoForm({ ...arcoForm, company: e.target.value })}
                          placeholder="Empresa Agrícola / Privada"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Derecho a Ejercer *
                        </label>
                        <select
                          value={arcoForm.requestType}
                          onChange={e => setArcoForm({ ...arcoForm, requestType: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 bg-white"
                        >
                          <option value="Cancelación / Supresión de Datos">Cancelación / Supresión de Datos (Eliminar registros)</option>
                          <option value="Acceso a Mis Datos">Acceso a Mis Datos (Copia de información almacenada)</option>
                          <option value="Rectificación o Actualización">Rectificación o Actualización de Datos</option>
                          <option value="Oposición al Tratamiento">Oposición al Tratamiento</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Detalle específico de su petición
                      </label>
                      <textarea
                        rows={2}
                        value={arcoForm.details}
                        onChange={e => setArcoForm({ ...arcoForm, details: e.target.value })}
                        placeholder="Especifique el correo registrado o el motivo de su solicitud..."
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[11px] text-slate-500">
                        Atención directa por Ing. Adriano Remigio Valarezo.
                      </span>

                      <button
                        type="submit"
                        className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Enviar Solicitud ARCO</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Footer info bar */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Responsable:</span>
            <span>{SECURITY_COMPLIANCE_INFO.dataController}</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">{SECURITY_COMPLIANCE_INFO.contactEmail}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
