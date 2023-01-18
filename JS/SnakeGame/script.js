"use strict";

let tablero = [];
let score = 0;
let head;
let tail;
let apple = {};

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

function showApple() {
    let y = Math.floor(Math.random() * tablero.length);
    let x = Math.floor(Math.random() * tablero.length);
    apple.y = y;
    apple.x = x;
    tablero[y][x].manzana = true;
}

function eatApple(head) {
    if (head.y === apple.y && head.x === apple.x) {
        score = score + 10;

        tablero[head.y][head.x].manzana = false;
        console.log({ score });
        showApple(tablero);
        actualizar(tablero)
    }
}

let snake = [{ y: 7, x: 3 }, { y: 7, x: 2 }];

async function colocarSnake(tablero) {
    tablero[7][2].snake = true;
    tablero[7][3].snake = true;
    head = snake[0];
    tail = snake[snake.length - 1];
}

async function actualizar(tablero) {
    const element = document.getElementById("tabla");
    element.remove();
    await background(tablero);
}

let last_key = "";
let tecla = "";
document.addEventListener("keypress", async (e) => {
    if (e.key === "w" || e.key === "a" || e.key === "s" || e.key === "d") {
        if (e.key != last_key) {
            await movimiento(e.key, tablero);
            await actualizar(tablero);
            last_key = e.key;
        }
    }
});

/**
 * 
 * @param {*} key 
 * @param {*} tablero 
 * @returns 
 */
async function movimiento(key, tablero) {
    let cabeza = snake[0];
    for (let i = 1; i < snake.length; i++) {
        snake[i] = snake[i + 1];
    }
    switch (key) {
        case "w":
            snake[0] = snake[0].y--;
            break;
        case "a":
            snake[0] = snake[0].x--;
            break;
        case "s":
            snake[0] = snake[0].y++;
            break;
        case "d":
            snake[0] = snake[0].x++;
    }
    eatApple(head);
}


function interval() {
    setInterval(async () => {
        console.log({ last_key });
        if (tecla != "" || tecla != last_key) {
            await movimiento(tecla, tablero);
            await actualizar(tablero);
        }
    }, 300);
}


async function game() {
    colocarSnake(tablero);
    showApple(tablero);
    background(tablero);
    interval();
}