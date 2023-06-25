import type { App } from 'vue'

import vColor from './vColor'

// 全局注册 directive
export function setDirective(app: App<Element>) {
  app.directive('color', vColor)
}
