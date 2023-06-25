/*
 * @Date: 2022-10-19
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-19
 * @Description:
 */
import http from './index'

const PREFIX = '/m1/1300842-0-default'

export const get = <T>(url: string, params: T) => http.get(`${PREFIX}${url}`, { params })

export const post = <T>(url: string, params: T) => http.post(`${PREFIX}${url}`, { params })
