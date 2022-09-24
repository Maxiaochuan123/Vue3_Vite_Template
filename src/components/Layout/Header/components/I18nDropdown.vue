<!--
 * @Date: 2022-09-18
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-24
 * @Description: 
-->
<template>
  <Dropdown>
    <IconSymbol icon="icon-earth" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(item, index) in languages"
          :key="index"
          @click="layoutStore.toggleLanguage(item.value)"
        >
          <span :class="{ active: language === item.value }">{{
            lang(item.label)
          }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </Dropdown>
</template>

<script lang="ts" setup>
import Dropdown from '@components/ElementPlusEncapsulation/Basics/Dropdown.vue'
import { useI18n } from 'vue-i18n'
import { lang } from '@/i18n'
import { useLayoutStore } from '@store/layout'

const layoutStore = useLayoutStore()
const { language } = storeToRefs(layoutStore)
const { locale } = useI18n()

// 国际化语言菜单
const languages = [
  {
    label: '中文',
    value: 'cn'
  },
  {
    label: '英文',
    value: 'en'
  }
]

watch(
  language,
  () => {
    locale.value = language.value
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.active {
  color: $theme-color;
}
</style>
