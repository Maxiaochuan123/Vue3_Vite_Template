<!--
 * @Date: 2022-06-14
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-16
 * @Description: 
-->
<template>
  <h4>ToRef</h4>
  <p>age: {{ age }}</p>
  <p>food: {{ food }}</p>
  <p></p>
  <!-- <h4>ToRefs</h4>
  <p>age: {{ people.age }}</p>
  <p>food: {{ people.hobby.value.food }}</p> -->

  <el-button type="primary" @click="handleChange">change info</el-button>
</template>

<script lang="ts" setup>
/**
 *  ★ 使用 toRef、toRefs 的目的是为了简化 reactive 对象属性的使用
 *  toRef、toRefs 的功能是一样的，只不过 toRefs 能批量创建多个 ref对象
 *
 *  如 多层对象结构, 在使用时需要 xx.xx.xx.xx 这类多层级数据解构使用时不够方便、简洁
 *  此时你可能想到 将其解构出来, 但普通的解构方式将会导致 属性失去响应式,
 *  所以可以使用 toRef 或 toRefs 解构，其值是指向源地址，将会转为 RefImpl，他是响应式的
 *  需要 .value 访问
 */

interface Hobby {
  food: string
  motion: string
}

interface People {
  name: string
  age: number
  hobby: Hobby
}

interface IRootInterface {
  people: People
}

const data = reactive<IRootInterface>({
  people: {
    name: 'zs',
    age: 18,
    hobby: {
      food: '米饭',
      motion: '跑步'
    }
  }
})

// toRef
const age = toRef(data.people, 'age')
const food = toRef(data.people.hobby, 'food')
const handleChange = (): void => {
  age.value = 22
  food.value = '面条'
  console.log(age.value, food.value)
}
// // toRefs
// const people = toRefs(data.people);
// const handleChange = (): void => {
//   people.age.value = 22;
//   people.hobby.value.food = "面条";
//   console.log(people.age.value, people.hobby.value.food);
// };
</script>
