/**
 * Created by nocoolyoyo on 2018/3/17.
 */

module.exports = function (obj) {
  const _temp = {}
  Object.keys(obj).forEach((key) => {
    _temp[key] = JSON.stringify(obj[key])
  })
  return _temp
}
