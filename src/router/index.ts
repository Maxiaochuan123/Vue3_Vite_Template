/*
 * @Date: 2022-07-10
 * @Author: 马晓川 maxc@dustess.com
 * @LastEditors: 马晓川 maxc@dustess.com
 * @LastEditTime: 2022-08-16
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import PageLaodingBar from "@plugins/pageLoadingBar";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "parent",
    component: () => import("@components/Router/index.vue"),

    // 嵌套路由 children[] ✳需要在父路由中放置 <router-view>, 并且子路由需要加上父路由前缀
    children: [
      {
        path: "/parent/a",
        name: "a",
        component: () => import("@components/Router/A.vue")
      },
      {
        // path: '/b', // 普通路由
        path: "/parent/b/:name/:age", // 动态路由
        name: "b",
        component: () => import("@components/Router/B.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  PageLaodingBar.start();
  next();
});

router.afterEach((to, from) => {
  PageLaodingBar.done();
});

export default router;
