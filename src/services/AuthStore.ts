import { defineStore } from 'pinia'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    token: localStorage.getItem('token') || null,
  }),

  actions: {
    login(userData: { email: string; password: string }): boolean {
      const validEmail = 'admin@example.com'
      const validPassword = '123456'

      if (userData.email === validEmail && userData.password === validPassword) {
        const mockUser = { id: 1, name: 'Usuario Demo', email: userData.email }
        const mockToken = 'fake-jwt-token'

        //Actualizar
        this.user = mockUser
        this.token = mockToken

        //Almacenar
        localStorage.setItem('user', JSON.stringify(mockUser))
        localStorage.setItem('token', mockToken)

        router.push('/dashboard')
        return true
      }

      return false
    },

    logout() {
      //restablece
      this.user = null
      this.token = null

      //elimina
      localStorage.removeItem('user')
      localStorage.removeItem('token')

      router.push('/login')
    },

    isAuthenticated() {
      console.log('Auth status:', !!this.token) // Depuración
      return !!this.token
    },
  },
})
