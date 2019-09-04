import { merge }  from 'lodash'
import baseConfig from './rollup.config.base'

export default merge(baseConfig, {
  output: [
    {
      file: `lib/index.esm.js`,
      format: 'esm',
      exports: 'named'
    },
    {
      file: `lib/index.cjs.js`,
      format: 'cjs',
      exports: 'named'
    },
    {
      file: `lib/index.umd.js`,
      format: 'umd',
      exports: 'named'
    },
  ]
})
