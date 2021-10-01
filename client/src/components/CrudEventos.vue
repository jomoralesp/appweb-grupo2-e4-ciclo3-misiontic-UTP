<template>
  <div class="">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">Eventos</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <button class="btn btn-sm btn-outline-secondary" @click="consultarEventos">
            Actualizar
          </button>
          <button class="btn btn-sm btn-outline-secondary" @click="openForm()">
            Nuevo Evento
          </button>
        </div>
      </div>
    </div>
    <EventoForm
      :categorias="listaCategoriaEventos"
      :tipos="listaTipoEventos"
      :sucursales="listaSucursales"
      v-show="showFormEvento"
      @cerrarForm="closeForm"
      :modo="modoFormEvento"
      :dataPrev="dataEventSelected"
    ></EventoForm>
    <EventoDetail
      :idEvento="eventoSelect"
      :dataEventoId="dataEventSelected"
      v-show="showDetailEvento"
      @cerrarDetalle="closeDetail"
      @editarEvento="openForm(eventoSelect, dataEventSelected)"
    ></EventoDetail>
    <div class="Seccion-tabla" v-show="!errorConsulta && showListadoEventos">
      <h2>Tabla de eventos</h2>
      <div class="table-responsive">
        <table class="table table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Valor puntos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody v-show="!datosVacios">
            <tr
              v-for="(evento, index) in listaEventos"
              :key="evento._id"
              :class="evento.disponible ? ' table-success' : 'table-warning'"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ evento.titulo }}</td>
              <td>{{ evento.categoria }}</td>
              <td>{{ evento.valor_puntos }}</td>
              <td>
                <button @click="openDetail(evento._id)">
                  <span class="mdi mdi-eye"></span>
                </button>
                <button @click="openForm(evento._id)">
                  <span class="mdi mdi-lead-pencil"></span>
                </button>
                <button>
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
import EventoForm from "../components/EventoForm.vue";
import EventoDetail from "../components/EventoDetail.vue";

export default {
  components: {
    EventoForm,
    EventoDetail,
  },
  data() {
    return {
      modoFormEvento: "",

      eventoSelect: 0,
      dataEventSelected: [],

      listaEventos: [],

      datosVacios: true,
      errorConsulta: false,

      listaCategoriaEventos: [],
      listaTipoEventos: [],
      listaSucursales: [],

      showListadoEventos: true,
      showDetailEvento: false,
      showFormEvento: false,
    };
  },
  mounted() {
    this.consultarEventos();
    this.consultarCategoria();
    this.consultarTipos();
    this.consultarSucursales();
  },
  methods: {
    openDetail(id) {
      this.eventoSelect = id;
      console.log(id);
      fetch(process.env.VUE_APP_ROOT_API + "/eventos/full/" + this.eventoSelect)
        //   fetch(
        //     "https://my-json-server.typicode.com/DarkNikT/fakeapi-appweb/eventos/" +
        //       this.eventoSelect
        //   )
        .then((res) => res.json())
        .then((data) => {
          this.dataEventSelected = data;

          if (this.dataEventSelected.length != 0) {
            console.log("Hay sin datos " + id);
          } else {
            console.log("No hay datos");
          }
        })
        .catch((error) => {
          console.error(error);
        });

      this.showDetailEvento = true;
      this.showFormEvento = false;
      this.showListadoEventos = false;
    },
    closeDetail() {
      this.showDetailEvento = false;
      this.showFormEvento = false;
      this.showListadoEventos = true;
    },

    openForm(id, dataEvento) {
      if (id != undefined) {
        this.modoFormEvento = "PUT";
        if (dataEvento != undefined) {
          console.log("ya está actualizado");
        } else {
          this.eventoSelect = id;
          fetch(process.env.VUE_APP_ROOT_API + "/eventos/full/" + this.eventoSelect)
            .then((res) => res.json())
            .then((data) => {
              this.dataEventSelected = data;

              if (this.dataEventSelected.length != 0) {
                console.log("Hay datos " + id);
              } else {
                console.log("No hay datos");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }
      } else {
        this.modoFormEvento = "POST";
      }

      this.showDetailEvento = false;
      this.showFormEvento = true;
      this.showListadoEventos = false;
    },
    closeForm() {
      this.showDetailEvento = false;
      this.showFormEvento = false;
      this.showListadoEventos = true;
    },

    //consulta a la base de datos
    consultarEventos() {
      //

      //fetch("https://my-json-server.typicode.com/DarkNikT/fakeapi-appweb/eventos")
      fetch(process.env.VUE_APP_ROOT_API + "/eventos")
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
      fetch(process.env.VUE_APP_ROOT_API + "/eventos/categoria-eventos")
        .then((res) => res.json())
        .then((data) => {
          this.listaCategoriaEventos = data;

          if (this.listaCategoriaEventos.length != 0) {
            console.log("Hay sin datos " + id);
          } else {
            console.log("No hay datos");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    consultarTipos() {
      //hace fetch de las categorias
      fetch(process.env.VUE_APP_ROOT_API + "/eventos/tipo-eventos")
        .then((res) => res.json())
        .then((data) => {
          this.listaTipoEventos = data;

          if (this.listaTipoEventos.length != 0) {
            console.log("Hay sin datos " + id);
          } else {
            console.log("No hay datos");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    consultarSucursales() {
      fetch(process.env.VUE_APP_ROOT_API + "/sucursales")
        .then((res) => res.json())
        .then((data) => {
          this.listaSucursales = data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
