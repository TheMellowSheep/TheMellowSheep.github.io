"use strict"

import { Board } from '../board.js';

/**
 * Select a random value between min and max
 * @param {number} min
 * @param {number} max - value max (included)
 * @returns {number} the random value
 */
function getRandomInt(min, max){
    return Math.floor(Math.random() * max) + min;
}

/**
 * Class representing an Object to gain points
 * @exports Points
 * @version 2.0
 */
export class Points{
    counter = 0;

    /**
     * @constructor Create object to gain points
     * @param {*} ground - type of where we can put a point's object
     */
    constructor(ground){
        this.ground = ground;
    }

    // >>> accessor

    /**
     * Get the total of point gained
     */
    get total(){
        return this.counter;
    }

    // <<< accessor

    /**
     * Create a new object
     * @param {Board} board - board of the game
     * @returns {[number, number]} - coordinate of the future object
     */
    create(board){
        let [line, column] = Board.maxCoord(board)
        let coord;

        do{
            coord = [getRandomInt(0, line - 1), getRandomInt(0, column - 1)]
        }while(Board.contain(board, coord) != this.ground);

        return coord;
        // snakeSize * 2 , maxHeight - snakeSize * 2), getRandomInt(snakeSize * 2, maxWidth - snakeSize * 2
    }

    /**
     * Add point to the counter
     * @param {number} point - points gained
     */
    addPoint(point){
        this.counter = this.counter + point;
    }


}