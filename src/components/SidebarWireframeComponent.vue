<script setup lang="ts">
import { useAuthStore } from '@/services/AuthStore'

const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logout()
}
</script>

<template>
  <aside class="sidebar">
    <div class="logo">Mi Dashboard</div>
    <nav>
      <ul>
        <li>
          <router-link to="/dashboard">🏠 Inicio</router-link>
        </li>
        <li>
          <router-link to="/profile">Perfil</router-link>
        </li>
        <li>
          <router-link to="/settings">Configuración</router-link>
        </li>
        <li>
          <button @click="handleLogout">🚪 Cerrar sesión</button>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  margin-bottom: 15px;
}

nav ul li a,
nav ul li button {
  text-decoration: none;
  color: white;
  background: none;
  border: none;
  font-size: 16px;
  width: 100%;
  text-align: left;
  padding: 10px;
  display: block;
  cursor: pointer;
}

nav ul li a:hover,
nav ul li button:hover {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}
</style>
