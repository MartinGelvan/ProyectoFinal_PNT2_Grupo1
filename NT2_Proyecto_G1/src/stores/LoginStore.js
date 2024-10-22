// src/stores/LoginStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useLoginStore = defineStore('logeo', () => {
  const router = useRouter();
  const userName = ref('');
  const password = ref('');
  const loggedIn = ref(false); 

  const loguearse = () => {
    if (userName.value === 'admin' && password.value === '1234') {
      loggedIn.value = true; 
      router.push('/'); 
    } else {
      alert("Usuario/Contraseña incorrecta!!");
    }
  };

  const logout = () => {
    loggedIn.value = false; 
    userName.value = '';
  };

  return { userName, password, loggedIn, loguearse, logout };
});
