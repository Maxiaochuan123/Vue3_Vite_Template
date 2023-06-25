import { RouteRecordRaw } from 'vue-router'

const baseRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: { title: '首页' },
    component: () => import('@/layouts/pages/home/index.vue')
  }
]

export default baseRoutes
