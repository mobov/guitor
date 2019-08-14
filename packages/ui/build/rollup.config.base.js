import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import packages from '../package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue']
const external = Object.keys(packages.dependencies)

const config = {
  // inputOptions
  input: 'src/index.ts',
  plugins: [
    postcss({ extensions: ['.scss'] }),
    typescript({
      importHelpers: true,
      // objectHashIgnoreUnknownHack: true,
      /// rollupCommonJSResolveHack: true,
      tsconfig: 'tsconfig.json',
      clean: true,
      // rootDir: './src',
      // declarationDir: './types/',
      useTsconfigDeclarationDir: true,
      extensions
    }),
    vue({
      data: {
        scss: '@import "~@mobov/scss-helper/import";'
      }
    }),
    babel({
      runtimeHelpers: true,
      babelrc: false,
      presets: [
        '@babel/preset-env',
        '@vue/babel-preset-jsx',
        // '@babel/preset-typescript',
        // 'es2015-rollup',
      ],
      extensions,
      exclude: 'node_modules/**'
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      extensions
    }),
    commonjs({
      extensions
    })
  ],
  external
}

export default config
