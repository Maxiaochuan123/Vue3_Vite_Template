<!--
 * @Date: 2022-06-28
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-17
 * @Description: 
-->
<template>
  <p @click="changeName()">Son: {{ props.name }}</p>
</template>

<script lang="ts" setup>
interface Props {
  name: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: '我什么都不知道'
});

// emit
const emit = defineEmits<{
  (e: 'changeFatherMsg', name: string): void;
}>();

const changeName = (): void => {
  emit('changeFatherMsg', '恁不是俺爹');
};
</script>
