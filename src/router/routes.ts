import type { RouteRecordRaw } from 'vue-router'
import BasicLayout from '@/layouts/basic-layout.vue'
// 路由菜单
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: BasicLayout,
    redirect: '/homeview',
    children: [
      {
        path: '/homeview',
        component: () => import('@/views/home-view.vue'),
        name: 'homeview',
        meta: {
          title: '首页',
        },
      },
    ],
  },
]
export default routes
