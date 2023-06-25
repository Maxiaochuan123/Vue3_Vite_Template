<!--
 * @Date: 2022-06-09
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-17
 * @Description: 
-->

<template>
  <ElConfigProvider :size="size" :locale="locale[language]">
    <Layouts />
  </ElConfigProvider>
</template>

<script setup lang="ts">
import Layouts from '@/layouts/index.vue'

// ElementUi 组件全局配置
import { locale } from '@/plugins/elementPlusConfig'
import { size } from '@/plugins/elementPlusConfig'
import { useLayoutStore } from '@stores/layout'

const layoutStore = useLayoutStore()
const { themeColor, language } = layoutStore
layoutStore.toggleThemeColor(themeColor)
</script>
