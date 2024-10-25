<template>
  <div>
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="loginUser">
      <input v-model="username" placeholder="Nombre de usuario" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Iniciar Sesión</button>
    </form>
    <button @click="$emit('closeLogin')">Cerrar</button>
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

const loginUser = async () => {
  await userStore.login({ username: username.value, password: password.value });
  if (userStore.isAuthenticated) {
    emit('loginSuccess'); // Emitir evento para cerrar el Login
    router.push('/home'); // Redirige a Home
  }
  username.value = '';
  password.value = '';
};
</script>
