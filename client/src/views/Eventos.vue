<template>
  <div class="Eventos">
    <h1>Eventos</h1>
    <div class="Eventos__lista" >
        <ItemEvento :dataEvento = "item_evento" v-for = "item_evento in lista_eventos" :key="item_evento.id"></ItemEvento>
    </div>
  </div>
</template>
<script>
import ItemEvento from "./../components/ItemEvento.vue";
export default {
  components: { ItemEvento: ItemEvento },
  data() {
    return {
      lista_eventos: [], //inicializamos un array de datos vacío
    };
  },
  mounted() {
    fetch("https://my-json-server.typicode.com/DarkNikT/fakeapi-appweb/eventos")
      .then((res) => res.json())
      .then((data) => {
        this.lista_eventos = data;
      });
  },
};
</script>