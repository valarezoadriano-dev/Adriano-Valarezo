import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  DollarSign, 
  Layers, 
  MessageSquare, 
  FileText,
  Building,
  Target
} from 'lucide-react';
import { ADRIANO_PROFILE } from '../data/content';

interface QuoteEstimatorProps {
  onApplyToContact: (data: { service: string; message: string }) => void;
}

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({ onApplyToContact }) => {
  const [selectedArea, setSelectedArea] = useState<string>('agroindustria');
  const [selectedStage, setSelectedStage] = useState<string>('optimizacion');
  const [selectedScale, setSelectedScale] = useState<string>('mediana');
  const [selectedUrgency, setSelectedUrgency] = useState<string>('medio');

  // Dynamic scope and guidance calculation
  const getEstimation = () => {
    let serviceTitle = "Consultoría Agroindustrial & Cadenas de Valor";
    let duration = "4 a 8 semanas";
    let roiExpectation = "Reducción estimada del 15% al 25% en mermas";
    let phases = [
      "Fase 1: Diagnóstico in situ de planta y balance de masa",
      "Fase 2: Plan de reingeniería y puntos críticos de control (BPM/HACCP)",
      "Fase 3: Estandarización de procesos y entrenamiento de supervisores"
    ];

    if (selectedArea === 'proyectos') {
      serviceTitle = "Gestión Integral y Dirección de Proyectos (PMO)";
      duration = selectedScale === 'corporativo' ? "6 a 12 meses" : "3 a 6 meses";
      roiExpectation = "100% de trazabilidad presupuestaria y cumplimiento estricto de cronograma";
      phases = [
        "Fase 1: Estructuración del Plan Maestro (Gantt, RACI, curva S)",
        "Fase 2: Supervisión técnica de contratistas y control de calidad",
        "Fase 3: Auditoría periódica y actas de entrega definitiva"
      ];
    } else if (selectedArea === 'sostenibilidad') {
      serviceTitle = "Sostenibilidad, Línea de Base & Desarrollo Rural";
      duration = "6 a 14 semanas";
      roiExpectation = "Aprobación técnica de fondos multilaterales y acceso a mercados con primas de precio";
      phases = [
        "Fase 1: Levantamiento de línea base socioeconómica y ambiental en campo",
        "Fase 2: Formulación de cartera de proyectos de inversión priorizada",
        "Fase 3: Informe final de impacto con validación institucional"
      ];
    } else if (selectedArea === 'consultoria') {
      serviceTitle = "Asesoría Estratégica & Dictamen Técnico / Due Diligence";
      duration = selectedStage === 'peritaje' ? "2 a 4 semanas" : "Acompañamiento trimestral";
      roiExpectation = "Mitigación de riesgos patrimoniales y optimización de márgenes directivos";
      phases = [
        "Fase 1: Auditoría forense de activos técnicos y normativa ambiental",
        "Fase 2: Valoración económica y cálculo de costos de readecuación",
        "Fase 3: Dictamen técnico pericial formal con sustento ejecutivo"
      ];
    }

    return { serviceTitle, duration, roiExpectation, phases };
  };

  const estimation = getEstimation();

  const handleSendWhatsApp = () => {
    const text = `Hola Ing. Adriano Valarezo, coticé un servicio en su portal web:
- Área: ${estimation.serviceTitle}
- Etapa/Desafío: ${selectedStage}
- Tamaño de Empresa: ${selectedScale}
- Duración estimada: ${estimation.duration}
- Retorno esperado: ${estimation.roiExpectation}

Me gustaría coordinar una llamada de diagnóstico preliminar de 30 minutos.`;

    window.open(`https://wa.me/${ADRIANO_PROFILE.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleApplyToForm = () => {
    const summaryMsg = `Cotización calculada desde el estimador:
Área: ${estimation.serviceTitle}
Etapa: ${selectedStage} | Escala: ${selectedScale} | Urgencia: ${selectedUrgency}
Duración sugerida: ${estimation.duration}
Objetivo: ${estimation.roiExpectation}`;

    onApplyToContact({
      service: estimation.serviceTitle,
      message: summaryMsg
    });
  };

  return (
    <section 
      id="cotizador" 
      aria-label="Cotizador Interactivo y Diagnóstico Previo de Alcance"
      className="py-16 md:py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            Diagnóstico Previo de Alcance
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Identifique la Ruta de Acción para su Empresa o Proyecto
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Si aún está evaluando las necesidades de su caso, seleccione su situación para obtener una proyección de etapas, tiempos sugeridos y ruta de trabajo recomendada antes de agendar su consulta.
          </p>
        </div>

        {/* Interactive Grid: 2 Columns (Form Left, Output Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls - 7 cols */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-7">
            
            {/* 1. Seleccione Área Principal */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                1. Área o Especialidad Requerida:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'agroindustria', name: 'Agroindustria & Plantas', desc: 'Mermas, calidad, BPM y rendimiento' },
                  { id: 'proyectos', name: 'Gestión PMO & Inversión', desc: 'Control de cronograma, costos y calidad' },
                  { id: 'sostenibilidad', name: 'Sostenibilidad & Rural', desc: 'Líneas base, cooperación e impacto' },
                  { id: 'consultoria', name: 'Estrategia & Peritajes', desc: 'Due diligence y asesoría a gerencia' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedArea(item.id)}
                    className={`p-3.5 text-left rounded-xl border transition-all cursor-pointer ${
                      selectedArea === item.id
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-sm leading-tight">{item.name}</div>
                    <div className={`text-xs mt-1 ${selectedArea === item.id ? 'text-emerald-100' : 'text-slate-500'}`}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Situación o Estado Actual */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                2. Situación de su Empresa o Proyecto:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'optimizacion', name: 'Optimización', desc: 'Planta o proyecto en marcha con fallas o mermas' },
                  { id: 'nuevo', name: 'Nueva Inversión', desc: 'Diseño, formulación o licitación desde cero' },
                  { id: 'peritaje', name: 'Auditoría / Dictamen', desc: 'Evaluación técnica, peritaje o arbitraje' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedStage(item.id)}
                    className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                      selectedStage === item.id
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm">{item.name}</div>
                    <div className={`text-[11px] mt-0.5 ${selectedStage === item.id ? 'text-slate-300' : 'text-slate-500'}`}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Escala de la Organización */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                3. Tamaño de la Empresa u Operación:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'pyme', name: 'Pyme / Cooperativa' },
                  { id: 'mediana', name: 'Mediana Empresa' },
                  { id: 'corporativo', name: 'Gran Corporación' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedScale(item.id)}
                    className={`py-2.5 px-2 text-center rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      selectedScale === item.id
                        ? 'bg-emerald-100 text-emerald-900 border-emerald-400'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Projection Card Output - 5 cols */}
          <article 
            aria-label="Ruta de Acción y Plan Maestro Proyectado"
            className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6 lg:sticky lg:top-24"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Target className="w-4 h-4" />
                Plan Maestro Proyectado
              </div>
              <span className="text-[11px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                Personalizable
              </span>
            </div>

            {/* Recommended Service Title */}
            <div>
              <span className="text-xs text-slate-400 block mb-1">Servicio Sugerido:</span>
              <h3 className="font-display font-bold text-xl text-white">
                {estimation.serviceTitle}
              </h3>
            </div>

            {/* Metric / Return Expectation */}
            <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                Retorno & Impacto Proyectado:
              </div>
              <div className="text-sm font-medium text-slate-200">
                {estimation.roiExpectation}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Tiempo de ejecución estimado: <strong>{estimation.duration}</strong></span>
              </div>
            </div>

            {/* Methodological Phases */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Fases de Trabajo Propuestas:
                </span>
                <a 
                  href="#metodologia" 
                  className="text-xs text-emerald-400 hover:text-emerald-300 underline"
                  title="Ver explicación completa de la metodología"
                >
                  Ver metodología
                </a>
              </div>
              {estimation.phases.map((phase, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{phase}</span>
                </div>
              ))}
            </div>

            {/* Conversion Actions */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <button
                onClick={handleApplyToForm}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Agendar Consulta con Esta Ruta</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleSendWhatsApp}
                className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-emerald-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer border border-emerald-500/30"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Consultar esta estimación vía WhatsApp</span>
              </button>
            </div>

          </article>

        </div>

      </div>
    </section>
  );
};
