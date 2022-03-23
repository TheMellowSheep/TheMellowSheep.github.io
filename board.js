"use strict"

import {Snake} from './snake';


/*
TODO :
  - changer la gestion de déplacement => pour que la souris puisse être prise en compte
*/

    // Note le point x, y est en haut à gauche de la fenetre
    // x : axe horizontal ( = ligne )
    // y : axe vertical (= colonne )



// en majuscule ?
const apple = 1;
const player = 2;

//
let board = null;
let snake = new Snake();

//
const maxLine = 16;
const maxColumn = 20;

class Board{
    constructor(height, width){
        this.line = height / maxLine;
        this.column = width / maxColumn;
        
        this.board = [];
        // create board
        for( let i = 0; i < this.line; i++){
            this.board.push([]);
            for (let j = 0; j < this.column; j++ ){
                this.board[i].push(0);
            }
        }
    }

    display(canvasId){
        // console.log(this.board);
        const canvas = document.getElementById(canvasId);
        const context = canvas.getContext("2d");
        context.strokeRect( 0, 0, canvas.width, canvas.height);

        for (let i = 0; i < maxLine; i++){
            // let line = '';
            for (let j = 0; j < maxColumn; j++){
                context.beginPath();
                context.moveTo(0, this.column * j);
                context.lineTo(canvas.height, this.column * j);
                context.stroke();
               /* switch(this.board[i][j]){
                    case apple :
                        line += 'ù ';
                        break;
                    case player :
                        line += 'o ';
                        break;
                    default : // case 0 = road
                        line += '. ';
                }*/
            }
            console.log(line);
        }
    }

    addApple(){
        this.board[getRandomInt(this.line)][getRandomInt(this.column)] = apple;
    }
    
}

// test :
//let board = new Board(15, 20);
// board.display();

// Objets 

const initBoard = function(canvasId) {
    const canvas = document.getElementById(canvasId);
    board = new Board(canvas.height, canvas.width);
    board.display();
    snake.newHead(canvas.width / 2, canvas.height / 2);
    snake.display(canvasId);
}