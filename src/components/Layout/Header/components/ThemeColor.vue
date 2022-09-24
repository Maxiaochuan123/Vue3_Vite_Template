<!--
 * @Date: 2022-09-21
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-24
 * @Description: 
-->
<template>
  <Dropdown popper-class="layOut-themColor-dropdown" placement="left">
    <section class="palette">
      <el-dropdown-item>
        <IconSymbol icon="icon-palette" />
        <span class="text">{{ $lang('页面换肤') }}</span>
      </el-dropdown-item>
    </section>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <div
            v-for="(item, index) in themeColorList"
            :key="index"
            class="color-block"
          >
            <el-tooltip :content="item.describe" placement="top" effect="light">
              <div
                :style="{ backgroundColor: item.color }"
                @click="layoutStore.toggleTheme(item.describe)"
              >
                <IconBasic
                  v-show="item.describe === theme"
                  icon="icon-choice"
                ></IconBasic>
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
import { useLayoutStore } from '@store/layout'

const layoutStore = useLayoutStore()
const { theme } = storeToRefs(layoutStore)

const themeColorList = [
  { color: '#F5222D', describe: '薄暮' },
  { color: '#FA541C', describe: '火山' },
  { color: '#FAAD14', describe: '日暮' },
  { color: '#13C2C2', describe: '明青' },
  { color: '#52C41A', describe: '极光绿' },
  { color: '#4380d3', describe: '船坞蓝' },
  { color: '#2F54EB', describe: '极客蓝' },
  { color: '#722ED1', describe: '酱紫' }
]
</script>

<style lang="scss">
.layOut-themColor-dropdown {
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
        height: 100%;
        cursor: pointer;
        border-radius: 2px;
        color: #fff;
        display: grid;
        justify-content: center;
        align-items: center;
        i {
          margin: 0;
        }
      }
    }
  }
}
</style>
