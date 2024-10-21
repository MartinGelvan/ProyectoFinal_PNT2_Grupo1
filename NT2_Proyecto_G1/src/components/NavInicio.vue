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
  
            <!-- Solo mostrar el botón de Cerrar Sesión si el usuario está logueado -->
            <li class="nav-item" v-if="username">
              <button class="nav-link" @click="logout">Cerrar Sesión</button>
            </li>
          </ul>
          <div id="bienvenido">
            <h5>Bienvenido {{ username }}</h5>
          </div>
        </div>
      </div>
    </nav>
    <div class="container-fluid mt-3"></div>
  </template>
  
  <script>
  export default {
    props: {
      username: {
        type: String,
        required: true,
      },
    },
    setup(props, { emit }) {
      const logout = () => {
        emit('logout'); // Emitir el evento de cierre de sesión
      };
  
      return { logout };
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
  