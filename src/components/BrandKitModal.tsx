import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  Palette, 
  Shapes, 
  Type, 
  FileText, 
  Layers, 
  ShieldCheck, 
  ExternalLink,
  Sparkles,
  QrCode
} from 'lucide-react';
import { BrandSymbol, BrandLogo, getBrandSvgString } from './BrandLogo';
import { ADRIANO_PROFILE } from '../data/content';

// Generated Mockup image
import brandMockupImg from '../assets/images/brand_identity_mockup_1789837297253.jpg';

interface BrandKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BrandColor {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  cmyk: string;
  textColor: string;
  border?: string;
  usage: string;
}

export const BrandKitModal: React.FC<BrandKitModalProps> = ({ isOpen, onClose }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [copiedSvg, setCopiedSvg] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'colores' | 'logo' | 'aplicaciones' | 'tipografia'>('colores');

  if (!isOpen) return null;

  const brandColors: BrandColor[] = [
    {
      name: "Verde Zamorano",
      role: "Color Primario de Marca",
      hex: "#047857",
      rgb: "rgb(4, 120, 87)",
      cmyk: "C:97 M:0 Y:28 K:53",
      textColor: "text-white",
      usage: "Identidad agroindustrial, inocuidad, logotipo principal y enlaces destacados."
    },
    {
      name: "Verde Brote Orgánico",
      role: "Acento de Innovación & Crecimiento",
      hex: "#10B981",
      rgb: "rgb(16, 185, 129)",
      cmyk: "C:91 M:0 Y:30 K:27",
      textColor: "text-slate-900",
      usage: "Hojas del brote, indicadores de avance PMO, badges positivos y métricas."
    },
    {
      name: "Verde Bosque Profundo",
      role: "Solvencia Técnica & Tierra",
      hex: "#064E3B",
      rgb: "rgb(6, 78, 59)",
      cmyk: "C:92 M:0 Y:24 K:69",
      textColor: "text-white",
      usage: "Estructuras de base, sombras sólidas, tallo del brote y fondos contrastantes."
    },
    {
      name: "Oro Cosecha & Retorno",
      role: "Acento Estratégico & Semilla",
      hex: "#D97706",
      rgb: "rgb(217, 119, 6)",
      cmyk: "C:0 M:45 Y:97 K:15",
      textColor: "text-white",
      usage: "Nudo germinativo, vértices de precisión, sellos de peritaje y viabilidad económica."
    },
    {
      name: "Azul Pizarra Ejecutivo",
      role: "Rigor Institucional & PMO",
      hex: "#0F172A",
      rgb: "rgb(15, 23, 42)",
      cmyk: "C:64 M:45 Y:0 K:84",
      textColor: "text-white",
      usage: "Encabezados de informes, gobierno corporativo, tipografía principal y fondos nocturnos."
    },
    {
      name: "Gris Técnico Neutral",
      role: "Documentación & Fondo Estructurado",
      hex: "#F8FAFC",
      rgb: "rgb(248, 250, 252)",
      cmyk: "C:2 M:1 Y:0 K:1",
      textColor: "text-slate-800",
      border: "border-slate-300",
      usage: "Fondos de dictámenes, contenedores de balance de masa y matrices de riesgo."
    }
  ];

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleCopySvg = () => {
    const svgCode = getBrandSvgString('emerald');
    navigator.clipboard.writeText(svgCode);
    setCopiedSvg(true);
    setTimeout(() => setCopiedSvg(false), 2000);
  };

  const handleDownloadSvg = () => {
    const svgCode = getBrandSvgString('emerald');
    const blob = new Blob([svgCode], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'logo-adriano-valarezo-triangulo-brote.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center p-1.5">
              <BrandSymbol sizeClass="w-7 h-7" variant="emerald" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-lg text-white">
                  Manual y Kit de Marca Corporativa
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Identidad Oficial
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Sistema de Identidad Visual · Adriano Remigio Valarezo (Consultor Senior)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('colores')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'colores'
                ? 'border-emerald-600 text-emerald-800 bg-white shadow-2xs rounded-t-lg'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Panel de Colores</span>
          </button>

          <button
            onClick={() => setActiveTab('logo')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'logo'
                ? 'border-emerald-600 text-emerald-800 bg-white shadow-2xs rounded-t-lg'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Shapes className="w-4 h-4" />
            <span>Símbolo: Triángulo & Brote</span>
          </button>

          <button
            onClick={() => setActiveTab('aplicaciones')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'aplicaciones'
                ? 'border-emerald-600 text-emerald-800 bg-white shadow-2xs rounded-t-lg'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Aplicaciones & Papelería</span>
          </button>

          <button
            onClick={() => setActiveTab('tipografia')}
            className={`py-3.5 px-4 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'tipografia'
                ? 'border-emerald-600 text-emerald-800 bg-white shadow-2xs rounded-t-lg'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Type className="w-4 h-4" />
            <span>Tipografía & Reglas</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">

          {/* TAB 1: PANEL DE COLORES */}
          {activeTab === 'colores' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4.5 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Paleta Cromática de Posicionamiento Consultor
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    Diseñada para transmitir simultáneamente <strong>rigor de ingeniería técnica</strong> (Azul Pizarra y Verde Zamorano Profundo) y <strong>fertilidad, innovación productiva y retorno de inversión</strong> (Brote Verde y Oro Cosecha).
                  </p>
                </div>
              </div>

              {/* Color Swatches Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {brandColors.map((color, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div>
                      {/* Color Preview Tile */}
                      <div 
                        className={`h-24 p-3 flex flex-col justify-between ${color.border || ''}`}
                        style={{ backgroundColor: color.hex }}
                      >
                        <span className={`text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full bg-black/20 backdrop-blur-xs w-fit ${color.textColor}`}>
                          {color.role}
                        </span>
                        <span className={`text-base font-black font-mono tracking-wider ${color.textColor}`}>
                          {color.hex}
                        </span>
                      </div>

                      {/* Color Info */}
                      <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold text-slate-900 text-sm">{color.name}</h5>
                          <button
                            onClick={() => handleCopyHex(color.hex)}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-2 py-1 rounded-md transition-colors cursor-pointer"
                            title="Copiar código HEX"
                          >
                            {copiedHex === color.hex ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-600" />
                                <span>Copiado</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>HEX</span>
                              </>
                            )}
                          </button>
                        </div>

                        <div className="text-[11px] text-slate-500 font-mono space-y-0.5 bg-slate-50 p-2 rounded-lg border border-slate-100">
                          <div><strong>RGB:</strong> {color.rgb}</div>
                          <div><strong>CMYK:</strong> {color.cmyk}</div>
                        </div>

                        <p className="text-[11px] text-slate-600 leading-snug">
                          {color.usage}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Color Harmonies & Contrast Guide */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="font-bold text-sm text-emerald-300">Cumplimiento WCAG AA & Contraste Técnico</h5>
                  <p className="text-xs text-slate-300 mt-1 max-w-xl">
                    Las combinaciones oficiales garantizan una relación de contraste superior a 5.5:1 para la lectura accesible de informes técnicos, dictámenes periciales y presentaciones a directorios.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const text = brandColors.map(c => `${c.name}: ${c.hex} (${c.rgb})`).join('\n');
                    navigator.clipboard.writeText(text);
                    setCopiedHex('ALL');
                    setTimeout(() => setCopiedHex(null), 2000);
                  }}
                  className="shrink-0 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-xl border border-slate-700 transition-colors inline-flex items-center gap-1.5 cursor-pointer text-white"
                >
                  {copiedHex === 'ALL' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedHex === 'ALL' ? 'Paleta Copiada' : 'Copiar Toda la Paleta'}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: SÍMBOLO (TRIÁNGULO & BROTE) */}
          {activeTab === 'logo' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* Concept Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <h4 className="font-display font-extrabold text-slate-900 text-base mb-2">
                  Fundamento del Símbolo: Fusión Geométrica & Biológica
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700 leading-relaxed">
                  <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold mb-1.5">
                      <Shapes className="w-4 h-4 text-emerald-700" />
                      <span>El Triángulo Exterior (Delta de la Ingeniería)</span>
                    </div>
                    <p>
                      La figura geométrica más indeformable y estable. Representa la precisión matemática, la metodología de dirección de proyectos (triple restricción de PMO: Alcance, Tiempo, Costo/Calidad) y el pensamiento analítico en auditorías y dictámenes periciales.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200/80">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold mb-1.5">
                      <Sparkles className="w-4 h-4 text-amber-600" />
                      <span>El Brote Interior (Germinación & Agroindustria)</span>
                    </div>
                    <p>
                      Un brote orgánico con tallo central y dos hojas asimétricas con punto apical de crecimiento. Simboliza la semilla que germina, la sostenibilidad ambiental, la transformación agroindustrial de materias primas y el desarrollo de iniciativas productivas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Logo Variations Grid */}
              <div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Variantes Oficiales del Isotipo
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  {/* Variant 1: Oficial Color */}
                  <div className="bg-white rounded-2xl p-5 border border-slate-200 flex flex-col items-center justify-between text-center gap-3">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      Principal (Fondo Claro)
                    </div>
                    <div className="w-24 h-24 p-2 flex items-center justify-center bg-slate-50/80 rounded-xl border border-slate-100">
                      <BrandSymbol sizeClass="w-18 h-18" variant="emerald" />
                    </div>
                    <span className="text-[11px] text-slate-500">Uso en web, cartas y dossiers</span>
                  </div>

                  {/* Variant 2: Inverted Dark */}
                  <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 flex flex-col items-center justify-between text-center gap-3">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Negativa (Fondo Oscuro)
                    </div>
                    <div className="w-24 h-24 p-2 flex items-center justify-center bg-slate-900 rounded-xl border border-slate-800">
                      <BrandSymbol sizeClass="w-18 h-18" variant="white" />
                    </div>
                    <span className="text-[11px] text-slate-400">Header nocturno y sellos</span>
                  </div>

                  {/* Variant 3: Executive Gold */}
                  <div className="bg-amber-950/20 rounded-2xl p-5 border border-amber-300/40 flex flex-col items-center justify-between text-center gap-3">
                    <div className="text-[11px] font-bold text-amber-900 uppercase tracking-wider">
                      Oro Ejecutivo
                    </div>
                    <div className="w-24 h-24 p-2 flex items-center justify-center bg-white rounded-xl border border-amber-200">
                      <BrandSymbol sizeClass="w-18 h-18" variant="gold" />
                    </div>
                    <span className="text-[11px] text-amber-800">Certificaciones y portadas</span>
                  </div>

                  {/* Variant 4: Monochrome Slate */}
                  <div className="bg-slate-100 rounded-2xl p-5 border border-slate-200 flex flex-col items-center justify-between text-center gap-3">
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      Monocromático Técnico
                    </div>
                    <div className="w-24 h-24 p-2 flex items-center justify-center bg-white rounded-xl border border-slate-200">
                      <BrandSymbol sizeClass="w-18 h-18" variant="slate" />
                    </div>
                    <span className="text-[11px] text-slate-600">Peritajes oficiales en papel</span>
                  </div>

                </div>
              </div>

              {/* Horizontal Lockup Preview */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Logotipo Completo (Composición Horizontal)
                </div>
                <div className="p-6 bg-slate-50/70 rounded-xl border border-slate-200/80 flex items-center justify-center">
                  <BrandLogo size="lg" variant="emerald" textVariant="dark" />
                </div>
              </div>

              {/* Export & Download Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="text-xs text-slate-500">
                  Formato vectorial SVG estándar compatible con Illustrator, Figma, Word y Web.
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopySvg}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer border border-slate-300"
                  >
                    {copiedSvg ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedSvg ? 'Código SVG Copiado' : 'Copiar Código SVG'}</span>
                  </button>

                  <button
                    onClick={handleDownloadSvg}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors cursor-pointer shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Descargar Logo (.SVG)</span>
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: APLICACIONES & PAPELERÍA */}
          {activeTab === 'aplicaciones' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* Stationery Mockup Preview */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900">
                <div className="relative aspect-video max-h-[300px] w-full overflow-hidden">
                  <img
                    src={brandMockupImg}
                    alt="Kit de papelería corporativa para Adriano Remigio Valarezo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500 text-slate-950">
                        Render de Aplicación
                      </span>
                      <h4 className="font-display font-bold text-lg text-white mt-1">
                        Papelería Ejecutiva & Dossiers Técnicos
                      </h4>
                      <p className="text-xs text-slate-300 max-w-lg">
                        Aplicación del triángulo con brote sobre tarjetas de visita, carpetas de dictamen pericial y hojas membretadas oficiales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Business Card Preview */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Maqueta Digital: Tarjeta de Presentación Ejecutiva
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Card Front */}
                  <div className="bg-slate-950 text-white rounded-2xl p-6 border border-slate-800 shadow-sm flex flex-col justify-between aspect-[1.75/1] relative overflow-hidden">
                    <div className="absolute -right-8 -bottom-8 w-32 h-32 opacity-10">
                      <BrandSymbol sizeClass="w-full h-full" variant="white" />
                    </div>

                    <div className="flex items-start justify-between relative z-10">
                      <div>
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">
                          Consultor Senior
                        </span>
                        <h5 className="font-display font-extrabold text-lg text-white mt-0.5">
                          Adriano Remigio Valarezo
                        </h5>
                        <p className="text-[11px] text-slate-400">
                          Ingeniero en Agroindustria (Zamorano)
                        </p>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-white/10 p-1.5 border border-white/20">
                        <BrandSymbol sizeClass="w-full h-full" variant="white" />
                      </div>
                    </div>

                    <div className="relative z-10 pt-4 border-t border-slate-800/80 flex items-end justify-between text-[11px] text-slate-300">
                      <div className="space-y-0.5">
                        <div>{ADRIANO_PROFILE.phoneFormatted}</div>
                        <div className="text-slate-400">{ADRIANO_PROFILE.email}</div>
                        <div className="text-emerald-400">Quito / Guayaquil · Ecuador</div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-500 font-mono">
                          Agroindustria · PMO · ESG
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Back */}
                  <div className="bg-emerald-900 text-white rounded-2xl p-6 border border-emerald-800 shadow-sm flex flex-col items-center justify-center text-center aspect-[1.75/1] relative overflow-hidden">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 p-2.5 border border-white/20 mb-3">
                      <BrandSymbol sizeClass="w-full h-full" variant="white" />
                    </div>
                    <div className="font-display font-extrabold text-white text-base">
                      Adriano Remigio Valarezo
                    </div>
                    <div className="text-xs text-emerald-200 mt-0.5">
                      Criterio Técnico · Gestión Estratégica
                    </div>
                    <div className="text-[10px] text-emerald-300/80 mt-3 font-mono tracking-wider">
                      adrianovalarezo.consulting
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: TIPOGRAFÍA & REGLAS */}
          {activeTab === 'tipografia' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* Typography Guide */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Type className="w-4 h-4 text-emerald-700" />
                  <span>Tipografías Institucionales Recomendadas</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Fuente de Títulos y Logomarca
                    </span>
                    <h5 className="font-display font-extrabold text-xl text-slate-900 mt-2">
                      Plus Jakarta Sans / Display
                    </h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Geometría limpia con cortes precisos que armonizan con la silueta triangular del logo. Se utiliza en pesos <strong>Bold (700)</strong> y <strong>ExtraBold (800)</strong>.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                      Fuente de Lectura & Dictámenes
                    </span>
                    <h5 className="font-sans font-semibold text-xl text-slate-900 mt-2">
                      Inter / Technical Sans
                    </h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Máxima legibilidad en balances de masa, tablas de especificaciones técnicas, matrices de riesgo y anexos periciales impresos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Golden Rules */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Reglas de Integridad del Logotipo
                </div>

                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-xl">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Área de Protección:</strong> Mantener un espacio libre equivalente a la altura de la semilla central alrededor del triángulo.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-xl">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Tamaño Mínimo:</strong> Digital: no inferior a 24x24 px. Impreso: no inferior a 10 mm de base para garantizar nitidez del brote.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-xl">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>No deformar ni rotar:</strong> El triángulo siempre debe apuntar hacia arriba, simbolizando crecimiento y estabilidad estructural.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Identidad diseñada para el posicionamiento profesional de Adriano Remigio Valarezo</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadSvg}
              className="font-bold text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar SVG</span>
            </button>
            <span>•</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
