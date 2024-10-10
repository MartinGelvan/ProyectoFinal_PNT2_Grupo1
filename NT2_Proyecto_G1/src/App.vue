

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
    
  
     <!-- Aquí se mostrarán las vistas -->
     <router-view></router-view>
  </div>
</template>


