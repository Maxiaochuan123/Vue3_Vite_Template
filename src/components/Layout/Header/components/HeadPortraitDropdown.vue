<!--
 * @Date: 2022-09-18
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-26
 * @Description: 
-->
<template>
  <Dropdown popper-class="layout-headPortrait-dropdown" trigger="hover">
    <el-avatar :size="32">
      <img src="@assets/images/avatar.jpg" alt="头像" class="head-portrait" />
    </el-avatar>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <span class="name">马晓川</span>
          <span style="margin: 0 2px; font-weight: bold"> - </span>
          <span class="role">管理员</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <IconSymbol icon="icon-setUp" />
          <span class="text">{{ $lang('个人设置') }}</span>
        </el-dropdown-item>
        <el-dropdown-item>
          <IconSymbol icon="icon-signOut" />
          <span class="text">{{ $lang('退出登录') }}</span>
        </el-dropdown-item>

        <!-- 换肤 -->
        <ThemeColor />
      </el-dropdown-menu>
    </template>
  </Dropdown>
</template>

<script lang="ts" setup>
import Dropdown from '@components/ElementPlusEncapsulation/Basics/Dropdown.vue'
import ThemeColor from './ThemeColor.vue'
</script>

<style lang="scss">
.layout-headPortrait-dropdown {
  .el-dropdown-menu .el-dropdown-menu__item {
    padding: 8px 16px;

    .icon-symbol {
      width: 18px;
      height: 18px;
    }

    .text {
      margin-left: 10px;
    }
  }

  .el-dropdown {
    width: 100%;

    .palette {
      width: 100%;
    }
  }
}
</style>
