/*
 * @Date: 2022-08-08
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-08
 * @Description: 常用的判断
 */

/**
 * @description: 判断数据类型
 * @param {any} data 数据
 * @return {string} 类型字符串(小写)
 */
const superTypeof = (data: any): string => {
  const type: string = typeof data

  return type === 'object' ? Object.prototype.toString.call(data).slice(8, -1).toUpperCase() : type
}

/**
 * @description: 判断数据是否为空
 * @param {string} data 数据
 * @return {boolean} true：为空  false：不为空
 */
const dataIsEmpty = (data: any): boolean => {
  if (
    data === undefined ||
    data === null ||
    data === '' ||
    ((superTypeof(data) === 'array' || superTypeof(data) === 'object') &&
      Object.keys(data).length === 0)
  ) {
    return true
  } else {
    return false
  }
}

export { superTypeof, dataIsEmpty }
