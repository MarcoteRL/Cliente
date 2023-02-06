"use strict";

let canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let context = canvas.getContext("2d");
context.fillRect(100, 100, 100, 100);
context.fillRect(300, 100, 100, 100);
context.fillRect(300, 600, 100, 100);
context.fillRect(500, 600, 100, 100);
