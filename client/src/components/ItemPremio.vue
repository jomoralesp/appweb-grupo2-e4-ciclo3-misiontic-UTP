<template>
  <router-link v-if="dataPremio.visible" :to="'/premios/detalle/' + dataPremio._id">
    <div class="ItemPremio card" v-on:click="showAlert()">
      <div class="ItemPremio_img position-relative">
        <!-- Si el componente se encuentra agotado -->
        <h1
          class="fw-bold position-absolute top-0 start-0 fs-4 w-50 py-2 ItemPremio_tituloPromo"
          v-if="dataPremio.disponible"
        >
          AGOTADO
        </h1>
        <!-- IMagen del premio -->
        <img class="img-fluid" :src="urlServer" alt="" />
      </div>
      <div class="ItemPremio_puntos card-body">
        <p class="fs-6 mb-0">PUNTOS</p>
        <!-- valor de puntos -->
        <h1 class="fs-1">{{ dataPremio.valor_puntos }}</h1>
      </div>
    </div>
  </router-link>
</template>
<script>
import axios from "axios";
export default {
  props: ["dataPremio"],
  data() {
    return {
      urlServer: "",
    };
  },
  mounted() {
    this.urlServer = process.env.VUE_APP_ROOT;

    axios
      .get(this.urlServer + this.dataPremio.path_foto, { responseType: "arraybuffer" })
      .then((response) => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        this.urlServer = "data:;base64," + base64;
      })
      .catch((e) => {
        axios
          .get(this.urlServer + "/static/images/cross.jpg", {
            responseType: "arraybuffer",
          })
          .then((response) => {
            const base64 = btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            );
            this.urlServer = "data:;base64," + base64;
          });
      });
  },
  methods: {
    showAlert() {
      // Use sweetalert2
      //this.$swal("Ha presionado el premio: " + this.dataPremio.id);
    },
  },
};
</script>
<style scoped lang="scss">
.ItemPremio {
  text-decoration: none;
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
