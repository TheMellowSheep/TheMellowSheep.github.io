"use strict"

// configuration of the board
const maxLine = 16;
const maxColumn = 20;

class Board{
    constructor(height, width){
        // board's size
        this.line = height / maxLine;
        this.column = width / maxColumn;
        
        // create board
        this.board = [];
        for( let i = 0; i < this.line; i++){
            this.board.push([]);
            for (let j = 0; j < this.column; j++ ){
                this.board[i].push(0);
            }
        }
    }

    display(){

    }

    coord_to_case(x, y){

    }

    case_to_coord(){
        // 1 case = 150 x 150 ?
    }
    
}

