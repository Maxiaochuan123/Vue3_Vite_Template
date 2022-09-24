<!--
 * @Date: 2022-09-21
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-21
 * @Description: 
-->
<template>
  <el-dropdown v-bind="$attrs" :show-timeout="50" :hide-timeout="50">
    <slot></slot>
    <template #dropdown>
      <slot name="dropdown"></slot>
    </template>
  </el-dropdown>
</template>
