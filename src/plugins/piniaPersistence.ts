/*
 * @Date: 2022-07-09
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-16
 * @Description:
 */
import { PiniaPluginContext } from "pinia";
import { storageSetItem, storageGetItem } from "../utils/storage";

const _piniaKey_ = "pinia";

const piniaPersistence = () => {
  return (context: PiniaPluginContext) => {
    const { store } = context;
    const storeKey = `${_piniaKey_}-${store.$id}`;

    store.$subscribe(() => {
      storageSetItem("local", storeKey, store.$state);
    });

    const storagePiniaData = storageGetItem("local", storeKey);

    return { ...storagePiniaData };
  };
};

export { piniaPersistence };
