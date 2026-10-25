import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works from any folder (GitHub Pages, Netlify, a subfolder).
export default defineConfig({
  base: './',
  plugins: [react()],
});
