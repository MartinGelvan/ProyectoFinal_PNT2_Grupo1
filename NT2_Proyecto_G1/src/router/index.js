// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Importa los componentes que usarás como vistas
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

// Definimos las rutas
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  }
];

// Crear una instancia del router
const router = createRouter({
  history: createWebHistory(),  // Usa el modo de historial de navegación del navegador
  routes                         // Configuración de las rutas
});

export default router;
