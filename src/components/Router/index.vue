<!--
 * @Date: 2022-07-10
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-17
 * @Description: 
-->
<template>
  <div>
    <!-- 路由跳转 -->
    <!-- <router-link :to="{ name: 'a' }">ToA</router-link>
    <router-link :to="{ name: 'b' }" style="margin-left:20px;">ToB</router-link> -->

    <!-- 函数式路径跳转 -->
    <!-- <el-button type="primary" @click="goPage('/a')">ToA</el-button>
    <el-button type="primary" @click="goPage('/b')">ToB</el-button> -->

    <!-- 函数式路由 命名 跳转 -->
    <el-button type="primary" @click="goPage('a')">ToA</el-button>
    <el-button type="primary" @click="goPage('b')">ToB</el-button>

    <!-- <el-button type="primary" @click="go">Go</el-button>
    <el-button type="primary" @click="back">Back</el-button> -->

    <hr />

    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goPage = (str: string): void => {
  // 函数式路径跳转
  // router.push(str)

  // router.push({
  //     path: str
  // })

  // 函数式路由 命名 跳转  ✳此方式需要路由注册有 name 属性
  router.push({
    name: str
  })
}

// // history 前进
// const go = ():void => {
//     router.go(1)
// }
// // history 后退
// const back = ():void => {
//     router.back()
// }
</script>
