/*
 * @Date: 2022-07-09
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-15
 * @Description:
 */
import { createPinia } from 'pinia'
import { PiniaPluginContext } from 'pinia'
import { storageSetItem, storageGetItem } from '../utils/storage'

const _piniaKey_ = 'pinia'

const piniaPersistence = () => {
  return (context: PiniaPluginContext) => {
    const { store } = context
    const storeKey = `${_piniaKey_}-${store.$id}`
    console.log('storeKey: ', storeKey, store.$state)

    store.$subscribe(() => {
      storageSetItem('local', storeKey, store.$state)
    })

    const storagePiniaData = storageGetItem('local', storeKey)

    return { ...storagePiniaData }
  }
}

const piniaStore = createPinia()
piniaStore.use(piniaPersistence())

export default piniaStore
