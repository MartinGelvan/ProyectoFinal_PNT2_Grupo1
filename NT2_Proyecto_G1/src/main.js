import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';  // Importamos el router

const app = createApp(App);

// Usamos el router en la aplicación
app.use(router);

app.mount('#app');