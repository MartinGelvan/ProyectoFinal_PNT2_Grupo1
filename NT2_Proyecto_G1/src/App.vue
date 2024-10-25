<template>
  <div id="app">
    <NavInicio v-if="isAuthenticated" />
    <router-view v-if="isAuthenticated" /> <!-- Solo renderiza si está autenticado -->
    
    <Welcome 
      v-if="!isAuthenticated && !showLogin && !showRegister" 
      @clickLogin="showLogin = true" 
      @clickRegister="showRegister = true" 
    />
    <Login 
      v-if="showLogin" 
      @closeLogin="showLogin = false" 
      @loginSuccess="handleLoginSuccess"
    />
    <Register 
      v-if="showRegister" 
      @closeRegister="showRegister = false" 
      @registerSuccess="handleRegisterSuccess"
    />
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useUserStore } from './stores/userStore.js';
import NavInicio from './components/NavInicio.vue';
import Welcome from './components/Welcome.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

export default {
  components: { NavInicio, Welcome, Login, Register },
  setup() {
    const userStore = useUserStore();
    const isAuthenticated = computed(() => userStore.isAuthenticated);
    const showLogin = ref(false);
    const showRegister = ref(false);

    const handleLoginSuccess = () => {
      showLogin.value = false; // Cierra el Login
      userStore.isAuthenticated = true; // Asegúrate de que se actualice el estado
    };

    const handleRegisterSuccess = () => {
      showRegister.value = false; // Cierra el Register
      userStore.isAuthenticated = true; // Asegúrate de que se actualice el estado
    };

    return { 
      isAuthenticated, 
      showLogin, 
      showRegister, 
      handleLoginSuccess, 
      handleRegisterSuccess 
    };
  },
};
</script>

<style>
/* Añade aquí tus estilos globales */
</style>
