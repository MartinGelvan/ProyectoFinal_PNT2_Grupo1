<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/reserve" class="nav-link">Reservar Vuelo</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Acerca de</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>

          <li class="nav-item" v-if="isAuthenticated">
            <button class="nav-link" @click="logout">Cerrar Sesión</button>
          </li>
        </ul>
        <div id="bienvenido" v-if="isAuthenticated">
          <h5>Bienvenido {{ userName }}</h5>
        </div>
      </div>
    </div>
  </nav>
  <div class="container-fluid mt-3"></div>
</template>

<script>
import { computed } from 'vue';
import { useUserStore } from '../stores/userStore'; // Asegúrate de que la ruta sea correcta

export default {
  setup() {
    const userStore = useUserStore();

    const isAuthenticated = computed(() => userStore.isAuthenticated);
    const userName = computed(() => userStore.user?.username); // Asume que el nombre de usuario está en user

    const logout = () => {
      userStore.logout();
    };

    return { isAuthenticated, userName, logout };
  },
};
</script>

<style>
#bienvenido {
  color: wheat;
  padding: 20px;
}

#collapsibleNavbar {
  justify-content: center;
}
</style>
