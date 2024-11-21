import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/home-view.vue'
// 路由菜单
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/user/login',
    name: 'userLogin',
    component: HomeView,
  },
  {
    path: '/user/register',
    name: 'userRegister',
    component: HomeView,
  },
  {
    path: '/admin/userManage',
    name: 'adminUserManage',
    component: HomeView,
  },
]

export default routes
