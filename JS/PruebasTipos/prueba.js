"use strict";

let number = 15;
let string = "Hello World";
let hexa = number.toString(16);
let binary = number.toString(2);
let scientific_number = 7e3;
let boolean1 = false;
let boolean2 = true;

/**
 * Función que escribe en el HTML las variables declaradas anteriormente.
 */
function write() {
    document.write(string, "<br>", number, "<br>", hexa, "<br>", binary, "<br>", scientific_number,
        "<br>", boolean1, "<br>", boolean2)
}

