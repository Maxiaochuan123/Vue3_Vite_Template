/*
 * @Date: 2022-06-09
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-24
 */

// 样式重置
import 'normalize.css'
import '@assets/styles/reset/index.scss'

// 明亮模式 / 黑暗模式
import '@assets/styles/theme/dark.scss'
import '@assets/styles/theme/light.scss'

// iconfont
import '@assets/iconfont/iconfont.css'
import '@assets/iconfont/iconfont.js'

// 对应环境设置 网页标题
import '@plugins/documentTitle'

// Vue
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// Vue-Router
import router from './router'
app.use(router)

// Pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 持久化
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

// i18n
import { i18n, lang } from '@/i18n'
app.config.globalProperties.$lang = lang
app.use(i18n)

app.mount('#app')
