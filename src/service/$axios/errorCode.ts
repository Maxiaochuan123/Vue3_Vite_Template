/*
 * @Date: 2022-08-14
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-19
 * @Description:
 */
export default (code: number): string => {
  switch (code) {
    case 400:
      return '错误的请求(400)'

    case 401:
      return '未授权，请重新登录(401)'

    case 403:
      return '拒绝访问(403)'

    case 404:
      return '请求错误,未找到该资源(404)'

    case 405:
      return '请求方法未允许(405)'

    case 408:
      return '请求超时(406)'

    case 500:
      return '服务器端出错(500)'

    case 501:
      return '网络未实现(501)'

    case 502:
      return '网络错误(502)'

    case 503:
      return '服务不可用(503)'

    case 504:
      return '网络超时(504)'

    case 505:
      return 'http版本不支持该请求(505)'

    default:
      return `服务连接错误 --${code}`
  }
}
