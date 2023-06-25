/*
 * @Date: 2022-07-10
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-18
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PageLaodingBar from '@plugins/pageLoadingBar'
import baseRoutes from './routes/base'

const routes: Array<RouteRecordRaw> = [
  ...baseRoutes,
  {
    path: '/table',
    name: 'table',
    meta: { title: '表格' },
    component: () => import('@components/table/index.vue')
  },
  {
    path: '/kao',
    name: 'kao',
    meta: { title: '考试与调查' },
    children: [
      {
        path: 'a',
        name: 'a',
        component: () => import('@components/Router/A.vue')
      },
      {
        path: 'b/:name/:age', // 动态路由
        name: 'b',
        component: () => import('@components/Router/B.vue')
      }
    ]
  },
  {
    path: '/fei',
    name: 'fei',
    meta: { title: '费用额度' },
    children: [
      {
        path: 'element',
        name: 'element',
        component: () => import('@/components/ElementUI/index.vue')
      },
      {
        path: 'c',
        name: 'c',
        component: () => import('@components/Router/C.vue')
      }
    ]
  }
]

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 重置路由
export function resetRouter() {
  router.replace({ path: '/home' })
  location.reload()
}

router.beforeEach((to, from, next) => {
  PageLaodingBar.start()
  next()
})

router.afterEach((to, from) => {
  PageLaodingBar.done()
})

export default router
