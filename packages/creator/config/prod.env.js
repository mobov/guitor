/* *
 * 生产环境配置
 * Created by nocoolyoyo on 2018/2/18.
 */


const formatEnv = require('./_formatEnv')

const env = {
  // 环境变量名
  NODE_ENV: 'production',
  // 提供导出包CDN的默认地址
  NPM_CDN: 'http://unpkg.com/'
}

module.exports = formatEnv(env)
