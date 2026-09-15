import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Target, 
  TrendingUp, 
  MessageSquare,
  RefreshCw,
  Award
} from 'lucide-react';
import { AiDiagnosticResult } from '../types';
import { ADRIANO_PROFILE } from '../data/content';

interface AiAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyDiagnostic: (service: string, summary: string) => void;
}

export const AiAdvisorModal: React.FC<AiAdvisorModalProps> = ({
  isOpen,
  onClose,
  onApplyDiagnostic
}) => {
  const [industry, setIndustry] = useState('Agroexportación / Alimentos procesados');
  const [challenge, setChallenge] = useState('Elevado porcentaje de mermas y cuellos de botella en línea de empaque');
  const [goal, setGoal] = useState('Reducir mermas al menos un 15% y certificar BPM para exportación a la UE');
  const [timeline, setTimeline] = useState('3 meses');
  const [companySize, setCompanySize] = useState('Mediana Empresa (50-200 empleados)');

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AiDiagnosticResult | null>(null);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/ai-advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ industry, challenge, goal, timeline, companySize })
      });

      const data = await response.json();
      if (response.ok && data.success && data.advice) {
        setResult(data.advice);
      } else {
        setError('No se pudo generar el diagnóstico con el servidor. Mostrando estimación base.');
      }
    } catch {
      // Fallback
      setResult({
        summary: `Para una operación en el sector ${industry} que busca "${goal}", se recomienda un plan de ingeniería por fases enfocado en balance de masa, control térmico y estandarización técnica.`,
        recommendedService: "Consultoría Agroindustrial & Cadenas de Valor",
        keyDeliverables: [
          "Auditoría in situ de mermas y balance de líneas",
          "Estandarización de BPM y puntos críticos de control",
          "Tablero de control de indicadores operativos (KPIs)"
        ],
        estimatedTimeline: "6 a 8 semanas",
        expectedROI: "Reducción de costos de merma entre 15% y 25%",
        nextStepAction: "Coordinar una llamada técnica de 30 minutos con el Ing. Adriano Remigio Valarezo para validar los parámetros."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendToWhatsApp = () => {
    if (!result) return;
    const text = `Hola Ing. Adriano Valarezo, ejecuté el Diagnóstico con IA en su portal:
- Sector: ${industry}
- Reto: ${challenge}
- Objetivo: ${goal}
- Servicio Sugerido: ${result.recommendedService}
- Impacto esperado: ${result.expectedROI}

Me gustaría revisar este diagnóstico en una llamada inicial con usted.`;

    window.open(`https://wa.me/${ADRIANO_PROFILE.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleApply = () => {
    if (!result) return;
    const message = `Diagnóstico IA generado:
Sector: ${industry} | Reto: ${challenge} | Meta: ${goal}
Servicio sugerido: ${result.recommendedService}
ROI Proyectado: ${result.expectedROI}`;

    onApplyDiagnostic(result.recommendedService, message);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[92vh] overflow-y-auto space-y-6 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                Inteligencia Asesora • Criterio Zamorano
              </div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 leading-tight">
                Diagnóstico Preliminar de Proyecto
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Diagnostic Form */}
        {!result ? (
          <form onSubmit={handleGenerate} className="space-y-4">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Describa el estado de su empresa o proyecto para recibir una proyección instantánea basada en el marco técnico de ingeniería agroindustrial y gerencia PMO de Adriano Remigio Valarezo.
            </p>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Sector o Industria
              </label>
              <input
                type="text"
                value={industry}
                onChange={e => setIndustry(e.target.value)}
                placeholder="Ej. Frutícola, Cacao, Palma, Lácteos, PMO Inversión..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Reto o Problema Principal
              </label>
              <textarea
                rows={2}
                value={challenge}
                onChange={e => setChallenge(e.target.value)}
                placeholder="Ej. Descontrol en costos de producción, retrasos de proveedores, pérdidas post-cosecha..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Objetivo Deseado
              </label>
              <input
                type="text"
                value={goal}
                onChange={e => setGoal(e.target.value)}
                placeholder="Ej. Incrementar margen 15%, certificar BPM, entregar proyecto a tiempo..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Plazo Esperado
                </label>
                <select
                  value={timeline}
                  onChange={e => setTimeline(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="1 a 2 meses (Urgente)">1 a 2 meses (Urgente)</option>
                  <option value="3 a 6 meses (Mediano plazo)">3 a 6 meses (Mediano plazo)</option>
                  <option value="6 a 12 meses (Plan estratégico)">6 a 12 meses (Plan estratégico)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Tamaño de Empresa
                </label>
                <select
                  value={companySize}
                  onChange={e => setCompanySize(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Pyme o Cooperativa productiva">Pyme o Cooperativa</option>
                  <option value="Mediana Empresa (50-200 empleados)">Mediana Empresa</option>
                  <option value="Gran Corporación o Consorcio">Gran Corporación</option>
                  <option value="Organismo de Cooperación / ONG">Organismo Internacional / ONG</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                Cancelar
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 transition-colors shadow-xs flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Analizando requerimiento...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generar Diagnóstico Exprés</span>
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Result View */
          <div className="space-y-5 animate-in fade-in duration-200">
            {/* Summary */}
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                Dictamen Preliminar:
              </span>
              <p className="text-slate-800 text-sm leading-relaxed">
                {result.summary}
              </p>
            </div>

            {/* Recommended Service & ROI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Servicio Recomendado:
                </span>
                <p className="text-sm font-bold text-slate-900 leading-snug">
                  {result.recommendedService}
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Impacto / Retorno Proyectado:
                </span>
                <p className="text-sm font-bold text-emerald-700 leading-snug">
                  {result.expectedROI}
                </p>
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                Entregables Clave Sugeridos:
              </span>
              <div className="space-y-1.5">
                {result.keyDeliverables.map((deliv, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Step */}
            <div className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs space-y-1">
              <span className="font-bold text-emerald-400 block uppercase tracking-wider">
                Próximo Paso Recomendado:
              </span>
              <p className="leading-relaxed">
                {result.nextStepAction}
              </p>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => setResult(null)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Nuevo Análisis</span>
              </button>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-bold text-xs text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar por WhatsApp</span>
                </button>

                <button
                  onClick={handleApply}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Llevar al Formulario de Contacto</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
