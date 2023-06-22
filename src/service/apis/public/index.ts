/*
 * @Date: 2022-07-17
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-19
 */

import { $get, $post } from '~/src/service/$axios/requestHandle'

type GetUser = { petId: number }
export const getUser = (query: GetUser) => $get('/pet/', query)

type Login = { username: string; password: string }
export const login = (params: Login) => $post(`/apifox/user/login`, params)

type Pet = { name: string; status: string }
export const pet = (params: Pet) => $post('/pet', params)
