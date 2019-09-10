/*
 *  封装LocalStorage存取服务
 *
 * @date       2018/2/19
 * @author   nocoolyoyo
 */
const prefix = `guitor-${process.env.NODE_ENV}-` // 添加prefix便于调试

function isJsonString(data: any) {
  try {
    JSON.parse(data)
  } catch (e) {
    return false
  }
  return true
}

export function setStorage(key: string, value: any) {
  let data = null
  if (value instanceof Object) {
    data = JSON.stringify(value)
  } else {
    data = value
  }
  localStorage.setItem(`${prefix + key}`, data)
}

export function getStorage(key: string): any {
  const result: any = localStorage.getItem(`${prefix + key}`)
  if (isJsonString(result)) {
    return JSON.parse(result)
  } else {
    return result
  }
}

export function delStorage(key: string) {
  return localStorage.removeItem(`${prefix + key}`)
}

export function clearStorage(key?: string) {
  if (key) {
    setStorage(key, null)
  } else {
    localStorage.clear()
  }
}
