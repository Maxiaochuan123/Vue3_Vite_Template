<template>
  <el-button
    v-for="(tabItem, index) in TabList"
    :key="index"
    @click="switchTab(tabItem.component)"
    >{{ tabItem.name }}</el-button
  >
  <!-- <keep-alive> 
    使用场景:
      1.不需要每次重新渲染
      2.节省性能, 仅仅渲染一次

      只进入一次 onMounted, 后续不再进入, 转而进入 onActivated
  -->
  <keep-alive>
    <component :is="currentTab.component" />
  </keep-alive>
</template>

<script lang="ts" setup>
import A from "./A.vue";
import B from "./B.vue";
import C from "./C.vue";

type Tabs = {
  name: string;
  component: ReturnType<typeof defineComponent>;
};

type Component = Pick<Tabs, "component">;

const TabList = reactive<Tabs[]>([
  {
    name: "组件A",
    component: markRaw(A)
  },
  {
    name: "组件B",
    component: markRaw(B)
  },
  {
    name: "组件C",
    component: markRaw(C)
  }
]);

let currentTab = reactive<Component>({ component: TabList[0].component });

const switchTab = (component: Component): void => {
  currentTab.component = component;
};
</script>
