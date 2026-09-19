import React from 'react';
import { 
  Compass, 
  SearchCheck, 
  PenTool, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';

interface MethodologySectionProps {
  onOpenContact: () => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onOpenContact }) => {
  const steps = [
    {
      number: "01",
      title: "Entender",
      subtitle: "Contexto, objetivos y alcance real",
      description: "Analizamos en profundidad la situación actual de su empresa o proyecto, la información disponible, las restricciones operativas y el problema específico que se busca solucionar.",
      icon: Compass,
      points: [
        "Reunión de alineación sin tecnicismos innecesarios",
        "Revisión de antecedentes y datos disponibles",
        "Definición clara de objetivos y expectativas"
      ]
    },
    {
      number: "02",
      title: "Diagnosticar",
      subtitle: "Identificación de brechas y factores críticos",
      description: "Evaluamos técnicamente dónde están las pérdidas, los cuellos de botella o los riesgos operativos y financieros antes de comprometer recursos en soluciones apresuradas.",
      icon: SearchCheck,
      points: [
        "Evaluación en terreno o análisis documental riguroso",
        "Matriz de riesgos y puntos críticos de control",
        "Identificación de oportunidades de mejora inmediata"
      ]
    },
    {
      number: "03",
      title: "Diseñar",
      subtitle: "Ruta de acción viable y fundamentada",
      description: "Estructuramos una propuesta técnica ejecutable, con cronogramas realistas, asignación de responsabilidades y métricas de impacto verificables.",
      icon: PenTool,
      points: [
        "Alternativas de solución costo-eficientes",
        "Plan de trabajo por hitos y entregables medibles",
        "Presupuesto y requerimientos técnicos definidos"
      ]
    },
    {
      number: "04",
      title: "Implementar & Acompañar",
      subtitle: "Ejecución, control y transferencia de resultados",
      description: "Acompañamiento cercano durante la puesta en marcha, supervisión de contratistas o estandarización de procesos para asegurar que los resultados perduren en el tiempo.",
      icon: CheckCircle2,
      points: [
        "Supervisión y control periódico de avance",
        "Capacitación del equipo interno para autogestión",
        "Evaluación y verificación final de resultados"
      ]
    }
  ];

  return (
    <section id="metodologia" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200">
            Forma de Trabajo Transparente
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Metodología de Trabajo: Criterio Técnico con Enfoque Práctico
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Un proceso estructurado en 4 etapas que reduce la incertidumbre, previene gastos innecesarios y asegura que cada decisión esté respaldada por evidencia técnica y económica.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50/90 rounded-2xl p-6 border border-slate-200 hover:border-emerald-300 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-emerald-700 tracking-tight">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-emerald-700 group-hover:border-emerald-200 transition-colors shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-emerald-800 text-xs font-semibold mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-200/80">
                    {step.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 shrink-0 mt-1">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg text-white mb-1">
                ¿Por dónde empezamos? Por una primera conversación exploratoria
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                No necesita tener pliegos técnicos ni términos de referencia listos. En la consulta inicial escuchamos su necesidad, revisamos la viabilidad y le indicamos honestamente si y cómo podemos apoyarle.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-200 transition-colors shadow-sm cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Agendar Consulta Inicial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
