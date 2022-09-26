/*
 * @Author: 马晓川 maxc@dustess.com
 * @Date: 2022-08-05
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-26
 */
/**
 * @description: 字符串去空格
 * @param {*} type L：左  R：右  LR：左右
 * @return {*}
 */
const strTrim = (str: string, type: 'L' | 'R' | 'LR' | 'ALL') => {
  switch (type) {
    case 'L':
      return str.replace(/(^\s*)|(\s*$)/g, '')
    case 'R':
      return str.replace(/(^\s*)/g, '')
    case 'LR':
      return str.replace(/(\s*$)/g, '')
    case 'ALL':
      return str.replace(/\s/g, '')
    default:
      return str
  }
}

export { strTrim }
