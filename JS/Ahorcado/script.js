"use strict";

let intentos = 5;
let historial = [];

function palabra() {
    let arr = ["hola", "adios", "paraguayo"];
    return arr[Math.floor(Math.random() * arr.length)]
}

const palabraRandom = palabra();
console.log(palabraRandom);

function mostrarPalabra() {
    let guiones = "";
    for (let letter of palabraRandom) {
        guiones += "_ ";
    }
    guiones = guiones.substring(0, guiones.length - 1);
    document.getElementById("palabra").innerHTML = guiones;
    document.getElementById("resultado").innerHTML = intentos;
}


async function ahorcado(letra) {
    if (!historial.includes(letra.value) && isNaN(letra.value) && intentos > 0) {
        historial.push(letra.value);
    } else {
        return
    }
    intentos = parseInt(intentos);
    console.log({ intentos });
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
    }
    if (!encontrado) {
        intentos--;
    }
    switch (intentos) {
        case 0:
            document.getElementById("imagen").src = "img/6.png"
            break;
        case 1:
            document.getElementById("imagen").src = "img/5.png"
            break;
        case 2:
            document.getElementById("imagen").src = "img/4.png"
            break;
        case 3:
            document.getElementById("imagen").src = "img/3.png"
            break;
        case 4:
            document.getElementById("imagen").src = "img/2.png"
            break;
        case 5:
            console.log("entro")
            document.getElementById("imagen").src = "img/1.png"
            break;

        default:
            break;
    }
    if (intentos > 0) {
        document.getElementById("resultado").innerHTML = intentos;
    } else {
        document.getElementById("resultado").innerHTML = "Has perdido";
        alert(`Mamaste weon, la palabra era: ${palabraRandom}`)
    }

    document.getElementById("palabra").innerHTML = guionesSplitted.join(" ");
    document.getElementById("usadas").innerHTML = historial;
}