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
        components: resolve(__dirname, './src/components'),
        providers: resolve(__dirname, './src/providers'),
      },
      formats: ['es'],
      fileName: (_format, fileName) => `${fileName}-index.es.js`,
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
    },
  },
});
