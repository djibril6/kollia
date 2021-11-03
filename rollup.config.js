/* eslint-disable import/no-anonymous-default-export */
import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
    input: 'src/lib/index.ts',
    output: [
      {
        file: pkg.main,
        // dir: "dist",
        // entryFileNames: 'lib/index.ts',
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        strict: false,
      },
      // {
      //   file: pkg.module,
      //   format: 'es',
      //   exports: 'named',
      //   sourcemap: true
      // }
    ],
    plugins: [
      sass({ insert: true }),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
    ],
    external: ['react', 'react-dom'],
}