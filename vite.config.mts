import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this is where Vercel expects the build output
  },
  server: {
    historyApiFallback: true, // This helps handle routing in SPAs
  },
});
