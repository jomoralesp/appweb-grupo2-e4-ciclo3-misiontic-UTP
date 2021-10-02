<template>
  <div>
    <button @click="$emit('cerrarForm')">cerrar</button>
    <!-- "_id": {
        "$oid": "6157ddd89676b0ff6a3657ec"
    },
    "id_categoria": 1,
    "nombre": "Sarten",
    "marca": "Immusa",
    "detalle": "Sarten de 18cm de diametro, antiaderente",
    "path_foto": "/static/images/premios/sarten.png",
    "cantidad": 20,
    "valor_puntos": 200,
    "visible": true -->
    <form class="row g-3" @submit.prevent="onPress">
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Nombre"
          v-model="modelPremio.nombre"
          required
        />
      </div>
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Marca"
          v-model="modelPremio.marca"
          required
        />
      </div>
      <div class="col-md6">
        <select name="selectCategoria" v-model="modelPremio.id_categoria" required>
          <option
            v-for="(categoria, idx) in categorias"
            :key="idx"
            :value="categoria._id"
          >
            {{ categoria.categoria }}
          </option>
        </select>
      </div>
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Url"
          v-model="modelPremio.detalle"
        />
      </div>
      <div class="col-md-6">
        <label for="">Cantidad</label>
        <input
          type="number"
          class="form-control"
          placeholder="Cantidad"
          v-model="modelPremio.cantidad"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="">Puntos</label>
        <input
          type="number"
          class="form-control"
          placeholder="Valor puntos"
          v-model="modelPremio.valor_puntos"
          required
        />
      </div>
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Path image"
          v-model="modelPremio.path_foto"
          required
        />
      </div>
      <div class="col-12">
        <button @click="clearForm">Limpiar</button>
        <button type="submit" class="btn btn-primary">"Crear"</button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["categorias"],
  data() {
    return {
      modelPremio: {
        id_categoria: 0,
        nombre: "",
        marca: "",
        detalle: "",
        path_foto: "",
        cantidad: 0,
        valor_puntos: 0,
        visible: true,
      },
    };
  },
  methods: {
    clearForm() {
      this.modelPremio = {
        id_categoria: 0,
        nombre: "",
        marca: "",
        detalle: "",
        path_foto: "",
        cantidad: 0,
        valor_puntos: 0,
        visible: true,
      };
    },
    onPress() {
      console.log(this.modelPremio);
      console.log("creando registro");
      let apiURL = `${process.env.VUE_APP_ROOT_API}/eventos/create-event/`;
      axios
        .post(apiURL, this.modelPremio)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
      this.clearForm();
      this.$emit("cerrarForm");
    },
  },
};
</script>
