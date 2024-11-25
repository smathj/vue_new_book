import {createRouter, createWebHistory} from "vue-router";
// 정적 import
import HomeView from "@/views/HomeView.vue";
import UserView from "@/views/UserView.vue";
import UserInfo from "@/views/UserInfo.vue";
import TestView from "@/views/TestView.vue";
import Test1View from "@/views/Test1View.vue";
import Test2View from "@/views/Test2View.vue";

// console.log(import.meta)
// console.log(import.meta.env)
// console.log('import.meta.env.BASE_URL = ', import.meta.env.BASE_URL)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          // component: () => import('../views/AboutView.vue')
          // vite.config.js 에 등록해쑴
          //! 동적 import
          component: () => import('@views/AboutView.vue')
        },
        {
          path: '/user/info',
          name: 'userInfo',
          component: UserInfo
        },
        {
          path: '/user/:id',
          name: 'userId',
          component: UserView
        },
        {
          path: '/user/:id/profile',
          name: 'userIdProfile',
          component: UserInfo
        },
        {
          path: '/aaa',
          name: 'aaa',
          // component: UserInfo
          redirect: '/'
        },
        {
          path: '/test',
          name: 'test',
          // component: TestView,
          children: [
              {
                path: '1',
                name: 'test1',
                component:  Test1View
              },
              {
                path: '2',
                name: 'test2',
                component:  Test2View
              }
          ]
        },

    ]
})

export default router
