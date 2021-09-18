<template>
  <div class="Eventos__item">
    <div class="Eventos__item-description">
      <p>{{ dataEvento.descripcion }}</p>
    </div>
    <div class="Eventos__item-imgtitle">
      <img :src="require('@/assets/images/eventos/' + dataEvento.urlImagen)" alt="" />
      <h1>{{ dataEvento.titulo }}</h1>
    </div>
  </div>
</template>
<script>
const path = require("path");
export default {
  props: ["dataEvento", "simple"],
  data() {
    return {
      dataE: {
        imagen: "@/assets/papiroflexia.jpg",
      },
      name: "papiroflexia.jpg",
      imagenEvento: require("@/assets/images/eventos/papiroflexia.jpg"),
    };
  },
  computed: {
    loadimage: (url) => {
      let img = require(url);
      return img;
    },
  },
  beforeMount() {
    //this.imagenEvento = require(this.dataE.imagen);
  },
  mounted() {
    //this.imagenEvento = require(this.dataE.imagen);
  },
  methods: {
  },
};
</script>
<style lang = "scss" scoped>
.Eventos__item {
  margin-block: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .Eventos__item-description {
    display: grid;
  }
  .Eventos__item-imgtitle {
    position: relative;
    display: inline-block;
    img {
      width: 100%;
    }
    h1 {
      position: absolute;
      background: rgba(255, 255, 255, 0.5);
      width: 100%;
      bottom: 0;
      margin: 0;
    }
  }
}
</style>