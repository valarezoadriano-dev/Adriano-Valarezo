import React from 'react';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  MessageSquare,
  TrendingUp,
  FileCheck2,
  CalendarCheck,
  Building2,
  Shapes
} from 'lucide-react';
import { ADRIANO_PROFILE } from '../data/content';
import adrianoPhoto from '../assets/adriano-valarezo.jpg';
import { BrandSymbol } from './BrandLogo';

interface HeroProps {
  onOpenContact: () => void;
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenContact,
  onExplorePortfolio
}) => {
  const whatsappUrl = `https://wa.me/${ADRIANO_PROFILE.whatsappNumber}?text=${encodeURIComponent(
    'Hola Ing. Adriano Valarezo, me comunico desde su sitio web para solicitar una propuesta de consultoría.'
  )}`;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-white border-b border-slate-200/80 bg-grid-pattern">
      {/* Decorative gradient glow in background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy - 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            {/* Credential Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold tracking-wide shadow-2xs">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>Ing. en Agroindustria • Zamorano Alumni</span>
              <span className="w-1 h-1 rounded-full bg-slate-400"></span>
              <span className="text-emerald-700 font-bold">Más de 22 Años de Experiencia</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] leading-[1.14] tracking-tight">
              Consultoría Especializada para Empresas, Proyectos y Organizaciones en <span className="text-emerald-700">Ecuador</span>
            </h1>

            {/* Subhead / Value Proposition */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              Más de 22 años de experiencia aportando criterio técnico y estratégico en agroindustria, gestión de proyectos, sostenibilidad y desarrollo empresarial.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Apoyo a empresas, inversionistas, instituciones y organizaciones a estructurar proyectos, mejorar su gestión operativa, evaluar oportunidades y tomar decisiones con sólido respaldo técnico.
            </p>

            {/* Direct Calls to Action (CTAs) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-md shadow-emerald-700/15 hover:shadow-lg hover:shadow-emerald-700/20 transition-all cursor-pointer text-sm sm:text-base group"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Agendar una Consulta Inicial</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('servicios');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all cursor-pointer text-sm sm:text-base"
              >
                <span>Conocer mis Servicios</span>
              </button>
            </div>

            {/* Secondary fast contact shortcut */}
            <div className="flex items-center gap-4 text-xs text-slate-500 pt-1">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-semibold hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                ¿Urgencia? Consulta directa vía WhatsApp
              </a>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Respuesta en menos de 24 horas
              </span>
            </div>
          </div>

          {/* Right Visual Card / Trust Panel - 5 cols */}
          <div className="lg:col-span-5">
            <div className="relative bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 overflow-hidden">
              {/* Background ambient lighting */}
              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-600/20 rounded-full blur-2xl"></div>

              {/* Profile Card Header */}
              <div className="flex items-start justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3.5">
                  <div className="relative shrink-0">
                    <img
                      src={adrianoPhoto}
                      alt="Adriano Remigio Valarezo"
                      className="w-14 h-14 rounded-xl object-cover shadow-md border border-emerald-400/30"
                    />
                    <div 
                      className="absolute -bottom-1 -right-1 w-6 h-6 rounded-md bg-slate-950 border border-emerald-400/40 p-0.5 flex items-center justify-center shadow-xs"
                      title="Símbolo Oficial: Triángulo Delta & Brote Agroindustrial"
                    >
                      <BrandSymbol sizeClass="w-4 h-4" variant="emerald" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white leading-tight">
                      Adriano Remigio Valarezo
                    </h2>
                    <p className="text-xs text-emerald-400 font-medium mt-0.5">
                      Ingeniero en Agroindustria
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Escuela Agrícola Panamericana Zamorano
                    </p>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold">
                  Activo
                </div>
              </div>

              {/* Value Bullet Points */}
              <div className="py-6 space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">Reducción comprobada de mermas:</span> Hasta 28% de optimización en líneas de procesamiento agroindustrial.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <FileCheck2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">Rigor en Cooperación Multilateral:</span> Informes socioeconómicos y de formulación avalados para organismos internacionales (RDS-HN).
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white">Visión Ejecutiva de Negocio:</span> Experiencia previa como Gerente General en empresas privadas y supervisión técnica en Guayaquil y Quito.
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-slate-400">
                  <span className="text-white font-medium">Cobertura:</span> Ecuador, Honduras & LATAM
                </div>
                <button
                  onClick={onExplorePortfolio}
                  className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Explorar Casos de Estudio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Four Trust Pillar Metrics Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 font-extrabold text-lg">
              22+
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Años de Trayectoria</div>
              <div className="text-xs text-slate-500">En agroindustria y dirección PMO</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 shrink-0 font-extrabold text-lg">
              50+
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Proyectos & Dictámenes</div>
              <div className="text-xs text-slate-500">Ejecución técnica y gerencial</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
              <Award className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Zamorano Alumni</div>
              <div className="text-xs text-slate-500">Escuela Agrícola Panamericana</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 shrink-0">
              <ShieldCheck className="w-6 h-6 text-slate-800" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Garantía de Rigor</div>
              <div className="text-xs text-slate-500">Normas BPM, HACCP y PMO</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
