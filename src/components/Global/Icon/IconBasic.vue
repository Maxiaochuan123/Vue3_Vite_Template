<!--
 * @Date: 2022-09-15
 * @Author: 马晓川 724503670@qq.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-15
 * @Description: 
-->
<template>
  <i :class="`iconfont ${icon}`" />
</template>

<script lang="ts" setup>
defineProps<{
  icon: string
}>()
</script>
