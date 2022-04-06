"use strict"

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
}
  