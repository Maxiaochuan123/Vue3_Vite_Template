<template>
  <slot name="header" :data="headerMsg"></slot>
  <slot :data="defaultMsg"></slot>
  <slot name="footer" :data="footerMsg"></slot>
</template>

<script lang="ts" setup>
const headerMsg = "我是 header 插槽";
const defaultMsg = "我是 default 插槽";
const footerMsg = "我是 footer 插槽";
</script>
