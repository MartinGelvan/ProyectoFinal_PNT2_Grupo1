

<script setup>

import NavInicio from './components/NavInicio.vue'
</script>
<!--
<template>


  <div>
    
    <NavInicio></NavInicio>
    
  </div>
</template>-->
<template>
  <div id="app">
    <NavInicio></NavInicio>
    <router-view></router-view>
     <!-- Aquí se mostrarán las vistas -->
  </div>
</template>


