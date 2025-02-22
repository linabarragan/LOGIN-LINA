import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import RestPasswordView from '@/views/RestPasswordView.vue'
import WireFrame from '@/layout/WireFrame.vue'
import ProfileView from '@/views/ProfileView.vue'
import SettingView from '@/views/SettingView.vue'
import StartView from '@/views/StartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { layout: 'AuthLayout' },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { layout: 'AuthLayout' },
    },
    {
      path: '/rest-password',
      name: 'rest-password',
      component: RestPasswordView,
      meta: { layout: 'AuthLayout' },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: WireFrame,
      meta: { layout: 'WireFrame' },
    },

    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { layout: 'WireFrame' },
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingView,
      meta: { layout: 'WireFrame' },
    },
    {
      path: '/start',
      name: 'start',
      component: StartView,
      meta: { layout: 'WireFrame' },
    },
  ],
})

export default router
