<!--
 * @Date: 2022-06-09
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-07
 * @Description: 
-->
<template>
  <h4>{{ count }}</h4>
  <h4>{{ countGetter }}</h4>
  <hr />

  <h4>商品总价：{{ totalPrice }}</h4>
  <hr />

  <h4>{{ info }}</h4>
  <el-button type="primary" @click="handleChangeState">修改数据</el-button>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@store/index'
import { storageSetItem, storageGetItem } from '@utils/storage'
// storageSetItem()
const mainStore = useMainStore()
const { count, info, countGetter } = storeToRefs(mainStore)

const handleChangeState = () => {
  // 方式一: 使用 $patch 一个函数   ★推荐
  // mainStore.$patch(state => {
  //   state.count++
  // })

  // 方式二: actions
  // mainStore.changeCount(1)

  mainStore.$patch((state) => {
    state.count++
    state.info.name = '老马~'
    state.info.age = 18
  })
}

interface ProductsInterFace {
  name: string
  price: number
}
const products: ProductsInterFace[] = [
  {
    name: 'a',
    price: 1
  },
  {
    name: 'b',
    price: 2
  },
  {
    name: 'c',
    price: 3
  }
]

const totalPrice = products.reduce((total, item): number => {
  return total + item.price
}, 0)
</script>
