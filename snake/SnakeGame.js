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

window.addEventListener('keydown', snake.changeDirection);

export function init(){
    speed = snake.speed;
    timer = window.setTimeout(repeat, speed);

    let coord = apple.create(board);
    board.update(coord, APPLE);
}

function repeat(){
    console.log(snake.direction); //
    let tail = snake.tail;
    let [newHead, newBody] = snake.move(snake.direction);

    console.log(newHead); //

    let contain;

    if(Board.inBoard(board, newHead) && (contain = Board.contain(board, newHead)) != BODY){
        
        if(contain == APPLE){
            apple.addPoint(1);
            snake.eatApple();
            speed = snake.speed;

            let coord = apple.create(board);
            board.update(coord, APPLE);

            // reset ?
        }
        
        board.update(newHead, HEAD);

        // Tail :
        if(tail == newBody){
            board.update(newBody, ROAD);
        }else{
            board.update(newBody, BODY);
            board.update(tail, ROAD);

            console.log(snake.snake); //
        }

        display.board(board, snake.direction);
    }else{
        snake.isDead();
    }

    if(!snake.alive){
        end();
    }else{
        clearInterval(timer);
        timer = window.setTimeout(repeat, speed);
    }
}

function reset(){
    speed = snake.speed;

    
    timer = null;
    timer = window.setInterval(repeat, snake.speed);
}

function end(){
    clearInterval(timer);
    display.dead();
    display.score(apple.total);
    // window.removeEventListener('keydown', Snake.changeDirection);
}