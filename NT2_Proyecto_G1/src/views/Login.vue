<template>
  <div>
    <div id="titulo-InicioSesion">
      <h2>Iniciar Sesión</h2>
    </div>

    <form @submit.prevent="handleLogin">
      <div id="Form-InicioSesion">
        <input type="text" v-model="inicioSesion.userName" placeholder="Usuario" required />
        <input type="password" v-model="inicioSesion.password" placeholder="Contraseña" required />
        <div id="boton-InicioSesion">
          <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
        </div>
      </div>
    </form>
    <div id="mensajeError" v-if="errorMessage">
      <ErrorMessage :message="errorMessage" />
    </div>
  </div>
</template>

<script>
import { useLoginStore } from 'C:/Users/Windows/Desktop/Carrera Analista de Sistemas/PNT2/ProyectoFinal_PNT2_Grupo1/NT2_Proyecto_G1/src/stores/LoginStore.js';
import { computed } from 'vue';

export default {
  setup() {
    const inicioSesion = useLoginStore();

    const errorMessage = computed(() => {
      
      return null; 
    });

    const handleLogin = () => {
      inicioSesion.loguearse(); 
    };

    return { inicioSesion, handleLogin, errorMessage };
  },
};
</script>


