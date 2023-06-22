<!--
 * @Date: 2022-09-21
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-24
 * @Description: 
-->
<template>
  <Dropdown popper-class="layout-themColor-dropdown" placement="left">
    <section class="palette">
      <el-dropdown-item>
        <IconSymbol icon="icon-palette" />
        <span class="text">{{ $lang('页面换肤') }}</span>
      </el-dropdown-item>
    </section>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <div v-for="(item, index) in themeColorList" :key="index" class="color-block">
            <el-tooltip :content="item.describe" placement="top" effect="light">
              <div
                :style="{ backgroundColor: item.color }"
                @click="layoutStore.toggleThemeColor(item.type)"
              >
                <IconBasic v-show="item.type === themeColor" icon="icon-choice"></IconBasic>
              </div>
            </el-tooltip>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </Dropdown>
</template>

<script lang="ts" setup>
import Dropdown from '@components/ElementPlusEncapsulation/Basics/Dropdown.vue'
import { themeColorList } from '@hooks/vueuse/useTheme'
import { useLayoutStore } from '@stores/layout'

const layoutStore = useLayoutStore()
const { themeColor } = storeToRefs(layoutStore)
</script>

<style lang="scss">
.layout-themColor-dropdown {
  .el-dropdown-menu__item {
    display: grid;
    grid-template-rows: 24px;
    grid-template-columns: repeat(8, 24px);
    justify-content: space-between;
    align-items: center;
    column-gap: 10px;
    cursor: default;

    &:hover {
      background-color: transparent;
    }

    .color-block {
      height: 100%;

      .el-tooltip__trigger {
        display: grid;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;

        i {
          margin: 0;
        }
      }
    }
  }
}
</style>
~/src/hooks/vueUse/useTheme ~/src/stores/layout/layout
