<template>
  <h4>A组件:</h4>
  <el-button type="primary" @click="toParams()">给B组件传参</el-button>
</template>

<script lang="ts" setup>
// 全局 $mitt 使用方式
// import { getCurrentInstance } from 'vue'

// const instance = getCurrentInstance()

// const toParams = ():void => {
//     instance?.proxy?.$mitt.emit('toBComponentParams', { name: 'zs', age: 18})
// }

import mitt from "@utils/mitt";

const toParams = (): void => {
  mitt.emit("toBComponentParams", { name: "zs", age: 18 });
};
</script>
