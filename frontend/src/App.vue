<template>
  <div id="app">
    <header class="app-header">
      <h2>Práctica 2: Vue & API</h2>
      <nav>
        <router-link to="/">Inicio</router-link> | 
        <router-link to="/servicios">Servicios</router-link>
      </nav>
    </header>

    <main class="app-content">
      <!-- Aquí se cargan dinámicamente las vistas según la ruta -->
      <router-view />
    </main>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f7f6;
}

.app-header {
  background-color: #35495e;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-header h2 {
  margin: 0;
}

.app-header nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
}

.app-header nav a.router-link-exact-active {
  color: #42b883;
}

.app-content {
  padding: 20px;
}
</style>