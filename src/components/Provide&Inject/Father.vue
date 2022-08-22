<!--
 * @Date: 2022-08-17
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-18
 * @Description: 
-->
<template>
  <div class="box2">
    <h4>Father</h4>
    <h6>Ancestor: {{ ancestor }}</h6>

    <br />

    <Son />
  </div>
</template>

<script lang="ts" setup>
import Son from './Son.vue';
let ancestor = inject('ancestor');
</script>

<style lang="scss" scoped>
.box2 {
  background-color: beige;
  padding: 10px;
}
</style>
