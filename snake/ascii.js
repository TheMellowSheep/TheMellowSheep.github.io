"use strict"

import {Board} from '../board.js'; // TODO à tester
import {ROAD, APPLE, HEAD, BODY} from './SnakeGame.js';

export class Ascii { // ASCII

    dead(){
        console.log("You're Dead");
    }

    roard(){
        return '. ';
    }
    
    apple(){
        return 'ù ';
    }

    head(snakeDirection){
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

    body(){
        return 'o ';
    }

    final(maxCoord, contain, snakeDirection){
        let [maxLine, maxColumn] = maxCoord;

        for (let i = 0; i < maxLine; i++){
            let line = '';
            for (let j = 0; j < maxColumn; j++){
                switch(contain(i, j)){
                    case ROAD :
                        line += this.roard();
                        break;

                    case APPLE :
                        line += this.apple();
                        break;

                    case HEAD : 
                        line += this.head(snakeDirection);
                        break;

                    case BODY :
                        line += this.body();
                        break;

                    default : break;
                }
            }
            console.log(line);
        }
    }
}