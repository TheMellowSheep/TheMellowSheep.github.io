"use strict"

import {APPLE, ROAD} from './SnakeGame.js';

function getRandomInt(min, max){
    return Math.floor(Math.random() * max) + min;
}

export class Apple{
    apple = []; // allow to place more than one apple in the board
    total = 0; // score

    constructor(){}

    addApple(board){ // TODO à tester
        let coord;

        do{
            coord = [getRandomInt(0, maxLine - 1), getRandomInt(0, maxColumn - 1)]
        }while(board.contain(coord) != ROAD);

        apple.append(coord);
        board.update(coord, APPLE); // TODO à corriger
        // snakeSize * 2 , maxHeight - snakeSize * 2), getRandomInt(snakeSize * 2, maxWidth - snakeSize * 2
    }

    eatApple(coord){
        index = this.apple.findIndex(coord);
        if(index != -1){
            this.apple.splice(index, 1);
            this.total += 1;
            // board.update(coord, ROAD); // TODO à corriger
        }
    }
}