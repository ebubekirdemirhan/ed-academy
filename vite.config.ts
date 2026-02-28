import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages project site under https://ebubekirdemirhan.github.io/ed-academy/
  base: '/ed-academy/',
});
