"use strict";

function game(opcion) {
    let lista = ["piedra", "papel", "tijera", "spock", "lagarto"];
    let opcionBot = lista[Math.floor(Math.random() * (4 - 0 + 1) + 0)];
    let ganar = {
        "piedra": ["tijera", "lagarto"],
        "tijera": ["papel", "lagarto"],
        "papel": ["piedra", "spock"],
        "spock": ["piedra", "tijera"],
        "lagarto": ["papel", "spock"]
    }
    if (opcionBot == opcion) {
        alert(`La IA ha sacado ${opcionBot}, has empatado!`);
    } else if (ganar[opcion].includes(opcionBot)) {
        alert(`La IA ha sacado ${opcionBot}, has ganado!`)
    } else {
        alert(`La IA ha sacado ${opcionBot}, has perdido`)
    }
}