/*
 * @Date: 2022-09-17
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-17
 * @Description:
 */

// https://currency.js.org/
import currency from 'currency.js'

// 计算
const calculation = (type: string, value1: number, value2: number): number => {
  const calculationMethods = {
    add: currency(value1).add(value2), // 加
    subtract: currency(value1).subtract(value2), // 减
    multiply: currency(value1).multiply(value2), // 乘
    divide: currency(value1).divide(value2) // 除
  }

  return calculationMethods[type]
}

// 金额格式化
const moneyFormat = (value1: number, precision = 2, symbol = '¥'): string => {
  return currency(value1, { precision, symbol }).format()
}

export { calculation, moneyFormat }
