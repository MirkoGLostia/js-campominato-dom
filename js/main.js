/*
Consegna

    1x) Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco

    2x) Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
    Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
    
    3) (3.1) In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso (3.2) e la partita termina.
    (1.0) Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

    4) La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

    5) Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

BONUS:

    Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà: - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe; - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe; - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
    Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle;
    Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.

*/

// variabili globali

const gameTable = document.getElementById("game-container");




// pulsante start
start.onclick = function() {
    
    // variabili

    const punteggio = [];
    
    let difficultyLvlValue = getTheDifficulty();
    
    let classNumberSquare = "square-" + difficultyLvlValue;
    
    const number = numberList(difficultyLvlValue);
    
    const bombArray = arrayOfRandomNumber (1, difficultyLvlValue);
    
    console.log(bombArray);

    





    // reset game table
    document.getElementById("game-container").innerText = "";
    




    // creation grid
    for (let i = 0; i < difficultyLvlValue; i++) {
        
        const squareContainer = createSquare ("div", classNumberSquare);
        
        const squareContent = createSquare("span", "covered");
        
        squareContent.append(number[i]);
        
        squareContainer.append(squareContent);
        
        gameTable.append(squareContainer);


        
        // interazione con i quadrati
        squareContainer.addEventListener("click", 
        
            function () {
                
                this.classList.add("focus");
                
                const thisSquare = document.querySelector("div.focus span").value = number[i];


                if (bombArray.includes(thisSquare)) {

                    this.classList.add("bk-red");

                    alert("Hai fatto: " + punteggio.length);
                    
                } else {

                    this.classList.add("bk-blue");

                    punteggio.push("I");
                    
                }

                if (punteggio.length > difficultyLvlValue - 17) {
                    
                    alert("you won");

                }
                
            }
        
        )

    }


}










// funzioni

function randomNumber (minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
}

function arrayOfRandomNumber (min, max) {

    const containerNum = [];

    while ((containerNum.length) < 16) {
        
        const nuovoNum = Math.floor(Math.random() * (max - min + 1) + min);

        if (!containerNum.includes(nuovoNum)) {

            containerNum.push(nuovoNum);
            
        }
        
    }

    return containerNum;

}

function createSquare(tagType, classToAdd) {
    
    const newSquare = document.createElement(tagType);

    newSquare.classList.add(classToAdd);

    return newSquare;

}

// numbers from 1 to tot
function numberList(tot) {

    const numberArray = [];

    for (let i = 0; i < tot; i++) {
        const number = i + 1;

        numberArray.push(number)
        
    }
    
    return numberArray;

}

// difficulty level value
function getTheDifficulty() {

    let levelValue = 0;

    const level = document.getElementById("dififculty-lvl-choices").value;

    if (level === "easy") {

        levelValue = 100;
        
    }
    else if (level === "normal") {

        levelValue = 81;
        
    }
    else if (level === "hard") {

        levelValue = 49;

    }


    return levelValue
    
}




