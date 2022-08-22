<!--
 * @Date: 2022-08-17
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-17
 * @Description: 
-->
<template>
  <div class="son">
    <h6>Son</h6>
  </div>
</template>

<script lang="ts" setup>
await new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 3000);
});
</script>

<style lang="scss" scoped>
.son {
  background-color: beige;
  padding: 20px;
}
</style>
