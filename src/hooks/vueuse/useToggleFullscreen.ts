/*
 * @Date: 2022-09-15
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-24
 * @Description:
 */
import { useFullscreen } from '@vueuse/core'

// 切换 全屏/退出
const { toggle: useToggleFullscreen } = useFullscreen()

export default useToggleFullscreen
