"use strict";

let tablero = [];
for (let y = 0; y < 15; y++) {
    tablero.push([]);
    for (let x = 0; x < 15; x++) {
        tablero[y].push({ "manzana": false, "snake": false });
    }
}

function background() {
    showApple(tablero);
    const body = document.body,
        tbl = document.createElement('table');
    tbl.id = "tabla";
    for (let i = 0; i < 15; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j < 15; j++) {
            const td = tr.insertCell();
            if (tablero[i][j].manzana) {
                let img = document.createElement("img");
                img.setAttribute("src", "img/apple.png")
                td.appendChild(img)
            }
            if (tablero[i][j].snake) {
                td.setAttribute("class", "serpiente")
            }
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    td.id = "par"
                } else {
                    td.id = "impar";
                }
            } else {
                if (j % 2 == 0) {
                    td.id = "impar"
                } else {
                    td.id = "par"
                }
            }
        }
    }
    body.appendChild(tbl);
}

function showApple(tablero) {
    let y = Math.floor(Math.random() * tablero.length);
    let x = Math.floor(Math.random() * tablero.length);
    tablero[y][x].manzana = true;
}

function colocarSnake(tablero) {
    tablero[8][4].snake = true;
    tablero[8][5].snake = true;
}

function game() {
    colocarSnake(tablero);
    background();
}

document.addEventListener("keypress", (e) => {
    if (e.key === "w") {

    } else if (e.key === "a") {
 
    } else if (e.key === "s") {

    } else if (e.key === "d") {

    }
});