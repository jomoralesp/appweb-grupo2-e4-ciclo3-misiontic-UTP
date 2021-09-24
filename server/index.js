// Archivo de configuración del servidor
const express = require("express");
var cors = require('cors');
const path = require('path');

//Carga de las variables de entorno en el servidor
const config = require('./config.js');

//URL del storage de las imagenes
const HOST_SERVER = config.HOST+":"+config.PORT;

const data = [
    {
      id: 0,
      disponible: false,
      puntos: 260,
      ulrImagen: HOST_SERVER+"/static/images/premios/camisetapolonegra.png",
    },
    {
      id: 1,
      disponible: true,
      puntos: 600,
      ulrImagen: HOST_SERVER+"/static/images/premios/camisetapolonegra.png",
    },
    {
      id: 2,
      disponible: false,
      puntos: 200,
      ulrImagen: HOST_SERVER+"/static/images/premios/camisetapolonegra.png",
    },
    {
      id: 3,
      disponible: true,
      puntos: 400,
      ulrImagen: HOST_SERVER+"/static/images/premios/camisetapolonegra.png",
    },
    {
      id: 4,
      disponible: false,
      puntos: 400,
      ulrImagen: HOST_SERVER+"/static/images/premios/camisetapolonegra.png",
    },
    {
      id: 5,
      disponible: true,
      puntos: 260,
      ulrImagen: HOST_SERVER+"/static/images/premios/camisetapolonegra.png",
    },
  ]
// Se inicia un objeto express
const app = express();
// se define el puerto donde se ejecuta la aplicación
const port = config.PORT;
//Control de acceso de origen
app.use(cors());

// para usar archivos estaticos dentro de las carpetas
app.use('/static/images', express.static(path.join(__dirname,'/assets/images')));

// Endpoints de la API REST
app.get('/api/premios', function (req, res) {
    res.json({premios: data});
});

// Error 404
app.use(function(req, res, next) {
    console.log("endpoint no implementado");
    res.json({mensaje: "error 404"})
  });
//el servidor va a escuchar las peticiones en este puerto
app.listen(port);
console.log('Server started at http://localhost:' + port);