"use strict";

let arr = [{
    "marca": "Caja Verde", // o Lindt, o D'or...
    "capacidad": 30, // todas de la misma capacidad
    "contenido": 13,
    "lote": 233, // puede haber muchas cajas del mismo lote
    "fecha_caducidad": "2022-06-09T20:00:00.000Z"
}, {
    "marca": "Caja Roja", // o Lindt, o D'or...
    "capacidad": 30, // todas de la misma capacidad
    "contenido": 17,
    "lote": 233, // puede haber muchas cajas del mismo lote
    "fecha_caducidad": "2022-06-09T20:00:00.000Z"
}, {
    "marca": "Caja Roja", // o Lindt, o D'or...
    "capacidad": 30, // todas de la misma capacidad
    "contenido": 11,
    "lote": 283, // puede haber muchas cajas del mismo lote
    "fecha_caducidad": "2022-06-09T20:00:00.000Z"
}, {
    "marca": "Caja Roja", // o Lindt, o D'or...
    "capacidad": 30, // todas de la misma capacidad
    "contenido": 11,
    "lote": 283, // puede haber muchas cajas del mismo lote
    "fecha_caducidad": "2022-06-09T20:00:00.000Z"
}, {
    "marca": "Caja Roja", // o Lindt, o D'or...
    "capacidad": 30, // todas de la misma capacidad
    "contenido": 11,
    "lote": 283, // puede haber muchas cajas del mismo lote
    "fecha_caducidad": "2022-06-09T20:00:00.000Z"
},
];


function masDeUnaMarca() {
    let obj = {};
    for (let caja of arr) {
        if (obj[caja.marca] == undefined) {
            obj[caja.marca] = caja.contenido;
        } else {
            obj[caja.marca] += caja.contenido;
        }
    }
    console.log(obj);
}
