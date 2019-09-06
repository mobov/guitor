/* eslint-disable */
const DefinePlugin = require('webpack').DefinePlugin
const ENV = process.env.ENV
const isProduction = ENV === 'production'

const envMap = {
  development: require('./config/dev.env'),
  production: require('./config/prod.env'),
}
// console.log(envMap.production)
// console.log(ENV)
// console.log(envMap[process.env.ENV])
module.exports = {
  chainWebpack: config => {
    config.plugin('define')
      .use(DefinePlugin, [{
        'process.env': {
          ...envMap[process.env.ENV],
          IS_PRODUCTION: isProduction
        },
      }])
      .end()
  },

  configureWebpack: {
    externals: {},
    target: process.env.TARGET,
    optimization:  {
      minimize: isProduction
    }
  },
  // css: {
  //   loaderOptions: {
  //     // pass options to sass-loader
  //     sass: {
  //       // @/ is an alias to src/
  //       // so this assumes you have a file named `src/variables.scss`
  //       data: '@import "~@/styles/import.scss";',
  //       sourceMap: !isProduction,
  //     },
  //     css: {
  //       sourceMap: !isProduction,
  //     },
  //   },
  // },
}
