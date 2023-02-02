"use strict";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let newImage = new Image();
newImage.src = 'img/ball.png';

newImage.onload = () => {
    ctx.drawImage(newImage, 100, 400, 250, 208);
}

