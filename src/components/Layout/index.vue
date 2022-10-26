<!--
 * @Date: 2022-09-13
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-19
 * @Description: 
-->
<template>
  <div id="layout">
    <ElConfigProvider :size="size" :locale="locale[language]">
      <Menus />
      <div class="main">
        <Header />
        <div class="container neumorphism">
          <!-- <el-button type="primary">{{ $lang('按钮') }} </el-button>
          <el-date-picker v-model="picker" type="datetime" placeholder="Select date and time" /> -->
          <!-- <el-scrollbar>
            <p v-for="(item, index) in 50" :key="index">{{ item }}</p>
          </el-scrollbar> -->
          <router-view v-slot="{ Component, route }">
            <transition name="page">
              <keep-alive :include="caches">
                <component :is="Component" :key="route.fullPath" />
              </keep-alive>
            </transition>
          </router-view>
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
import { useKeepAlive } from '@store/keepAlive'

const layoutStore = useLayoutStore()
const { menuWidth, language } = storeToRefs(layoutStore)

const { caches } = storeToRefs(useKeepAlive())

const picker = ref()

const cacheList = ['element']
</script>

<style lang="scss" scoped>
#layout {
  display: grid;
  height: 100%;
  grid-template-rows: 1fr;
  grid-template-columns: v-bind(menuWidth) 1fr;
  column-gap: 12px;

  .main {
    display: grid;
    grid-template-rows: 64px calc(100vh - 64px - (12px * 3));
    grid-template-columns: 1fr;
    row-gap: 12px;

    .container {
      padding: $theme-pd;

      .transition-root-box {
        width: 100%;
        height: 100%;
      }
    }
  }

  // 路由动画
  .page-enter-from,
  .page-leave-to {
    display: none;
  }

  // .page-enter-to,
  // .page-leave-from {
  // }

  .page-enter-active {
    animation: fade-in-right 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  // .page-leave-active {
  //   animation: fade-out-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  // }

  @keyframes fade-in-right {
    0% {
      transform: translateX(50px);
      transform: translateX(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }

  // @keyframes fade-out-right {
  //   0% {
  //     -webkit-transform: translateX(0);
  //     transform: translateX(0);
  //     opacity: 1;
  //   }
  //   100% {
  //     -webkit-transform: translateX(50px);
  //     transform: translateX(50px);
  //     opacity: 0;
  //   }
  // }
}
</style>
