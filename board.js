"use strict"

/**
 * TODO : mettre toutes les méthodes ( hormis accesseurs ) statiques
 */ 

/**
 * Class representing a board
 * @exports Board
 * @version 2.0
 */
export class Board{
    board = [];

    /**
     * @constructs Create a board
     * @param {number} line - The number max of line
     * @param {number} column - The number max of column
     * @param {*} base - The contain of the board by default
     */
    constructor(line, column, base){
        this.line = line; //16;
        this.column = column; //20;

        // creation of the board
        for( let i = 0; i < line; i++){
            this.board.push([]);
            for (let j = 0; j < column; j++ ){
                this.board[i].push(base);
            }
        }
    }

    // >>> accessor
    /**
     * Get the number max of line in the board
     * @returns {number} the number max of line
     */
    get maxLine(){
        return this.line;
    }

    /**
     * Get the number max of column in the board
     * @returns {number} the number max of column
     */
    get maxColumn(){
        return this.column;
    }

    /**
     * Get the max of line and column in the board
     * @returns {[number, number]} number max of line and column
     */
    get maxCoord(){
        return [this.line, this.column];
    }

    /**
     * Get the content of the board in Array form
     * @returns {Array<Array<any>>}} Content of the board
     */
    get board(){
        return this.board;
    }
    // <<< accessor

    /**
     * Test if the coordinate are in the board
     * @param {[number, number]} coord - [line, column], the coordinate to test
     * @returns {boolean} True if the coordinate is in the board, else False
     */
    inBoard(coord){
        let [line, column] = coord;
    
        return line >= 0 && line < this.line
        && column >= 0 && column < this.column;
    }

    /**
     * Specifies the content of the boad in the position [line, column]
     * @param {number} line 
     * @param {number} column 
     * @returns {*} null if the content is unknown
     */
    contain(line, column){
        if(this.inBoard([line, column])){
            return this.board[line][column];
        }
        return null;
    }

    /**
     * Update the value of the board in the coordon
     * @param {[number, number]} coord postition [line, column] of the value to be changed in the board
     * @param {*} type - the new value
     */
    update(coord, type){
        let [line, column] = coord;
        this.board[line][column] = type;
    }
}