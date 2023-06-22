/*
 * @Date: 2022-06-09
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-19
 */

// 样式重置
import 'normalize.css'
import '@assets/styles/reset/index.scss'

// 日间模式 / 夜间模式
import '@assets/styles/theme/mode/light.scss'
import '@assets/styles/theme/mode/dark.scss'

// 主题色
import '@assets/styles/theme/color/atDusk.scss'
import '@assets/styles/theme/color/volcano.scss'
import '@assets/styles/theme/color/dusk.scss'
import '@assets/styles/theme/color/lightCyan.scss'
import '@assets/styles/theme/color/auroraGreen.scss'
import '@assets/styles/theme/color/dockBlue.scss'
import '@assets/styles/theme/color/geekBlue.scss'
import '@assets/styles/theme/color/default.scss'

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
import pinia from '~/src/plugins/piniaPersistedstate'
app.use(pinia)

// i18n
import { i18n, lang } from '@/i18n'
app.config.globalProperties.$lang = lang
app.use(i18n)

app.mount('#app')
