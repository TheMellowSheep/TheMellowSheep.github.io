"use strict"

// configuration of the board
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
}

