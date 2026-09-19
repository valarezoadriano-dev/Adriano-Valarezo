import React, { useState } from 'react';
import { 
  Palette, 
  Shapes, 
  Copy, 
  Check, 
  Download, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Eye,
  FileBadge
} from 'lucide-react';
import { BrandSymbol, BrandLogo, getBrandSvgString } from './BrandLogo';

interface BrandIdentitySectionProps {
  onOpenBrandKit: () => void;
}

export const BrandIdentitySection: React.FC<BrandIdentitySectionProps> = ({ onOpenBrandKit }) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    {
      name: "Verde Zamorano",
      hex: "#047857",
      meaning: "Agroindustria & Inocuidad",
      textColor: "text-white"
    },
    {
      name: "Verde Brote",
      hex: "#10B981",
      meaning: "Sostenibilidad & Innovación",
      textColor: "text-slate-900"
    },
    {
      name: "Oro Cosecha",
      hex: "#D97706",
      meaning: "Rentabilidad & Estrategia",
      textColor: "text-white"
    },
    {
      name: "Azul Pizarra",
      hex: "#0F172A",
      meaning: "Dirección PMO & Rigor",
      textColor: "text-white"
    }
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section id="identidad-marca" className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Decorative Pattern with subtle triangles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <Shapes className="w-3.5 h-3.5 text-emerald-400" />
              <span>Identidad Corporativa de Consultoría</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Un Símbolo Basado en Rigor de Ingeniería y Vitalidad Agroindustrial
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              La marca de Adriano Remigio Valarezo integra el <strong>triángulo geométrico (Delta)</strong> como marco de estabilidad y control de proyectos, con un <strong>brote orgánico en el centro</strong> como germinación, valor agregado y sostenibilidad productiva.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onOpenBrandKit}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-200 transition-all cursor-pointer shadow-md shadow-emerald-500/10"
            >
              <Palette className="w-4 h-4" />
              <span>Ver Kit de Marca Completo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3-Column Core Breakdown: The Symbol, The Meaning, The Palette */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Col 1: Visual Hero of the Logo (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950/80 rounded-3xl p-8 border border-slate-800 flex flex-col justify-between relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all" />
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Isotipo Oficial Registrado
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-800/60">
                  Vectorial · SVG
                </span>
              </div>

              {/* Central Large Emblem */}
              <div className="py-6 flex flex-col items-center justify-center">
                <div className="w-40 h-40 p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner flex items-center justify-center relative">
                  <BrandSymbol sizeClass="w-32 h-32" variant="emerald" />
                </div>

                <div className="mt-6 text-center">
                  <div className="font-display font-extrabold text-xl text-white">
                    Adriano Remigio Valarezo
                  </div>
                  <div className="text-xs text-emerald-400 font-medium tracking-wide mt-0.5">
                    Ingeniero en Agroindustria · Zamorano Alumni
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Geometría & Biología</span>
              </span>
              <button
                onClick={onOpenBrandKit}
                className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Explorar aplicaciones</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Col 2 & 3: Conceptual Meaning & Color Swatches (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* The 2 Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/60 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Shapes className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white">
                  1. Triángulo (Delta)
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Estructura indeformable de la ingeniería que simboliza el <strong>control de alcance, tiempo y costo (PMO)</strong>, la estabilidad corporativa y la visión ascendente en la toma de decisiones.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/60 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-white">
                  2. Brote Germinal Central
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Representa el corazón <strong>agroindustrial y sostenible</strong>: la semilla que fructifica, la inocuidad en plantas procesadoras y el impacto socioeconómico en las comunidades rurales.
                </p>
              </div>
            </div>

            {/* Interactive Color Swatches Row */}
            <div className="bg-slate-950/60 rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white flex items-center gap-2">
                    <Palette className="w-4 h-4 text-emerald-400" />
                    <span>Panel de Colores Corporativos</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Toque cualquier código para copiarlo al portapapeles.
                  </p>
                </div>

                <span className="text-[11px] text-slate-400 hidden sm:inline">
                  Paleta HEX / RGB Oficial
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => handleCopy(c.hex)}
                    className="group text-left p-3 rounded-xl border border-slate-800 hover:border-slate-600 bg-slate-900 transition-all cursor-pointer flex flex-col justify-between h-28"
                  >
                    <div 
                      className="w-full h-8 rounded-lg mb-2 flex items-center justify-end px-2"
                      style={{ backgroundColor: c.hex }}
                    >
                      {copiedColor === c.hex ? (
                        <span className="bg-black/60 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                          <Check className="w-2.5 h-2.5 text-emerald-400" />
                          <span>¡Listo!</span>
                        </span>
                      ) : (
                        <Copy className="w-3 h-3 text-white/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {c.name}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        {c.hex}
                      </div>
                      <div className="text-[9px] text-slate-500 truncate mt-0.5">
                        {c.meaning}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick action bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 pt-1">
              <span>Identidad adaptable para dictámenes periciales, pliegos licitatorios y dirección ejecutiva.</span>
              <button
                onClick={onOpenBrandKit}
                className="text-emerald-400 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <span>Descargar activos vectoriales y consultar reglas de uso</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
