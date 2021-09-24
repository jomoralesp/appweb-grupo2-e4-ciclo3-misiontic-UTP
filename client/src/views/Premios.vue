<template>
  <div class="container">
    <h1>Premios</h1>
    <div class="Premios_listaPremios">
      <ItemPremio
        v-for="dataPremio in dataPremios"
        :key="dataPremio.id"
        :dataPremio="dataPremio"
      ></ItemPremio>
    </div>
  </div>
</template>
<script>
import ItemPremio from "./../components/ItemPremio.vue";
export default {
  data() {
    return {
      dataPremios: [],
    };
  },
  components: { ItemPremio },
  mounted() {
    console.log(process.env.VUE_APP_ROOT_API);
    //Se realiza la petición a la api, en el endpoint premios
    fetch(process.env.VUE_APP_ROOT_API + "/premios")
      .then((response) => response.json())
      .then((data) => {
        this.dataPremios = data.premios;
      });
    console.log(this.dataPremios);
  },
};
</script>
<style lang="scss" scoped>
.Premios_listaPremios {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 340px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
