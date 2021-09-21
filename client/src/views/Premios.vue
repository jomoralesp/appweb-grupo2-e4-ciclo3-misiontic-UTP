<template>
  <div class="container">
    <h1>Premios</h1>
    <div class="Premios_listaPremios">
      <ItemPremio></ItemPremio>
      <ItemPremio></ItemPremio>
      <ItemPremio></ItemPremio>
      <ItemPremio></ItemPremio>
      <ItemPremio></ItemPremio>
      <ItemPremio></ItemPremio>
    </div>
  </div>
</template>
<script>
import ItemPremio from "./../components/ItemPremio.vue";
export default {
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