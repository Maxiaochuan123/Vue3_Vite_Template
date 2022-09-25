/*
 * @Date: 2022-08-22
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-25
 * @Description:
 */
module.exports = {
  // 一行多少字符，超出换行 (默认80)
  printWidth: 100,
  // tab缩进 2 个空格 (默认2)
  tabWidth: 2,
  // 不使用 tab 缩进，而使用空格 (默认false)
  useTabs: false,
  // 行尾需要有分号 (默认true)
  semi: false,
  // 使用单引号代替双引号  (默认false，在jsx中配置无效, 默认都是双引号)
  singleQuote: true,
  // 对象的 key 是否加引号 <as-needed:仅在必要时|consistent:有一个需要引号就统一加|preserve:保留用户输入的引号>
  quoteProps: 'as-needed',
  // 对象数组最后一位末尾添加逗号 <none:不需要|es5:尾部逗号兼容es5|all:所有可能的情况，需要node8和es2017以上的环境>
  trailingComma: 'none',
  // 大括号内的首尾需要空格 { foo: bar }
  bracketSpacing: true,
  // 箭头函数，只有一个参数是否需要括号 <always:需要|avoid:不需要>
  arrowParens: 'avoid',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 换行符自动
  endOfLine: 'auto'
}
