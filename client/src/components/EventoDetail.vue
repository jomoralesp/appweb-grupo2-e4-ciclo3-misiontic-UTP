<template>
  <div>
    <button @click="$emit('cerrarDetalle')">cerrar</button>
    <h2>{{ idEvento }}</h2>
    <p>{{ dataEventoId }}</p>
    <button @click="$emit('editarEvento')">Editar</button>
    <button @click="$emit('eliminarEvento')">Eliminar</button>
  </div>
</template>
<script>
export default {
  props: ["idEvento", "dataEventoId"],
  data() {
    return {
      dataEvento: [],
    };
  },
};
</script>
