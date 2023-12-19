import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

export default defineConfig({
  plugins: [react(), dts({ include: ['src'] })],
  build: {
    lib: {
      entry: {
        main: resolve(__dirname, 'src/index.ts'),
        components: resolve(__dirname, './src/components'),
        providers: resolve(__dirname, './src/providers'),
      },
      fileName: (format, fileName) => `${fileName}-index.${format === 'cjs' ? 'cjs' : 'es.js'}`,
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
    },
  },
});
