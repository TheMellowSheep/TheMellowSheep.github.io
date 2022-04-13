"use strict"

import {Coord} from '../coord.js';
import {HEAD, BODY, ROAD, APPLE} from './SnakeGame.js'; // TODO à tester

export const snakeSize = 10;

export class Snake{
    snake = [];

    direction = "up";
    speed = 400;
    alive = true;

    constructor(lineCenter, columnCenter){
        this.snake.push(new Coord(lineCenter, columnCenter));
    }

    // >>> accessor
    getSpeed(){
        return this.speed;
    }

    alive(){
        return this.alive;
    }

    direction(){
        return this.direction;
    }
    // <<< accessor

    newHead(line, column){
        let coord = new Coord(line, column);
        
        // add the new head
        this.snake.push(coord);
        return coord;
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
        if(this.alive){
            let head = this.snake[this.snake.length - 1];
            let newHead;
            // console.log(snake); // TODO à supp
            switch (this.direction) {
                case "left" :
                    newHead = this.newHead(head.line, head.column - 1);
                    break;
    
                case "up" :
                    newHead = this.newHead(head.line - 1, head.column);
                    break;
    
                case "right" : 
                    newHead = this.newHead(head.line, head.column + 1);                
                    break;
    
                case "down" :
                    newHead = this.newHead(head.line + 1, head.column);
                    break;
    
                default : 
                    break; // obligatoire
            }

            // delete the tail
            this.snake.shift();

            return (newHead, head);
        }
    }

    eatApple(){
        let head = snake[snake.length - 1];

        newHead(head.line, head.column);
        speed -= 10;
    }

    isDead(){
        this.alive = false;
    }
}