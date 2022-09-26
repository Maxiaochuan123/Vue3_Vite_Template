<!--
 * @Date: 2022-09-13
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-26
 * @Description: 
-->
<template>
  <div id="layout">
    <ElConfigProvider :size="size" :locale="locale[language]">
      <Menus />
      <div class="main">
        <Header />
        <div class="container neumorphism">
          <el-button type="primary">{{ $lang('按钮3') }} </el-button>
          <el-date-picker v-model="picker" type="datetime" placeholder="Select date and time" />
        </div>
      </div>
    </ElConfigProvider>
  </div>
</template>

<script lang="ts" setup>
// ElementUi 组件全局配置
import { locale } from '@/plugins/elementPlusConfig'
import { size } from '@/plugins/elementPlusConfig'
import Menus from './Menus/index.vue'
import Header from './Header/index.vue'

import { useLayoutStore } from '@store/layout'
const layoutStore = useLayoutStore()
const { menuWidth, language } = storeToRefs(layoutStore)

const picker = ref()
</script>

<style lang="scss" scoped>
#layout {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: v-bind(menuWidth) 1fr;
  column-gap: 12px;

  .main {
    display: grid;
    grid-template-rows: 64px 1fr;
    grid-template-columns: 1fr;
    row-gap: 12px;

    .container {
      padding: $theme-pd-lr;
    }
  }
}
</style>
