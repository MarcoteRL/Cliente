"use strict";

let lista = {
    0: 2,
    1: 2,
    2: 2,
    3: 2,
    4: 2,
    5: 2,
    6: 2,
    7: 2
}

console.log(lista.length);

function crearTablero() {
    
    
    const body = document.body,
        tbl = document.createElement('table');
    for (let i = 0; i < 4; i++) {
        let aleatorio = lista[Math.floor(Math.random() * Object.keys(lista).length)]
        const tr = tbl.insertRow();
        let ampliar = 0;
        for (let j = 1; j <= 4; j++) {
            
            if (i > 0) {
                ampliar = i * 4;
            }
            const td = tr.insertCell();
            td.setAttribute("id", `${aleatorio}`)
            td.appendChild(document.createTextNode(ampliar + j));
            lista[aleatorio]--;


        }
    }
    body.appendChild(tbl);
}