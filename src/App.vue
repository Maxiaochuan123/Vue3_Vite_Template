<!--
 * @Date: 2022-06-09
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-17
 * @Description: 
-->

<template>
  <Layout>
    <!-- 配合 Router 组件打开 -->
    <!-- <router-view /> -->

    <!-- <Pinia /> -->
    <!-- <ToRef_ToRefs /> -->
    <!-- <ToRefs /> -->
    <!-- <DynamicComponents/> -->
    <!-- <Slot/> -->
    <!-- <FatherAndSon /> -->
    <!-- <Brother /> -->
    <!-- <VModel /> -->
    <!-- <DynamicCss /> -->
    <!-- <Axios /> -->
    <!-- <ElementUI /> -->
    <!-- <Provide_Inject /> -->
    <!-- <MySuspense /> -->
  </Layout>
</template>

<script setup lang="ts">
// 测试组件
import Layout from '@components/Layout/index.vue'
import Pinia from '@components/Pinia/index.vue'
import ToRef_ToRefs from '@components/ToRef&ToRefs/index.vue'
import DynamicComponents from '@components/DynamicComponents/index.vue'
import Slot from '@components/Slot/index.vue'
import FatherAndSon from '@components/FatherAndSon/Father.vue'
import Brother from '@components/Brother/index.vue'
import DynamicCss from '@components/DynamicCss/jsStyle.vue'
import VModel from '@components/V-Model/Father.vue'
import Axios from '@components/Axios/index.vue'
import ElementUI from '@components/ElementUI/index.vue'
import Provide_Inject from '@components/Provide&Inject/index.vue'
import MySuspense from '@components/Suspense/index.vue'
</script>
