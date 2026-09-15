import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { QUICK_FAQS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-200/80 text-slate-700">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            Preguntas Frecuentes
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Claridad en Metodología, Contratación y Cobertura
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Respuestas directas a las inquietudes más comunes sobre los esquemas de consultoría de Adriano Remigio Valarezo.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {QUICK_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div className="p-1 rounded-md bg-slate-100 text-slate-500 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
