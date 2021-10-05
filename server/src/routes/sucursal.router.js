const express = require("express");


const sucursalRoute = express.Router();

sucursalRoute.route("/").get((req, res) => {
res.json([
    {
        "_id": 10101,
        "id_municipio": 81001,
        "nombre": "OFICINA  ARAUCA"
    },
    {
        "_id": 10102,
        "id_municipio": 63001,
        "nombre": "OFICINA  ARMENIA"
    },
    {
        "_id": 10103,
        "id_municipio": 27075,
        "nombre": "OFICINA  BAHÍA SOLANO"
    },
    {
        "_id": 10104,
        "id_municipio": 8001,
        "nombre": "OFICINA  BARRANQUILLA"
    },
    {
        "_id": 10105,
        "id_municipio": 11001,
        "nombre": "OFICINA  BOGOTA D.C."
    },
    {
        "_id": 10106,
        "id_municipio": 68001,
        "nombre": "OFICINA  BUCARAMANGA"
    },
    {
        "_id": 10107,
        "id_municipio": 76001,
        "nombre": "OFICINA  CALI"
    },
    {
        "_id": 10108,
        "id_municipio": 13001,
        "nombre": "OFICINA  CARTAGENA"
    },
    {
        "_id": 10109,
        "id_municipio": 54001,
        "nombre": "OFICINA  CÚCUTA"
    },
    {
        "_id": 10110,
        "id_municipio": 52227,
        "nombre": "OFICINA  CUMBAL"
    },
    {
        "_id": 10111,
        "id_municipio": 52356,
        "nombre": "OFICINA  IPIALES"
    },
    {
        "_id": 10112,
        "id_municipio": 63401,
        "nombre": "OFICINA  LA TEBAIDA"
    },
    {
        "_id": 10113,
        "id_municipio": 68406,
        "nombre": "OFICINA  LEBRIJA"
    },
    {
        "_id": 10114,
        "id_municipio": 91001,
        "nombre": "OFICINA  LETICIA"
    },
    {
        "_id": 10115,
        "id_municipio": 44430,
        "nombre": "OFICINA  MAICAO"
    },
    {
        "_id": 10116,
        "id_municipio": 5001,
        "nombre": "OFICINA  MEDELLÍN"
    },
    {
        "_id": 10117,
        "id_municipio": 23001,
        "nombre": "OFICINA  MONTERÍA"
    },
    {
        "_id": 10118,
        "id_municipio": 41001,
        "nombre": "OFICINA  NEIVA"
    },
    {
        "_id": 10119,
        "id_municipio": 76520,
        "nombre": "OFICINA  PALMIRA"
    },
    {
        "_id": 10120,
        "id_municipio": 54518,
        "nombre": "OFICINA  PAMPLONA"
    },
    {
        "_id": 10121,
        "id_municipio": 66001,
        "nombre": "OFICINA  PEREIRA"
    },
    {
        "_id": 10122,
        "id_municipio": 19001,
        "nombre": "OFICINA  POPAYÁN"
    },
    {
        "_id": 10123,
        "id_municipio": 86573,
        "nombre": "OFICINA  PUERTO LEGUÍZAMO"
    },
    {
        "_id": 10124,
        "id_municipio": 5615,
        "nombre": "OFICINA  RIONEGRO"
    },
    {
        "_id": 10125,
        "id_municipio": 88001,
        "nombre": "OFICINA  SAN ANDRES"
    },
    {
        "_id": 10126,
        "id_municipio": 52001,
        "nombre": "OFICINA  SAN JUAN DE PASTO"
    },
    {
        "_id": 10127,
        "id_municipio": 68686,
        "nombre": "OFICINA  SAN MIGUEL"
    },
    {
        "_id": 10128,
        "id_municipio": 47001,
        "nombre": "OFICINA  SANTA MARTA"
    },
    {
        "_id": 10129,
        "id_municipio": 70001,
        "nombre": "OFICINA  SINCELEJO"
    },
    {
        "_id": 10130,
        "id_municipio": 8758,
        "nombre": "OFICINA  SOLEDAD"
    },
    {
        "_id": 10131,
        "id_municipio": 15001,
        "nombre": "OFICINA  TUNJA"
    },
    {
        "_id": 10132,
        "id_municipio": 5837,
        "nombre": "OFICINA  TURBO"
    },
    {
        "_id": 10133,
        "id_municipio": 20001,
        "nombre": "OFICINA  VALLEDUPAR"
    }
])
})
module.exports = sucursalRoute;