<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/services/AuthStore'

const authStore = useAuthStore()
const username = ref('')
const password = ref('')

const handleLogin = async () => {
  if (!username.value || !password.value) {
    alert('⚠️ Todos los campos son obligatorios.')
    return
  }

  try {
    const success = await authStore.login({ email: username.value, password: password.value })
    if (!success) {
      alert('❌ Usuario o contraseña incorrectos.')
    }
  } catch {
    alert('🚨 Ocurrió un error inesperado. Inténtalo de nuevo.')
  }
}
</script>

<template>
  <div class="login-view">
    <h2>Sign in</h2>
    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <label for="username">Usuario</label>
        <input id="username" v-model="username" type="text" placeholder="Ingresa tu usuario" />
      </div>
      <div class="input-group">
        <label for="password">Contraseña</label>
        <input
          id="password"
          v-model="password"
          type="password"
          placeholder="Ingresa tu contraseña"
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
    <p>
      ¿No tienes una cuenta?
      <router-link to="/register">Regístrate</router-link>
    </p>
    <p>
      ¿Olvidaste tu contraseña?
      <router-link to="/rest-password">Restablecer contraseña</router-link>
    </p>
  </div>
</template>

<style scoped>
.login-view {
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 75%;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

.login-view h2 {
  color: black;
  font-weight: bold;
}

.input-group {
  text-align: left;
  margin-bottom: 1rem;
}

.input-group label {
  display: block;
  color: black;
  font-weight: bold;
  margin-bottom: 0.3rem;
}

.input-group input {
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 10px;
  width: 100%;
  padding: 0.8rem;
  color: #000000;
  font-size: 0.9rem;
}

.input-group input::placeholder {
  color: #000000;
}

button[type='submit'] {
  background: black;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 0.8rem 0;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 1rem;
}

button[type='submit']:hover {
  background: #4a1f6e;
}

.login-view p {
  margin-top: 1rem;
  color: #1d1b64;
  font-size: 0.8rem;
}

.login-view a {
  color: #1d1b64;
  text-decoration: underline;
}
</style>
