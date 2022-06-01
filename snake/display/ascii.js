"use strict"

import {Board} from '../../board.js';
import {ROAD, APPLE, HEAD, BODY} from '../SnakeGame.js';

export class Ascii { // ASCII

    dead(){
        console.log("You're Dead");
    }

    score(score){
        console.log("Points obtenu : " + score);
    }
    #road(){
        return '. ';
    }
    
    #apple(){
        return 'ù ';
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