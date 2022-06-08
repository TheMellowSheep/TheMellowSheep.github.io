"use strict"

import {Board} from '../../board.js';
import {APPLE, HEAD, BODY} from '../SnakeGame.js';

const appleSize = 5;
const snakeSize = 10;

export class Picture {
    #xCaseSize;
    #yCaseSize = 0;

    constructor(canvasId){
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
        this.background = "rgb(118, 189, 118)";
        this.up = document.getElementById("up") //.style.visibilty="hidden";
        
        this.down;
        this.left;
        this.right;
    }

    #clear(){
        this.context.fillStyle = this.background;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    dead(){
        this.#clear();

        this.context.fillStyle = "black";
        this.context.font = "40px Arial";
        this.context.fillText("You're Dead", this.canvas.width / 5, this.canvas.height / 3);
    }

    score(total){
        this.context.fillStyle = "black";
        this.context.font = "20px Arial";
        this.context.fillText(`Score : ${total}`, 0, this.canvas.height);
    }

    #apple([line, column]){
        this.context.strokeStyle = "red";
        this.context.beginPath();
        this.context.arc(column  * this.#xCaseSize, line * this.#yCaseSize,  // coord x, y du centre
            appleSize, // rayon
            0, // startAngle
            2 * Math.PI); // endAngle
        this.context.stroke();
    }

    #road([line, col]){
        this.context.strokeStyle = this.background;
        this.context.beginPath();
        this.context.arc(col * this.#xCaseSize, line * this.#yCaseSize, // coord x, y du centre
            appleSize, // rayon
            0, // startAngle
            2 * Math.PI); // endAngle
        this.context.stroke();
    }

    #head([line, col], snakeDirection){
        this.context.strokeStyle = "black";
        this.context.lineWidth = 7;
        this.context.beginPath();

        this.context.moveTo(col * this.#xCaseSize, line * this.#yCaseSize);

        switch(snakeDirection){
            case "left":
                this.context.lineTo((col + 1) * this.#xCaseSize, (line + 1) * this.#yCaseSize - this.#yCaseSize / 2);
                this.context.moveTo(col * this.#xCaseSize, line * this.#yCaseSize);
                this.context.lineTo((col + 1) * this.#xCaseSize, (line - 1) * this.#yCaseSize + this.#yCaseSize / 2);
                break;

            case "right":
                this.context.lineTo((col - 1) * this.#xCaseSize, (line + 1) * this.#yCaseSize - this.#yCaseSize / 2);
                this.context.moveTo(col * this.#xCaseSize, line * this.#yCaseSize);
                this.context.lineTo((col - 1) * this.#xCaseSize, (line - 1) * this.#yCaseSize + this.#yCaseSize / 2);
                break;

            case "down":
                this.context.lineTo((col + 1) * this.#xCaseSize - this.#xCaseSize / 2, (line - 1) * this.#yCaseSize);
                this.context.moveTo(col * this.#xCaseSize, line * this.#yCaseSize);
                this.context.lineTo((col - 1) * this.#xCaseSize + this.#xCaseSize / 2, (line - 1) * this.#yCaseSize);
                break;

            case "up":
                this.context.drawImage(this.up, 10, 10);
                // this.context.lineTo((col + 1) * this.#xCaseSize - this.#xCaseSize / 2, (line + 1) * this.#yCaseSize);
                // this.context.moveTo(col * this.#xCaseSize, line * this.#yCaseSize);
                // this.context.lineTo((col - 1) * this.#xCaseSize + this.#xCaseSize / 2, (line + 1) * this.#yCaseSize);
                break;

            default : break;
        }

        this.context.stroke();
    }

    #body([line, column]){
        this.context.strokeStyle = "black";

        this.context.beginPath();
        this.context.arc( column * this.#xCaseSize, line * this.#yCaseSize,// coord x, y du centre
        snakeSize, // rayon
        0, // startAngle
        2 * Math.PI); // endAngle
        this.context.stroke();
    }

    board(board, snakeDirection){
        let [maxLine, maxColumn] = Board.maxCoord(board);

        if(this.#yCaseSize == 0){
            this.#yCaseSize = this.canvas.width / (maxLine - 1);
            this.#xCaseSize = this.canvas.height / (maxColumn - 1);
        }

        this.#clear();
        
        for (let i = 0; i < maxLine; i++){
            for (let j = 0; j < maxColumn; j++){
                switch(Board.contain(board, [i, j])){
                    case APPLE :
                        this.#apple([i, j]);
                        break;

                    case HEAD : 
                        this.#head([i, j], snakeDirection);
                        break;

                    case BODY :
                        this.#body([i, j]);
                        break;

                    default : break; // = ROAD
                }
            }
        }
    }
}