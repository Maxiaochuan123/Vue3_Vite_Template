<!--
 * @Date: 2022-07-19
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-18
-->
<template>
  <div>
    <h4 id="xx">按需引入 Element-UI</h4>

    <el-button type="primary">我是按钮</el-button>

    <el-input v-model="input" placeholder="Please input" />

    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script lang="ts" setup name="element-ui-test">
let input = ref()
let value1 = ref()

const tableData: string[] = []
</script>
