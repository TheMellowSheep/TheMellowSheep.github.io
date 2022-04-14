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
let board = new Board(16, 20, ROAD);
let snake = new Snake(board.maxLine / 2, board.maxColumn / 2);
let apple = new Apple();
let timer;
let speed;

window.addEventListener('keydown', snake.changeDirection);

export function init(){
    speed = snake.getSpeed();
    timer = window.setInterval(repeat, speed);
}

function repeat(){
    console.log(snake.getDirection());
    let [newHead, newBody] = snake.move(snake.getDirection());

    console.log(newHead);

    if(board.inBoard(newHead) && board.contain(newHead) != BODY){
        board.update(newBody, BODY);
        board.update(newHead, HEAD);
        display.final(board.maxCoord(), board.contain, snake.getDirection());
    }else{
        snake.isDead();
    }

    if(!snake.getAlive()){
        end();
    }

}

function reset(){
    clearInterval(timer);
    timer = null;
    speed = snake.getSpeed();
    timer = window.setInterval(repeat, speed);
}

function end(){
    clearInterval(timer);
    display.dead();
    // afficher le score
}