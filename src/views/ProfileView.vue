<template>
  <div class="profile-container">
    <h2>Perfil de Usuario</h2>

    <div class="profile-picture">
      <img :src="profilePicture" alt="Foto de perfil" />
    </div>

    <div class="profile-info">
      <label for="name">Nombre:</label>
      <input id="name" v-model="name" type="text" />

      <label for="email">Correo Electrónico:</label>
      <input id="email" v-model="email" type="email" />

      <button @click="saveProfile">Guardar Cambios</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('Juan Pérez')
const email = ref('juanperez@example.com')
const profilePicture = ref('https://via.placeholder.com/150')

const saveProfile = () => {
  alert(`Perfil actualizado:\nNombre: ${name.value}\nCorreo: ${email.value}`)
}
</script>

<style scoped>
.profile-container {
  width: 50%;
  margin: auto;
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: white;
}

h2 {
  color: #333;
}

.profile-picture img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

button {
  background: black;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.8rem;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #4a1f6e;
}
</style>
