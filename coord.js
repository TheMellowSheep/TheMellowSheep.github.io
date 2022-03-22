"use strict"

/*
TODO :
  - changer la gestion de déplacement => pour que la souris puisse être prise en compte
*/

// for the snake's movements
// window.addEventListener('keydown', move); 

// Condition de victoire ( tmp )
const corpsMax = 10;

//
const maxLine = 16;
const maxColumn = 20;

class Snake{
    constructor(){
        this.snake = [new Coord(maxLine / 2,  maxColumn / 2)]; 
        this.orientation = 38; // default = up
    }

    // recup 1er elem de la liste
    // ajoute en tête de liste la nouvelle coord => shift ?
    // supp la fin => pop()

    // Note le point x, y est en haut à gauche de la fenetre
    // x : axe horizontal ( = ligne )
    // y : axe vertical (= colonne )
    /* manage the snake's movements*/
}

// while(snake.length() < corpsMax){
// }

// Serpent

