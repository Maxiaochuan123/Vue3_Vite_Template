<template>
  <div class="home">
    <h1>systemDark</h1>
    <el-button type="primary">按钮</el-button>

    <p v-color="`red`">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eveniet! Quas placeat
      ipsa aliquid, ipsam et reiciendis nisi rem, at recusandae consequatur repudiandae omnis
      voluptas optio sequi ad. Est, vitae.
    </p>
  </div>
</template>

<script lang="ts" setup name="home"></script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;

  h1 {
    color: $theme-color;
  }
}
</style>
