<script setup>
defineProps({
  servicio: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="service-card">
    <h3>{{ servicio.nombre }}</h3>
    <p>{{ servicio.descripcion }}</p>
    <span>${{ servicio.precio }}</span>
  </div>
</template>