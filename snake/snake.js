"use strict"

import {Coord} from '../coord.js';
import {Board} from '../board.js'; // TODO à tester
import {HEAD, BODY} from '../board.js'; // TODO à tester

export const snakeSize = 10;

export class Snake{
    snake = [];
    direction = "up";
    speed = 400;

    alive = true;
    // On peut se contenter de vérifier que la longeur du serpent ne soit pas égal à 0

    constructor(board){
        snake.push(new Coord(board.maxLine() / 2, board.maxColumn() / 2));
    }

    newHead(line, column, board){
        let coord = new Coord(line, column);

        if(board.inBoard(coord)){
            // delete the previous head
            let newBody = snake[snake.length - 1];
            board.update(newBody, BODY);

            // add the new head
            snake.push(coord);
            board.update(coord, HEAD);
        }else{
            alive = false;
        }
    }

    changeDirection(event){
        const e = event.keyCode; // TODO : directement sur le switch
        switch (e) {
            // left, q
            case 37 : case 81 : 
                if(direction != "right") 
                    direction = "left"; 
                    break;
    
            // up, z
            case 38 : case 90 : 
                if(direction != "down") 
                    direction = "up"; 
                    break;
    
            // right, d
            case 39 : case 68 : 
                if(direction != "left") 
                    direction = "right"; 
                    break;
    
            // down, s
            case 40 : case 83 : 
                if(direction != "up") 
                    direction = "down"; 
                    break;

            default: 
                console.log(`ignore this key (ASCII code : ${e})`);
                break;
        }
    }

    move(){
        if(alive){
            let head = snake[snake.length - 1];
            // console.log(snake); // TODO à supp
            switch (direction) {
                case "left" :
                    newHead(head.line, head.column - 1);
                    break;
    
                case "up" :
                    newHead(head.line - 1, head.column);
                    break;
    
                case "right" : 
                    newHead(head.line, head.column + 1);                
                    break;
    
                case "down" :
                    newHead(head.line + 1, head.column);
                    break;
    
                default : break; // obligatoire
            }

            // delete the tail
            snake.shift();
        }
    }

    eatApple(){
        let head = snake[snake.length - 1];

        newHead(head.line, head.column);
        speed -= 10;
    }
}