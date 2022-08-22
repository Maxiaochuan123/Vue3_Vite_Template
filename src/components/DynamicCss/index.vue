<template>
  <el-button type="primary" @click="changeBgColor()">
    change bgColor
  </el-button>
  <div class="box">JS 控制 CSS 背景颜色</div>
</template>

<script lang="ts" setup>
let bgColor = ref<string>("#ccc");

const changeBgColor = (): void => {
  bgColor.value = "#ff6600";
};
</script>

<style lang="scss" scoped>
.box {
  font-size: 24px;
  color: "#fff";
  background-color: v-bind(bgColor);
}
</style>
