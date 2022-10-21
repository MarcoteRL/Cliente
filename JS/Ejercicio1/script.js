"use strict";

// 1. Crea un programa que imprima todos los números impares entre el 0 y el 100.
function impares() {
    let lista_impares = [];
    for (let i = 0; i <= 100; i++) {
        if (i % 2 != 0) {
            lista_impares.push(i);
        }
    }
    document.write(lista_impares);
}


// 2. Crea un programa que imprima el número y la suma de todos los números múltiplos
// de 7 entre el 1 y el 100
function multiplos7() {
    let lista = [];
    let suma = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 7 == 0) {
            lista.push(i);
            suma += i;
        }
    }
    document.write("Lista: " + lista);
    document.write("<br>");
    document.write("Suma: " + suma);
}

// 3. Crea un programa que imprima todos los números que son “narcisos”
function narcisos() {
    let lista = [];
    for (let i = 100; i < 1000; i++) {
        let splitted = i.toString().split("");
        let resultado = (Math.pow(parseInt(splitted[0]), 3)) + (Math.pow(parseInt(splitted[1]), 3)) + (Math.pow(parseInt(splitted[2]), 3))
        if (resultado == i) {
            lista.push(resultado);
        }
    }
    document.write(lista);
}

// 4. Crea un programa que reciba un número entero que ingrese el usuario y determine
// si es primo o no

function numeroPrimo() {
    let numero = prompt("Introduce un numero: ");
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            alert("No es un numero primo");
        }
    }
    if (numero != 1) {
        alert("Es un numero primo!")
    } else {
        alert("No es un numero primo");
    }
}

// 5. Crea un programa que imprima todos los números primos entre el 0 y el 100

function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return false;
        }
    }
    if (numero != 1) {
        return true;
    } else {
        return false;
    }
}

function listaPrimos() {
    let lista = [];
    for (let i = 1; i <= 100; i++) {
        if (esPrimo(i) == true) {
            lista.push(i)
        }
    }
    document.write(lista);
}


// 6. Crea un programa que imprima la tabla de multiplicar del 99
function tabla99() {
    let lista = [];
    for (let i = 0; i <= 10; i++) {
        lista.push(99 * i)
    }
    document.write(lista);
}
// 7. Crea un programa que si el usuario introduce un número entre el 0 y el 7 muestre el
// día de la semana
function diaSemana() {
    let dia = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    let numero = prompt("Escribe un número del 1 al 7: ");
    alert("El dia de la semana es: " + dia[parseInt(numero) - 1])
}

// 8.Crea un programa que lea de 2 input, un “inicio” y un “final”, 
// y muestre por pantalla los números entre los extremos

function extremos() {
    let inicio = prompt("Escribe el número inicial: ");
    let final = prompt("Escribe el número final: ");
    let lista = [];
    for (let i = parseInt(inicio) + 1; i < parseInt(final); i++) {
        lista.push(i);
    }
    document.write(lista);
}

// 9.Crea un programa que muestre en el navegador los siguientes números:
// 		54321
// 		4321
// 		321
// 		21
// 		1


function numerosRaros() {
    let numero = 54321;
    let numberToString = numero.toString();
    document.write(numero);
    console.log(numberToString.length)
    for (let i = 0; i <= numberToString.length + 2; i++) {
        numberToString = numberToString.substring(1)
        document.write("<br>");
        document.write(parseInt(numberToString));
    }
}
// 10.Crea un programa que realice las siguientes acciones (mediante botones e inputs):
// Se introduce la temperatura el Celsius y devuelve Fahrenheit
// Recibe como parámetro Fahrenheit y devuelve las siguientes frases:
// Si la temp. está entre 12 y 32: “temperatura baja”
// Si la temp. está entre 32 y 68: “temperatura adecuada”
// Si la temp. está entre 68 y 96: “temperatura alta”
// En otro caso, “temperatura desconocida”

function conversor() {
    let grados = document.getElementsById("celsius").value;
    grados = parseInt(grados);
    let fahr = (grados * 1, 8) + 32;
    if (fahr >= 12 && fahr < 32) {
        alert("Grados: " + fahr + ", " + "Temperatura baja.");
    } else if (fahr >= 32 && fahr < 62) {
        alert("Grados: " + fahr + ", " + "Temperatura adecuada.");
    } else if (fahr >= 68 && fahr < 96) {
        alert("Grados: " + fahr + ", " + "Temperatura alta.");
    } else {
        alert("Grados: " + fahr + ", " + "Temperatura desconocida.")
    }
}

// 11.Crea un programa que calcule el factorial de un número entero

function factorial() {
    let numero = prompt("Introduce un numero, para saber el factorial.");
    let resultado = 1;
    for (let i = parseInt(numero); i > 1; i--) {
        resultado *= i;
    }
    alert("El factorial es: " + resultado)
}

// 12.Crea un programa que dibuje un rombo geométrico con asteriscos

function rombo(n) {
    let asterisco = "*";
    let numeroEspacios = n;
    let numeroEspacios2 = 1
    let espacio = "&nbsp"
    for (let i = 0; i < n; i++) {
        document.write(espacio.repeat(numeroEspacios - 1) + asterisco.repeat(n - (numeroEspacios - 1)))
        numeroEspacios--;
        document.write("<br>")
    }
    for (let i = 0; i < n; i++) {
        document.write(espacio.repeat(numeroEspacios2) + asterisco.repeat(n - (numeroEspacios2)))
        numeroEspacios2++;
        document.write("<br>")
    }
}

