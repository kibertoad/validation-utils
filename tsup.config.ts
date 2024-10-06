import {defineConfig} from 'tsup';

export default defineConfig({
  outDir: './dist',
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  outExtension: ({ format }) => ({
    js: format === 'cjs' ? '.cjs' : '.mjs',
  }),
  cjsInterop: true,
  entry: {
    index: './index.ts',
  },
  sourcemap: false,
  skipNodeModulesBundle: true,
  target: 'es2018',
  tsconfig: './tsconfig.build.json',
  keepNames: true,
  bundle: true,
})
