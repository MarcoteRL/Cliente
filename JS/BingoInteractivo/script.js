let listaPlayer = Array.from({ length: 90 }, (_, i) => i + 1);
listaPlayer.name = "listaPlayer";
let listaCPU = Array.from({ length: 90 }, (_, i) => i + 1);
listaCPU.name = "listaCPU";
let listaNumeros = Array.from({ length: 90 }, (_, i) => i + 1);

let listaPlayerFinal = [];
let listaCPUFinal = [];

async function numeroAleatorio(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

async function removeNumber(number, lista) {
    lista.splice(lista.indexOf(number), 1);
}

async function mostrarTabla(lista) {
    const body = document.body,
        tbl = document.createElement('table');
    tbl.setAttribute("class", `${lista.name}`)
    tbl.classList.add("table-responsive")
    for (let i = 0; i < 5; i++) {
        const tr = tbl.insertRow();
        for (let j = 1; j <= 5; j++) {
            let aleatorio = await numeroAleatorio(lista);
            await removeNumber(aleatorio, lista);
            if (lista.name == "listaPlayer") {
                listaPlayerFinal.push(aleatorio)
            } else {
                listaCPUFinal.push(aleatorio);
            }
            const td = tr.insertCell();
            td.setAttribute("id", `${aleatorio}`)
            td.appendChild(document.createTextNode(aleatorio));
            if (j == 5) {
                $(`tr > td.${lista.name}:last-child`).remove();
            }
        }
    }
    body.appendChild(tbl);
}



async function activar() {
    if (listaNumeros.length > 0 && listaCPUFinal.length > 0 && listaPlayerFinal.length > 0) {
        let aleatorio = await numeroAleatorio(listaNumeros);
        await removeNumber(aleatorio, listaNumeros);
        document.getElementById("aleatorio").innerHTML = aleatorio;
        let activar = document.querySelectorAll(`[id='${aleatorio}']`);
        [].forEach.call(activar, (async (elem) => {
            elem.classList.add("active");
            if (listaPlayerFinal.includes(aleatorio)) {
                await removeNumber(aleatorio, listaPlayerFinal)
            }
            if (listaCPUFinal.includes(aleatorio)) {
                await removeNumber(aleatorio, listaCPUFinal)
            }
        }))
        if (listaPlayerFinal.length == 0) {
            document.getElementById("ganador").innerHTML = "Jugador Gana"
        }
        if (listaCPUFinal.length == 0) {
            document.getElementById("ganador").innerHTML = "CPU Gana"
        }
    }
}


