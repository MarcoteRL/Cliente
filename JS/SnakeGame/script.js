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

async function colocarSnake(tablero) {
    tablero[7][2].snake = true;
    tablero[7][3].snake = true;
    tablero[7][4].snake = true;
    head = { y: 7, x: 4 };
    tail = { y: 7, x: 2 };
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

async function movimiento(key, tablero) {
    console.log({ tecla });
    if (key === "w") {
        if (tecla != "s") {
            tecla = "w";
        }
        tablero[head.y - 1][head.x].snake = true;
        head.y--;
        tablero[tail.y][tail.x].snake = false;
        if (last_key === "a") {
            if (tail.x != head.x) {
                tail.x--;
            } else {
                tail.y--;
            }
        } else if (last_key === "d") {
            if (tail.x != head.x) {
                tail.x++;
            } else {
                tail.y--;
            }
        } else if (last_key === "s") {
            return;
        } else if (last_key === "w") {
            tail.y--;
        }
    } else if (key === "a") {
        if (tecla != "d") {
            tecla = "a";
        }
        tablero[head.y][head.x - 1].snake = true;
        head.x--;
        tablero[tail.y][tail.x].snake = false;
        if (last_key === "s") {
            if (tail.y != head.y) {
                tail.y++;
            } else {
                tail.x--;
            }
        } else if (last_key === "w") {
            if (tail.y != head.y) {
                tail.y--;
            } else {
                tail.x--;
            }
        } else if (last_key === "d") {
            return;
        } else if (last_key === "a") {
            tail.x--;
        }

    } else if (key === "s") {
        if (tecla != "w") {
            tecla = "s";
        }
        tablero[head.y + 1][head.x].snake = true;
        head.y++;
        tablero[tail.y][tail.x].snake = false;
        if (tail.x != head.x) {
            tail.x++;
        } else {
            tail.y++;
        }
    } else if (key === "d") {
        if (tecla != "a") {
            tecla = "d";
        }
        tablero[head.y][head.x + 1].snake = true;
        head.x++;
        tablero[tail.y][tail.x].snake = false;
        if (last_key === "s") {
            console.log(tail.y);
            console.log(head.y);
            if (tail.y != head.y) {
                tail.y++;
            } else {
                tail.x++;
            }
        } else if (last_key === "w") {
            if (tail.y != head.y) {
                tail.y--;
            } else {
                tail.x++;
            }
        } else if (last_key === "a") {
            return;
        } else if (last_key === "d") {
            tail.x++;
        }
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