import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

export default defineConfig({
  plugins: [dts({
    exclude: ["lib/**/*.spec.ts", "test"],
  })],
  build: {
    ssr: true,
    minify: false,
    lib: {
      entry: {
        "components": resolve(__dirname, 'lib/components/index.ts'),
        "sdks": resolve(__dirname, 'lib/sdks/index.ts'),
        "types": resolve(__dirname, 'lib/types/index.ts'),
      },
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies)],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'lib',
      },
    },
  },
});
