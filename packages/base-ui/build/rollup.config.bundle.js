import { merge }  from 'lodash'
import baseConfig from './rollup.config.base'

export default merge(baseConfig, {
  output: [
    {
      file: `lib/index.esm.js`,
      format: 'esm',
      name: 'GuitorBaseUI',
      exports: 'named'
    },
    {
      file: `lib/index.cjs.js`,
      format: 'cjs',
      name: 'GuitorBaseUI',
      exports: 'named'
    },
    {
      file: `lib/index.umd.js`,
      format: 'umd',
      name: 'GuitorBaseUI',
      exports: 'named'
    },
  ]
})
