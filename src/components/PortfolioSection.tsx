import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  X,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/content';
import { PortfolioProject, ServiceCategory } from '../types';

interface PortfolioSectionProps {
  onSelectProjectForInquiry: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProjectForInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section 
      id="portafolio" 
      aria-label="Portafolio Destacado y Casos de Éxito en Agroindustria y PMO"
      className="py-16 md:py-24 bg-slate-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
              <Briefcase className="w-3.5 h-3.5" />
              Portafolio Destacado & Casos de Éxito
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Experiencia Verificable con Resultados Medibles en Campo y Empresa
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Selección de intervenciones técnicas, dirección de proyectos e informes socioeconómicos ejecutados con los más altos estándares en Ecuador, Honduras y la región.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'agroindustria', label: 'Agroindustria' },
              { id: 'proyectos', label: 'Gestión PMO' },
              { id: 'sostenibilidad', label: 'Sostenibilidad' },
              { id: 'consultoria', label: 'Dictámenes' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={`proyecto-${project.id}`}
              aria-label={`Caso de Estudio: ${project.title}`}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Top Location & Metric */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {project.location}
                  </span>

                  <div className="text-right">
                    <span className="text-lg sm:text-xl font-black text-emerald-700 block leading-tight font-display">
                      {project.highlightMetric.value}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      {project.highlightMetric.label}
                    </span>
                  </div>
                </div>

                {/* Client / Sector */}
                <div className="text-xs font-bold text-emerald-800 mb-1">
                  {project.clientOrSector}
                </div>

                {/* Project Title */}
                <h3 className="font-display font-bold text-xl text-slate-900 leading-snug mb-3 group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Key Results bullets */}
                <div className="space-y-2 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Logros Verificados:
                  </div>
                  {project.results.slice(0, 2).map((res, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions with Internal Links */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-slate-700 hover:text-emerald-700 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Ver Ficha Técnica</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href="#servicios"
                    className="text-xs text-slate-500 hover:text-emerald-700 underline hidden sm:inline"
                    title="Ver servicios técnicos vinculados"
                  >
                    Servicios afines
                  </a>
                  <button
                    onClick={() => onSelectProjectForInquiry(`Servicio similar al caso: ${project.title}`)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors cursor-pointer"
                  >
                    Solicitar Caso Similar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Deep Dive Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto space-y-6 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                    Ficha Técnica de Caso de Estudio
                  </span>
                  <h3 className="font-display font-bold text-2xl text-slate-900 leading-tight">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {selectedProject.clientOrSector} • {selectedProject.location}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Challenge vs Solution */}
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1 text-red-700">
                    El Desafío Inicial:
                  </h4>
                  <p className="text-slate-600 bg-red-50/50 p-3 rounded-xl border border-red-100">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1 text-emerald-700">
                    Metodología e Intervención de Adriano Remigio Valarezo:
                  </h4>
                  <p className="text-slate-600 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Full Results */}
              <div>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
                  Resultados Clave y Validación:
                </h4>
                <div className="space-y-2">
                  {selectedProject.results.map((res, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cerrar Ficha
                </button>

                <button
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    onSelectProjectForInquiry(`Interés en replicar resultados del proyecto: ${title}`);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Solicitar Asesoría para Mi Caso</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
