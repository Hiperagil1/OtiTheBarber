import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: "/OtiTheBarber/",
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite accesul de pe orice dispozitiv din rețea
    port: 3000, // Asigură-te că folosești același port
    open: true, // Deschide automat aplicația la pornire
  },
});
