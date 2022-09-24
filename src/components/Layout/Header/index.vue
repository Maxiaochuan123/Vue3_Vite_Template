<!--
 * @Date: 2022-09-14
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-22
 * @Description: 
-->
<template>
  <div class="layout-header neumorphism">
    <MenuCollapseBtn />

    <div class="actionsBar">
      <BrowserFullscreenBtn />

      <LightOrDarkBtn />

      <I18nDropdown />

      <HeadPortraitDropdown />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MenuCollapseBtn from './components/MenuCollapseBtn.vue'
import BrowserFullscreenBtn from './components/BrowserFullscreenBtn.vue'
import I18nDropdown from './components/I18nDropdown.vue'
import LightOrDarkBtn from './components/LightOrDarkBtn.vue'
import HeadPortraitDropdown from './components/HeadPortraitDropdown.vue'
</script>

<style lang="scss">
.layout-header {
  height: 100%;
  padding: $theme-pd-lr;
  display: grid;
  grid-template-columns: 34px 1fr;
  grid-template-rows: 1fr;
  justify-content: space-between;
  align-items: center;

  .actionsBar {
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 28px) auto;
    align-items: center;
    justify-content: end;
    column-gap: 18px;

    .icon-symbol {
      width: 24px;
      height: 24px;
      padding: 2px;
    }
  }

  .menu-shrink,
  .icon-symbol,
  .el-avatar {
    @extend .notOptional;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }

  // .menu-shrink,
  // .icon-symbol:not(.el-dropdown .icon-symbol) {
  //   cursor: pointer;
  // }

  .menu-shrink,
  .icon-symbol {
    border-radius: 4px;
  }
}
</style>
