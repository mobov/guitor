// 提供导出包CDN的文件和路径
export default {
  'vue': {
    script: 'dist/vue.js'
  },
  'element-ui': {
    script: 'lib/index.js',
    style: 'lib/theme-chalk/index.css'
  },
  '@mobov/es-helper': {
    script: 'lib-umd/index.js'
  },
  '@guitor/base-ui': {
    script: 'lib/index.umd.js'
  }
} as {
  [field: string]: {
    script?: string
    style?: string
  }
}
