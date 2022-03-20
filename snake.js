"use strict"
/*
TODO :
- Faire l'affichage du serpent
- utiliser setTimeout(action, temps)
avec une seconde = 1000

*/

// Condition de victoire ( tmp )
const corps_max = 10;

// Serpent
class Snake{
    constructor(){
        this.snake = []; 
        this.orientation = "up";
    }

    addBody(){
        this.snake.push(this.snake[this.snake.length - 1]);
    }

    newHead(x, y){
        // remplacer push par shift ?
        // verif coord valide
        // >= 0 et < canvas.width, canvas.height
        this.snake.push(new Coord(x, y));
    }

    move(orientation){
        // recup 1er elem de la liste
        // ajoute en tête de liste la nouvelle coord => shift ?
        // supp la fin => pop()

        // Note le point x, y est en haut à gauche de la fenetre
        // x : axe horizontal ( = ligne )
        // y : axe vertical (= colonne )
        
        let head = this.snake[0];
        switch (orientation) {
            case "up": // haut
                this.newHead(head.x - 1, head.y);
                this.orientation = orientation;
                break;
            case "right": // droite
                this.newHead(head.x, head.y + 1);
                this.orientation = orientation;
                break;
            case "down": // bas
                this.newHead(head.x + 1, head.y);
                this.orientation = orientation;
                break;
            case "left": // gauche
                this.newHead(head.x, head.y - 1);
                this.orientation = orientation;
                break;
            default: // continue
                this.move(this.orientation);
                break;
        }
        //this.snake.pop();
    }
}

class Coord{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

let snake = new Snake();
// placer la tête au centre de la fenêtre

// Objets 

// à intégrer dans la classe snake ?
const initSnake = function(canvasId) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext("2d");
    context.strokeRect( 0, 0, canvas.width, canvas.height);

    // remplacer plus tard le cercle par une image
    context.beginPath();
    context.arc( canvas.width / 2, canvas.height / 2, // coord x, y du centre
            canvas.width / 50, // rayon
            0, // startAngle
            2 * Math.PI); // endAngle
    context.stroke();
    
    snake.newHead(canvas.width / 2, canvas.height / 2);
    // test :
    console.log(snake);
    snake.move("up");
    console.log(snake);

}


/*
Ce dont on a besoin :
- une 'pomme' => une variable => est ce qu'on peut créer un type spécifique ?
=> coordonnée

=> stockée dans un tableau d'objets ?
*/