// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero


// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.



// elementi del DOM
const fullNameEl = document.querySelector("#passangerName");
const kmEl = document.querySelector("#kmNumber");
const ageEl = document.querySelector("#age");

const buttonEl = document.querySelector("#btn");









// risultato forma umana dopo inserimento dati e calcolo sconto
buttonEl.addEventListener(`click`,
    function () {

        document.querySelector("h2").innerHTML = 

        // test
        "ciao " + fullNameEl.value + `Distanza da percorre: ${kmEl.value}, Età passeggero ${ageEl.value}`;


        
        console.log(
            fullNameEl,
            kmEl,
            ageEl,
        );
    }
)


