"use strict";

// let lista = {
//     0: 2,
//     1: 2,
//     2: 2,
//     3: 2,
//     4: 2,
//     5: 2,
//     6: 2,
//     7: 2
// }

console.log(lista.length);

function crearTablero() {
    let lista = [];
    for (let i = 0; i < 4; i++) {
        lista.push([]);
        for (let j = 0; j < 4; j++) {
            lista[i].push(j);
        }
    }
    return lista;
}

let lista = crearTablero();

console.log(crearTablero().length)

function impresora() {
    let element = document.getElementById("tabla").innerHTML;
    for (let y = 0; y < lista.length; y++) {
        element += "<tr>";
        for (let x = 0; x < lista.length; x++) {
            element += `<td id='${x}'></td>`
        }
    }
    element += "</tr>";
}