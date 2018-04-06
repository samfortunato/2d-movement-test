// // Setup

'use strict';

const canvas = document.getElementById('main-canvas'),
	ctx = canvas.getContext('2d'),
	width = 600,
	height = 600;

canvas.width = width;
canvas.height = height;



// Variables

const body = document.querySelector('body');



// Vector

const boxVector = {
	x: 0,
	y: 0
}



// // Functions

// Makes a box

const drawBox = (x, y, width, height) => {
	ctx.beginPath();
	ctx.fillStyle = '#000000';
	ctx.rect(x, y, width, height);
	ctx.fill();
	ctx.closePath();
}



// Event listeners

body.addEventListener('submit', (event) => {

	event.preventDefault();

});



// // The main draw loop
// Draws the image, one frame at a time

const draw = () => {

	drawBox(275, 275, 50, 50);

	requestAnimationFrame(draw);

}

// Run draw loop

draw();