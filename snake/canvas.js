"use strict"

import {Board} from '../board.js';
import {APPLE, HEAD, BODY} from './SnakeGame.js';

const appleSize = 5;

export class Canvas {
    #linCaseSize = 0;
    #colCaseSize;

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

    #apple([line, column]){
        this.context.strokeStyle = "red";
        this.context.beginPath();
        this.context.arc(line /* * caseSize*/ , column /* * caseSize */, // coord x, y du centre
            appleSize, // rayon
            0, // startAngle
            2 * Math.PI); // endAngle
        context.stroke();
    }

    #head([line, col], snakeDirection){
        // TODO faire des triangles
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

    #body([line, column]){
        this.context.strokeStyle = "black";

        context.beginPath();
        // TODO à vérifier, de base c'est inversé
        context.arc(line * this.#linCaseSize, column * this.#colCaseSize, // coord x, y du centre
        snakeSize, // rayon
        0, // startAngle
        2 * Math.PI); // endAngle
        context.stroke();
    }

    board(board, snakeDirection){
        let [maxLine, maxColumn] = Board.maxCoord(board);

        if(this.#linCaseSize == 0){
            this.#linCaseSize = this.canvas.width / maxLine;
            this.#colCaseSize = this.canvas.height / maxColumn;
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

                    default : break;
                }
            }
        }
    }
}