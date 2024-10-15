// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Importa los componentes que usarás como vistas
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import Login from '../views/Login.vue';

// Definimos las rutas
const routes = [
  {
    path: '/login',
    component: Login,
  },
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

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
