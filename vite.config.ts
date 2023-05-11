import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as packageJson from './package.json';

const aliases = {
  helpers: 'src/helpers',
  components: 'src/components',
};

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, resolve(__dirname, value)])
);

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    manifest: true,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: resolve('lib', 'main.js'),
      name: 'components',
      formats: ['es', 'cjs'],
      fileName: 'components',
      // exclude node modules + package.json
      // add build step
      // a way to use the package locally
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
  resolve: {
    alias: {
      ...resolvedAliases,
    },
  },
}));
