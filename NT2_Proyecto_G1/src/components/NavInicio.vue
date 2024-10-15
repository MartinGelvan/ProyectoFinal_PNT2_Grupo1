<template>
    
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Inicio</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link">Acerca de</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <button @click="logout">Logout</button>
                    </ul>

                    <p v-if="email">{{ email }}</p>

                </div>
            </div>
        </nav>
        <div class="container-fluid mt-3">
            
        </div>
    
</template>

<script>
    export default {

        data() {
        return {
            email: '',
        };
    },
    created() {
        this.email = localStorage.getItem('email'); // Obtener el email al crear el componente
    },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
};
</script>

<style>

    #collapsibleNavbar{
        justify-content: center;
    }

</style>
