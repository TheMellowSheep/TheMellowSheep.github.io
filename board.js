"use strict"

export class Board{
    board = [];

    constructor(line, column, base){
        this.maxLine = line; //16;
        this.maxColumn = column; //20;

        // creation of the board
        for( let i = 0; i < this.maxLine; i++){
            this.board.push([]);
            for (let j = 0; j < this.maxColumn; j++ ){
                this.board[i].push(base);
            }
        }
    }

    // >>> accessor
    maxLine(){
        return this.maxLine;
    }

    maxColumn(){
        return this.maxColumn;
    }

    maxCoord(){
        return [this.maxLine, this.maxColumn];
    }
    // <<< accessor

    inBoard(coord){
        let [line, column] = coord;
    
        return line >= 0 && line < this.maxLine
        && column >= 0 && column < this.maxColumn;
    }

    contain(line, column){
        if(this.inBoard([line, column])){
            return this.board[line][column];
        }
        return -1;
    }

    update(coord, type){
        let [line, column] = coord;
        this.board[line][column] = type;
    }
}