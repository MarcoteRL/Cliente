"use strict";

function option1(){
    alert('Funciona');
}

function option2(){
    document.body.innerHTML = "Hola"
}

async function option3() {
    document.body.innerHTML = '';
    for (let i = 0; i <= 10; i++) {
        await new Promise(r => setTimeout(r, 1000));
        document.body.innerHTML = i;
    }
}

