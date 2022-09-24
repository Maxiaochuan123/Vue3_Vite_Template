<template>
  <Slot>
    <!-- 无数据 -->
    <!-- <template #header >
            <p>header</p>
        </template>

        <h1>default</h1>

        <template #footer >
            <p>footer</p>
        </template> -->

    <!-- 有数据 -->
    <template #header="{ data }">
      <p>header</p>
      <p>{{ data }}</p>
    </template>

    <template #default="{ data }">
      <p>{{ data }}</p>
    </template>

    <template #footer="{ data }">
      <p>footer</p>
      <p>{{ data }}</p>
    </template>

    <!-- 动态插槽 -->
    <template #[slotName]>
      <p>我是动态的</p>
    </template>
  </Slot>
</template>

<script lang="ts" setup>
import Slot from './Slot.vue'

let slotName = 'header'
</script>
