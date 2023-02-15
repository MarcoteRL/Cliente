"use strict";

const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;

const scaledCanvas = {
    width: canvas.width / 4,
    height: canvas.height / 4
}

const floorCollisions2D = [];
for (let i = 0; i < floorCollisions.length; i += 36) {
    floorCollisions2D.push(floorCollisions.slice(i, i + 36));
}
const collisionBlocks = [];
floorCollisions2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol == 192) {
            collisionBlocks.push(new CollisionBlock({
                position: { x: x * 16, y: y * 16 }
            }))
        }
    })
})

const gravity = 0.5;

const player = new Player({ x: 100, y: 100 });
const player2 = new Player({ x: 400, y: 9 });
const keys = {
    d: { pressed: false },
    a: { pressed: false }
}

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: "img/background.png"
})

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = "white";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.save()
    c.scale(4, 4);
    c.translate(0, -background.image.height + scaledCanvas.height);
    background.update();
    collisionBlocks.forEach((collisionBlock) => {
        collisionBlock.update()
    })
    c.restore()
    player.update();
    player2.update();
    player.velocity.x = 0;
    if (keys.d.pressed) {
        player.velocity.x = 3;
    } else if (keys.a.pressed) {
        player.velocity.x = -3
    }
}

animate();

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "d":
            keys.d.pressed = true;
            break;
        case "a":
            keys.a.pressed = true;
            break;
        case "w":
            player.velocity.y = -15
            break;
        case "s":
            player.velocity.x = 1
            break;
        default:
            break;
    }
})

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "d":
            keys.d.pressed = false;
            break;
        case "a":
            keys.a.pressed = false;
            break;
        default:
            break;
    }
})
