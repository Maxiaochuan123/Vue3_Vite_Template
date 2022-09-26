<!--
 * @Date: 2022-06-09
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-24
 * @Description:
-->

#### i18n 使用方法

1. 基础功能由 vue-i18n 实现，搭配 i18next-scanner 实现自动生成 语言文件
2. 直接在模板中使用 $lang('你好') 再通过 pnpm run scanner 生成语言文件，因为会自动匹配 $lang() 中的中文来生成 crc 格式的语言文件，再手动翻译非 中文文件，具体步骤如下

- 缺点：如果是动态的值 $lang(msg), 每次需要手动把值列出来再运行 scanner 命令

- 在 src > i18n > scanner.config.js > options > lngs 中添加需要生成的文件 默认 lngs: ['cn', 'en']

- 注意每次更新 语言文件需要重启 vue 项目，因为在启动之初已经加载到了内存中，后续变更无法实时监听

- 模板中使用

```html
<span> {{ $lang('你好') }}</span>
```

- js 中使用

```javascript
import { lang } from '@/i18n'
const langs = [
  {
    label: lang('中文'),
    value: 'cn'
  },
  {
    label: lang('英文'),
    value: 'en'
  }
]
```

- 运行命令生成 crc 格式的 语言 json 文件

  > pnpm run scanner

- 只会的语言文件都是中文的，其他语言需要自行翻译
  例如：将 en.json 中的内容全选，复制到翻译软件，翻译后粘贴覆盖即可

#### 方案 2 i18n-pro 但遇到问题，还在进行中~

- [issues](https://github.com/eyelly-wu/i18n-pro/issues/1)
- 经过与作者沟通修改，我尝试集成，但有个致命问题是 只能重新刷新页面才有效果，所以放弃，依然使用上面的方案
