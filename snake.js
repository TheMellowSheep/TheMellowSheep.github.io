"use strict"

// Condition de victoire ( tmp )
const corpsMax = 10;

//
const maxLine = 16;
const maxColumn = 20;

class Coord{
    constructor(line, column){
        this.line = line;
        this.column = column;
    }
}

class Snake{
    constructor(){
        this.snake = [new Coord(maxLine / 2,  maxColumn / 2)]; 
        this.orientation = 38; // default = up
    }

    newHead(line, column){
        if(line >= 0 && line < maxLine
            && column >= 0 && column < maxColumn){

            this.snake.push(new Coord(line, column));
        }
    }

    display(canvasId){
        const canvas = document.getElementById(canvasId);
        const context = canvas.getContext("2d");
        context.strokeRect( 0, 0, canvas.width, canvas.height);
        
        const caseSize = 10; // TODO : en faire une var dans le constructeur snake

        for(let body of this.snake){
            console.log(body);
            // remplacer plus tard le cercle par une image
            context.beginPath();
            context.arc(body.column * caseSize , body.line  * caseSize , // coord x, y du centre
            caseSize, // rayon
            0, // startAngle
            2 * Math.PI); // endAngle
            context.stroke();
        }
    }

    // recup 1er elem de la liste
    // ajoute en tête de liste la nouvelle coord => shift ?
    // supp la fin => pop()

    // Note le point x, y est en haut à gauche de la fenetre
    // x : axe horizontal ( = ligne )
    // y : axe vertical (= colonne )
    /* manage the snake's movements*/
    
    move(event){
        const e = event.keyCode;
        let head = this.snake[0];
        let changement = true;

        switch (e) {
            // left, q
            case 37 : case 81 :
                this.newHead(head.line, head.column - 1);
                break;
    
            // up, z
            case 38 : case 90 :
                this.newHead(head.line - 1, head.column);
                break;
    
            // right, d
            case 39 : case 68 : 
                this.newHead(head.line, head.column + 1);                
                break;
    
            // down, s
            case 40 : case 83 : 
                this.newHead(head.line + 1, head.column);
                break;
            
            // ignore, do nothing
            default:
                changement = false;
                // console.log(this.snake);
                //this.move(this.orientation);
                break;
                
        }
        if (changement){
            if(this.orientation != e){
                this.orientation = e;
            }
            this.snake.shift();
        }
        
    }
}

let snake = new Snake();
window.addEventListener('keydown', snake.move);

const initSnake = function(canvasId) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext("2d");
    context.strokeRect( 0, 0, canvas.width, canvas.height);
    
    // TODO : convertir tab <-> affichage
        // test :
    
    console.log(snake);
    snake.move(37);
    console.log(snake);
    snake.display(canvasId);
}

// while(snake.length() < corpsMax){
// }
