
// Fichier temporaire pour stocker ce qui pourrait servir 
/*
TODO :
- Implémenter la classe board
- Readapter les différents modules

- Modifier addApple -> les coordonnées des bords ... 
    des pommes apparaissent là où le serpent ne peut pas les atteindre
    => créer la classe Board

*/

/*
TODO :
  - changer la gestion de déplacement => pour que la souris puisse être prise en compte
*/

    // Note le point x, y est en haut à gauche de la fenetre
    // x : axe horizontal ( = ligne )
    // y : axe vertical (= colonne )
//
let board = null;
let snake = new Snake();

class Board{

    display(canvasId){
        // console.log(this.board);
        const canvas = document.getElementById(canvasId);
        const context = canvas.getContext("2d");
        context.strokeRect( 0, 0, canvas.width, canvas.height);

        for (let i = 0; i < maxLine; i++){
            // let line = '';
            for (let j = 0; j < maxColumn; j++){
                context.beginPath();
                context.moveTo(0, this.column * j);
                context.lineTo(canvas.height, this.column * j);
                context.stroke();
               /* switch(this.board[i][j]){
                    case apple :
                        line += 'ù ';
                        break;
                    case player :
                        line += 'o ';
                        break;
                    default : // case 0 = road
                        line += '. ';
                }*/
            }
            console.log(line);
        }
    }

    addApple(){
        this.board[getRandomInt(this.line)][getRandomInt(this.column)] = apple;
    }
    
}

// test :
//let board = new Board(15, 20);
// board.display();

// Objets 

const initBoard = function(canvasId) {
    const canvas = document.getElementById(canvasId);
    board = new Board(canvas.height, canvas.width);
    board.display();
    snake.newHead(canvas.width / 2, canvas.height / 2);
    snake.display(canvasId);
}