/*
 * @Date: 2022-07-10
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 724503670@qq.com
 * @LastEditTime: 2022-10-18
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PageLaodingBar from '@plugins/pageLoadingBar'
import { useKeepAlive } from '@store/keepAlive'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: { cnName: '首页', keepAlive: true },
    component: () => import('@components/Layout/Home/index.vue'),

    // 嵌套路由 children[] ✳需要在父路由中放置 <router-view>, 并且子路由需要加上父路由前缀
    children: [
      {
        path: '/a',
        name: 'a',
        component: () => import('@components/Router/A.vue')
      },
      {
        // path: '/b', // 普通路由
        path: '/b/:name/:age', // 动态路由
        name: 'b',
        component: () => import('@components/Router/B.vue')
      }
    ]
  },

  {
    path: '/element',
    name: 'element-ui-test',
    meta: { keepAlive: true },
    component: () => import('@/components/ElementUI/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  PageLaodingBar.start()

  if (to.meta.keepAlive) {
    const { push } = useKeepAlive()
    push(to.name as string)
  }

  next()
})

router.afterEach((to, from) => {
  PageLaodingBar.done()
})

export default router
