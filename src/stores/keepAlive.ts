type State = {
  caches: string[]
}

export const useKeepAlive = defineStore('keepAlive', {
  state: (): State => ({
    caches: ['element-ui-test']
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
