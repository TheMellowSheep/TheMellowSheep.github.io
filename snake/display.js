"use strict"

import {maxLine, maxColumn} from '../board.js'; // TODO à tester
import {ROAD, APPLE, HEAD, BODY} from '../board.js';
import { Coord } from '../coord.js';

export class Display{
    constructor(line, column){
        this.line = line;
        this.column = column;

        this.canvas;
        this.maxHeight; // Line
        this.maxWidth; // Column
        this.padding = 10;
    }

    initDisplay(canvasId){
        this.canvas = document.getElementById(canvasId);
        maxHeight = canvas.height;
        maxWidth = canvas.width;
    }

    clear(color){
        const context = canvas.getContext("2d");
        context.fillStyle = color; // TODO à changer
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    displayDead(){
        const context = canvas.getContext("2d");
        context.strokeStyle = "gray";
        context.font = "40px Arial";
        context.strokeText("You're Dead", maxWidth / 5, maxHeight / 3);
        context.strokeText(`Score : ${score}`, maxWidth / 5, maxHeight / 3 * 2);
    }

    displayApple(){
        appleSize = 5;
        const context = canvas.getContext("2d");
        context.strokeStyle = "red";
        // TODO remplacer plus tard le cercle par une image
        context.beginPath();
        context.arc(apple.column /* * caseSize*/ , apple.line /* * caseSize */, // coord x, y du centre
            appleSize, // rayon
            0, // startAngle
            2 * Math.PI); // endAngle
        context.stroke();
    }
    
    displaySnake(){
        const context = canvas.getContext("2d");
        context.strokeStyle = "black";
        // context.strokeRect( 0, 0, canvas.width, canvas.height);

        for(let body of snake){
            // TODO remplacer plus tard le cercle par une image
            context.beginPath();
            context.arc(body.column /* * caseSize*/ , body.line /* * caseSize */, // coord x, y du centre
            snakeSize, // rayon
            0, // startAngle
            2 * Math.PI); // endAngle
            context.stroke();
        }
    }

    coord_to_case(x, y){

    }

    case_to_coord(){
        // 1 case = 150 x 150 ?
    }

    displayBoard(board, snakeOriantation){ // Version ASCII
        
        // board's size
        this.line = height / maxLine;
        this.column = width / maxColumn;

        // parcourt board
        for (let i = 0; i < maxLine; i++){
            let line = '';
            for (let j = 0; j < maxColumn; j++){
                let coord = new Coord(i, j);

                switch(board.contain(coord)){
                    case ROAD :
                        line += '. ';
                        break;

                    case APPLE :
                        line += 'ù ';
                        break;

                    case HEAD :
                        switch(snakeOriantation){
                            case "left":
                                line += '< ';
                                break;

                            case "right":
                                line += '> ';
                                break;

                            case "down":
                                line += 'v ';
                                break;

                            case "up":
                                line += '^ ';
                                break;

                            default : break;
                        }
                        break;

                    case BODY :
                        line += 'o ';
                        break;

                    default : break;
                }

                /*
                context.beginPath();
                context.moveTo(0, this.column * j);
                context.lineTo(canvas.height, this.column * j);
                context.stroke();
                */
               
            }
            console.log(line);
        }
    }
}