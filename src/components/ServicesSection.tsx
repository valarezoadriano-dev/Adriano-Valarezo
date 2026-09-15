import React, { useState } from 'react';
import { 
  Wheat, 
  Briefcase, 
  Sprout, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Target, 
  Layers, 
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { SERVICES_LIST } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Wheat':
        return <Wheat className="w-6 h-6 text-emerald-600" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-blue-600" />;
      case 'Sprout':
        return <Sprout className="w-6 h-6 text-teal-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-amber-600" />;
      default:
        return <Layers className="w-6 h-6 text-emerald-600" />;
    }
  };

  const filteredServices = activeTab === 'all' 
    ? SERVICES_LIST 
    : SERVICES_LIST.filter(s => s.category === activeTab);

  return (
    <section id="servicios" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
            Catálogo de Servicios Profesionales
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Soluciones Diseñadas para Generar Retorno, Eficiencia y Rigor Técnico
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Cada servicio está estructurado con entregables tangibles, cronogramas verificables y métricas de desempeño para convertir desafíos operativos en ventajas competitivas duraderas.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Todos los Servicios ({SERVICES_LIST.length})
            </button>
            <button
              onClick={() => setActiveTab('agroindustria')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'agroindustria'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Agroindustria & Procesos
            </button>
            <button
              onClick={() => setActiveTab('proyectos')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'proyectos'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Gestión PMO & Inversión
            </button>
            <button
              onClick={() => setActiveTab('sostenibilidad')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'sostenibilidad'
                  ? 'bg-teal-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Sostenibilidad & Rural
            </button>
            <button
              onClick={() => setActiveTab('consultoria')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeTab === 'consultoria'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Dictámenes & Asesoría
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const isExpanded = expandedCardId === service.id;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-slate-300"
              >
                {/* Popular or Highlight badge */}
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-bl-xl tracking-wide flex items-center gap-1 shadow-2xs">
                    <Sparkles className="w-3 h-3" />
                    Alta Demanda
                  </div>
                )}

                <div>
                  {/* Top Meta */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        {service.category === 'agroindustria' && 'Ingeniería Agroindustrial'}
                        {service.category === 'proyectos' && 'Dirección y PMO'}
                        {service.category === 'sostenibilidad' && 'Cooperación y Desarrollo'}
                        {service.category === 'consultoria' && 'Estrategia y Peritaje'}
                      </span>
                      <h3 className="font-display font-bold text-xl text-slate-900 leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Short Subtitle and Description */}
                  <p className="text-emerald-800 font-semibold text-xs sm:text-sm mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Impact / Metric Pill */}
                  <div className="mb-5 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                    <Target className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Impacto: {service.metricsTag}</span>
                  </div>

                  {/* Key Deliverables Bullet Points */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Entregables Clave Incluidos:
                    </div>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expanded Scope Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-4 animate-in fade-in duration-200 text-xs text-slate-600">
                      <div>
                        <span className="font-bold text-slate-900 block mb-1">Alcance detallado:</span>
                        <p className="leading-relaxed">{service.fullDesc}</p>
                      </div>

                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/80 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                          <span><strong>Duración estimada:</strong> {service.estimatedDuration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-slate-500" />
                          <span><strong>Modelo de honorarios:</strong> {service.pricingModel}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-4">
                  <button
                    onClick={() => setExpandedCardId(isExpanded ? null : service.id)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors inline-flex items-center justify-center gap-1 cursor-pointer py-1"
                  >
                    <span>{isExpanded ? 'Ocultar detalles' : 'Ver alcance completo'}</span>
                  </button>

                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-900 hover:bg-emerald-700 active:bg-emerald-800 transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Cotizar Este Servicio</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Custom Assistance Banner */}
        <div className="mt-12 bg-emerald-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display font-bold text-xl text-white">
              ¿Requiere una combinación de servicios o un peritaje específico?
            </h3>
            <p className="text-emerald-200 text-xs sm:text-sm max-w-2xl">
              Adriano Remigio Valarezo formula propuestas técnicas personalizadas adaptadas al tamaño de su operación, normativa sectorial y requerimientos de financiamiento.
            </p>
          </div>

          <button
            onClick={() => onSelectService('Propuesta Personalizada Multi-Área')}
            className="shrink-0 px-5 py-3 rounded-xl font-bold text-slate-900 bg-white hover:bg-emerald-50 active:bg-emerald-100 transition-colors text-xs sm:text-sm shadow-sm cursor-pointer"
          >
            Solicitar Propuesta a Medida
          </button>
        </div>

      </div>
    </section>
  );
};
