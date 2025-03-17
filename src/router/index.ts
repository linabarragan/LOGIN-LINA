import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/services/AuthStore'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import RestPasswordView from '@/views/RestPasswordView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SettingView from '@/views/SettingView.vue'
import DashboardView from '@/views/DashboardView.vue'

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
      component: DashboardView,
      meta: { layout: 'WireFrame', requiresAuth: true },
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { layout: 'WireFrame', requiresAuth: true },
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingView,
      meta: { layout: 'WireFrame', requiresAuth: true },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/login',
    },
  ],
})

// Guardia de navegación para proteger rutas
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const publicRoutes = ['/login', '/register', '/rest-password'] // Definir rutas públicas

  // Bloquear acceso a rutas públicas si el usuario está autenticado
  if (authStore.isAuthenticated() && publicRoutes.includes(to.path)) {
    return next('/dashboard') // Redirigir al usuario autenticado
  }

  // Verificar si la ruta requiere autenticación
  if (to.meta.requiresAuth && !authStore.isAuthenticated()) {
    return next('/login') // Redirigir a /login si no está autenticado
  }

  next() // Permitir la navegación normal
})

export default router
