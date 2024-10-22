<template>
  <div id="app">
    <Login v-if="!inicioSesion.loggedIn" @login-success="handleLoginSuccess" />

    <div v-if="inicioSesion.loggedIn" :username="inicioSesion.userName" @logout="handleLogout" >

      <NavInicio />
     <router-view />
    </div>
    
  </div>
</template>

<script>
import { useLoginStore } from 'C:/Users/Windows/Desktop/Carrera Analista de Sistemas/PNT2/ProyectoFinal_PNT2_Grupo1/NT2_Proyecto_G1/src/stores/LoginStore.js'; // Asegúrate de usar la ruta correcta
import Login from './views/Login.vue';
import NavInicio from './components/NavInicio.vue';

export default {
  components: { Login, NavInicio },
  setup() {
    const inicioSesion = useLoginStore();

    const handleLoginSuccess = (user) => {
      inicioSesion.userName = user; 
      inicioSesion.loggedIn = true; 
    };

    const handleLogout = () => {
      inicioSesion.logout(); 
    };

    return { inicioSesion, handleLoginSuccess, handleLogout };
  },
};
</script>
