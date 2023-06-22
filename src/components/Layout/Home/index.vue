<template>
  <!-- <div class="home">Home</div> -->
  <div class="home">
    AAA,{{ name }}
    <el-button type="primary" @click="msgHandle">Message</el-button>
  </div>
</template>

<script lang="ts" setup name="home">
import { ElMessage } from 'element-plus'

// import { ElMessage } from 'element-plus'
interface Props {
  name?: string
}
const props = withDefaults(defineProps<Props>(), {
  name: '张三'
})

const msgHandle = () => {
  ElMessage.success('yes~')
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>
