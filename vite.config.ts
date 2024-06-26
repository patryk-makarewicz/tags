/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setupTest.tsx'],
    coverage: {
      reportsDirectory: '.coverage',
      all: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/index.{ts,tsx}',
        'src/**/*.model.*',
        'src/**/*.styles.*',
        'src/**/*.d.ts',
        'src/main.tsx',
        'src/api',
        'src/components/App',
        'src/styles',
        'src/layout',
      ],
    },
  },
});
