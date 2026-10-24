import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Phone,
  Calendar,
  MessageSquare,
  ChevronDown,
  Layers,
  Award,
  Video,
  FileCheck2,
  Users2,
  HelpCircle,
  Calculator,
  ShieldCheck,
  Mail,
  ExternalLink
} from 'lucide-react';
import { ADRIANO_PROFILE } from '../data/content';
import { BrandSymbol } from './BrandLogo';
import { 
  LinkedInIcon, 
  InstagramIcon, 
  FacebookIcon, 
  XTwitterIcon 
} from './SocialIcons';

interface HeaderProps {
  onOpenContact: (prefilledService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll detection for header elevation and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      // Section spy
      const sections = ['servicios', 'metodologia', 'cotizador', 'portafolio', 'videos', 'testimonios', 'sobre-mi', 'faq'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open & handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setDesktopDropdownOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(false);
      }
    };
    if (desktopDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [desktopDropdownOpen]);

  // Primary navigation items (shown always on lg and xl)
  const primaryLinks = [
    { name: 'Servicios', href: '#servicios', id: 'servicios', icon: Layers },
    { name: 'Diagnóstico', href: '#cotizador', id: 'cotizador', icon: Calculator },
    { name: 'Casos', href: '#portafolio', id: 'portafolio', icon: FileCheck2 },
    { name: 'Videos', href: '#videos', id: 'videos', icon: Video },
  ];

  // Secondary items (shown directly in xl, in "Más" dropdown on lg, and inside drawer on mobile)
  const secondaryLinks = [
    { name: 'Metodología', href: '#metodologia', id: 'metodologia', icon: Award, desc: 'Enfoque de intervención técnica y fases' },
    { name: 'Testimonios', href: '#testimonios', id: 'testimonios', icon: Users2, desc: 'Criterio de directores y gerentes' },
    { name: 'Trayectoria', href: '#sobre-mi', id: 'sobre-mi', icon: Award, desc: 'Perfil profesional Zamorano y 22 años' },
    { name: 'Preguntas', href: '#faq', id: 'faq', icon: HelpCircle, desc: 'Dudas sobre honorarios, plazos y confidencialidad' },
  ];

