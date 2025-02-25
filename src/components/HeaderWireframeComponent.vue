<script setup lang="ts">
import { useAuthStore } from '@/services/AuthStore'

const authStore = useAuthStore()

const handleLogout = () => {
  authStore.logout() // Llama al método logout del store
}
</script>

<template>
  <header class="header">
    <h1>Dashboard</h1>
    <div class="user-info">
      <span>👤 Usuario</span>
      <button @click="handleLogout">🚪 Cerrar sesión</button>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #34495e;
  color: white;
  padding: 15px 20px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

button {
  background: #e74c3c;
  border: none;
  padding: 8px 12px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background: #c0392b;
}
</style>
