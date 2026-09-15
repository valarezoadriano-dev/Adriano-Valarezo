import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import { ADRIANO_PROFILE } from '../data/content';

interface FloatingActionsProps {
  onOpenContact: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenContact }) => {
  const whatsappUrl = `https://wa.me/${ADRIANO_PROFILE.whatsappNumber}?text=${encodeURIComponent(
    'Hola Ing. Adriano Valarezo, me comunico directamente desde el botón rápido de su sitio web.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Quick Cotizar button */}
      <button
        onClick={onOpenContact}
        className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 shadow-md hover:shadow-lg transition-all cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5 text-emerald-600" />
        <span>Agendar 30 Min</span>
      </button>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a Adriano Remigio Valarezo"
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all group"
      >
        <MessageSquare className="w-6 h-6 fill-white text-white" />
        <span className="sr-only">WhatsApp Adriano Valarezo</span>
      </a>
    </div>
  );
};
