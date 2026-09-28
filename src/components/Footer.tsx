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
  Lock,
  Video,
  ExternalLink
} from 'lucide-react';
import { ADRIANO_PROFILE } from '../data/content';
import { BrandSymbol } from './BrandLogo';
import { 
  LinkedInIcon, 
  InstagramIcon, 
  FacebookIcon, 
  XTwitterIcon,
  VimeoIcon,
  YouTubeIcon
} from './SocialIcons';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand & Credentials - 4 cols */}
          <div className="lg:col-span-4 space-y-4">
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
          </div>

          {/* Navigation Links - 2 cols */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#servicios" className="hover:text-emerald-400 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-emerald-400 transition-colors">
                  Metodología
                </a>
              </li>
              <li>
                <a href="#cotizador" className="hover:text-emerald-400 transition-colors">
                  Estimador de Alcance
                </a>
              </li>
              <li>
                <a href="#portafolio" className="hover:text-emerald-400 transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-emerald-400 transition-colors text-emerald-400/90 font-medium">
                  Videos & Espacios
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-emerald-400 transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-emerald-400 transition-colors">
                  Sobre Adriano Valarezo
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-emerald-400 transition-colors">
                  Contacto Directo
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales & Presencia Digital - 3 cols */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px]">
              Redes Sociales & Medios
            </h4>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Canales oficiales de divulgación técnica, proyectos y contacto profesional:
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <a
                href={ADRIANO_PROFILE.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900 hover:bg-slate-850 hover:text-white transition-colors group border border-slate-800/80"
              >
                <div className="flex items-center gap-2">
                  <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
                  <span className="text-slate-300 group-hover:text-white">LinkedIn</span>
                </div>
                <span className="text-[11px] text-slate-500 group-hover:text-slate-400">/in/adriano-valarezo</span>
              </a>

              <a
                href={ADRIANO_PROFILE.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900 hover:bg-slate-850 hover:text-white transition-colors group border border-slate-800/80"
              >
                <div className="flex items-center gap-2">
                  <InstagramIcon className="w-4 h-4 text-pink-500" />
                  <span className="text-slate-300 group-hover:text-white">Instagram</span>
                </div>
                <span className="text-[11px] text-slate-500 group-hover:text-slate-400">@adrianovalarezo</span>
              </a>

              <a
                href={ADRIANO_PROFILE.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900 hover:bg-slate-850 hover:text-white transition-colors group border border-slate-800/80"
              >
                <div className="flex items-center gap-2">
                  <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                  <span className="text-slate-300 group-hover:text-white">Facebook</span>
                </div>
                <span className="text-[11px] text-slate-500 group-hover:text-slate-400">/adrianovalarezo</span>
              </a>

              <a
                href={ADRIANO_PROFILE.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-slate-900 hover:bg-slate-850 hover:text-white transition-colors group border border-slate-800/80"
              >
                <div className="flex items-center gap-2">
                  <XTwitterIcon className="w-4 h-4 text-slate-300" />
                  <span className="text-slate-300 group-hover:text-white">X (Twitter)</span>
                </div>
                <span className="text-[11px] text-slate-500 group-hover:text-slate-400">@adrinaovalarezo</span>
              </a>
            </div>

            {/* Video channels */}
            <div className="pt-2 flex items-center gap-2 text-[11px]">
              <a
                href="https://vimeo.com/1060946974/dc12bd915f?fl=pl&fe=sh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800"
              >
                <VimeoIcon className="w-3 h-3" />
                <span>Vimeo</span>
              </a>
              <a
                href="https://youtu.be/czFRAorUZU8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-red-400 border border-slate-800"
              >
                <YouTubeIcon className="w-3 h-3" />
                <span>YouTube</span>
              </a>
            </div>

          </div>

          {/* Direct Channels - 3 cols */}
          <div className="lg:col-span-3 space-y-3">
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
                <span>Tel: {ADRIANO_PROFILE.phoneFormatted}</span>
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
                <span>Presencial y remoto en Ecuador & LATAM</span>
              </div>
            </div>

            <div className="pt-2">
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

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {onOpenBrandKit && (
              <button
                onClick={onOpenBrandKit}
                className="inline-flex items-center gap-1.5 text-slate-600 hover:text-emerald-400 transition-colors cursor-pointer text-[11px]"
                title="Acceso reservado a manual de marca e identidad corporativa"
              >
                <Lock className="w-3 h-3 text-slate-600 group-hover:text-emerald-400" />
                <span>Acceso Privado</span>
              </button>
            )}

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
