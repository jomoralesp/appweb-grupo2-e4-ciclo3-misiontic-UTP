<template>
  <div class="ItemPremio card rounded-3" v-on:click="showAlert()">
    <div class="ItemPremio_img position-relative">
      <!-- Si el componente se encuentra en promo -->
      <h1
        class="
          fw-bold
          position-absolute
          top-0
          start-0
          fs-4
          w-25
          py-2
          ItemPremio_tituloPromo
        "
      >
        Promo
      </h1>
      <!-- IMagen del premio -->
      <img
        class="img-fluid"
        :src="require('@/assets/images/premios/Busocuelloredondoblanco.jpg')"
        alt=""
      />
    </div>
    <div class="ItemPremio_puntos">
      <p class="fs-6 mb-0">PUNTOS</p>
      <!-- valor de puntos -->
      <h1 class="fs-1">200</h1>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal('Hello Vue world!!!');
    },
  },
};
</script>
<style scoped lang="scss">
.ItemPremio {
  font-family: "Assistant", sans-serif;
}
.ItemPremio_tituloPromo {
  background: $color-salmon;
  min-width: 25%;
  color: white;
}
.ItemPremio_puntos {
  color: white;
  background: #242f3d;
}
</style>