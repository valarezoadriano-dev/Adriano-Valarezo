import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({mode}) => {
  return {
    // GitHub Pages serves this project from /Adriano-Valarezo/, so assets
    // must be built with that base path. `vite preview` also runs in
    // 'production' mode (it serves the build output), so it needs the same
    // base as `vite build`; only the dev server (`vite`, mode 'development')
    // keeps the root path.
    base: mode === 'production' ? '/Adriano-Valarezo/' : '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
