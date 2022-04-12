"use strict"

function getRandomInt(min, max){
    return Math.floor(Math.random() * max) + min;
}

export class Apple{
    constructor(){
        this.appleSize = 5;
        this.apple = null;
        this.eat = 0;
    }

    displayApple(){
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

    addApple(){
        apple = new Coord(getRandomInt(snakeSize * 2 , maxHeight - snakeSize * 2), getRandomInt(snakeSize * 2, maxWidth - snakeSize * 2));
    }
}