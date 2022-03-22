"use strict"

class Coord{
    constructor(line, column){
        this.line = line;
        this.column = column;
    }
}

let canvas;
let maxHeight; // Line
let maxWidth; // Column

let padding = 10;
const snakeSize = 10;

let snake = [];
let alive = true;
let orientation = "up";

let apple = null;

window.addEventListener('keydown', changeDirection);
window.setInterval(move, 500);

function initSnake(canvasId){
    canvas = document.getElementById(canvasId);

    maxHeight = canvas.height;
    maxWidth = canvas.width;

    snake.push(new Coord(maxHeight / 2,  maxWidth / 2));
}

function newHead(line, column){
    if(line > padding && line < maxHeight - padding
        && column > padding && column < maxWidth - padding){
        snake.push(new Coord(line, column));
    }else{
        alive = false;
    }
}

function displaySnake(){
    const context = canvas.getContext("2d");
    context.strokeRect( 0, 0, canvas.width, canvas.height);

    for(let body of snake){
        // remplacer plus tard le cercle par une image
        context.beginPath();
        context.arc(body.column /* * caseSize*/ , body.line /* * caseSize */, // coord x, y du centre
        snakeSize, // rayon
        0, // startAngle
        2 * Math.PI); // endAngle
        context.stroke();
    }
}

function clear (){
    const context = canvas.getContext("2d");
    context.fillStyle = "green"; // TODO à changer
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function changeDirection(event){
    const e = event.keyCode;

    switch (e) {
        // left, q
        case 37 : case 81 : orientation = "left"; break;

        // up, z
        case 38 : case 90 : orientation = "up"; break;

        // right, d
        case 39 : case 68 : orientation = "right"; break;

        // down, s
        case 40 : case 83 : orientation = "down"; break;

        case 13 : // enter
            let head = snake[snake.length - 1];
            newHead(head.line, head.column);
            // add body

        default: 
            console.log(`ignore this key (ASCII code : ${e})`);
            break;
    }
}

function move (){
    if(alive){
        let head = snake[snake.length - 1];
        switch (orientation) {
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
    }   
}

function addApple(){
    apple = new Coord(getRandomInt(maxHeight), getRandomInt(maxWidth));
}