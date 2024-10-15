<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        <p v-if="error">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: null,
      };
    },
    methods: {
      async login() {
        try {
          // Simular usuarios válidos
      const validUsers = [
        { email: 'user@example.com', password: 'password' },
        { email: 'admin@example.com', password: 'admin' },
      ];

      // Comprobar si las credenciales son válidas
      const user = validUsers.find(
        (u) => u.email === this.email && u.password === this.password
      );

      if (user) {
        // Almacenar token simulado
        localStorage.setItem('token', 'fake-jwt-token');
        this.$router.push('/'); // Redirigir al home
      } else {
        this.error = 'Credenciales incorrectas';
      }
  
       
        } catch (error) {
          this.error = error.message;
        }
      },
    },
  };
  </script>
  