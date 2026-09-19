import React from 'react';

export interface BrandLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'emerald' | 'white' | 'slate' | 'gold' | 'flat-dark';
  showText?: boolean;
  textVariant?: 'dark' | 'light';
  subtext?: string;
  className?: string;
}

/**
 * Raw SVG string representation of the Triangle with Sprout logo for downloading or clipboard copy
 */
export const getBrandSvgString = (color: 'emerald' | 'dark' | 'white' | 'gold' = 'emerald'): string => {
  const fillPrimary = color === 'white' ? '#FFFFFF' : color === 'dark' ? '#0F172A' : color === 'gold' ? '#D97706' : '#047857';
  const fillSecondary = color === 'white' ? '#E2E8F0' : color === 'dark' ? '#334155' : color === 'gold' ? '#F59E0B' : '#10B981';
  const fillAccent = color === 'white' ? '#94A3B8' : color === 'dark' ? '#047857' : color === 'gold' ? '#B45309' : '#D97706';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="avTriangleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${fillPrimary}" />
      <stop offset="100%" stop-color="${fillSecondary}" />
    </linearGradient>
  </defs>
  <!-- Triángulo Delta: Rigor en Ingeniería y Dirección -->
  <polygon points="50,12 88,82 12,82" fill="none" stroke="url(#avTriangleGrad)" stroke-width="7" stroke-linejoin="round" />
  <!-- Base de Tierra / Nutrición del Proyecto -->
  <circle cx="50" cy="74" r="4.5" fill="${fillAccent}" />
  <!-- Tallo central ascendente -->
  <path d="M 50,74 C 50,62 50,48 50,40" fill="none" stroke="${fillPrimary}" stroke-width="4.5" stroke-linecap="round" />
  <!-- Hoja izquierda de germinación -->
  <path d="M 50,56 C 41,54 36,46 36,38 C 44,38 49,46 50,56 Z" fill="${fillSecondary}" />
  <!-- Hoja derecha de expansión agroindustrial -->
  <path d="M 50,48 C 58,46 64,38 64,29 C 56,29 51,38 50,48 Z" fill="${fillPrimary}" />
  <!-- Yema apical de crecimiento -->
  <circle cx="50" cy="38" r="2.5" fill="${fillAccent}" />
</svg>`;
};

export const BrandSymbol: React.FC<{
  sizeClass?: string;
  variant?: 'emerald' | 'white' | 'slate' | 'gold' | 'flat-dark';
  className?: string;
}> = ({ sizeClass = 'w-10 h-10', variant = 'emerald', className = '' }) => {
  // Gradients and fills depending on variant
  const getColors = () => {
    switch (variant) {
      case 'white':
        return {
          stroke: '#FFFFFF',
          leafLeft: '#F1F5F9',
          leafRight: '#FFFFFF',
          stem: '#FFFFFF',
          accent: '#CBD5E1',
          bg: 'transparent'
        };
      case 'slate':
      case 'flat-dark':
        return {
          stroke: '#0F172A',
          leafLeft: '#059669',
          leafRight: '#0F172A',
          stem: '#0F172A',
          accent: '#D97706',
          bg: 'transparent'
        };
      case 'gold':
        return {
          stroke: '#D97706',
          leafLeft: '#F59E0B',
          leafRight: '#B45309',
          stem: '#92400E',
          accent: '#047857',
          bg: 'transparent'
        };
      case 'emerald':
      default:
        return {
          stroke: 'url(#triangleEmeraldGrad)',
          leafLeft: '#10B981',
          leafRight: '#047857',
          stem: '#064E3B',
          accent: '#D97706', // Oro cosecha para el nudo germinativo
          bg: 'transparent'
        };
    }
  };

  const colors = getColors();

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeClass} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-2xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Logo Adriano Valarezo: Triángulo de Ingeniería con Brote Agroindustrial"
      >
        <defs>
          <linearGradient id="triangleEmeraldGrad" x1="12%" y1="12%" x2="88%" y2="88%">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="100%" stopColor="#064E3B" />
          </linearGradient>
          <linearGradient id="sproutGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Outer Geometrical Triangle (Delta: Solidez, Rigor y Visión Ascendente) */}
        <polygon
          points="50,14 87,80 13,80"
          stroke={colors.stroke}
          strokeWidth="7.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Accent vertex nodes subtle marks */}
        <circle cx="50" cy="14" r="2.2" fill={colors.accent} />
        <circle cx="87" cy="80" r="2.2" fill={colors.accent} />
        <circle cx="13" cy="80" r="2.2" fill={colors.accent} />

        {/* Semilla / Raíz de anclaje (Punto germinativo) */}
        <circle cx="50" cy="72" r="4.2" fill={colors.accent} />

        {/* Tallo central con curvatura orgánica */}
        <path
          d="M 50,72 C 50,60 50.5,49 50,38"
          stroke={colors.stem}
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Hoja Izquierda (Inocuidad, Eficiencia & Agroindustria) */}
        <path
          d="M 50,56 C 41.5,54 35.5,46 36,37.5 C 44.5,37.5 49.5,46 50,56 Z"
          fill={colors.leafLeft}
        />

        {/* Hoja Derecha (Sostenibilidad, Rentabilidad & PMO) */}
        <path
          d="M 50,47 C 58.5,45 64.5,37 64,28.5 C 55.5,28.5 50.5,37 50,47 Z"
          fill={colors.leafRight}
        />

        {/* Yema apical central (Futuro y crecimiento continuo) */}
        <circle cx="50" cy="38" r="2.6" fill={colors.accent} />
      </svg>
    </div>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'emerald',
  showText = true,
  textVariant = 'dark',
  subtext = 'Ing. Agroindustrial • Zamorano Alumni',
  className = '',
}) => {
  const sizeMap = {
    xs: { icon: 'w-6 h-6', title: 'text-xs', sub: 'text-[9px]' },
    sm: { icon: 'w-8 h-8', title: 'text-sm', sub: 'text-[10px]' },
    md: { icon: 'w-10 h-10', title: 'text-base sm:text-lg', sub: 'text-[11px]' },
    lg: { icon: 'w-12 h-12', title: 'text-lg sm:text-xl', sub: 'text-xs' },
    xl: { icon: 'w-16 h-16', title: 'text-xl sm:text-2xl', sub: 'text-xs sm:text-sm' },
    '2xl': { icon: 'w-24 h-24', title: 'text-2xl sm:text-3xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Visual Symbol in Container */}
      <div 
        className={`rounded-xl flex items-center justify-center transition-all ${
          variant === 'white' 
            ? 'bg-white/10 backdrop-blur-xs p-1.5 border border-white/20' 
            : variant === 'emerald'
            ? 'bg-emerald-50/70 p-1.5 border border-emerald-200/80 shadow-2xs group-hover:bg-emerald-100/70'
            : variant === 'gold'
            ? 'bg-amber-50 p-1.5 border border-amber-200 shadow-2xs'
            : 'bg-slate-100 p-1.5 border border-slate-200'
        }`}
      >
        <BrandSymbol sizeClass={currentSize.icon} variant={variant} />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <div 
            className={`font-display font-extrabold leading-tight tracking-tight flex items-center gap-1 ${currentSize.title} ${
              textVariant === 'light' ? 'text-white' : 'text-slate-900'
            }`}
          >
            <span>Adriano Remigio Valarezo</span>
            <span className={textVariant === 'light' ? 'text-emerald-400' : 'text-emerald-600'}>.</span>
          </div>

          <div 
            className={`font-medium tracking-wide leading-tight mt-0.5 ${currentSize.sub} ${
              textVariant === 'light' ? 'text-emerald-300/90' : 'text-slate-500'
            }`}
          >
            {subtext}
          </div>
        </div>
      )}
    </div>
  );
};
