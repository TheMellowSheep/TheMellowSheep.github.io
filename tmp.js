
// Fichier temporaire pour stocker ce qui pourrait servir 

/*
TODO :    
    - la méthode tail dans la classe canvas est en réalité la tête du serpent
    - réadapter le module canvas
    - implémenter une sorte d'interface ?
        => pour les différents affichage

    - créer module conversion
        => pour canvas <-> coord

    - créer module image
        => on remplace les formes par des images

    - changer la gestion de déplacement => pour que la souris puisse être prise en compte

    - Créer le 2e jeu

    - vérifier si tout est compatible avec le téléphone
*/

    // Note le point x, y est en haut à gauche de la fenetre
    // x : axe horizontal ( = ligne )
    // y : axe vertical (= colonne )

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
        
            coord_to_case(x, y){
        
            }
        
            case_to_coord(){
                // 1 case = 150 x 150 ?
            }
        }
        