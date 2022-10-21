"use strict";

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function read(texto) {
//     return new Promise((resolve, reject) => {
//         rl.question(texto, (introducido) => {
//             resolve(introducido);
//         })
//     })
// }


async function menu() {
    let opcion = prompt(`
    ¿Que quieres hacer?

    a.Introduce una edad, indica si eres mayor o menor de 18.
    b.Cuenta atrás de 0-10.
    c.Cuenta hacia adelante de 0-10.
    d.Salir.

    Selecciona una opción: `);

    switch (opcion) {
        case "a":
            await mayorEdad();
            await menu()
            break;
        case "b":
            await cuentaAtras();
            await new Promise(r => setTimeout(r, 1000));
            await menu();
            break;
        case "c":
            await cuentaAdelante();
            await new Promise(r => setTimeout(r, 1000));
            await menu();
            break;
        case "d":
            proccess.exit();
            break;
        default:
            await menu();
            break;
    }
}



async function mayorEdad() {
    let edad = prompt("Introduce una edad: ");
    if (edad >= 18) {
        alert("Eres mayor de edad!");
    } else {
        alert("Eres menor de edad😢")
    }
}

async function cuentaAtras() {
    document.body.innerHTML = '';
    for (let i = 10; i >= 0; i--) {
        await new Promise(r => setTimeout(r, 1000));
        document.body.innerHTML = i;
    }
}

async function cuentaAdelante() {
    document.body.innerHTML = '';
    for (let i = 0; i <= 10; i++) {
        await new Promise(r => setTimeout(r, 1000));
        document.body.innerHTML = i;
    }
}