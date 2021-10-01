<template>
  <div>
    <button @click="$emit('cerrarForm')">cerrar</button>
    <h2>{{ modo }}</h2>
    <!--"id_categoria": 1, y
        "id_tipo": 3, y
        "id_sucursal": 1, y
        "titulo": "Aerobicos", y
        "fecha_inicio": "4/10/2021 20:00", y
        "fecha_fin": "4/10/2021 21:30", y
        "lugar": "", y
        "url": "https://meet.google.com/ocs-yybn-vdu",y 
        "path_foto": "/static/images/eventos/Aerobicos.png",
        "cupo": 20,
        "valor_puntos": 80,
        "disponible": true
     -->
    <form class="row g-3" @submit.prevent="onPress">
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Titulo"
          v-model="modelEvento.titulo"
          required
        />
      </div>
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Lugar"
          v-model="modelEvento.lugar"
          required
        />
      </div>
      <div class="col-md6">
        <select name="selectCategoria" v-model="modelEvento.id_categoria" required>
          <option
            v-for="(categoria, idx) in categorias"
            :key="idx"
            :value="categoria._id"
          >
            {{ categoria.nombre }}
          </option>
        </select>
      </div>
      <div class="col-md6">
        <select name="selectTipo" v-model="modelEvento.id_tipo" required>
          <option v-for="(tipo, idx) in tipos" :key="idx" :value="tipo._id">
            {{ tipo.tipoEvento }}
          </option>
        </select>
      </div>
      <div class="col-12" v-show="modelEvento.id_tipo != 2 ? true : false">
        <input
          type="text"
          class="form-control"
          placeholder="Url"
          v-model="modelEvento.url"
        />
      </div>
      <div class="col-md6">
        <select name="selectSucursal" v-model="modelEvento.id_sucursal" required>
          <option v-for="(sucursal, idx) in sucursales" :key="idx" :value="sucursal._id">
            {{ sucursal.nombre }}
          </option>
        </select>
      </div>
      <div class="col-md-6">
        <input
          type="number"
          class="form-control"
          placeholder="Cupo"
          v-model="modelEvento.cupo"
          required
        />
      </div>

      <div class="col-md-6">
        <input
          type="number"
          class="form-control"
          placeholder="Valor puntos"
          v-model="modelEvento.valor_puntos"
          required
        />
      </div>
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          placeholder="Path image"
          v-model="modelEvento.path_foto"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="fechaInicio">Fecha de inicio</label>
        <input
          id="fechaInicio"
          type="datetime-local"
          min="2021-10-07T00:00"
          max="2023-01-01T00:00"
          class="form-control"
          placeholder=""
          v-model="modelEvento.fecha_inicio"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="fecha-fin">Fecha de finalización</label>
        <input
          id="fecha-fin"
          type="datetime-local"
          min="2021-10-07T00:00"
          max="2023-01-01T00:00"
          class="form-control"
          placeholder=""
          v-model="modelEvento.fecha_fin"
          required
        />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">
          {{ modo === "PUT" ? "Actualizar" : "Crear" }}
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: ["modo", "categorias", "tipos", "sucursales", "dataPrev"],
  data() {
    return {
      modelEvento: {
        id_categoria: 0,
        id_tipo: 0,
        id_sucursal: 0,
        titulo: "",
        fecha_inicio: null,
        fecha_fin: null,
        lugar: "",
        url: "",
        path_foto: "",
        cupo: 0,
        valor_puntos: 0,
        disponible: true,
      },
    };
  },
  mounted() {
    console.log(dataPrev);
    if (this.modo === "PUT") {
      console.log("Esta por editar ela informacion");
      this.modelEvento = dataPrev;
    } else {
      console.log("Esta por crear informacion");
    }
  },
  methods: {
    onPress() {
      this.modelEvento.cupo = parseInt(this.modelEvento.cupo);
      this.modelEvento.valor_puntos = parseInt(this.modelEvento.valor_puntos);
      //console.log(this.modelEvento);
      console.log();
      if (this.modo === "post") {
        console.log("Form vacio");
        console.log("haciendo peticion de creacion");
      } else if (this.modo === "put") {
        console.log("Llenar data");
        console.log("haciendo peticion de edicion");
      }
    },
  },
};
</script>
