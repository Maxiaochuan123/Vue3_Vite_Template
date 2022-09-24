<template>
  <h4>B页面</h4>

  <hr />

  <h4>接受来自路由的参数</h4>
  <h4>姓名:{{ name }}</h4>
  <h4>年龄:{{ age }}</h4>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// const { name, age } = route.query

const { name, age } = route.params
console.log(route.params)
</script>

<style lang="scss" scoped></style>
