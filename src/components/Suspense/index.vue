<!--
 * @Date: 2022-08-17
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-18
 * @Description: 
-->
<template>
  <div class="content">
    <h6>Father</h6>
    <Suspense>
      <!-- <template #default> -->
      <Son />
      <!-- </template> -->
      <template #fallback>
        <Skeleton />
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
const Son = defineAsyncComponent(() => import("./Son.vue"));
import Skeleton from "./Skeleton.vue";
</script>

<style lang="scss" scoped>
.content {
  background-color: aquamarine;
  padding: 20px;
}
</style>
