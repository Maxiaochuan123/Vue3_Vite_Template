<template>
  <h4>B组件:</h4>
</template>

<script lang="ts" setup>
// 全局 $mitt 使用方式
// import { getCurrentInstance } from 'vue'

// const instance = getCurrentInstance()

// instance?.proxy?.$mitt.on('toBComponentParams', ( params ) :void => {
//     console.log('数据来自 A组件', params);
// })

import mitt from '@utils/mitt';

mitt.on('toBComponentParams', (params: any): void => {
  console.log('数据来自 A组件', params);
});
</script>
