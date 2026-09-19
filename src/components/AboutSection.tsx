import React from 'react';
import { 
  Award, 
  GraduationCap, 
  Compass, 
  CheckCircle2, 
  Globe2, 
  Briefcase, 
  FileCheck, 
  Shield,
  ArrowRight
} from 'lucide-react';
import { ADRIANO_PROFILE, CREDENTIALS_LIST } from '../data/content';
import adrianoPhoto from '../assets/adriano-valarezo.jpg';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section 
      id="sobre-mi" 
      aria-label="Sobre Adriano Remigio Valarezo y Trayectoria Profesional"
      className="py-16 md:py-24 bg-slate-50 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Key Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <article 
              aria-label="Resumen Profesional de Adriano Remigio Valarezo"
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm relative overflow-hidden"
            >
              <figure className="mb-6">
                <img
                  src={adrianoPhoto}
                  alt="Ingeniero Adriano Remigio Valarezo - Consultor Senior"
                  className="w-20 h-20 rounded-2xl object-cover shadow-md"
                />
                <figcaption className="sr-only">Ing. Adriano Remigio Valarezo - Consultor Agroindustrial y PMO</figcaption>
              </figure>

              <h3 className="font-display font-extrabold text-2xl text-slate-900 leading-tight">
                Adriano Remigio Valarezo
              </h3>
              <p className="text-sm font-semibold text-emerald-700 mt-1">
                Ingeniero en Agroindustria
              </p>
              <p className="text-xs text-slate-500 mb-6">
                Graduado de la Escuela Agrícola Panamericana Zamorano
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Título de Licenciatura en Ingeniería Agroindustrial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Ex-Gerente General & Coordinador de Proyectos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Experiencia en Ecuador, Honduras y Centroamérica</span>
                </div>
              </div>

              {/* Direct Action with Internal Anchor for Search Crawlers */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenContact();
                  }}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Agendar Consulta Directa</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          </div>

          {/* Right Column: Bio & Core Philosophy (7 cols) */}
          <article 
            aria-label="Biografía y Pilares de Consultoría"
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
              <Award className="w-3.5 h-3.5" />
              Perfil Profesional & Trayectoria
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Más de 22 Años Uniendo la Ciencia Agroindustrial con la Eficiencia Directiva
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              La formación técnica en la <strong className="text-slate-800">Escuela Agrícola Panamericana Zamorano</strong> imprime un sello de disciplina rigurosa, orientación práctica a la producción y estándares de calidad mundial. Adriano Remigio Valarezo ha llevado este principio a la gerencia de empresas, coordinación de proyectos de infraestructura (<a href="#portafolio" className="text-emerald-700 font-semibold hover:underline">ver casos destacados</a>) y formulación de planes estratégicos internacionales.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Habiendo ejercido cargos como Gerente General y Coordinador de Proyectos en Guayaquil y Quito, así como consultor clave en informes socioeconómicos para entidades de cooperación en Honduras (Fundación RDS-HN), comprende el lenguaje de los inversionistas, las exigencias de los bancos y las realidades cotidianas de la planta de producción. Conozca nuestra <a href="#metodologia" className="text-emerald-700 font-semibold hover:underline">metodología de trabajo</a> o explore los <a href="#servicios" className="text-emerald-700 font-semibold hover:underline">servicios técnicos especializados</a>.
            </p>

            {/* 4 Core Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Rigor de Ingeniería
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Decisiones basadas en balances de materia, normas BPM/HACCP y datos auditables, no en intuiciones.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-emerald-600" />
                  Visión de Rentabilidad
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Cada recomendación técnica está calibrada para proteger el flujo de caja y maximizar el margen operativo.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-600" />
                  Transparencia Absoluta
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Dictámenes independientes y objetivos sin sesgos comerciales ni compromisos con proveedores.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                  <Globe2 className="w-4 h-4 text-emerald-600" />
                  Sostenibilidad Real
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Integración de cadenas de valor justas y optimización de huella ambiental sin sacrificar productividad.
                </p>
              </div>
            </div>

          </article>

        </div>

      </div>
    </section>
  );
};
