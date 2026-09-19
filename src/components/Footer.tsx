import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Award, 
  ShieldCheck,
  CheckCircle2,
  Palette
} from 'lucide-react';
import { ADRIANO_PROFILE } from '../data/content';
import { BrandSymbol } from './BrandLogo';

interface FooterProps {
  onOpenBrandKit?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrandKit }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${ADRIANO_PROFILE.whatsappNumber}?text=${encodeURIComponent(
    'Hola Ing. Adriano Valarezo, me comunico desde el pie de página de su sitio web.'
  )}`;

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Credentials - 5 cols */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/80 p-1 flex items-center justify-center shadow-sm">
                <BrandSymbol sizeClass="w-7 h-7" variant="emerald" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-white text-base leading-tight">
                  Adriano Remigio Valarezo
                </h3>
                <p className="text-[11px] text-emerald-400 font-medium">
                  Ingeniero en Agroindustria • Zamorano Alumni
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Servicios profesionales y consultoría estratégica de alto nivel en ingeniería agroindustrial, dirección y fiscalización de proyectos PMO, estudios de sostenibilidad socioeconómica y dictámenes técnicos corporativos.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                Ecuador (Quito / Guayaquil)
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                Honduras & Centroamérica
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                América Latina
              </span>
            </div>

            {onOpenBrandKit && (
              <div className="pt-2">
                <button
                  onClick={onOpenBrandKit}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 hover:bg-emerald-900/50 transition-colors cursor-pointer"
                >
                  <Palette className="w-3.5 h-3.5" />
                  <span>Manual & Kit de Marca Oficial</span>
                </button>
              </div>
            )}
          </div>

          {/* Navigation Links - 3 cols */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicios" className="hover:text-emerald-400 transition-colors">
                  Servicios Profesionales
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-emerald-400 transition-colors">
                  Metodología de Intervención
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-emerald-400 transition-colors">
                  Estimador de Alcance & Cotización
                </a>
              </li>
              <li>
                <a href="#portafolio" className="hover:text-emerald-400 transition-colors">
                  Portafolio & Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-emerald-400 transition-colors">
                  Testimonios & Referencias Directivas
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-emerald-400 transition-colors">
                  Sobre Adriano Remigio Valarezo
                </a>
              </li>
              <li>
                <a href="#identidad-marca" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-emerald-400">
                  <Palette className="w-3 h-3" />
                  <span>Kit de Marca & Identidad</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels - 4 cols */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Canales Directos de Atención
            </h4>

            <div className="space-y-2.5">
              <a 
                href={`tel:${ADRIANO_PROFILE.phone}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-emerald-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>Teléfono: {ADRIANO_PROFILE.phoneFormatted}</span>
              </a>

              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-emerald-400">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span>WhatsApp: {ADRIANO_PROFILE.phoneFormatted}</span>
              </a>

              <a 
                href={`mailto:${ADRIANO_PROFILE.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-emerald-400">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="break-all">{ADRIANO_PROFILE.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <div className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-500">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>Disponibilidad presencial y remota para auditorías</span>
              </div>
            </div>

            <div className="pt-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                Ética profesional y rigor técnico garantizado
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} Adriano Remigio Valarezo. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Rediseño profesional optimizado para conversión</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
              title="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
