// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../components/Welcome.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ReserveView from '../views/ReserveView.vue';
import { useUserStore } from '../stores/userStore.js';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true },
  },
  {
    path: '/reserve',
    name: 'Reserve',
    component: ReserveView,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guardias de navegación
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.matched.some(record => record.meta.requiresAuth) && !userStore.isAuthenticated) {
    next({ name: 'Login' }); // Redirige a Login si no está autenticado
  } else {
    next(); // Permite el acceso a la ruta
  }
});

export default router;
