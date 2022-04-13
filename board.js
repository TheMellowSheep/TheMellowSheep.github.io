"use strict"

export class Board{
    board = [];

    constructor(line, column){
        this.maxLine = line; //16;
        this.maxColumn = column; //20;

        // creation of the board
        for( let i = 0; i < this.maxLine; i++){
            this.board.push([]);
            for (let j = 0; j < this.maxColumn; j++ ){
                this.board[i].push(0);
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
    // <<< accessor

    contain(coord){
        if(inBoard(coord)){
            return this.board[line][column];
        }
        return -1;
    }

    update(coord, type){
        if(inBoard(coord)){ // TODO nécessaire ?
            this.board[coord.line()][coord.column()] = type;
        }
    }
    
    inBoard(coord){
        let line = coord.line();
        let column = coord.column();
    
        return line >= 0 && line < maxLine
        && column >= 0 && column < maxColumn;
    }
}