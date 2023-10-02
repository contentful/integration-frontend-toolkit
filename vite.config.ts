import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import pkg from './package.json';
import * as packageJson from './package.json';

export default defineConfig(() => ({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ['src'],
    }),
  ],
  build: {
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      input: ['src/index.ts'],
      external: [...Object.keys(pkg.peerDependencies)],
      output: [
        {
          dir: 'dist',
          format: 'esm',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: ({ name: fileName }) => {
            return `${fileName}.js`;
          },
        },
      ],
    },
    optimizeDeps: {
      exclude: Object.keys(packageJson.peerDependencies),
    },
    esbuild: {
      minify: true,
    },
  },
}));
