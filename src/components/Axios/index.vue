<!--
 * @Date: 2022-07-17
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-08-26
 * @Description: 
-->
<template>
  <h1>axois</h1>
  <h4>source: {{ source }}</h4>
  <el-button type="primary" @click="setUserList()">setUserList</el-button>
</template>

<script lang="ts" setup>
// import { getUsers } from '@apis/public/index';

// 使用 Record 来定义对象类型
type ObjType = Record<string, object | string | number | Array<number>>;
let source = reactive<ObjType>({ list: {} });

// onMounted(async () => {
//   setUserList();
// });

const setUserList = async () => {
  // const data = await getUsers();
  // console.log(data);
  // source.list = data;
};
</script>
