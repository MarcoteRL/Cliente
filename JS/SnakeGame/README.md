## Snake Game

El proyecto consiste en crear el mítico juego de la serpiente usando JavaScript, HTML y CSS.

Lo primero que tenemos que hacer es crear un tablero, el cuál lo haremos con un array bidimensional, en cada casilla del tablero, añadiremos dos condiciones, si la casilla contiene la manzana o si la serpiente se encuentra en esa casilla.
``` js
let tablero = []; 

for (let y = 0; y < 15; y++) {
    tablero.push([]);
    for (let x = 0; x < 15; x++) {
        tablero[y].push({ "manzana": false, "snake": false });
    }
}
```

Lo siguiente será mostrarlo en el HTMl para poder visualizarlo en el navegador, para ello crearemos un div
en nuestro index, dentro añadiremos un script llamando a nuestra función game, que la veremos después:
```html
<div id="juego">
    <script>game()</script>
</div>
```
Ahora para mostrar nuestro tablero debemos de generarlo en javascript, para ello haremos una función que 
nos creará una tabla de 15x15, comprobará en nuestro tablero donde se encuentra la serpiente y la manzana y los mostrará.
También nos añadirá las clases par e impar para poder pintar el tablero:

```js
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
```

![Tablero](https://imgur.com/dFvlcwf)

