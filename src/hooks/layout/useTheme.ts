/*
 * @Date: 2022-09-17
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-24
 * @Description:
 */
import { useDark, useToggle } from '@vueuse/core'

// 日间模式 / 夜间模式
const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light'
})
const useToggleDark = useToggle(isDark)

// 主题色
const themeColorList = [
  { type: 'default', color: '#409eff', describe: '默认' },
  { type: 'atDusk', color: '#F5222D', describe: '薄暮' },
  { type: 'volcano', color: '#FA541C', describe: '火山' },
  { type: 'dusk', color: '#FAAD14', describe: '日暮' },
  { type: 'lightCyan', color: '#13C2C2', describe: '明青' },
  { type: 'auroraGreen', color: '#52C41A', describe: '极光绿' },
  { type: 'dockBlue', color: '#4380d3', describe: '船坞蓝' },
  { type: 'geekBlue', color: '#2F54EB', describe: '极客蓝' }
]

const useToggleThemeColor = (type: string) => {
  document.querySelector('html')?.setAttribute('theme-color', type)
}

// 跟随系统
// onMounted(() => {
//   const systemDark = window.matchMedia('(prefers-color-scheme: dark)')
//   systemDark.addEventListener('change', e => {
//     if (e.matches) {
//       // 系统切换到深色模式
//     } else {
//       // 系统切换到浅色模式
//     }
//   })
// })
export { useToggleDark, themeColorList, useToggleThemeColor }
