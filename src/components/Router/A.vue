<template>
  <h4>AA页面</h4>
  <el-button type="primary" @click="goPage">带参跳转到 B页面</el-button>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// 路由跳转传参
const goPage = (): void => {
  // query 时参数会在地址栏展示, 可以配合 path 或 name 使用, 由于参数是存在地址栏的, 所以刷新不会丢失
  // router.push({
  //     name: 'b',
  //     query: {
  //         name: 'zs',
  //         age: 18
  //     }
  // })

  // params 时参数不会在地址栏展示, 只能配合 name 使用, 由于参数是存在内存中的, 所以刷新会丢失
  // params 时参数丢失问题 可以使用动态路由参数解决, 且动态路由传参 不能不带参直接进入页面, 必须带参数才能进入
  router.push({
    name: 'b',
    params: {
      name: 'zs',
      age: 18
    }
  });
};
</script>

<style lang="scss" scoped>
h4 {
  color: $theme-color;
}
</style>
