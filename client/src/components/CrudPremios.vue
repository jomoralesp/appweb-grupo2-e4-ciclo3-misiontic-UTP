<template>
  <div class="">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Premios</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2" v-show="showListadoPremios">
          <button class="btn btn-sm btn-outline-secondary" @click="consultarPremios">
            Actualizar
          </button>
          <button class="btn btn-sm btn-outline-secondary" @click="openNewForm()">
            Nuevo Premio
          </button>
        </div>
      </div>
    </div>
    <PremioForm
      :categorias="listaCategoriaPremios"
      v-if="showFormPremio"
      @cerrarForm="closeForm"
      @actualizarListado="consultarPremios"
      :idEvento="premioSelect"
      :dataEvento="dataPremioSelected"
    ></PremioForm>
    <PremioNewForm
      :categorias="listaCategoriaPremios"
      v-show="showNewFormEvento"
      @cerrarForm="closeForm"
    ></PremioNewForm>
    <PremioDetail
      :idEvento="premioSelect"
      :dataEventoId="dataPremioSelected"
      v-show="showDetailEvento"
      @cerrarDetalle="closeDetail"
      @editarEvento="openForm(premioSelect)"
      @eliminarEvento="deleteEvento(premioSelect)"
    ></PremioDetail>
    <div class="Seccion-tabla" v-show="!errorConsulta && showListadoPremios">
      <h2>Tabla de premios</h2>
      <div class="table-responsive">
        <table class="table table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Valor puntos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody v-show="!datosVacios">
            <tr
              v-for="(evento, index) in listaEventos"
              :key="evento._id"
              :class="evento.visible ? ' table-success' : 'table-warning'"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ evento.titulo }}</td>
              <td>{{ evento.categoria }}</td>
              <td>{{ evento.valor_puntos }}</td>
              <td>
                <button @click="openDetail(evento._id)">
                  <span class="mdi mdi-eye" alt></span>
                </button>
                <button @click="openForm(evento._id)">
                  <span class="mdi mdi-lead-pencil"></span>
                </button>
                <button @click="deleteEvento(evento._id)">
                  <span class="mdi mdi-trash-can-outline"></span>
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-show="datosVacios">
            <tr>
              No hay registros
            </tr>
          </tbody>

          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
//importando componentes
import PremioForm from "../components/PremioForm.vue";
import PremioDetail from "../components/PremioDetail.vue";
import PremioNewForm from "../components/PremioNewForm.vue";
import axios from "axios";

export default {
  components: {
    PremioForm,
    PremioDetail,
    PremioNewForm,
  },
  data() {
    return {
      premioSelect: "",
      dataPremioSelected: {},

      listaEventos: [],

      datosVacios: true,
      errorConsulta: false,

      listaCategoriaPremios: [],

      showListadoPremios: true,
      showDetailEvento: false,
      showFormPremio: false,
      showNewFormEvento: false,
    };
  },
  mounted() {
    this.consultarPremios();
    this.consultarCategoria();
  },
  methods: {
    openDetail(id) {
      this.premioSelect = id;
      console.log(id);
      fetch(process.env.VUE_APP_ROOT_API + "/eventos/full/" + this.premioSelect)
        //   fetch(
        //     "https://my-json-server.typicode.com/DarkNikT/fakeapi-appweb/eventos/" +
        //       this.premioSelect
        //   )
        .then((res) => res.json())
        .then((data) => {
          this.dataPremioSelected = data;

          if (this.dataPremioSelected.length != 0) {
            console.log("Hay sin datos " + id);
          } else {
            console.log("No hay datos");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      this.showDetailEvento = true;
      this.showFormPremio = false;
      this.showListadoPremios = false;
      this.showNewFormEvento = false;
    },
    closeDetail() {
      this.showDetailEvento = false;
      this.showFormPremio = false;
      this.showNewFormEvento = false;
      this.showListadoPremios = true;
    },

    openForm(id) {
      this.premioSelect = id;
      fetch(process.env.VUE_APP_ROOT_API + "/premios/" + this.premioSelect)
        .then((res) => res.json())
        .then((data) => {
          this.dataPremioSelected = data;
        })
        .catch((error) => {
          console.error(error);
        });
      this.showDetailEvento = false;
      this.showFormPremio = true;
      this.showListadoPremios = false;
      this.showNewFormEvento = false;
    },
    closeForm() {
      this.showDetailEvento = false;
      this.showFormPremio = false;
      this.showListadoPremios = true;
      this.showNewFormEvento = false;

      //vaciar campos de formularios
      //actuallizar lista de eventos
      this.consultarPremios();
    },

    openNewForm() {
      this.showNewFormEvento = true;
      this.showDetailEvento = false;
      this.showFormPremio = false;
      this.showListadoPremios = false;
    },
    //consulta a la base de datos
    consultarPremios() {
      //

      //fetch("https://my-json-server.typicode.com/DarkNikT/fakeapi-appweb/eventos")
      fetch(process.env.VUE_APP_ROOT_API + "/premios")
        .then((res) => res.json())
        .then((data) => {
          this.listaEventos = data;

          if (this.listaEventos.length != 0) {
            this.datosVacios = false;
          } else {
            this.datosVacios = true;
          }
          console.log(this.errorConsulta);
        })
        .catch((error) => {
          console.error(error);
          this.errorConsulta = true;
        });

      console.log(this.listaEventos);
    },

    consultarCategoria() {
      //hace fetch de las categorias
      fetch(process.env.VUE_APP_ROOT_API + "/eventos/categoria/eventos")
        .then((res) => res.json())
        .then((data) => {
          this.listaCategoriaPremios = data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    deleteEvento(id) {
      this.$swal("Desea eliminar el registro");
      let apiURL = `${process.env.VUE_APP_ROOT_API}/eventos/delete-event/${id}`;
      axios.delete(apiURL).then((res) => {
        console.log(res);
        this.$swal("Evento eliminado con éxito");
      });
      this.consultarEventos();
      this.closeForm();
    },
  },
};
</script>
