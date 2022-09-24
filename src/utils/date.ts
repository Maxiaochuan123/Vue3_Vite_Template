/*
 * @Author: 马晓川 maxc@dustess.com
 * @Date: 2022-08-05 18:00:10
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-06
 */

import { strTrim } from '@utils/character'

/**
 * @description: 日期项单位补0
 * @param {number} item 日期项
 * @return {number | string}
 */

const formatterDateItem = (item: number): number | string => {
  return String(item).length === 1 ? `0${item}` : item
}

/**
 * @description: 获取日期类型 当前日期 or 自定义日期
 * @param {*} dateType 日期类型：默认当前日期
 * @return {*}
 */
const getDateType = (date = 'current') => {
  return date === 'current' ? new Date() : new Date(date)
}

/**
 * @description: 获取日期项
 * @param {*} date Date or timeStamp
 */
const getDateItem = (date: Date | number) => {
  const DATE = new Date(date)
  const YYYY = DATE.getFullYear()
  const MM = formatterDateItem(DATE.getMonth() + 1)
  const DD = formatterDateItem(DATE.getDate())
  const HH = formatterDateItem(DATE.getHours())
  const mm = formatterDateItem(DATE.getMinutes())
  const ss = formatterDateItem(DATE.getSeconds())

  return { YYYY, MM, DD, HH, mm, ss }
}

/**
 * @description: 获取具体日期：YYYY-MM-DD
 * @param {*} dateType 日期类型：默认当前日期
 * @param {*} separator 分隔符
 * @return {*} string
 */
const getDate = (dateType = 'current', separator = '-'): string => {
  const data = getDateType(dateType)
  const { YYYY, MM, DD } = getDateItem(data)
  return `${YYYY}${separator}${MM}${separator}${DD}`
}

/**
 * @description: 获取时间：HH:mm:ss
 * @param {*} dateType 日期类型：默认当前日期
 * @return {string}
 */
const getTime = (dateType = 'current'): string => {
  const data = getDateType(dateType)
  const { HH, mm, ss } = getDateItem(data)
  return `${HH}:${mm}:${ss}`
}

/**
 * @description: 日期字符串转时间戳
 * @param {*} dateType 日期类型：默认当前日期
 * @return {*} number
 */
const dateToTimeStamp = (dateType = 'current'): number => {
  const data = getDateType(dateType)
  return data.getTime()
}

/**
 * @description: 时间戳转日期字符串：YYYY-MM-DD HH:mm:ss
 * @param {*} timeStamp 时间戳
 * @param {*} isFullDate 是否完整日期  true：YYYY-MM-DD HH:mm:ss  false：YYYY-MM-DD
 * @param {*} separator 分隔符
 * @return {*} string
 */
const timeStampToDateStr = (
  timeStamp: number,
  isFullDate = true,
  separator = '-'
): string => {
  const { YYYY, MM, DD, HH, mm, ss } = getDateItem(timeStamp)

  const dateStr = `${YYYY}${separator}${MM}${separator}${DD}`
  const timeStr = `${HH}:${mm}:${ss}`

  return isFullDate ? `${dateStr} ${timeStr}` : dateStr
}

/**
 * @description: 获取两个日期相差天数
 * @param {string} afterDate
 * @param {string} beforeDate
 * @return {*}
 */
const getDifferenceOfDays = (afterDate: string, beforeDate: string) => {
  const _afterDate = dateToTimeStamp(strTrim(afterDate, 'LR'))
  const _beforeDate = dateToTimeStamp(strTrim(beforeDate, 'LR'))

  // eslint-disable-next-line prettier/prettier
  const differenceOfDays = Math.ceil(
    Math.abs((_afterDate - _beforeDate) / 86400000)
  )
  return differenceOfDays
}

export {
  getDateItem,
  getDate,
  getTime,
  dateToTimeStamp,
  timeStampToDateStr,
  getDifferenceOfDays
}
