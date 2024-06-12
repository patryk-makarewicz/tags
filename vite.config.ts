/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/setupTest.ts'],
    coverage: {
      reportsDirectory: '.coverage',
      all: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/index.{ts,tsx}',
        'src/**/*.model.*',
        'src/**/*.styles.*',
        'src/**/*.d.ts',
        'src/api',
        'src/styles',
        'src/layout',
      ],
    },
  },
});
