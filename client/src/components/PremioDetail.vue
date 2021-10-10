<template>
  <div>
    <button @click="$emit('cerrarDetalle')">cerrar</button>
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="card" style="width: 18rem">
          <img class="card-img-top" :src="urlImagen" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{ dataPremioId[0].nombre }}</h5>
            <p class="card-text">{{ dataPremioId[0].detalle }}</p>
          </div>
          <table class="table table-bordered">
            <tbody>
              <tr>
                <th scope="row">Categoria</th>
                <td colspan="2">{{ dataPremioId[0].categoria }}</td>
              </tr>
              <tr>
                <th scope="row">Marca</th>
                <td colspan="2">{{ dataPremioId[0].marca }}</td>
              </tr>
              <tr>
                <th scope="row">Cantidad</th>
                <td colspan="2">{{ dataPremioId[0].cantidad }}</td>
              </tr>
              <tr>
                <th scope="row">Valor Puntos</th>
                <td colspan="2">{{ dataPremioId[0].valor_puntos }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-4 d-flex align-items-center">
      <div class="d-flex flex-columns">
        <button class="btn btn-warning btn-block" @click="$emit('editarPremio')">
          Editar
        </button>
        <button class="btn btn-danger btn-block" @click="$emit('eliminarPremio')">
          Eliminar
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: ["idPremio", "dataPremioId"],
  data() {
    return {
      dataPremio: [],
      urlImagen: "",
    };
  },
  mounted() {
    var urlServer = process.env.VUE_APP_ROOT;

    axios
      .get(urlServer + this.dataPremio.path_foto, {
        responseType: "arraybuffer",
      })
      .then((response) => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        this.urlImagen = "data:;base64," + base64;
      })
      .catch((e) => {
        axios
          .get(urlServer + "/static/images/cross.jpg", {
            responseType: "arraybuffer",
          })
          .then((response) => {
            const base64 = btoa(
              new Uint8Array(response.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            );
            this.urlImagen = "data:;base64," + base64;
          });
      });
  },
};
</script>
