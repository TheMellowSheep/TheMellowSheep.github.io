
// Fichier temporaire pour stocker ce qui pourrait servir 

/*
TODO :
    - Réimplémenter le jeu Snake
        - gestion des touches de déplacement
        - affichage ascii
    - supprimer Coord
    - créer le module affichage sur un canvas

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
        
        
                        /*
                        context.beginPath();
                        context.moveTo(0, this.column * j);
                        context.lineTo(canvas.height, this.column * j);
                        context.stroke();
                        */
                       
                    
                    console.log(line);
                }
            }
        