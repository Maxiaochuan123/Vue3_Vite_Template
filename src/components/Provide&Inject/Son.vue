<!--
 * @Date: 2022-08-17
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-18
 * @Description: 
-->
<template>
  <div class="box3">
    <h4>Son</h4>
    <h6>Ancestor: {{ ancestor }}</h6>

    <el-button type="primary" @click="changeAncestor()">
      changeAncestor
    </el-button>
  </div>
</template>

<script lang="ts" setup>
let ancestor: string[] = inject('ancestor') as string[]
const changeAncestor = () => {
  ancestor[0] = 'c'
  ancestor[1] = 'd'
  ancestor.push('e')
}
</script>

<style lang="scss" scoped>
.box3 {
  background-color: azure;
  padding: 10px;
}
</style>
