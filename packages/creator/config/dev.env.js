/* *
 * 开发环境配置参数
 * Created by nocoolyoyo on 2018/2/18.
 */


const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const formatEnv = require('./_formatEnv')

// 环境打包变量
const env = {
  // 环境变量名
  NODE_ENV: 'development'
}

module.exports = merge(prodEnv, formatEnv(env))
