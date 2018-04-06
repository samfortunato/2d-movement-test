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



// Objects

let box = {
	x: 275,
	y: 275,
	width: 50,
	height: 50,
	xVelocity: 0,
	yVelocity: 0
};



// // Functions

// Makes a box

const drawBox = (x, y, width, height) => {
	ctx.beginPath();
	ctx.fillStyle = '#000000';
	ctx.rect(x, y, width, height);
	ctx.fill();
	ctx.closePath();
};

// Clears canvas

const clearCanvas = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
};



// Event listeners

body.addEventListener('submit', (event) => {

	event.preventDefault();

	const boxXInput = parseFloat(document.getElementById('box-x').value),
		boxYInput = parseFloat(document.getElementById('box-y').value),
		xVelocityInput = parseFloat(document.getElementById('x-velocity').value),
		yVelocityInput = parseFloat(document.getElementById('y-velocity').value);

	if (isNaN(boxXInput) || isNaN(boxYInput) || isNaN(xVelocityInput) || isNaN(yVelocityInput)) {
		alert('One or more of the values you entered is either blank, or not a number.');
	} else {

		box.x = boxXInput;
		box.y = boxYInput;
		box.xVelocity = xVelocityInput;
		box.yVelocity = yVelocityInput;

		console.log(
			'boxXInput:', boxXInput, '\n',
			'boxYInput:', boxYInput, '\n',
			'xVelocityInput:', xVelocityInput,  '\n',
			'yVelocityInput:', yVelocityInput, '\n'
		);

		console.log(
			'box.x:', box.x, '\n',
			'box.y:', box.y, '\n',
			'box.xVelocity:', box.xVelocity, '\n',
			'box.yVelocity:', box.yVelocity, '\n'
		);

	}

});



// // The main draw loop
// Draws the image, one frame at a time

const draw = () => {

	clearCanvas();

	drawBox(
		box.x,
		box.y,
		box.width,
		box.height
	);

	// Makes box move along predefined velocity

	box.x += box.xVelocity;
	box.y += box.yVelocity;

	requestAnimationFrame(draw);

};

// Run draw loop

draw();