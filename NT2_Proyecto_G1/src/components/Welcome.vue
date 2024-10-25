<template>
    <div class="welcome">
      <h1>Bienvenido</h1>
      <p>¿Quieres iniciar sesión o registrarte?</p>
      <button @click="$emit('clickLogin')">Iniciar Sesión</button>
      <button @click="$emit('clickRegister')">Registrarse</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Welcome',
  };
  </script>
  
  <style>
  .welcome {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  