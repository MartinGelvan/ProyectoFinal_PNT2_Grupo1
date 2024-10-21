<script setup>
import CarouselInicio from '../components/CarouselInicio.vue';
import TarjetasInicio from '../components/TarjetasInicio.vue';

</script>

<template>
  <div>
    <CarouselInicio></CarouselInicio>


    <main>
      <div id="primeraSeccionTarjetas">
        <h1 id="tituloTarjetasInicio">VUELOS DE CALIDAD</h1>

        <TarjetasInicio></TarjetasInicio>
      </div>


    </main>


    <router-view></router-view>
    <footer>
      <h1>Esto es el footer</h1>

    </footer>
  </div>

  
  
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style>
  #primeraSeccionTarjetas{
    background-color: rgb(165, 31, 165);
    border-radius: 300px 300px 0px 0px;
    padding: 110px;
    margin: 0 10px 0 10px;
    height: 50px;
  }

  #tituloTarjetasInicio{
    color: rgb(255, 255, 255);
    text-align: center;
    position: relative;
    bottom: 50px;

  }

  footer{
    color: white;
    position: relative;
    top: 500px;
    background-color: rgb(0, 0, 0);
    height: 200px;
  }

</style>