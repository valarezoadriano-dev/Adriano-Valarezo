import fs from 'fs';
import path from 'path';
import type { Plugin } from 'vite';

interface SitemapEntry {
  path: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
  images?: Array<{
    loc: string;
    title: string;
    caption: string;
  }>;
  videos?: Array<{
    thumbnailLoc: string;
    title: string;
    description: string;
    contentLoc: string;
    playerLoc: string;
    duration: number;
    publicationDate: string;
    tags: string[];
  }>;
}

export interface SitemapPluginOptions {
  baseUrl?: string;
  outDirs?: string[];
}

export function generateSitemapXml(baseUrl: string = 'https://valarezoadriano.github.io/Adriano-Valarezo/'): string {
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const currentDate = new Date().toISOString().split('T')[0];

  // Definición de rutas, servicios y secciones del sitio
  const entries: SitemapEntry[] = [
    // 1. Página de inicio canónica (Máxima prioridad con assets enriquecidos)
    {
      path: '',
      changefreq: 'weekly',
      priority: '1.0',
      images: [
        {
          loc: `${normalizedBase}logo.svg`,
          title: 'Logo Oficial Adriano Remigio Valarezo - Consultoría Agroindustrial',
          caption: 'Marca corporativa del Ing. Adriano Remigio Valarezo, Ingeniero en Agroindustria Zamorano Alumni'
        },
        {
          loc: `${normalizedBase}apple-touch-icon.png`,
          title: 'Símbolo Delta e Identidad Técnica Agroindustrial',
          caption: 'Consultoría agroindustrial, gerencia de proyectos PMO y sostenibilidad en Ecuador'
        }
      ],
      videos: [
        {
          thumbnailLoc: 'https://i.vimeocdn.com/video/2126435344-1460a321c8b8128b24991285e70f541b7e374349e31558167b5a1ed2e4209a34-d_295x166',
          title: 'World Engineering Day 2025 | Cervecería Nacional Ecuador - Ing. Adriano Valarezo',
          description: 'Registro audiovisual en planta cervecera de gran escala destacando el rol de la ingeniería de procesos, manufactura y operaciones técnicas con Adriano Remigio Valarezo.',
          contentLoc: 'https://vimeo.com/1060946974/dc12bd915f',
          playerLoc: 'https://player.vimeo.com/video/1060946974?h=dc12bd915f',
          duration: 293,
          publicationDate: '2025-02-27T11:47:12+00:00',
          tags: ['Ingeniería de Procesos', 'Agroindustria Ecuador', 'Cervecería Nacional', 'Manufactura']
        },
        {
          thumbnailLoc: 'https://i.ytimg.com/vi/czFRAorUZU8/hqdefault.jpg',
          title: 'Chela Científica: La comida del futuro - ESPOL | Ing. Adriano Valarezo',
          description: 'Panel de divulgación científica organizado por la ESPOL con el Ing. Adriano Valarezo sobre biotecnología alimentaria, innovación agroindustrial y sostenibilidad.',
          contentLoc: 'https://www.youtube.com/watch?v=czFRAorUZU8',
          playerLoc: 'https://www.youtube.com/embed/czFRAorUZU8',
          duration: 4500,
          publicationDate: '2024-11-15T00:00:00+00:00',
          tags: ['ESPOL', 'Alimentación del Futuro', 'Innovación Agroalimentaria', 'Biotecnología']
        }
      ]
    },

    // 2. Rutas específicas de los Servicios Profesionales
    {
      path: '?servicio=consultoria-agroindustrial',
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      path: '?servicio=gestion-proyectos-pmo',
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      path: '?servicio=sostenibilidad-desarrollo',
      changefreq: 'monthly',
      priority: '0.85'
    },
    {
      path: '?servicio=asesoria-estrategica',
      changefreq: 'monthly',
      priority: '0.85'
    },

    // 3. Secciones clave del sitio web (navegación y anclas temáticas optimizadas)
    {
      path: '?seccion=servicios',
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      path: '?seccion=portafolio',
      changefreq: 'monthly',
      priority: '0.85'
    },
    {
      path: '?seccion=videos',
      changefreq: 'weekly',
      priority: '0.85'
    },
    {
      path: '?seccion=sobre-mi',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      path: '?seccion=metodologia',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      path: '?seccion=testimonios',
      changefreq: 'monthly',
      priority: '0.75'
    },
    {
      path: '?seccion=cotizador',
      changefreq: 'monthly',
      priority: '0.75'
    },
    {
      path: '?seccion=faq',
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      path: '?seccion=contacto',
      changefreq: 'monthly',
      priority: '0.9'
    },

    // 4. Secciones directas con ancla solicitadas para exportación GitHub
    {
      path: '#servicios',
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      path: '#portafolio',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      path: '#videos',
      changefreq: 'weekly',
      priority: '0.85'
    },
    {
      path: '#sobre-mi',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      path: '#contacto',
      changefreq: 'monthly',
      priority: '0.9'
    },
    {
      path: '#metodologia',
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      path: '#testimonios',
      changefreq: 'monthly',
      priority: '0.75'
    },
    {
      path: '#cotizador',
      changefreq: 'monthly',
      priority: '0.75'
    },
    {
      path: '#faq',
      changefreq: 'monthly',
      priority: '0.7'
    }
  ];

  const xmlEntries = entries.map((entry) => {
    const fullLoc = entry.path ? `${normalizedBase}${entry.path}` : normalizedBase;
    let imagesXml = '';
    let videosXml = '';

    if (entry.images && entry.images.length > 0) {
      imagesXml = entry.images.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`).join('');
    }

    if (entry.videos && entry.videos.length > 0) {
      videosXml = entry.videos.map(vid => `
    <video:video>
      <video:thumbnail_loc>${vid.thumbnailLoc}</video:thumbnail_loc>
      <video:title>${escapeXml(vid.title)}</video:title>
      <video:description>${escapeXml(vid.description)}</video:description>
      <video:content_loc>${vid.contentLoc}</video:content_loc>
      <video:player_loc>${vid.playerLoc}</video:player_loc>
      <video:duration>${vid.duration}</video:duration>
      <video:publication_date>${vid.publicationDate}</video:publication_date>
      <video:family_friendly>yes</video:family_friendly>${vid.tags.map(tag => `
      <video:tag>${escapeXml(tag)}</video:tag>`).join('')}
    </video:video>`).join('');
    }

    return `  <url>
    <loc>${fullLoc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>${imagesXml}${videosXml}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${xmlEntries}
</urlset>
`;
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Plugin de Vite que genera automáticamente el archivo sitemap.xml
 * al compilar el proyecto (npm run build / npm run build:pages).
 */
export function viteSitemapPlugin(options: SitemapPluginOptions = {}): Plugin {
  const baseUrl = options.baseUrl || 'https://valarezoadriano.github.io/Adriano-Valarezo/';

  return {
    name: 'vite-plugin-auto-sitemap',
    apply: 'build',

    // Emite sitemap.xml en el bundle de Rollup/Vite directamente para dist/
    generateBundle() {
      const sitemapContent = generateSitemapXml(baseUrl);
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: sitemapContent
      });
    },

    // Garantiza que también se guarde en public/ y en la raíz si aplica
    closeBundle() {
      const sitemapContent = generateSitemapXml(baseUrl);

      // Escribir en carpeta public/
      const publicDir = path.resolve(process.cwd(), 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent, 'utf-8');

      // Escribir en carpeta dist/ si existe
      const distDir = path.resolve(process.cwd(), 'dist');
      if (fs.existsSync(distDir)) {
        fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapContent, 'utf-8');
      }

      // Sincronizar archivo raíz sitemap.xml
      const rootSitemapPath = path.resolve(process.cwd(), 'sitemap.xml');
      fs.writeFileSync(rootSitemapPath, sitemapContent, 'utf-8');

      console.log('✅ [Vite Sitemap Plugin] sitemap.xml generado automáticamente con éxito en public/, dist/ y raíz.');
    }
  };
}
