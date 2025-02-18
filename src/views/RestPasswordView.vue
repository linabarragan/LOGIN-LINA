<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'RestablecerContraseñaView',
  setup() {
    const email = ref('')

    return {
      email,
    }
  },
})
</script>

<template>
  <div class="restablecer-view">
    <h2>Rest password</h2>
    <form>
      <div class="input-group">
        <label for="email">Correo electrónico</label>
        <input id="email" v-model="email" type="email" placeholder="Ingresa tu correo" />
      </div>
      <button type="submit">Enviar enlace</button>
    </form>
    <p>
      ¿Recuerdas tu contraseña?
      <br />
      <router-link to="/login">Inicia sesión</router-link>
    </p>
  </div>
</template>

<style scoped>
.restablecer-view {
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 75%;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

.restablecer-view h2 {
  color: black;
  font-weight: bold;
  margin-bottom: 1.5rem;
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

.restablecer-view p {
  margin-top: 1rem;
  color: #1d1b64;
  font-size: 0.8rem;
}

.restablecer-view a {
  color: #1d1b64;
  text-decoration: underline;
}

.restablecer-view a:hover {
  text-decoration: underline;
}
</style>
