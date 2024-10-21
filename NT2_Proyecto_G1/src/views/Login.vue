<template>
  <div>
    <div id="titulo-InicioSesion">
      <h2>Iniciar Sesión</h2>
    </div>
   
    <form @submit.prevent="handleLogin">
      <div id="Form-InicioSesion">
        <input type="text" v-model="username" placeholder="Usuario" required />
      <input type="password" v-model="password" placeholder="Contraseña" required />
      <div id="boton-InicioSesion"><button type="submit" class="btn btn-primary">Iniciar Sesión</button></div>
      
      </div>
      
    </form>
    <div id="mensajeError">
        <ErrorMessage v-if="errorMessage" :message="errorMessage" />
    </div>
    
  </div>
</template>

<style>
  #titulo-InicioSesion{
    text-align: center;
    color: violet;
    position: relative;
    top: 150px;

  }

  #Form-InicioSesion{
    background-color: violet;
    height: 500px;
    width: 600px;
    position: relative;
    top: 100px;
    left: 500px;
    border-radius: 50px;
  }

  input{
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 60px;
    position: relative;
    top: 150px;
    left: 60px;
    height: 50px;
    width: 350px;
  }

  #boton-InicioSesion{
    position: relative;
    top: 150px;
    left: 230px;
  }
  #mensajeError{
    position: relative;
    left: 620px;
    top: 20px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 25px;
    width: 400px;
  }

</style>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ErrorMessage from '../components/ErrorMessage.vue';

export default {
  components: { ErrorMessage },
  setup(_, { emit }) { // Obtén emit del segundo argumento
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const router = useRouter();

    const handleLogin = () => {
      if (username.value === 'admin' && password.value === '1234') {
        errorMessage.value = '';
        emit('login-success', username.value); // Emitir el evento aquí
        router.push('/'); // Redirigir aquí
      } else {
        errorMessage.value = 'Usuario o contraseña incorrectos';
      }
    };

    return { username, password, handleLogin, errorMessage };
  },
};
</script>
