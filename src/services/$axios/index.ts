/*
 * @Date: 2022-07-16
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-19
 */

// axios 配置 https://www.axios-http.cn/docs/req_config

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import qs from 'qs'
import errorCode from './errorCode'
import { ElMessage } from 'element-plus'
// import { showLoading, closeLoading } from "./loading";
import PageLoadingBar from '@plugins/pageLoadingBar'

const $axios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL, //服务请求接口
  // withCredentials: true, //跨域是否允许携带凭证
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token') as string}` || '',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' //请求头设置
  },
  transformRequest: data => qs.stringify(data), //对发送的 data 进行处理
  timeout: 10000 //接口超时
})

// axios request 拦截器配置
$axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // showLoading();
    PageLoadingBar.start()

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// axios response 拦截器配置
$axios.interceptors.response.use(
  (res: AxiosResponse) => {
    // closeLoading();
    PageLoadingBar.done()

    // 默认成功状态码
    const code: number = res.data['code'] || 200

    // 获取错误信息
    const errorMsg = errorCode(code) || res.data['message']

    if (code === 200) {
      return Promise.resolve(res.data)
    } else {
      ElMessage.error(errorMsg)

      return Promise.reject(res.data)
    }
  },
  (error: AxiosError) => {
    // closeLoading();
    PageLoadingBar.done()

    const { response } = error
    let { message } = error

    if (response) {
      if (message == 'Network Error') {
        message = '后端接口连接异常'
      } else if (message.includes('timeout')) {
        message = '系统接口请求超时'
      } else if (message.includes('Request failed with status code')) {
        message = '系统接口' + message.substring(message.length - 3) + '异常'
      }
      ElMessage.error(message)
    } else {
      if (!window.navigator.onLine) {
        //断网处理：跳转到断网页面
        return
      }
      return Promise.reject(error)
    }
  }
)

export default $axios
