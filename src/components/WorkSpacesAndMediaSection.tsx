import React, { useState } from 'react';
import { 
  Video, 
  ExternalLink, 
  Play, 
  Building2, 
  GraduationCap, 
  CheckCircle2, 
  Clock, 
  Sparkles,
  Share2,
  Calendar,
  Layers
} from 'lucide-react';
import { FEATURED_VIDEOS, ADRIANO_PROFILE } from '../data/content';
import { FeaturedVideo } from '../types';
import { 
  LinkedInIcon, 
  InstagramIcon, 
  FacebookIcon, 
  XTwitterIcon, 
  VimeoIcon, 
  YouTubeIcon 
} from './SocialIcons';

interface WorkSpacesAndMediaSectionProps {
  onOpenContact?: () => void;
}

export const WorkSpacesAndMediaSection: React.FC<WorkSpacesAndMediaSectionProps> = ({ onOpenContact }) => {
  const [activeVideoId, setActiveVideoId] = useState<string>(FEATURED_VIDEOS[0].id);

  const activeVideo: FeaturedVideo = FEATURED_VIDEOS.find(v => v.id === activeVideoId) || FEATURED_VIDEOS[0];

  return (
    <section 
      id="videos" 
      aria-label="Videos del trabajo realizado en diferentes espacios y redes sociales de Adriano Remigio Valarezo"
      className="py-16 md:py-24 bg-white border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
            <Video className="w-3.5 h-3.5" />
            Evidencia Audiovisual & Espacios de Trabajo
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Trabajo Realizado en Terreno, Plantas Industriales y Espacios de Debate
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Conozca de primera mano las intervenciones técnicas, visitas a planta e intercambios académicos en los que participa el Ing. Adriano Remigio Valarezo aportando criterio de ingeniería, gestión operativa e innovación agroalimentaria.
          </p>
        </div>

        {/* Video Selector Tabs */}
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-14">
          
          {/* Main Video Theater Player (Left - 8 cols on desktop) */}
          <div className="w-full lg:w-8/12">
            <div className="bg-slate-950 rounded-2xl overflow-hidden shadow-lg border border-slate-800">
              
              {/* Responsive 16:9 Video Embed */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  key={activeVideo.id}
                  src={activeVideo.embedUrl}
                  title={activeVideo.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Theater Information Bar */}
              <div className="p-6 sm:p-7 bg-slate-900 text-white">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {activeVideo.platform === 'vimeo' ? (
                        <>
                          <VimeoIcon className="w-3.5 h-3.5 text-sky-400" />
                          <span>Video en Vimeo</span>
                        </>
                      ) : (
                        <>
                          <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
                          <span>Video en YouTube</span>
                        </>
                      )}
                    </span>
                    <span className="text-xs text-slate-400">·</span>
                    <span className="text-xs text-slate-300 font-medium">
                      {activeVideo.institution}
                    </span>
                  </div>

                  <a
                    href={activeVideo.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Abrir en {activeVideo.platform === 'vimeo' ? 'Vimeo' : 'YouTube'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-2 leading-snug">
                  {activeVideo.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {activeVideo.description}
                </p>

                {/* Metadata details */}
                <div className="pt-4 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <Building2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Espacio de Intervención:</span>
                      <span className="text-slate-400">{activeVideo.space}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Rol / Participación:</span>
                      <span className="text-slate-400">{activeVideo.roleHighlighted}</span>
                    </div>
                  </div>
                </div>

                {/* Key topics as clean unboxed inline elements with separators */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs text-slate-400">
                  <span className="text-slate-500 font-medium">Temas abordados:</span>
                  {activeVideo.keyTopics.map((topic, i) => (
                    <React.Fragment key={topic}>
                      <span className="text-slate-300 font-medium">{topic}</span>
                      {i < activeVideo.keyTopics.length - 1 && (
                        <span className="text-slate-600" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Playlist of Featured Spaces (4 cols on desktop) */}
          <div className="w-full lg:w-4/12 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Seleccionar Video ({FEATURED_VIDEOS.length})
              </span>
              <span className="text-xs text-emerald-700 font-medium">
                Reproducción Inmediata
              </span>
            </div>

            <div className="space-y-3">
              {FEATURED_VIDEOS.map((vid) => {
                const isSelected = vid.id === activeVideoId;
                return (
                  <button
                    key={vid.id}
                    onClick={() => setActiveVideoId(vid.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-50/80 border-emerald-500 shadow-sm ring-1 ring-emerald-500/20'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 ${
                        isSelected 
                          ? 'bg-emerald-600 text-white' 
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        <Play className="w-4 h-4 fill-current" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-[11px] mb-1">
                          <span className={`font-semibold uppercase tracking-wider ${
                            isSelected ? 'text-emerald-800' : 'text-slate-500'
                          }`}>
                            {vid.platform === 'vimeo' ? 'Vimeo Video' : 'YouTube Video'}
                          </span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-500">{vid.duration}</span>
                        </div>

                        <h4 className="font-display font-bold text-sm text-slate-900 leading-snug line-clamp-2 mb-1.5">
                          {vid.title}
                        </h4>

                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {vid.subtitle}
                        </p>

                        <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                          <span className="truncate max-w-[200px]">{vid.space}</span>
                          <span className="font-semibold text-emerald-700 shrink-0">
                            {isSelected ? 'Reproduciendo ahora' : 'Ver video'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Context Card */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 text-xs text-slate-600 space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>Presencia Profesional Multiespacio</span>
              </div>
              <p className="leading-relaxed">
                Adriano Remigio Valarezo traslada su experiencia entre plantas industriales de alta exigencia, proyectos en campo con comunidades y paneles de divulgación académica.
              </p>
              {onOpenContact && (
                <button
                  onClick={onOpenContact}
                  className="w-full py-2 px-3 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-200/70 transition-colors text-center cursor-pointer"
                >
                  Consultar Disponibilidad para su Proyecto
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Dedicated Social Media Channels Integration */}
        <div className="mt-14 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Redes Sociales & Canales Oficiales
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900">
              Conecte con Adriano Remigio Valarezo
            </h3>
            <p className="text-sm text-slate-600">
              Siga las publicaciones técnicas, análisis del sector agroalimentario, visitas a proyectos y reflexiones estratégicas en sus perfiles oficiales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* LinkedIn */}
            <a
              href={ADRIANO_PROFILE.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil oficial de LinkedIn de Adriano Remigio Valarezo"
              className="group p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#0A66C2]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-[#0A66C2] transition-colors">
                  LinkedIn Profesional
                </h4>
                <p className="text-xs text-slate-500 mb-2">
                  /in/adriano-valarezo
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Trayectoria corporativa, recomendaciones directivas y artículos sobre agroindustria y PMO.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0A66C2]">
                <span>Conectar en LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>

            {/* Instagram */}
            <a
              href={ADRIANO_PROFILE.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil oficial de Instagram de Adriano Remigio Valarezo"
              className="group p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-pink-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-pink-600 transition-colors">
                  Instagram
                </h4>
                <p className="text-xs text-slate-500 mb-2">
                  @adrianovalarezo
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Registros fotográficos de visitas a campo, plantas agroalimentarias y vivencias profesionales.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-pink-600">
                <span>Seguir en Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>

            {/* Facebook */}
            <a
              href={ADRIANO_PROFILE.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Página y perfil de Facebook de Adriano Remigio Valarezo"
              className="group p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#1877F2]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <FacebookIcon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-[#1877F2] transition-colors">
                  Facebook
                </h4>
                <p className="text-xs text-slate-500 mb-2">
                  /adrianovalarezo
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Actualizaciones comunitarias, eventos institucionales, proyectos y vinculación productiva.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1877F2]">
                <span>Ver en Facebook</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>

            {/* X / Twitter */}
            <a
              href={ADRIANO_PROFILE.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil oficial de X (Twitter) de Adriano Remigio Valarezo"
              className="group p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-800 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <XTwitterIcon className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-slate-900 transition-colors">
                  X (Twitter)
                </h4>
                <p className="text-xs text-slate-500 mb-2">
                  @adrinaovalarezo
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Opinión sobre coyuntura agroindustrial, tendencias tecnológicas, sostenibilidad e innovación.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-800">
                <span>Seguir en X</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
