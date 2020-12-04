// Select elements on the page-CanvasGradient, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
// Set up our canvas for drawing

// destructured for :
// const { width } = canvas;
// const { height } = canvas;
const { width, height } = canvas;
const MOVE_AMOUNT = 15; // true const

// create random x,y as starting point of canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
// Start the drawing
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({ key }) {
    // increment the hue:
    hue += 5;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(key);
    // staring path:
    ctx.beginPath();
    ctx.moveTo(x, y);
    // move x and y to desired value:

    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

// Write a handler for the keys
function handleKey(e) {
    // e.preventDefault();
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
    }
}
// clear/ shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener(
        'animationend',
        function () {
            console.log('It has shaked');
            canvas.classList.remove('shake');
        },
        { once: true }
    );
}
// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
