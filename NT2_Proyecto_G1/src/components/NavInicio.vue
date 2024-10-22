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
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Acerca de</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>

          
          <li class="nav-item" v-if="inicioSesion.loggedIn">
            <button class="nav-link" @click="logout">Cerrar Sesión</button>
          </li>
        </ul>
        <div id="bienvenido" v-if="inicioSesion.loggedIn">
          <h5>Bienvenido {{ inicioSesion.userName }}</h5>
        </div>
      </div>
    </div>
  </nav>
  <div class="container-fluid mt-3"></div>
</template>

<script>
import { useLoginStore } from 'C:/Users/Windows/Desktop/Carrera Analista de Sistemas/PNT2/ProyectoFinal_PNT2_Grupo1/NT2_Proyecto_G1/src/stores/LoginStore.js';
import { computed } from 'vue';

export default {
  setup() {
    const inicioSesion = useLoginStore();

    const logout = () => {
      inicioSesion.logout();
    };

    return { inicioSesion, logout };
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
