// elementi del DOM
let fullNameEl = document.querySelector("#passangerName");
let kmEl = document.querySelector("#kmNumber");
let ageEl = document.querySelector("#age");

const buttonEl = document.querySelector("#btn");

// flag per rilevare errore 
let error = false;

// inserimento funzione dopo click
buttonEl.addEventListener(`click`,
    function () {

        // prezzi 
        let basePrice = Number(kmEl.value) * 0.21;
        let discountPrice = basePrice;


        // verifica eta
        if(ageEl.value > 130){
            alert("L'età inserita non è corretta, riprovare.")
            error = true
        }


        // sconti applicati
        if (error == false){
            if(ageEl.value < 18){
                discountPrice = basePrice - basePrice * 0.2;          
                // tariffe
                document.getElementById("offers").innerHTML = "Biglietto ridotto"
            }else if(ageEl.value > 65){
                discountPrice = basePrice - basePrice * 0.4;
                // tariffe
                document.getElementById("offers").innerHTML = "Biglietto over 65"
            }else {
                // tariffe
                document.getElementById("offers").innerHTML = "Biglietto Standard"
            }
        }
        
        

        // risultato in pagina
        if(! error){
            // nome passeggero 
            document.getElementById("fullName").innerHTML = fullNameEl.value;

            // carrozza assegnata
            const trainCarriage = Math.floor( Math.random() * 10 + 1);
            document.getElementById("train-carriage").innerHTML = trainCarriage;

            // codice biglietto
            const ticketCode = Math.floor( Math.random() * 99999 + 1);
            document.getElementById("code").innerHTML = ticketCode;

            // prezzo finale 
            document.getElementById("cost").innerHTML = discountPrice.toFixed(2) + " €";
        }

        // log
        // console.log(discountPrice); 
    }
)


