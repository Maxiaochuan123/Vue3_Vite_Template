<!--
 * @Date: 2022-09-18
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-24
 * @Description: 
-->
<template>
  <IconSymbol
    v-show="!isFullscreen"
    icon="icon-fullScreen"
    @click="layoutStore.toggleBrowserFullscreen()"
  />
  <IconSymbol
    v-show="isFullscreen"
    icon="icon-exitFullScreen"
    @click="layoutStore.toggleBrowserFullscreen()"
  />
</template>

<script lang="ts" setup>
import { useLayoutStore } from '@stores/layout'

const layoutStore = useLayoutStore()
const { isFullscreen } = storeToRefs(layoutStore)
</script>

<!-- <style lang="scss" scoped>
.content {
}
</style> -->
~/src/stores/layout/layout
