/*
 * @Date: 2022-09-18
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-24
 * @Description:
 */
import { crc32 } from 'crc'
import { createI18n, useI18n } from 'vue-i18n'

// 自动获取 备选语言
import messages from '@intlify/unplugin-vue-i18n/messages'

// -------------------- 废弃手动获取 messages，@intlify/unplugin-vue-i18n/messages 代替 --------------------
// 获取所有 locale
// const locales = import.meta.glob('./locales/*.json', {
//   import: 'default',
//   eager: true
// });

// 路径前缀
// const localPathPrefix = './locales/';
// const messages = Object.fromEntries(
//   Object.entries(locales).map(([key, value]) => {
//     const localeKey = key.slice(localPathPrefix.length, -5);

//     return [localeKey, value];
//   })
// );
// -------------------- 废弃手动获取 messages，@intlify/unplugin-vue-i18n/messages 代替 --------------------

const i18n = createI18n({
  legacy: false, // false 表示启用 compositionApi
  locale: 'cn', // 当前语言
  fallbackLocale: 'en', // 候选语言
  messages // 其他备选语言
})

// crc32 将中文转为 crc码 与语言文件中对应 crc码 进行匹配
const lang = (key: string): string => {
  const hashKey = `K${crc32(key).toString(16)}`
  const { t } = useI18n()

  let words = t(hashKey)
  if (words === hashKey) {
    words = key
    console.log(`${key} - 无匹配语言`)
  }
  return words
}

export { i18n, lang }
