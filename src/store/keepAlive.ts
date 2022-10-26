/*
 * @Date: 2022-10-14
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-14
 * @Description:
 */
type State = {
  caches: string[]
}

export const useKeepAlive = defineStore('keepAlive', {
  state: (): State => ({
    caches: []
  }),
  actions: {
    push(name: string) {
      if (!this.caches.includes(name)) {
        this.caches.push(name)
      }
    },
    remove(name: string) {
      this.caches = this.caches.filter(item => item !== name)
    },
    clear() {
      this.caches = []
    }
  }
})
