"use strict"

import {Coord} from './coord.js';

/* TODO :
- faire une classe serpent 

- Modifier addApple -> les coordonnées des bords ... 
    des pommes apparaissent là où le serpent ne peut pas les atteindre
    => créer la classe Board

- tenter de modulariser => échec
*/
/*
class Coord{
    constructor(line, column){
        this.line = line;
        this.column = column;
    }
}
  */
let canvas;
let maxHeight; // Line
let maxWidth; // Column

let padding = 10;
const snakeSize = 10;
const appleSize = 5;

let snake = [];
let alive = true;
let direction = "up";
let speed = 400;

let score = 0;
let apple = null;

window.addEventListener('keydown', changeDirection);
let timer = window.setInterval(move, speed);

/* Snake */
export function initSnake(canvasId){
    canvas = document.getElementById(canvasId);

    maxHeight = canvas.height;
    maxWidth = canvas.width;

    snake.push(new Coord(maxHeight / 2,  maxWidth / 2));
    console.log(snake); // tmp
}

function newHead(line, column){
    if(line > padding && line < maxHeight - padding
        && column > padding && column < maxWidth - padding){
        snake.push(new Coord(line, column));
    }else{
        alive = false;
    }
}

function changeDirection(event){
    const e = event.keyCode; // TODO : directement sur le switch
    switch (e) {
        // left, q
        case 37 : case 81 : 
        if(direction != "right") direction = "left"; 
        break;

        // up, z
        case 38 : case 90 : 
        if(direction != "down") direction = "up"; break;

        // right, d
        case 39 : case 68 : 
        if(direction != "left") direction = "right"; break;

        // down, s
        case 40 : case 83 : 
        if(direction != "up") direction = "down"; break;

        case 13 : // enter
            let head = snake[snake.length - 1];
            newHead(head.line, head.column);

        default: 
            console.log(`ignore this key (ASCII code : ${e})`);
            break;
    }
}

function move (){
    if(alive){
        let head = snake[snake.length - 1];
        console.log(snake);
        switch (direction) {
            case "left" :
                newHead(head.line, head.column - 1 * padding);
                break;

            case "up" :
                newHead(head.line - 1 * padding, head.column);
                break;

            case "right" : 
                newHead(head.line, head.column + 1 * padding);                
                break;

            case "down" :
                newHead(head.line + 1 * padding, head.column);
                break;

            default : break; // obligatoire
        }
        snake.shift();

        clear();
        displaySnake();
        if(apple != null){
            eatApple();
            displayApple();
        }else{
            addApple();
        }

    }else{
        displayDead();
        clearInterval(timer);
        // TODO : faire apparaitre un bouton replay ?
    }
}

/* Apple */
function addApple(){
    apple = new Coord(getRandomInt(snakeSize * 2 , maxHeight - snakeSize * 2), getRandomInt(snakeSize * 2, maxWidth - snakeSize * 2));
}

function eatApple(){
    if(apple != null){
        let head = snake[snake.length - 1];
        if(apple.line > head.line - snakeSize && 
            apple.line < head.line + snakeSize
            && apple.column > head.column - snakeSize &&
            apple.column < head.column + snakeSize ){

            apple = null;
            newHead(head.line, head.column);
            speed -= 10;
            score += 1;

            clearInterval(timer);
            timer = null;
            timer = window.setInterval(move, speed);
        }
    }
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * max) + min;
}

// TODO : une fct qui regroupe l'ensemble des display

export function displaySnake(){
    const context = canvas.getContext("2d");
    context.strokeStyle = "black";
    // context.strokeRect( 0, 0, canvas.width, canvas.height);

    for(let body of snake){
        // TODO remplacer plus tard le cercle par une image
        context.beginPath();
        context.arc(body.column /* * caseSize*/ , body.line /* * caseSize */, // coord x, y du centre
        snakeSize, // rayon
        0, // startAngle
        2 * Math.PI); // endAngle
        context.stroke();
    }
}

function displayDead(){
    const context = canvas.getContext("2d");
    context.strokeStyle = "gray";
    context.font = "40px Arial";
    context.strokeText("You're Dead", maxWidth / 5, maxHeight / 3);
    context.strokeText(`Score : ${score}`, maxWidth / 5, maxHeight / 3 * 2);
}

function displayApple(){
    const context = canvas.getContext("2d");
    context.strokeStyle = "red";
    // TODO remplacer plus tard le cercle par une image
    context.beginPath();
    context.arc(apple.column /* * caseSize*/ , apple.line /* * caseSize */, // coord x, y du centre
        appleSize, // rayon
        0, // startAngle
        2 * Math.PI); // endAngle
    context.stroke();
}

function clear (){
    const context = canvas.getContext("2d");
    context.fillStyle = "green"; // TODO à changer
    context.fillRect(0, 0, canvas.width, canvas.height);
}