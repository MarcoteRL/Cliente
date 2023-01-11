"use strict";

const puppeteer = require('puppeteer');
const jsdom = require('jsdom');
// import fetch from 'cross-fetch';
/**
 * Reto #5
 * ASPECT RATIO DE UNA IMAGEN
 * Fecha publicación enunciado: 01/02/22
 * Fecha publicación resolución: 07/02/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea un programa que se encargue de calcular el aspect ratio
 *  de una imagen a partir de una url.
 * - Url de ejemplo: 
 * https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una imagen de 1920*1080px.
 *
 */

async function getRatio(url) {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const response = await page.goto(url);
        const image = await page.evaluate(() => {
            return document.getElementsByTagName("img").width;
        })
        const body = await response.text();
        const { window: { document } } = new jsdom.JSDOM(body);
        await page.screenshot({
            path: "./screenshot.png",
            fullPage: true

        });
        await browser.close();
    } catch (error) {
        console.error(error);
    }
}

// getRatio("https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png")


"use strict";

/**
 * Reto #9
 * CÓDIGO MORSE
 * Fecha publicación enunciado: 02/03/22
 * Fecha publicación resolución: 07/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
 *
 * @param {String} texto 
 */
function morse(texto) {
    let mor = "";
    let codigo = {
        "A": ".—", "N": "—.", "0": "—————",
        "B": "—...", "Ñ": "——.——", "1": ".————",
        "C": "—.—.", "O": "———", "2": "..———",
        "CH": "————", "P": ".——.", "3": "...——",
        "D": "—..", "Q": "——.—", "4": "....—",
        "E": ".", "R": ".—.", "5": ".....",
        "F": "..—.", "S": "...", "6": "—....",
        "G": "——.", "T": "—", "7": "——...",
        "H": "....", "U": "..—", "8": "———..",
        "I": "..", "V": "...—", "9": "————.",
        "J": ".———", "W": ".——", ".": ".—.—.—",
        "K": "—.—", "X": "—..—", ",": "——..——",
        "L": ".—..", "Y": "—.——", "?": "..——..",
        "M": "——", "Z": "——..", "\"": ".—..—.", "/": "—..—."
    };
    let regex = /^[a-zA-Z0-9]+$/;
    if (regex.test(texto)) {
        for (let letra of texto) {
            mor += codigo[letra];
        }
        console.log(mor);
    } else {
        let splitted = texto.split(" ");
        for (let codSplit of splitted) {
            for (let cod in codigo) {
                if (codigo[cod] == codSplit) {
                    mor += cod;
                }
            }
        }
        console.log(mor)
    }
}

morse("011")