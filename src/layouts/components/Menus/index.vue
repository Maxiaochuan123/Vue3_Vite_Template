<template>
  <el-scrollbar class="neumorphism">
    <!-- default-active: 单级前缀 single, 多级前缀 multiple, 下标从 1 开始 -->
    <el-menu
      :default-active="menuActiveIndex"
      :collapse="menuIsCollapse"
      :collapse-transition="false"
      @select="menuSelect"
    >
      <section v-for="(menu, mIndex) in menus" :key="mIndex">
        <!-- 单级菜单 -->
        <el-menu-item
          v-if="menu.path"
          :index="menu.path === '/' ? 'home' : `single-${mIndex + 1}`"
          @click="goPage(menu.path)"
        >
          <IconSymbol :icon="menu.icon" />
          <span v-show="!menuIsCollapse">{{ menu.title }}</span>
        </el-menu-item>

        <!-- 多级菜单 -->
        <el-sub-menu v-if="menu?.children?.length" :index="`multiple-${mIndex + 1}`">
          <template #title>
            <IconSymbol :icon="menu.icon" />
            <span v-show="!menuIsCollapse">{{ menu.title }}</span>
          </template>

          <section v-for="(child, cIndex) in menu?.children" :key="cIndex">
            <!-- 1-1 -->
            <el-menu-item
              v-if="!menu?.children[cIndex]?.children?.length"
              :index="`multiple-${mIndex + 1}-${cIndex + 1}`"
              @click="goPage(child.path)"
            >
              <span>{{ child.title }}</span>
            </el-menu-item>

            <!-- 1-1-1 -->
            <section v-else>
              <el-sub-menu :index="`multiple-child-${mIndex + 1}-${cIndex + 1}`">
                <template #title>
                  <span>{{ child.title }}</span>
                </template>

                <el-menu-item
                  v-for="(child2, c2Index) in child.children"
                  :key="c2Index"
                  :index="`multiple-child-${mIndex + 1}-${cIndex + 1}-${c2Index + 1}`"
                  @click="goPage(child2.path)"
                >
                  <span>{{ child2.title }}</span>
                </el-menu-item>
              </el-sub-menu>
            </section>
          </section>
        </el-sub-menu>
      </section>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { useLayoutStore } from '@stores/layout'
const layoutStore = useLayoutStore()
const { menuIsCollapse, menuIconArrow, menuActiveIndex } = storeToRefs(layoutStore)

const router = useRouter()
const goPage = (path?: string) => {
  router.push({
    path: path as string
  })
}

const menuSelect = (index: string) => {
  layoutStore.togglemenuActiveIndex(index)
}

type Children = {
  title: string
  path?: string
  children?: Children[]
}

type Menus = {
  title: string
  icon: string
  path?: string
  children?: Children[]
}

const menus: Menus[] = [
  {
    title: '首页',
    icon: 'icon-jingpinshuju',
    path: '/'
  },
  {
    title: 'Table',
    icon: 'icon-jingpinshuju',
    path: '/table'
  },
  {
    title: '考试与调查',
    icon: 'icon-kaoshiyutiaocha',
    children: [
      {
        title: 'a',
        path: '/kao/a'
      }
    ]
  },
  {
    title: '费用额度',
    icon: 'icon-feiyongedu',
    children: [
      {
        title: 'element',
        path: '/fei/element'
      },
      {
        title: 'c',
        children: [
          {
            title: 'c',
            path: '/fei/c'
          }
        ]
      }
    ]
  }
]
</script>

<style lang="scss" scoped>
.el-menu {
  .icon-symbol ~ span {
    margin-left: 6px;
  }

  :deep(.el-sub-menu__icon-arrow) {
    display: v-bind(menuIconArrow);
  }
}
</style>
