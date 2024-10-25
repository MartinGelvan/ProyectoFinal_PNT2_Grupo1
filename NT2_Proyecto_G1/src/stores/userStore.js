import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    register(userData) {
      console.log('Registro exitoso:', userData);
      this.user = userData;
      this.isAuthenticated = true;
    },
    login(userData) {
      console.log('Inicio de sesión exitoso:', userData);
      this.user = userData;
      this.isAuthenticated = true;
    },
    logout() {
      this.user = null;
      this.isAuthenticated = false;
      console.log('Cierre de sesión exitoso');
    },
  },
});
