"use strict";

let tablero = [];
let head;
let tail;
for (let y = 0; y < 15; y++) {
    tablero.push([]);
    for (let x = 0; x < 15; x++) {
        tablero[y].push({ "manzana": false, "snake": false });
    }
}

async function background(tablero) {
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

async function colocarSnake(tablero) {
    tablero[7][2].snake = true;
    tablero[7][3].snake = true;
    head = { y: 7, x: 3 };
    tail = { y: 7, x: 2 };
}

async function game() {
    colocarSnake(tablero);
    showApple(tablero);
    background(tablero);
}

async function actualizar(tablero) {
    const element = document.getElementById("tabla");
    element.remove();
    await background(tablero);
}

document.addEventListener("keypress", async (e) => {
    if (e.key === "w" || e.key === "a" || e.key === "s" || e.key === "d") {
        await movimiento(e.key, tablero);
        await actualizar(tablero);
    }
});

let last;

async function movimiento(key, tablero) {
    if (key === "w") {
        tablero[head.y - 1][head.x].snake = true;
        head.y--;
        tablero[tail.y][tail.x].snake = false;
        tail.y--;

    } else if (key === "a") {
        tablero[head.y][head.x - 1].snake = true;
        head.x--;
        tablero[tail.y][tail.x].snake = false;
        tail.x--;
    } else if (key === "s") {
        tablero[head.y + 1][head.x].snake = true;
        head.y++;
        tablero[tail.y][tail.x].snake = false;
        tail.y++;
    } else if (key === "d") {
        tablero[head.y][head.x + 1].snake = true;
        head.x++;
        tablero[tail.y][tail.x].snake = false;
        tail.x++;
    }
    console.log({ head });
    console.log({ tail });
}