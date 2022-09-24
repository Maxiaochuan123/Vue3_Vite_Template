<!--
 * @Date: 2022-06-21
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-15
 * @Description: 
-->
<template>
  <p>B 组件</p>
</template>

<script lang="ts" setup>
onMounted(() => {
  console.log('B ---- onMounted')
})

onActivated(() => {
  console.log('B ---- onActivated')
})
</script>
