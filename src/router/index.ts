/*
 * @Date: 2022-07-10
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-18
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PageLaodingBar from '@plugins/pageLoadingBar'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: { cnName: '首页' },
    component: () => import('@components/Layout/Home/index.vue')
  },
  {
    path: '/table',
    name: 'table',
    meta: { cnName: '表格' },
    component: () => import('@components/table/index.vue')
  },
  {
    path: '/kao',
    name: 'kao',
    meta: { cnName: '考试与调查' },
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
    meta: { cnName: '费用额度' },
    children: [
      {
        path: 'element',
        name: 'element',
        meta: { keepAlive: true },
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

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  PageLaodingBar.start()
  next()
})

router.afterEach((to, from) => {
  PageLaodingBar.done()
})

export default router
