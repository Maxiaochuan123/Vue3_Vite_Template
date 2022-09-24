/*
 * @Date: 2022-09-17
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-24
 * @Description:
 */
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light'
})
const useToggleDark = useToggle(isDark)

export default useToggleDark
