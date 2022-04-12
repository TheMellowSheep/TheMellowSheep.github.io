"use strict"

import {Coord} from '../coord.js';
import {Board} from '../board.js';

export const snakeSize = 10;

export class Snake{
    constructor(line, column){
        this.snake = [];
        snake.push(new Coord(line, column));

        this.alive = true;
        // On peut se contenter de vérifier que la longeur du serpent ne soit pas égal à 0
        this.direction = "up";
        this.speed = 400;
    }

    newHead(line, column){
        if(line > padding && line < maxHeight - padding
            && column > padding && column < maxWidth - padding){
            snake.push(new Coord(line, column));
        }else{
            alive = false;
        }
    }

    changeDirection(event){
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

    move (){
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

    eatApple(){
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
    
    
    displaySnake(){
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

}