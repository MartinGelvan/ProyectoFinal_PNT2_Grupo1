<template>
  <div id="app">
    <div v-if="!loggedIn">
      <Login @login-success="handleLoginSuccess" />
    </div>

    <div v-if="loggedIn">
      <NavInicio :username="username" @logout="handleLogout" /> <!-- Escuchar el evento de cierre de sesión -->
      <router-view />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Login from './views/Login.vue';
import NavInicio from './components/NavInicio.vue';

export default {
  components: { Login, NavInicio },
  setup() {
    const loggedIn = ref(false);
    const username = ref('');

    const handleLoginSuccess = (user) => {
      loggedIn.value = true;
      username.value = user;
    };

    const handleLogout = () => {
      loggedIn.value = false;
      username.value = ''; // Opcional: limpiar el nombre de usuario
    };

    return { loggedIn, username, handleLoginSuccess, handleLogout };
  },
};
</script>
