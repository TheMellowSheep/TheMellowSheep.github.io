"use strict"

import {Snake} from './snake.js';
// import {Ascii} from './display/ascii.js';
import { Canvas } from './display/canvas.js';
// import { Picture } from './display/picture.js';
import {Points} from './points.js';
import {Board} from '../board.js';

export const ROAD = 0;
export const APPLE = 1;
export const HEAD = 2;
export const BODY = 3;

// let display = new Ascii();
let display;
let board = new Board(16, 20, ROAD);
let snake = new Snake(board.maxLine / 2, board.maxColumn / 2);
let apple = new Points(ROAD);

let timer;
let speed;

function changeDirection(event){
    snake.changeDirection(event);
}

window.addEventListener('keydown', changeDirection);

export function init(){
    speed = snake.speed;
    timer =  window.setTimeout(repeat, speed);
    // requestAnimationFrame(repeat);

    board.update(apple.create(board), APPLE);
}

export function recupCanvaID(canvasId){
    // display = new Picture(canvasId);
    display = new Canvas(canvasId);
}


function repeat(){
    let [newHead, newBody] = snake.move(snake.direction);
    let contain;
    let tail = snake.tail;
    
    if(Board.inBoard(board, newHead)){
        contain = Board.contain(board, newHead);

        if(contain == BODY){
            // empeche le serpent de traverser son corps
            snake.isDead();
        }else{
            if(contain == APPLE){
                apple.addPoint(1);
                snake.eatApple(newBody);

                speed = snake.speed;
                board.update(apple.create(board), APPLE);
            }
            
            
            board.update(newHead, HEAD);
            // display.score(apple.total); // TODO à mettre dans 
            
            // Tail : TODO : prendre en compte la 1er fois qu'il mange une pomme
            if(tail != newHead && newBody != tail){
                board.update(newBody, BODY);
                board.update(tail, ROAD);
            }else{
                board.update(newBody, ROAD);
            }
            display.board(board, snake.direction);
            display.score(apple.total);
        }
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

function end(){
    clearInterval(timer);
    display.dead();
    display.score(apple.total);
    window.removeEventListener('keydown', changeDirection);
}