<!--
 * @Date: 2022-09-18
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-24
 * @Description: 
-->
<template>
  <IconSymbol
    v-show="!isDark"
    icon="icon-light"
    @click="layoutStore.toggleLightOrDark()"
  />
  <IconSymbol
    v-show="isDark"
    icon="icon-dark"
    @click="layoutStore.toggleLightOrDark()"
  />
</template>

<script lang="ts" setup>
import { useLayoutStore } from '@store/layout'

const layoutStore = useLayoutStore()
const { isDark } = storeToRefs(layoutStore)
</script>

<!-- <style lang="scss" scoped>
.content {
}
</style> -->
