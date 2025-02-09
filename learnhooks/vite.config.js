import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/to-do-list/', // This should match the repository name
  build: {
    outDir: 'dist',
  },
  publicDir: 'public', // Specify the public directory
});