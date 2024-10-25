<template>
  <div>
    <h2>Registrarse</h2>
    <form @submit.prevent="registerUser">
      <input v-model="username" placeholder="Nombre de usuario" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Registrarse</button>
    </form>
    <button @click="$emit('closeRegister')">Cerrar</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/userStore.js';

const emit = defineEmits();
const username = ref('');
const password = ref('');
const userStore = useUserStore();
const router = useRouter();

const registerUser = async () => {
  await userStore.register({ username: username.value, password: password.value });
  if (userStore.isAuthenticated) {
    emit('registerSuccess'); // Emitir evento para cerrar el Register
    router.push('/home'); // Redirige a Home
  }
  username.value = '';
  password.value = '';
};
</script>
