import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Importando los componentes de Bootstrap
import "bootstrap/dist/css/bootstrap.css";

//Importando la libreria mdi
import "@mdi/font/css/materialdesignicons.min.css";

// Libreria para las alertas
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
