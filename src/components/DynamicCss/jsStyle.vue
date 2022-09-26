<template>
  <div class="box">JS 控制 style</div>
</template>

<script lang="ts" setup>
type Style = {
  color: string
  fontSize: string
  bgColor: string
}
let style = reactive<Style>({
  color: '#fff',
  fontSize: '24px',
  bgColor: '#ccc'
})
</script>

<style lang="scss" scoped>
.box {
  font-size: v-bind('style.fontSize');
  color: v-bind('style.color');
  background-color: v-bind('style.bgColor');
}
</style>
