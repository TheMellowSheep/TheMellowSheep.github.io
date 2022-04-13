
// Fichier temporaire pour stocker ce qui pourrait servir 

/*
TODO :
    - Réadapter l'affichage ( = Display )
    - Réimplémenter le jeu Snake

    - Créer le 2e jeu

  - changer la gestion de déplacement => pour que la souris puisse être prise en compte
*/

    // Note le point x, y est en haut à gauche de la fenetre
    // x : axe horizontal ( = ligne )
    // y : axe vertical (= colonne )

function display(canvasId){
    // console.log(this.board);
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext("2d");
    context.strokeRect( 0, 0, canvas.width, canvas.height);
}

// test :
//let board = new Board(15, 20);
// board.display();

const initBoard = function(canvasId) {
    const canvas = document.getElementById(canvasId);
    board = new Board(canvas.height, canvas.width);
    board.display();
    snake.newHead(canvas.width / 2, canvas.height / 2);
    snake.display(canvasId);
}

/*
clear();
            displaySnake();
            if(apple != null){
                eatApple();
                displayApple();
            }else{
                addApple();
            }
    
        }else{
            displayDead();
            clearInterval(timer);
            // TODO : faire apparaitre un bouton replay ?
        }
        */

        // quand snake a mangé une pomme
        clearInterval(timer);
        timer = null;
        timer = window.setInterval(move, speed);