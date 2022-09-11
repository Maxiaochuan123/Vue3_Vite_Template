<!--
 * @Date: 2022-06-28
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-09-04
 * @Description: 
-->
<template>
  <h1 @click="changeName()">Father __ {{ name }}</h1>

  <hr />

  <Son ref="childRef" :name="name" @changeFatherMsg="changeFatherMsg" />
</template>

<script lang="ts" setup>
import Son from './Son.vue';

const childRef = ref();
onMounted(() => {
  console.log(childRef.value);
});

let name = ref<string>('');

const changeName = (): void => {
  name.value = '俺是恁爹';
};

const changeFatherMsg = (str: string): void => {
  name.value = str;
};
</script>
