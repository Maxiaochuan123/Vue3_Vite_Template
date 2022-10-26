/*
 * @Date: 2022-10-19
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-19
 * @Description:
 */
import $axios from './index'

const PREFIX = '/m1/1300842-0-default'

const $get = (url: string, params: any) => $axios.get(`${PREFIX}${url}`, { params })

const $post = (url: string, params: any) => $axios.post(`${PREFIX}${url}`, { params })

export { $get, $post }
