/*
 * @Date: 2022-07-19
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-17
 * @Description:
 */
// 设置 Element-UI 全局组件配置
import { ElConfigProvider } from 'element-plus'

// 设置 Element-UI 组件语言
import cn from 'element-plus/lib/locale/lang/zh-cn' // (中文)
import en from 'element-plus/lib/locale/lang/en' // (英文)
const locale: any = {
  cn,
  en
}

// 组件默认大小
type Size = 'default' | 'small' | 'large'
const size: Size = 'default'

export { ElConfigProvider, locale, size }
