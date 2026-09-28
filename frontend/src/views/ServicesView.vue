<template>
  <div class="services-container">
    <h1>Catálogo de Servicios</h1>
    <p>Aquí podrás consultar los servicios disponibles obtenidos desde nuestra API de PHP.</p>
    
    <div class="card-list">
      <div class="card">
        <h3>Servicio de Ejemplo 1</h3>
        <p>Descripción del primer servicio integrado en el sistema full stack.</p>
      </div>
      <div class="card">
        <h3>Servicio de Ejemplo 2</h3>
        <p>Descripción del segundo servicio integrado en el sistema full stack.</p>
      </div>
    </div>

    <div class="back-link">
      <router-link to="/" class="btn-secondary">Volver al Inicio</router-link>
    </div>
  </div>
</template>

<style scoped>
.services-container {
  padding: 30px;
  max-width: 800px;
  margin: 0 auto;
}

.services-container h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 10px;
}

.services-container > p {
  color: #666;
  text-align: center;
  margin-bottom: 30px;
}

.card-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

.card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.card h3 {
  margin-top: 0;
  color: #42b883;
}

.back-link {
  text-align: center;
}

.btn-secondary {
  display: inline-block;
  background-color: #35495e;
  color: white;
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
}

.btn-secondary:hover {
  background-color: #2c3e50;
}
</style>