<!--
 * @Date: 2022-08-17
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-18
 * @Description: 
-->
<template>
  <div class="box">
    <h4>Ancestor</h4>
    <h6>Ancestor: {{ ancestor }}</h6>

    <Father />
  </div>
</template>

<script lang="ts" setup>
import Father from './Father.vue';

let ancestor = reactive<string[]>(['a', 'b']);
provide('ancestor', ancestor);
</script>

<style lang="scss" scoped>
.box {
  background-color: bisque;
  padding: 10px;
}
</style>
