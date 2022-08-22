<template>
  <h1 @click="changeFlag()">Father: {{ flag }}, {{ str }}</h1>

  <hr />
  <!-- 
        v-model 默认Key是 modelValue
        多个 v-model 需要指定Key  如: v-model:a="a"  v-model:b="b"
     -->
  <Son v-model="str" v-model:flag="flag" />
</template>

<script lang="ts" setup>
import Son from './Son.vue';

let str = ref<string>('默认 str');
let flag = ref<boolean>(false);

const changeFlag = (): void => {
  str.value = '嘻嘻嘻';
  flag.value = true;
};
</script>
