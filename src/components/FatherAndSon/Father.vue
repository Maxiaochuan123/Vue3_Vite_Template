<!--
 * @Date: 2022-06-28
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-17
 * @Description: 
-->
<template>
  <h1 @click="changeName()">Father __ {{ name }}</h1>

  <hr />

  <Son :name="name" @changeFatherMsg="changeFatherMsg" />
</template>

<script lang="ts" setup>
import Son from "./Son.vue";

let name = ref<string>("");

const changeName = (): void => {
  name.value = "俺是恁爹";
};

const changeFatherMsg = (str: string): void => {
  name.value = str;
};
</script>
