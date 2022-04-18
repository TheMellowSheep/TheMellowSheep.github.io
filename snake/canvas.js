"use strict"

import {Board} from '../board.js';
import {ROAD, APPLE, HEAD, BODY} from './SnakeGame.js';

const appleSize = 5;

export class Canvas {

    constructor(canvasId, background){
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
        this.background = background;
    }

    #clear(){
        this.context.fillStyle = this.background;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    dead(){
        this.#clear();

        this.context.strokeStyle = "gray";
        this.context.font = "40px Arial";
        this.context.strokeText("You're Dead", this.canvas.width / 5, this.canvas.height / 3);
       // this.context.strokeText(`Score : ${score}`, this.canvas.width / 5, this.canvas.height / 3 * 2);
    }

    #road(){
    }

    #apple(){
        this.context.strokeStyle = "red";
        // TODO remplacer plus tard le cercle par une image => autre module
        this.context.beginPath();
        this.context.arc(apple.column /* * caseSize*/ , apple.line /* * caseSize */, // coord x, y du centre
            appleSize, // rayon
            0, // startAngle
            2 * Math.PI); // endAngle
        context.stroke();
    }

    #head(snakeDirection){
        switch(snakeDirection){
            case "left":
                return '< ';

            case "right":
                return '> ';

            case "down":
                return 'v ';

            case "up":
                return '^ ';

            default : break;
        }
    }

    #body(){
        return 'o ';
    }

    board(board, snakeDirection){
        let [maxLine, maxColumn] = Board.maxCoord(board);

        this.#clear();
        
        let display = '';
        for (let i = 0; i < maxLine; i++){
            for (let j = 0; j < maxColumn; j++){
                switch(Board.contain(board, [i, j])){
                    case ROAD :
                        display += this.#road();
                        break;

                    case APPLE :
                        display += this.#apple();
                        break;

                    case HEAD : 
                        display += this.#head(snakeDirection);
                        break;

                    case BODY :
                        display += this.#body();
                        break;

                    default : break;
                }
            }
            display += '\n';
        }
        console.log(display);
    }

    

}