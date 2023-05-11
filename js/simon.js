/*
Visualizzare in pagina 5 numeri casuali.



Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



*/


// selezionare l'id presente nel dom

const numMemoria = document.getElementById("memory");


// Visualizzare in pagina 5 numeri casuali
        // i numeri devono essere 5, da 1 a 100.
    

    const numGenerati = createNumRandomOrd(5, 1, 100);

     numMemoria.innerHTML = numGenerati;




// Da lì parte un timer di 30 secondi.
const timer = document.getElementById("timer");
let seconds = 30;




let clock = setInterval( 
    function () {

        timer.innerHTML = "Timer=" + " " + seconds;
        if(seconds === 0){
            numMemoria.innerHTML = "";

            
            clearInterval(clock);

            for (let i = 0; i < 5; i++){
                const memoriaNumeri = parseInt(prompt("Inserisci i numeri che hai appena visti, uno alla volta"));
            }

           
        }else {
            seconds--;
            console.log(seconds);
        }

    },
    1000 
)





// Dopo 30 secondi i numeri scompaiono

        // l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().




       





























// funzioni
// funzione x creare numeri random
function createRandomNum(numMin, numMax) {
    return Math.floor(Math.random() * (numMax - numMin + 1) ) + numMin;
  }



//   funzione per creare numeri random da in un range
function createNumRandomOrd(numMax, min, max){

    let numArray = [];

    while (numArray.length < numMax) {
        const nuovoNumRand = createRandomNum(min, max);
       
        if (!numArray.includes(nuovoNumRand)) {

            numArray.push(nuovoNumRand);
        }

    }
   
    return numArray;
}