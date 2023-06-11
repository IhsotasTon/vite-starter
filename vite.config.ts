import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: ['CANISTER', 'VITE'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
