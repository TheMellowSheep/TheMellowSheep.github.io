"use strict"

import {Snake} from './snake.js';
import {Ascii} from './ascii.js';
import {Points} from './points.js';
import {Board} from '../board.js';

export const ROAD = 0;
export const APPLE = 1;
export const HEAD = 2;
export const BODY = 3;

let display = new Ascii();
let board = new Board(16, 20, ROAD);
let snake = new Snake(board.maxLine / 2, board.maxColumn / 2);
let apple = new Points(ROAD);

let timer;
let speed;

window.addEventListener('keydown', Snake.changeDirection);

export function init(){
    speed = snake.speed;
    timer = window.setInterval(repeat, speed);

    let coord = apple.create(board);
    board.update(coord, APPLE);
}

function repeat(){
    console.log(snake.direction);
    let [newHead, newBody] = snake.move(snake.direction);

    console.log(newHead); //

    let contain;
    

    if( Board.inBoard(board, newHead) && (contain = Board.contain(board, newHead)) != BODY){
        
        if(contain == APPLE){
            apple.addPoint(1);

            let coord = apple.create(board);
            board.update(coord, APPLE);

            // reset ?
        }
        
        board.update(newBody, BODY);
        board.update(newHead, HEAD);

        display.board(board, snake.direction);
    }else{
        snake.isDead();
    }

    if(!snake.alive){
        end();
    }
}

function reset(){
    speed = snake.speed;

    clearInterval(timer);
    timer = null;
    timer = window.setInterval(repeat, speed);
}

function end(){
    clearInterval(timer);
    display.dead();
    display.score(apple.total);
    window.removeEventListener('keydown', Snake.changeDirection);
}