<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginFormu',
  data() {
    return {
      email: '',
      password: '',
    }
  },
})
</script>

<template>
  <div class="login-formu">
    <input type="email" v-model="email" placeholder="E-mail" />
    <input type="password" v-model="password" placeholder="Password" />
    <button type="submit">LOGIN</button>
  </div>
</template>

<style scoped>
.login-formulario {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

input {
  padding: 8px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369f6e;
}
</style>
