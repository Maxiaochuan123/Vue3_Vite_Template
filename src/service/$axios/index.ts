/*
 * @Date: 2022-07-16
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-19
 */

// axios 配置 https://www.axios-http.cn/docs/req_config
import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { RequestCanceler } from './requestCanceler'
import { getToken } from './auth'
import qs from 'qs'
import errorCode from './errorCode'
import { ElMessage } from 'element-plus'
// import 'element-plus/es/components/message/style/css'
// import { showLoading, closeLoading } from "./loading";
import PageLoadingBar from '@plugins/pageLoadingBar'

const $axios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL, //服务请求接口
  // withCredentials: true, //跨域是否允许携带凭证
  headers: {
    Authorization: `Bearer ${getToken()}`,
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' //请求头设置
  },
  transformRequest: data => qs.stringify(data), //对发送的 data 进行处理
  timeout: 10000 //接口超时
})

const canceler = new RequestCanceler()

// axios request 拦截器配置
$axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // showLoading();
    PageLoadingBar.start()
    // 检查是否存在重复请求，若存在则取消已发的请求
    canceler.removePendingRequest(config)
    // 把当前的请求信息添加到pendingRequest
    canceler.addPendingRequest(config)
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

    // 移除正在pending中的请求
    canceler.removePendingRequest(res.config)

    // 获取状态码
    const code: number = res.data['code'] || 200

    if (code === 200) {
      return Promise.resolve(res.data)
    } else {
      const errorMsg = errorCode(code) || res.data['message']
      ElMessage.error(errorMsg)
      return Promise.reject(res.data)
    }
  },
  (error: AxiosError) => {
    // closeLoading();
    PageLoadingBar.done()

    // 移除正在pending中的请求
    canceler.removePendingRequest(error.config || {})

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
