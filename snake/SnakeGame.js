"use strict"

import {Snake} from './snake.js';
import {Ascii} from './ascii.js';
import {Apple} from './apple.js';
import {Board} from '../board.js';

export const ROAD = 0;
export const APPLE = 1;
export const HEAD = 2;
export const BODY = 3;

let display = new Ascii();
let board = new Board(16, 20);
let snake = new Snake(board);
let apple = new Apple();
let timer;

window.addEventListener('keydown', snake.changeDirection);

export function init(){
    timer = window.setInterval(repeat, snake.speed());
}

function repeat(){
    snake.move();
    if(!snake.alive){
        end();
    }
    display.board();
}

function eatApple(){
    clearInterval(timer);
    timer = null;
    timer = window.setInterval(move, speed);
}

function end(){
    clearInterval(timer);
    display.dead();
}

