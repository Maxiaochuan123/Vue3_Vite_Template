<!--
 * @Date: 2022-08-17
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-08-22
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
import Skeleton from './Skeleton.vue'
const Son = defineAsyncComponent(() => import('./Son.vue'))
</script>

<style lang="scss" scoped>
.content {
  padding: 20px;
  background-color: aquamarine;
}
</style>
