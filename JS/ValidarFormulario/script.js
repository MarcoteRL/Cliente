"use strict";

function validar(element) {
    try {
        if (element.value.length < 50) {
            for (let letter of element.value) {
                if (!isNaN(letter) && letter != " ") {
                    invalid(element.id);
                } else if ((/[^a-zA-Z0-9\-\/]/.test(letter)) && letter != " ") {
                    invalid(element.id);
                }
            }
        } else {
            invalid(element.id);
        }
        if (!element.classList.contains("error")) {
            valid(element.id);
        }
    } catch (err) {
        console.error(err);
    }
}

function validarCorreo(element) {
    let lista_dominios = ["outlook.com", "gmail.com", "icloud.com", "yahoo.com", "live.com", "hotmail.com"]
    let splitted = element.value.split("@");
    if (element.value[0] === element.value[0].toUpperCase()) {
        invalid(element.id);
    }
    if (splitted.length > 2 || !lista_dominios.includes(splitted[1])) {
        invalid(element.id);
    }
    let arroba = element.value.indexOf("@");
    if (arroba < 1) {
        invalid(element.id);
    }
    let punto = element.value.indexOf(".");
    if (punto <= arroba + 2 || punto === element.value.length - 1) {
        invalid(element.id);
    }
    if (!element.classList.contains("error")) {
        valid(element.id);
    }
}

function validarTelefono(element) {
    let number = parseInt(element.value);
    if (isNaN(number) || number.length > 9 || element.value[0] < 6) {
        invalid(element.id);
    }
    if (!element.classList.contains("error")) {
        valid(element.id);
    }
}

function invalid(id) {
    let element = document.getElementById(id);
    element.classList.add("error");
}

function valid(id) {
    let element = document.getElementById(id);
    element.classList.remove("error");
    element.classList.add("valid");
}
