"use strict";

const bingo = Array.from({ length: 100 }, (_, i) => i + 1);

let lista = Array.from({ length: 100 }, (_, i) => i + 1);

function numeroAleatorio() {
    return lista[Math.floor(Math.random() * lista.length)];
}

function removeNumber(number) {
    lista.splice(lista.indexOf(number), 1);
}

function mostrarTabla() {
    const body = document.body,
        tbl = document.createElement('table');
    for (let i = 0; i < 10; i++) {
        const tr = tbl.insertRow();
        let ampliar = 0;
        for (let j = 1; j <= 10; j++) {
            if (i > 0) {
                ampliar = i * 10;
            }
            const td = tr.insertCell();
            td.setAttribute("id", `${ampliar + j}`)
            td.appendChild(document.createTextNode(ampliar + j));
        }
    }
    body.appendChild(tbl);
}

function activar() {
    if (lista.length > 0) {
        let aleatorio = numeroAleatorio();
        document.getElementById("aleatorio").innerHTML = aleatorio;
        document.getElementById(aleatorio).classList.add("active")
        removeNumber(aleatorio);
    } else {
        alert("Bingo");
    }
}
