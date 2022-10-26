/*
 * @Date: 2022-07-09
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-17
 * @Description: Storage 封装
 */
import { dataIsEmpty } from './judge'

interface StorageType {
  local: Storage
  sesstion: Storage
}

type Type = 'local' | 'sesstion'

const storageTypes: StorageType = {
  local: localStorage,
  sesstion: sessionStorage
}

const storageGetItem = (type: Type, key: string): any => {
  const _key = storageTypes[type as keyof StorageType]?.getItem(key)

  return _key ? JSON.parse(_key) : null
}

const storageSetItem = (type: Type, key: string, item: any) => {
  console.log('item: ', item)

  const value = formatterItem(item)

  storageTypes[type as keyof StorageType]?.setItem(key, JSON.stringify(value))
}

const formatterItem = (item: any): any => {
  if (dataIsEmpty(item)) throw new Error('当前值是空, 请检查~')

  if (isRef(item)) {
    return item.value
  } else if (isProxy(item)) {
    return toRaw(item)
  } else {
    return item
  }
}

export { storageGetItem, storageSetItem }
