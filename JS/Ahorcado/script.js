"use strict";

let intentos = 5;
let historial = [];
let palabraRandom = "";

fetch('https://palabras-aleatorias-public-api.herokuapp.com/random', {
    mode: 'no-cors'
})
    .then(response => response.json())
    .then(data => {
        palabraRandom = data.body["Word"]
    })
    .then(() => { mostrarPalabra() });

async function mostrarPalabra() {
    console.log({ palabraRandom })
    console.log("entro")
    let guiones = "";
    for (let letter of palabraRandom) {
        guiones += "_ ";
    }
    guiones = guiones.substring(0, guiones.length - 1);
    console.log({ guiones })
    document.getElementById("palabra").innerHTML = guiones;
    document.getElementById("resultado").innerHTML = intentos;
}

function ahorcado(letra) {
    if (!historial.includes(letra.value) && isNaN(letra.value) && intentos > 0) {
        historial.push(letra.value);
    } else {
        return;
    }
    let encontrado = false;
    let guiones = document.getElementById("palabra").innerHTML;
    let guionesSplitted = guiones.split(" ");
    let palabraSplitted = palabraRandom.split("");
    if (intentos > 0) {
        for (let i = 0; i < guiones.length; i++) {
            if (letra.value == palabraSplitted[i]) {
                guionesSplitted[i] = letra.value;
                encontrado = true;
            }
        }
        if (guionesSplitted.join(" ") == palabraRandom) {
            alert("Has ganado")
        }
        document.getElementById("resultado").innerHTML = intentos;
    }
    if (!encontrado) {
        intentos--;
    }
    switch (intentos) {
        case 0:
            document.getElementById("imagen").src = "img/6.png";
            break;
        case 1:
            document.getElementById("imagen").src = "img/5.png";
            break;
        case 2:
            document.getElementById("imagen").src = "img/4.png";
            break;
        case 3:
            document.getElementById("imagen").src = "img/3.png";
            break;
        case 4:
            document.getElementById("imagen").src = "img/2.png";
            break;
        case 5:
            console.log("entro")
            document.getElementById("imagen").src = "img/1.png";
            break;
        default:
            break;
    }

    if (intentos == 0) {
        document.getElementById("resultado").innerHTML = "Has perdido";
        alert(`Mamaste weon, la palabra era: ${palabraRandom}`);
    }
    console.log(palabraRandom)
    document.getElementById("palabra").innerHTML = guionesSplitted.join(" ");
    document.getElementById("usadas").innerHTML = historial;
    if (document.getElementById("palabra").innerHTML.split(" ").join("") == palabraRandom) {
        alert("Has ganado")
    }
}
