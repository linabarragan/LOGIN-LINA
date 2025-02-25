<template>
  <div class="settings-container">
    <h2>Configuración</h2>

    <div class="setting-option">
      <label for="dark-mode">Modo oscuro:</label>
      <input id="dark-mode" type="checkbox" v-model="darkMode" />
    </div>

    <div class="setting-option">
      <label for="notifications">Notificaciones:</label>
      <input id="notifications" type="checkbox" v-model="notifications" />
    </div>

    <div class="setting-option">
      <label for="language">Idioma:</label>
      <select id="language" v-model="language">
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="fr">Francés</option>
      </select>
    </div>

    <button @click="saveSettings">Guardar Cambios</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const darkMode = ref(false)
const notifications = ref(true)
const language = ref('es')

const saveSettings = () => {
  alert(
    `Configuraciones guardadas:\nModo oscuro: ${darkMode.value}\nNotificaciones: ${notifications.value}\nIdioma: ${language.value}`,
  )
}
</script>

<style scoped>
.settings-container {
  width: 50%;
  margin: auto;
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: white;
}

h2 {
  color: black;
}

.setting-option {
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

label {
  font-weight: bold;
  color: black;
}

select,
input[type='checkbox'] {
  padding: 0.3rem;
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
