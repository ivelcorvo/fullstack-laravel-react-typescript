// frontend/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    // >>> CORREÇÃO AQUI: Força a porta correta <<<
    port: 3000, 
    watch: {
      usePolling: true,
    },
    proxy: {
      '/api': {
        target: 'http://nginx', 
        changeOrigin: true,
        secure: false,
      }
    }
  }
});