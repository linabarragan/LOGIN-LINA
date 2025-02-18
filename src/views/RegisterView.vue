<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'RegistroView',
  setup() {
    const nombreCompleto = ref('')
    const correo = ref('')
    const password = ref('')
    const confirmPassword = ref('')

    return {
      nombreCompleto,
      correo,
      password,
      confirmPassword,
    }
  },
})
</script>

<template>
  <div class="registro-view">
    <h2>Register</h2>
    <form>
      <div class="form-grid">
        <div class="input-group">
          <label for="nombre">Nombre Completo</label>
          <input id="nombre" v-model="nombreCompleto" type="text" placeholder="Ingresa tu nombre" />
        </div>
        <div class="input-group">
          <label for="correo">Correo Electrónico</label>
          <input id="correo" v-model="correo" type="email" placeholder="Ingresa tu correo" />
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
        <div class="input-group">
          <label for="confirm-password">Confirma Contraseña</label>
          <input
            id="confirm-password"
            v-model="confirmPassword"
            type="password"
            placeholder="Confirma tu contraseña"
          />
        </div>
      </div>
      <button type="submit">Registrarse</button>
    </form>
    <p>
      ¿Ya tienes una cuenta?
      <br />
      <router-link to="/login">Inicia sesión</router-link>
    </p>
  </div>
</template>

<style scoped>
.registro-view {
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 75%;
  margin: auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

.registro-view h2 {
  color: black;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas iguales */
  gap: 1rem;
}

.input-group {
  text-align: left;
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

.registro-view p {
  margin-top: 1rem;
  color: #1d1b64;
  font-size: 0.8rem;
}

.registro-view a {
  color: #1d1b64;
  text-decoration: underline;
}
</style>
