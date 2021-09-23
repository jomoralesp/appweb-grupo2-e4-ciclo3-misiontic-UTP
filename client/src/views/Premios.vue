<template>
  <div class="container">
    <h1>Premios</h1>
    <div class="Premios_listaPremios">
      <ItemPremio v-for= "dataPremio in dataPremios" :key="dataPremio.id" :dataPremio="dataPremio" ></ItemPremio>
    </div>
  </div>

</template>
<script>
import ItemPremio from "./../components/ItemPremio.vue";
export default {
  data(){
    return{
      dataPremios: [
        {
          id: 0,
          disponible: false,
          puntos: 260,
          ulrImagen: '/images/premios/sombrillarecogible.jpg'
        },
        {
          id: 1,
          disponible: true,
          puntos: 600,
          ulrImagen: '/images/premios/Busocuelloredondoblanco.jpg'
        },
        {
          id: 2,
          disponible: false,
          puntos: 200,
          ulrImagen: '/images/premios/camisetapoloblanco.jpg'
        },
        {
          id: 3,
          disponible: true,
          puntos: 400,
          ulrImagen: '/images/premios/Busocuelloredondoblanco.jpg'
        },
        {
          id: 4,
          disponible: false,
          puntos: 400,
          ulrImagen: '/images/premios/Busocuelloredondoblanco.jpg'
        },
        {
          id: 5,
          disponible: true,
          puntos: 260,
          ulrImagen: '/images/premios/sombrillarecogible.jpg'
        },
      ]
    }
  },
  components: { ItemPremio },
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