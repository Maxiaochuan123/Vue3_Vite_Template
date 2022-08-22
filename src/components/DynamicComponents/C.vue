<template>
  <p>C 组件</p>
</template>

<script lang="ts" setup>
onMounted(() => {
  console.log("C ---- onMounted");
});

onActivated(() => {
  console.log("C ---- onActivated");
});
</script>
