/*
 * @Date: 2022-10-19
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-19
 * @Description:
 */
import $axios from './index'

const PREFIX = '/m1/1300842-0-default'

export const $get = <T>(url: string, params: T) => $axios.get(`${PREFIX}${url}`, { params })

export const $post = <T>(url: string, params: T) => $axios.post(`${PREFIX}${url}`, { params })
