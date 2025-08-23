import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api":"https://future-fs-01-server-686q.onrender.com", // Backend server
    },
  },
});



