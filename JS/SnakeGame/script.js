"use strict";

let tablero = [];
let score = 0;
let apple = {};
let speed = 600;

for (let y = 0; y < 15; y++) {
    tablero.push([]);
    for (let x = 0; x < 15; x++) {
        tablero[y].push({ "manzana": false, "snake": false });
    }
}

function background(tablero) {
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

function eatApple(next) {
    let scoreboard = document.getElementById("scoreboard");
    try {
        if (tablero[next.y][next.x].manzana) {
            score = score + 10;
            scoreboard.innerHTML = "Puntuación: " + score;
            tablero[next.y][next.x].manzana = false;
            showApple(tablero);
            return true;
        } else if (tablero[next.y][next.x].snake) {
            window.location.href = "index.html";
        } else {
            return false;
        }
    } catch (error) {
        window.location.href = "index.html";
    }
}

let snake = [{ y: 7, x: 2 }, { y: 7, x: 3 }];

function colocarSnake(tablero) {
    tablero[7][2].snake = true;
    tablero[7][3].snake = true;
}

document.addEventListener("keypress", (e) => {
    if (e.key === "w" || e.key === "a" || e.key === "s" || e.key === "d") {
        if (e.key != tecla) {
            moverTablero(e.key);
        }
    }
});

let tecla = "";

function moverTablero(key) {
    let tabla = document.getElementById('tabla');
    tabla.remove();
    let cola = snake[0];
    let cabeza = snake[snake.length - 1];
    switch (key) {
        case "w":
            if (tecla != 's') {
                if (eatApple({ "y": cabeza.y - 1, "x": cabeza.x })) {
                    tablero[(cabeza.y) - 1][(cabeza.x)].snake = true;
                    snake.push({ "y": cabeza.y - 1, "x": cabeza.x });
                } else {
                    tablero[cola.y][cola.x].snake = false;
                    tablero[(cabeza.y) - 1][(cabeza.x)].snake = true;
                    movimiento(key);
                }
                tecla = 'w';
            }
            break;

        case "a":
            if (tecla != 'd') {
                if (eatApple({ "y": cabeza.y, "x": cabeza.x - 1 })) {
                    tablero[cabeza.y][(cabeza.x) - 1].snake = true;
                    snake.push({ "y": cabeza.y, "x": cabeza.x - 1 });
                } else {
                    tablero[cola.y][cola.x].snake = false;
                    tablero[(cabeza.y)][(cabeza.x) - 1].snake = true;
                    movimiento(key);
                }
                tecla = 'a';
            }
            break;

        case "s":
            if (tecla != 'w') {
                if (eatApple({ "y": cabeza.y + 1, "x": cabeza.x })) {
                    tablero[(cabeza.y) + 1][(cabeza.x)].snake = true;
                    snake.push({ "y": cabeza.y + 1, "x": cabeza.x });
                } else {
                    tablero[cola.y][cola.x].snake = false;
                    tablero[(cabeza.y) + 1][(cabeza.x)].snake = true;
                    movimiento(key);
                }
                tecla = 's';
            }
            break;

        case "d":
            if (tecla != 'a') {
                if (eatApple({ "y": cabeza.y, "x": cabeza.x + 1 })) {
                    tablero[cabeza.y][(cabeza.x) + 1].snake = true;
                    snake.push({ "y": cabeza.y, "x": cabeza.x + 1 });
                } else {
                    tablero[cola.y][cola.x].snake = false;
                    tablero[cabeza.y][(cabeza.x) + 1].snake = true;
                    movimiento(key);
                }
                tecla = 'd';
            }
            break;
    }
    background(tablero);
}

function movimiento(key) {
    let cabeza = snake[snake.length - 1]
    for (let i = 0; i < snake.length - 1; i++) {
        snake[i] = snake[i + 1];
    }
    switch (key) {
        case "w":
            snake[snake.length - 1] = { "y": cabeza.y - 1, "x": cabeza.x };
            break;
        case "a":
            snake[snake.length - 1] = { "y": cabeza.y, "x": cabeza.x - 1 };
            break;
        case "s":
            snake[snake.length - 1] = { "y": cabeza.y + 1, "x": cabeza.x };
            break;
        case "d":
            snake[snake.length - 1] = { "y": cabeza.y, "x": cabeza.x + 1 };
            break;
    }
}


const interval = () => {
    setInterval(() => {
        if (tecla != "") {
            moverTablero(tecla);
        }
    }, 200);
}

function game() {
    colocarSnake(tablero);  
    showApple(tablero);
    background(tablero);
    interval(speed);
}