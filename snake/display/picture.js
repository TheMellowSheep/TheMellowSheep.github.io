"use strict"

import {Board} from '../../board.js';
import {APPLE, HEAD, BODY} from '../SnakeGame.js';

export class Picture {
    #xCaseSize;
    #yCaseSize = 0;

    constructor(canvasId){
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
        this.background = "rgb(118, 189, 118)";
        
        this.up = document.getElementById("up");
        this.down = document.getElementById("down");
        this.left = document.getElementById("left");
        this.right = document.getElementById("right");
        this.point = document.getElementById("point");
    }

    #clear(){
        this.context.fillStyle = this.background;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    dead(){
        this.#clear();

        this.context.fillStyle = "black";
        this.context.font = "40px Arial";
        this.context.fillText("You're Dead", this.canvas.width / 3, this.canvas.height / 2);
    }

    score(total){
        this.context.fillStyle = "black";
        this.context.font = "20px Arial";
        this.context.fillText(`Score : ${total}`, 0, this.canvas.height);
    }

    #apple([line, col]){
        this.context.drawImage(this.point, col * this.#xCaseSize, line * this.#yCaseSize, this.#xCaseSize, this.#yCaseSize);
    }

    #head([line, col], snakeDirection){
        switch(snakeDirection){
            case "left":
                this.context.drawImage(this.left, col * this.#xCaseSize, line * this.#yCaseSize, this.#xCaseSize, this.#yCaseSize);
                break;

            case "right":
                this.context.drawImage(this.right, col * this.#xCaseSize, line * this.#yCaseSize, this.#xCaseSize, this.#yCaseSize);
                break;

            case "down":
                this.context.drawImage(this.down, col * this.#xCaseSize, line * this.#yCaseSize, this.#xCaseSize, this.#yCaseSize);
                break;

            case "up":
                this.context.drawImage(this.up, col * this.#xCaseSize, line * this.#yCaseSize, this.#xCaseSize, this.#yCaseSize);
                break;

            default : break;
        }

        this.context.stroke();
    }

    /*
    #body([line, column]){
        this.context.strokeStyle = "black";

        this.context.beginPath();
        this.context.arc( column * this.#xCaseSize, line * this.#yCaseSize,// coord x, y du centre
        snakeSize, // rayon
        0, // startAngle
        2 * Math.PI); // endAngle
        this.context.stroke();
    }
    */

    board(board, snakeDirection){
        let [maxLine, maxColumn] = Board.maxCoord(board);

        if(this.#yCaseSize == 0){
            this.#yCaseSize = this.canvas.width / maxLine ;
            this.#xCaseSize = this.canvas.height / maxColumn ;
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
                        this.#head([i, j], snakeDirection);
                        // this.#body([i, j]);
                        break;

                    default : break; // = ROAD
                }
            }
        }
    }
}