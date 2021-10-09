import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: { name: 'Home' },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home.vue')
      }
        ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router