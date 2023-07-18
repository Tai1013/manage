import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/', name: 'layout', component: () => import('@/views/layout/index.vue'),
    children: [
      { path: '/', name: 'home', component: () => import('@/views/Home/index.vue') }
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]
