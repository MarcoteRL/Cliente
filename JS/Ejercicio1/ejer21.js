const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function read(texto) {
    return new Promise((resolve, reject) => {
        rl.question(texto, (introducido) => {
            resolve(introducido);
        })
    })
}

// 21. Crea un programa que genere un array de 8 números enteros y realiza las siguientes operaciones 
// (para este ejercicio no será necesario crear una web, podemos utilizar el terminal):
//  a.  Ordénalo de menor a mayor. En un futuro, podríamos utilizar la función sort() (con cadenas). 
//      En este caso, lo vamos a intentar hacer de forma manual.
//  b.  Intenta modificar la función sort() para que funcione con números.
//  c.  Recorre el array buscando el número 8 y muestra, de existir, su posición. De no existir, añádelo al final
//  d.  Invierte el orden del array manualmente. En un futuro podrás utilizar la función reverse();
//  e.  Nota: intenta realizar este mismo ejercicio pero teniendo el array ordenado en todo momento.

async function generateArr() {
    let array = [];
    let arrayOrdenado = [];
    let arrayOrdenadoInverso = [];
    for (let i = 0; i < 8; i++) {
        let numero = await read(`Introduce un número (${i + 1}): `);
        if (isNaN(parseInt(numero))) {
            numero = await read("Introduce un número otra vez..")
        } else {
            array.push(parseInt(numero));
        }
    }

    if (!array.indexOf(8)) {
        console.log(`\nEl 8 se encuentra en la posición ${array.indexOf(8) + 1} del array.`)
    } else {
        console.log("No hay numero 8, lo añadimos al final.");
        array.push(8);
    }

    let array2 = [].concat(array);
    console.log({ "Array original": array2 })

    while (array.length > 0) {
        let mayor = array[0];
        for (let numero of array) {
            if (numero > mayor) {
                mayor = numero;
            }
        }
        arrayOrdenado.push(mayor);
        array.splice(array.indexOf(mayor), 1);
    }
    console.log({ arrayOrdenado });
    console.log({
        arraySort: array2.sort((b, a) => {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        })
    })
    for (let i = arrayOrdenado.length - 1; i > 0; i--) {
        arrayOrdenadoInverso.push(arrayOrdenado[i])
    }
    console.log({ arrayOrdenadoInverso });
    rl.close();
}

generateArr();

