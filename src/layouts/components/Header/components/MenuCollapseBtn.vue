<!--
 * @Date: 2022-09-18
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-24
 * @Description: 
-->
<template>
  <div class="menu-shrink">
    <IconBasic
      v-show="!menuIsCollapse"
      icon="icon-catalogue"
      @click="layoutStore.toggleMenuCollapse()"
    />
    <IconBasic v-show="menuIsCollapse" icon="icon-more" @click="layoutStore.toggleMenuCollapse()" />
  </div>
</template>

<script lang="ts" setup>
import { useLayoutStore } from '@stores/layout'

const layoutStore = useLayoutStore()
const { menuIsCollapse } = storeToRefs(layoutStore)
</script>

<style lang="scss" scoped>
.menu-shrink {
  height: 34px;
  text-align: center;
  border-radius: 50%;
  line-height: 32px;

  .iconfont {
    display: inline-block;
    width: 34px;
  }

  .icon-catalogue {
    font-size: 18px;
  }

  .icon-more {
    font-size: 26px;
  }
}
</style>
