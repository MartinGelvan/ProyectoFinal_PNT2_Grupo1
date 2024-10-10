
<script setup>
import CarouselInicio from '../components/CarouselInicio.vue';
import TarjetasInicio from '../components/TarjetasInicio.vue';

</script>

<template>
  <div>
    <CarouselInicio></CarouselInicio>
   
    
    <main>

      <TarjetasInicio></TarjetasInicio>

    </main>

    <router-view></router-view>
  </div>
</template>