// 13.Crea un programa que a partir de una cadena de caracteres que
//introduzca el usuario, la escriba al revés, cuente el número de vocales y el número de consonantes.
//INTENTA NO UTILIZAR FUNCIONES PROPIAS DEL SISTEMA.

function fraseReverse() {
    let frase2 = "";
    let listaVocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let consonantes = 0;
    let vocales = 0;
    let frase = prompt("Introduce una frase!");
    for (let letra of frase) {
        if (listaVocales.includes(letra)) {
            vocales++;
        } else if (letra != " " && isNaN(letra)) {
            consonantes++;
        }
    }
    for (let i = frase.length - 1; i >= 0; i--) {
        frase2 += frase[i]
    }
    alert("Vocales: " + vocales + "\n" + "Consonantes: " + consonantes + "\n" + "Frase al revés: " + frase2)
}

// 14. Crea una función que se llame “contenidoParrafos” 
//que muestre el contenido de todos los párrafos de un documento HTML.

function contenidoParrafos() {
    let contenido = document.getElementsByTagName('p');
    let contentParrafo = "";
    for (let i = 0; i < contenido.length; i++) {
        contentParrafo += `Parrafo ${i + 1}: ` + contenido[i].innerHTML + "<br>"
    }
    document.write(contentParrafo);
}

// 15.Crea una función que te proponga 5 intentos para adivinar un número al azar entre el 0 y el 50
//que el programa genera. Para ello, el usuario introducirá un número. Si es menor que el que ha
//generado el programa dará un aviso de ello indicando que se ha quedado corto. Si es mayor, 
//hará lo mismo indicando que es mayor. Ojo: la propia función debe tener un pequeño control de 
//errores que identifique si se ha introducido un número o una letra.

function adivinarNumero() {
    let random = Math.floor(Math.random() * 51);
    let correcto = false;
    for (let i = 5; i > 0; i--) {
        let guess = prompt("Introduce un numero!");
        if (!isNaN(guess)) {
            if (guess == random) {
                alert("Correcto!, el número era: " + random);
                correcto = true;
                break;
            } else if (random > guess) {
                alert("Incorrecto!, introduce un número más grande, quedan " + (i - 1) + " intentos")
            } else if (random < guess) {
                alert("Incorrecto!, introduce un número más pequeño, quedan " + (i - 1) + " intentos")
            }
        } else {
            alert("No es un numero!, quedan " + i + " intentos");
        }
    }
    if (!correcto) {
        alert("El número era: " + random);
    }
}

//16. Crea una función que a partir de una palabra introducida (o capturada) por el usuario, sea capaz de 
//contar el número de letras totales (vocales y consonantes, diferenciándolas) de números y de espacios.

function contadorPalabras() {
    let listaVocales = ["a", "e", "i", "o", "u"];
    let obj = {
        espacios: 0,
        letras: 0,
        vocales: 0,
        consonantes: 0,
        numeros: 0
    }
    let introducido = prompt("Introduce una palabra/frase: ");
    for (let letra of introducido) {
        if (letra == " ") {
            obj.espacios++;
        } else if (isNaN(letra)) {
            obj.letras++;
            if (listaVocales.includes(letra.toLowerCase())) {
                obj.vocales++;
            } else {
                obj.consonantes++;
            }
        } else {
            obj.numeros++;
        }
    }
    alert("La palabra " + '"' + introducido + '"' + " tiene: " + "\n" + "Letras: " +
        obj.letras + "\n" + "Consonantes: " + obj.consonantes + "\n" + "Vocales: " + obj.vocales +
        "\n" + "Números: " + obj.numeros + "\n" + "Espacios: " + obj.espacios)
}

// 17. Realiza una función que recoja una cantidad de números enteros a traves de un input (separados por comas)
// su suma, su media, el mayor y el menor. 

function calculadora() {
    let numeros = prompt("Introduce dos o mas números separados por una coma: ").split(",").map((x) => {
        return parseInt(x);
    });
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    let media = suma / numeros.length;
    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);
    alert("Números introducidos: " + numeros + "\n" +
        "Suma total: " + suma + "\n" + "Media: " + media + "\n" +
        "Número mayor: " + mayor + "\n" + "Número menor: " + menor)
}

// 18. Crea un login.

let DATABASE = [{
    "username": "andres",
    "password": "1234"
},
{
    "username": "peter",
    "password": "hola123."
}
];

function login(username, password) {
    if (username && password) {
        let encontrado = false;
        for (let user of DATABASE) {
            if (user.username == username) {
                encontrado = true;
                if (user.password == password) {
                    alert("Login correcto");
                } else {
                    alert("Contraseña correcta");
                }
            }
        }
        if (!encontrado) {
            alert("Usario no existe, registrate!")
        }
    }
}

function register(username, password) {
    if (username && password) {
        let encontrado = false;
        for (let user of DATABASE) {
            if (user.username == username) {
                encontrado = true;
            }
        }
        if (!encontrado) {
            console.log("Entra en push")
            DATABASE.push({
                username: username,
                password: password
            })
            alert("Te has registrado correctamente!")
        } else {
            alert("El usuario ya existe!")
        }
    }
}

console.log(DATABASE);