  // Full flat list for quick lookups
  const allNavLinks = [
    ...primaryLinks,
    ...secondaryLinks
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setDesktopDropdownOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const whatsappUrl = `https://wa.me/${ADRIANO_PROFILE.whatsappNumber}?text=${encodeURIComponent(
    'Hola Ing. Adriano Valarezo, visité su sitio web y deseo solicitar información sobre sus servicios de consultoría.'
  )}`;

  return (
    <>
      {/* =========================================================================
          TOP UTILITY BAR
          Designed for all viewports: Compact layout on mobile, full detail on desktop.
          ========================================================================= */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-3 sm:px-6 lg:px-8 border-b border-slate-800 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Availability badge */}
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Disponible 2026
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-400 text-[11px] truncate">
              Consultoría Senior en Ecuador, Centroamérica y LATAM
            </span>
          </div>
          
          {/* Direct channels & social icons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone */}
            <a 
              href={`tel:${ADRIANO_PROFILE.phone}`}
              className="hidden lg:flex items-center gap-1 hover:text-emerald-400 transition-colors font-medium text-[11px]"
              title="Llamada telefónica directa"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{ADRIANO_PROFILE.phoneFormatted}</span>
            </a>
            
            <span className="hidden lg:inline text-slate-700">|</span>

            {/* WhatsApp */}
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-semibold text-[11px] px-1.5 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20"
              title="Contacto directo por WhatsApp"
            >
              <MessageSquare className="w-3 h-3" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>

            {/* Social Icons micro list */}
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
              <a
                href={ADRIANO_PROFILE.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Adriano Valarezo"
                className="hover:text-[#0A66C2] transition-colors p-1 rounded hover:bg-slate-800"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={ADRIANO_PROFILE.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Adriano Valarezo"
                className="hover:text-pink-400 transition-colors p-1 rounded hover:bg-slate-800"
                title="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={ADRIANO_PROFILE.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Adriano Valarezo"
                className="hover:text-[#1877F2] transition-colors p-1 rounded hover:bg-slate-800"
                title="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={ADRIANO_PROFILE.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) de Adriano Valarezo"
                className="hover:text-white transition-colors p-1 rounded hover:bg-slate-800"
                title="X (Twitter)"
              >
                <XTwitterIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN STICKY HEADER
          Optimized for zero-overflow: Adapts smoothly from 320px to 4K displays.
          ========================================================================= */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-2.5 sm:py-3' 
            : 'bg-white border-b border-slate-200 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* BRAND IDENTITY */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0"
            title="Ir al inicio"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center p-1 shadow-2xs group-hover:bg-emerald-100 transition-colors shrink-0">
              <BrandSymbol sizeClass="w-6 h-6 sm:w-7 sm:h-7" variant="emerald" />
            </div>
            
            <div className="min-w-0">
              {/* Responsive name: Truncates intelligently if ultra-narrow */}
              <div className="font-display font-black text-slate-900 text-sm sm:text-base lg:text-lg leading-tight tracking-tight flex items-center gap-1">
                <span className="truncate">Adriano Remigio Valarezo</span>
                <span className="text-emerald-600">.</span>
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-tight truncate max-w-[210px] sm:max-w-[320px] lg:max-w-none">
                <span className="text-emerald-700 font-semibold">Ing. Agroindustrial</span>
                <span className="hidden sm:inline"> • Zamorano Alumni</span>
                <span className="hidden md:inline"> • Consultor Senior</span>
              </div>
            </div>
          </a>

          {/* ===================================================================
              DESKTOP NAVIGATION
              - Displays full list on >= 1280px (xl).
              - Displays primary 4 items + "Más ▾" dropdown on 1024px-1279px (lg).
              - Prevents any line-wrap, truncation or button push-out.
              =================================================================== */}
          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Primary links */}
            {primaryLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-all relative ${
                    isActive 
                      ? 'text-emerald-700 bg-emerald-50 font-bold' 
                      : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </a>
              );
            })}

            {/* In XL screens, show secondary links directly */}
            <div className="hidden xl:flex items-center gap-1">
              {secondaryLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-all relative ${
                      isActive 
                        ? 'text-emerald-700 bg-emerald-50 font-bold' 
                        : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-emerald-600 rounded-full" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* In LG screens (1024px - 1279px), show the "Más" dropdown */}
            <div className="xl:hidden relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                  desktopDropdownOpen || ['metodologia', 'testimonios', 'sobre-mi', 'faq'].includes(activeSection)
                    ? 'text-emerald-700 bg-emerald-50'
                    : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
                }`}
                aria-expanded={desktopDropdownOpen}
                aria-haspopup="true"
              >
                <span>Más</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {desktopDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in zoom-in-95">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                    Secciones Adicionales
                  </div>
                  {secondaryLinks.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className={`flex items-start gap-2.5 px-3 py-2 rounded-lg text-xs transition-colors ${
                          isActive ? 'bg-emerald-50 text-emerald-800 font-bold' : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-600'
                        }`}
                      >
                        <Icon className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <div>
                          <div className="font-semibold">{item.name}</div>
                          <div className="text-[11px] text-slate-500 font-normal leading-tight">{item.desc}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* ===================================================================
              HEADER RIGHT ACTIONS
              =================================================================== */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* CTA Button: Adapts text length on smaller screens */}
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                onOpenContact();
              }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-sm transition-all cursor-pointer hover:shadow hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden sm:inline">Agendar Consulta</span>
              <span className="sm:hidden">Consulta</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200/80"
              aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ===================================================================
            MOBILE SLIDE-OVER DRAWER & BACKDROP
            Works seamlessly on 320px, 375px, 414px, 768px portrait/landscape.
            =================================================================== */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            {/* Backdrop overlay with blur */}
            <div 
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-out drawer panel */}
            <div 
              className="fixed top-0 right-0 bottom-0 w-full xs:w-84 sm:w-96 max-w-[90vw] bg-white shadow-2xl flex flex-col justify-between overflow-y-auto z-50 animate-in slide-in-from-right duration-250 border-l border-slate-200"
              role="dialog"
              aria-modal="true"
              aria-label="Menú principal de navegación"
            >
              {/* Drawer Top Header */}
              <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80 sticky top-0 z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center p-0.5 shadow-2xs">
                    <BrandSymbol sizeClass="w-5 h-5" variant="emerald" />
                  </div>
                  <div>
                    <div className="font-display font-black text-slate-900 text-sm leading-tight">
                      Adriano Remigio Valarezo
                    </div>
                    <div className="text-[10px] text-emerald-700 font-semibold">
                      Consultoría Agroindustrial & Proyectos
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Categories */}
              <div className="p-4 space-y-5 flex-1">
                {/* Grupo 1: Soluciones y Diagnóstico */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                    Soluciones & Análisis
                  </div>
                  <nav className="space-y-1">
                    {primaryLinks.map((link) => {
                      const Icon = link.icon;
                      const isActive = activeSection === link.id;
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(link.href);
                          }}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                            isActive
                              ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/60'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                            <span>{link.name}</span>
                          </div>
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          )}
                        </a>
                      );
                    })}
                  </nav>
                </div>

                {/* Grupo 2: Evidencia & Trayectoria */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
                    Evidencia & Respaldo
                  </div>
                  <nav className="space-y-1">
                    {secondaryLinks.map((link) => {
                      const Icon = link.icon;
                      const isActive = activeSection === link.id;
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(link.href);
                          }}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                            isActive
                              ? 'bg-emerald-50 text-emerald-800 font-bold border border-emerald-200/60'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`} />
                            <span>{link.name}</span>
                          </div>
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                          )}
                        </a>
                      );
                    })}
                  </nav>
                </div>

                {/* Direct quick action cards */}
                <div className="pt-2 space-y-2 border-t border-slate-100">
                  <a
                    href="#contacto"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      onOpenContact();
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    Agendar Consulta Inicial
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    Chat Directo por WhatsApp
                  </a>
                </div>

                {/* Direct contact info in drawer */}
                <div className="bg-slate-50 p-3 rounded-xl text-xs space-y-1.5 text-slate-600 border border-slate-100">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Atención Inmediata
                  </div>
                  <a 
                    href={`tel:${ADRIANO_PROFILE.phone}`}
                    className="flex items-center gap-2 hover:text-emerald-700 font-medium py-0.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{ADRIANO_PROFILE.phoneFormatted}</span>
                  </a>
                  <a 
                    href={`mailto:${ADRIANO_PROFILE.email}`}
                    className="flex items-center gap-2 hover:text-emerald-700 font-medium py-0.5 truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{ADRIANO_PROFILE.email}</span>
                  </a>
                </div>
              </div>

              {/* Drawer Footer with Social Icons */}
              <div className="p-4 bg-slate-50 border-t border-slate-200/80">
                <div className="text-center text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Canales Oficiales
                </div>
                <div className="grid grid-cols-4 gap-1.5 text-slate-600">
                  <a
                    href={ADRIANO_PROFILE.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-white border border-slate-200/80 hover:border-emerald-300 hover:text-[#0A66C2] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
                    <span className="text-[10px] font-medium mt-1">LinkedIn</span>
                  </a>

                  <a
                    href={ADRIANO_PROFILE.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-white border border-slate-200/80 hover:border-pink-300 hover:text-pink-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-600" />
                    <span className="text-[10px] font-medium mt-1">Instagram</span>
                  </a>

                  <a
                    href={ADRIANO_PROFILE.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-white border border-slate-200/80 hover:border-blue-300 hover:text-[#1877F2] transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                    <span className="text-[10px] font-medium mt-1">Facebook</span>
                  </a>

                  <a
                    href={ADRIANO_PROFILE.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-white border border-slate-200/80 hover:border-slate-400 hover:text-slate-900 transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <XTwitterIcon className="w-4 h-4 text-slate-900" />
                    <span className="text-[10px] font-medium mt-1">X</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
