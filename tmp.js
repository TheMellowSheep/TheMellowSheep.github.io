
// Fichier temporaire pour stocker ce qui pourrait servir 

/*
TODO :
    - Réimplémenter le jeu Snake
    - rendre les champs des classes privées ( et adapter en conséquence )
    
    - réadapter le module canvas
    - implémenter une sorte d'interface
        => pour les différents affichage

    - créer module conversion
        => pour canvas <-> coord

    - changer la gestion de déplacement => pour que la souris puisse être prise en compte

    - vérifier si c'est compatible avec le téléphone

    - Créer le 2e jeu
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
        }
        