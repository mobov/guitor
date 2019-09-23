/**
 * 封装axios请求方法
 * Created by nocoolyoyo on 2018/2/18.
 */
import axios from 'axios'
import { Message } from 'element-ui'

import { delStorage, clearStorage } from '@/utils/storage'
import { Option } from '@/typings/template'
// 创建axios实例
const Http = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 100000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
  }
})

export default Http
