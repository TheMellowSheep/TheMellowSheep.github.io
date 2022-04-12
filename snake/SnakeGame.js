"use strict"


import {Snake} from './snake.js';
import {Display} from './display.js';
import {Apple} from './apple.js';

// Dans le fichier html :
let display = Display();
display.initDisplay(canvasId);
let snake = Snake(display.maxHeight / 2, display.maxWidth / 2);

window.addEventListener('keydown', snake.changeDirection);
let timer = window.setInterval(snake.move, snake.speed);