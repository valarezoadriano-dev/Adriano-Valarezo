import React from 'react';
import { Star, Quote, ShieldCheck, Building2, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
            <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            Confianza y Respaldos Directivos
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Lo Que Opinan Directores, Gerentes y Socios Estratégicos
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            La reputación de Adriano Remigio Valarezo se fundamenta en la entrega rigurosa, honestidad analítica y resultados económicos verificados en cada intervención.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50/90 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all relative"
            >
              <Quote className="w-8 h-8 text-emerald-200 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating stars & Project tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                    {t.projectType}
                  </span>
                </div>

                {/* Quote body */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-emerald-600 to-slate-800 text-white font-bold flex items-center justify-center text-sm shadow-2xs shrink-0">
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-snug">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {t.role} • <span className="text-emerald-800 font-semibold">{t.company}</span>
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {t.location}
                  </p>
                </div>
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
