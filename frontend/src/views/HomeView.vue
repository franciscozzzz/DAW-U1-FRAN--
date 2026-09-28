
<template>
  <div class="home-container">
    <h1>Bienvenido al Sistema Full Stack</h1>
    <p>Esta es la página principal de nuestra aplicación desarrollada con Vue 3 y PHP.</p>
    <router-link to="/servicios" class="btn-primary">Ver Catálogo de Servicios</router-link>
  </div>
</template>

<style scoped>
.home-container {
  text-align: center;
  padding: 40px 20px;
}

.home-container h1 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.home-container p {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 25px;
}

.btn-primary {
  display: inline-block;
  background-color: #42b883;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #35495e;
}
</style>