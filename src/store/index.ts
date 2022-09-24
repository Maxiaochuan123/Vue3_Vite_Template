/*
 * @Date: 2022-06-11
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-08-22
 * @Description:
 */
import { defineStore } from 'pinia'
import type { useMainStoreInterFace } from './interface'

export const useMainStore = defineStore('main', {
  // 类似组件的 data, 用来存储全局状态
  state: (): useMainStoreInterFace => ({
    count: 100,
    info: {
      name: 'zs',
      age: 18
    }
  }),

  // 类似组件的 computed, 用来封装计算属性, 有缓存的功能
  getters: {
    // 方式一: 传入 state, ※不能使用箭头函数, 因为 this 指向变更
    // countGetter (state) {
    //     return state.count + 10
    // }

    // 方式二: 使用 this
    countGetter(): number {
      return this.count + 10
    }
  },

  /**
   * 类似组件的 methods, 封装业务逻辑, 修改 state
   */
  actions: {
    changeCount(num: number): void {
      this.count = this.count + num
    }
  }
})
