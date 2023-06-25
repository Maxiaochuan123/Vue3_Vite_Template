<!--
 * @Date: 2022-10-17
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-18
 * @Description: 
-->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item to="/" @click="goHome">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="item in BreadCrumbList" :key="item.name" :to="item.path">{{
      item.meta.title || '请设置路由 title'
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { useLayoutStore } from '@stores/layout'
const route = useRoute()
const router = useRouter()

const BreadCrumbList = computed(() => route.matched.filter(item => item.path !== '/'))

const layoutStore = useLayoutStore()
const goHome = () => {
  layoutStore.togglemenuActiveIndex('home')
}

const { menuActiveIndex } = storeToRefs(layoutStore)

const checkSessionMenuActiveIndex = () => {
  if (menuActiveIndex.value === 'home' && !sessionStorage.getItem('menuActiveIndex')) {
    router.push('/')
  }
}
checkSessionMenuActiveIndex()
</script>
