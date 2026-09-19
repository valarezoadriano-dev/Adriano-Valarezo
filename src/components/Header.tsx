import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Menu,
  X,
  Phone,
  Calendar,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { ADRIANO_PROFILE } from '../data/content';
import { BrandSymbol } from './BrandLogo';

interface HeaderProps {
  onOpenContact: (prefilledService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Diagnóstico', href: '#cotizador' },
    { name: 'Casos', href: '#portafolio' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Trayectoria', href: '#sobre-mi' },
    { name: 'Preguntas', href: '#faq' },
  ];

  const handleNavClick = (link: { name: string; href: string }) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(link.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${ADRIANO_PROFILE.whatsappNumber}?text=${encodeURIComponent(
    'Hola Ing. Adriano Valarezo, visité su sitio web y deseo solicitar información sobre sus servicios de consultoría.'
  )}`;

  return (
    <>
      {/* Top micro-bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Disponible para proyectos 2026
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:inline text-slate-400">Consultoría en Ecuador, Centroamérica y LATAM</span>
          </div>
          
          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href={`tel:${ADRIANO_PROFILE.phone}`}
              className="hover:text-emerald-400 transition-colors hidden sm:flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{ADRIANO_PROFILE.phoneFormatted}</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a 
              href={`mailto:${ADRIANO_PROFILE.email}`} 
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>{ADRIANO_PROFILE.email}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors flex items-center gap-1 font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
            : 'bg-white border-b border-slate-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand logo & identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center p-1 shadow-2xs group-hover:bg-emerald-100 transition-colors">
              <BrandSymbol sizeClass="w-7 h-7" variant="emerald" />
            </div>
            <div>
              <div className="font-display font-extrabold text-slate-900 text-lg leading-tight tracking-tight flex items-center gap-1.5">
                Adriano Remigio Valarezo
                <span className="text-emerald-600">.</span>
              </div>
              <div className="text-xs text-slate-500 font-medium tracking-wide">
                Ing. Agroindustrial • Zamorano Alumni • Consultor Senior
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link);
                }}
                className="text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Primary CTA */}
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                onOpenContact();
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs md:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-sm transition-all cursor-pointer hover:shadow hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Consulta Inicial</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
            <nav aria-label="Menú móvil" className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link);
                  }}
                  className="text-left px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Agendar Consulta Inicial
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-emerald-700 hover:bg-emerald-50 border border-emerald-300 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
