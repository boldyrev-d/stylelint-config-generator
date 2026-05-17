import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative base makes the build usable from any static-hosting subpath.
  base: './',
  plugins: [react()],
  server: { port: 3000, open: true },
  build: {
    outDir: 'build',
    emptyOutDir: true,
    assetsDir: 'assets',
    sourcemap: false,
    target: 'es2022',
  },
});
