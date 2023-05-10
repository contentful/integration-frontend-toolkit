import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import * as packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    dts({
      include: ['src/**'],
    }),
  ],
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: resolve('lib', 'main.js'),
      name: '@contentful/integration-component-library',
      fileName: (format) => `@contentful/integration-component-library.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}));
