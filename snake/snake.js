"use strict"

export const snakeSize = 10;

export class Snake{
    snake = [];

    direction = "up"; // remplacer par null plus tard
    speed = 400;
    alive = true;

    constructor(lineCenter, columnCenter){
        this.snake.push([lineCenter, columnCenter]);
    }

    // >>> accessor
    get speed(){
        return this.speed;
    }

    get alive(){
        return this.alive;
    }

    get direction(){
        return this.direction;
    }

    get tail(){
        return this.snake[0];
    }

    // <<< accessor

    newHead(line, column){
        let coord = [line, column];
        
        // add the new head
        this.snake.push(coord);
        return coord;
    }

    changeDirection(event){
        const e = event.keyCode; // TODO : directement sur le switch
        switch (e) {
            // left, q
            case 37 : case 81 : 
                if(this.direction != "right")
                    this.direction = "left";
                break;
    
            // up, z
            case 38 : case 90 : 
                if(this.direction != "down") 
                    this.direction = "up"; 
                break;
    
            // right, d
            case 39 : case 68 : 
                if(this.direction != "left") 
                    this.direction = "right"; 
                break;
    
            // down, s
            case 40 : case 83 : 
                if(this.direction != "up") 
                    this.direction = "down"; 
                break;

            default: 
                console.log(`ignore this key (ASCII code : ${e})`);
        }
        console.log("direction prise : " + this.direction);
    }

    /**
     * 
     * @param {string} direction - direction the snake's going
     * @returns an array of two array [ line, column ]
     */
    move(direction){
        if(this.alive){
            let head = this.snake[this.snake.length - 1];
            let newHead;
            // console.log(snake); // TODO à supp
            switch (direction) {
                case "left" :
                    newHead = this.newHead(head[0], head[1] - 1);
                    break;
    
                case "up" :
                    newHead = this.newHead(head[0] - 1, head[1]);
                    break;
    
                case "right" : 
                    newHead = this.newHead(head[0], head[1] + 1);                
                    break;
    
                case "down" :
                    newHead = this.newHead(head[0] + 1, head[1]);
                    break;
    
                default : 
                    break; // obligatoire
            }

            // delete the tail
            this.snake.shift();

            return [newHead, head];
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