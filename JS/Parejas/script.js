"use strict";

let contador = 0;
let last_id = 0;

function juego(id) {
    let disable = document.getElementsByClassName("disable");
    let element = document.getElementById(id);
    let lastElement = document.getElementById(last_id);
    console.log(id)
    contador++;
    if (contador == 1) {
        element.classList.remove("disable");
    }
    if (contador == 2) {
        element.classList.remove("disable");
        if (last_id + "_1" == id || last_id == id + "_1") {
            lastElement.classList.remove("disable");
        } else {
            setTimeout(() => {
                element.classList.add("disable");
                lastElement.classList.add("disable");
            }, 500)
        }
        contador = 0;
    }
    last_id = id;
    if (disable.length == 0) {
        setTimeout(() => {
            alert("Ganaste");
            location.reload();
        }, 600)
    }
}