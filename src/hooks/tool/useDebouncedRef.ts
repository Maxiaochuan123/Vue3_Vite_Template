import { customRef } from 'vue'

// 这个自定义 customRef 创建了一个带有防抖功能的 ref函数
export default (value: string, delay = 200) => {
  let timeout: NodeJS.Timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}
