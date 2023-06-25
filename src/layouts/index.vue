<template>
  <div id="layout">
    <Menus />
    <div class="main">
      <Header />
      <div class="container neumorphism">
        <RouterView v-slot="{ Component, route }">
          <Transition name="page">
            <KeepAlive :include="caches">
              <component :is="Component" :key="route.fullPath" />
            </KeepAlive>
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Menus from './components/Menus/index.vue'
import Header from './components/Header/index.vue'

import { useLayoutStore } from '@stores/layout'
const layoutStore = useLayoutStore()
const { menuWidth } = storeToRefs(layoutStore)

import { useKeepAlive } from '@stores/keepAlive'
const { caches } = storeToRefs(useKeepAlive())
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
