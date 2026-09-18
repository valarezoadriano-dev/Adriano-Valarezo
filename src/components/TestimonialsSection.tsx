import React from 'react';
import { Star, Quote, ShieldCheck, Building2, CheckCircle2, Linkedin, ExternalLink, Globe } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

const LINKEDIN_RECOMMENDATIONS_URL = "https://www.linkedin.com/in/adriano-valarezo-97750a52/details/recommendations/?detailScreenTabIndex=0";

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<'all' | 'linkedin' | 'google_sites'>('all');

  const filteredTestimonials = React.useMemo(() => {
    if (activeFilter === 'all') return TESTIMONIALS;
    return TESTIMONIALS.filter((t) => t.source === activeFilter);
  }, [activeFilter]);

  const linkedinCount = TESTIMONIALS.filter((t) => t.source === 'linkedin').length;
  const googleSitesCount = TESTIMONIALS.filter((t) => t.source === 'google_sites').length;

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
            <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            Confianza y Respaldos Directivos
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Lo Que Opinan Directores, Gerentes y Socios Estratégicos
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Recomendaciones profesionales verificadas de LinkedIn y testimonios de consultoría recopilados a lo largo de la trayectoria directiva en Ecuador, Centroamérica y el ámbito internacional.
          </p>

          {/* LinkedIn Direct Verification CTA */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={LINKEDIN_RECOMMENDATIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] border border-[#0A66C2]/30 transition-all shadow-2xs"
            >
              <Linkedin className="w-4 h-4" />
              <span>Ver todas las recomendaciones directamente en LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Todas ({TESTIMONIALS.length})
            </button>
            <button
              onClick={() => setActiveFilter('linkedin')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'linkedin'
                  ? 'bg-[#0A66C2] text-white shadow-xs'
                  : 'bg-blue-50 text-[#0A66C2] hover:bg-blue-100 border border-blue-200/60'
              }`}
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>Recomendaciones LinkedIn ({linkedinCount})</span>
            </button>
            <button
              onClick={() => setActiveFilter('google_sites')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'google_sites'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200/60'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Google Sites ({googleSitesCount})</span>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50/90 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all relative"
            >
              <Quote className="w-8 h-8 text-emerald-200 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating stars & Project tag / Source badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {t.source === 'linkedin' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0A66C2] bg-blue-50 border border-blue-200/70 px-2 py-0.5 rounded-full">
                        <Linkedin className="w-3 h-3" />
                        LinkedIn
                      </span>
                    ) : t.source === 'google_sites' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 border border-emerald-200/70 px-2 py-0.5 rounded-full">
                        <Globe className="w-3 h-3 text-emerald-700" />
                        Google Sites
                      </span>
                    ) : null}

                    <span className="text-[11px] font-semibold text-slate-700 bg-slate-200/70 px-2.5 py-0.5 rounded-full">
                      {t.projectType}
                    </span>
                  </div>
                </div>

                {/* Quote body */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3.5">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-600 to-slate-800 text-white font-bold flex items-center justify-center text-sm shadow-2xs shrink-0">
                    {t.avatarInitials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug">
                      {t.author}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium">
                      {t.role} • <span className="text-emerald-800 font-semibold">{t.company}</span>
                    </p>
                    {t.date && (
                      <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                        {t.date}
                      </p>
                    )}
                    <p className="text-[11px] text-slate-400">
                      {t.location}
                    </p>
                  </div>
                </div>

                {t.sourceUrl && (
                  <a
                    href={t.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 p-2 text-slate-400 hover:text-[#0A66C2] transition-colors"
                    title="Ver perfil y recomendación en LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Bar */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">100% Confidencialidad</div>
              <div className="text-xs text-slate-400">Acuerdos de confidencialidad (NDA) estrictos</div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Sustento en Directorios</div>
              <div className="text-xs text-slate-400">Defensa técnica ante juntas de accionistas y bancos</div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Retorno de Inversión (ROI)</div>
              <div className="text-xs text-slate-400">Enfoque centrado en rentabilidad y reducción de costos</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
