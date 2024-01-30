// elementi del DOM
let fullNameEl = document.querySelector("#passangerName");
let kmEl = document.querySelector("#kmNumber");
let ageEl = document.querySelector("#age");

const buttonEl = document.querySelector("#btn");

// flag
let error = false;

// risultato forma umana dopo inserimento dati e calcolo sconto
buttonEl.addEventListener(`click`,
    function () {

        // prezzi base
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
            }else if(ageEl.value > 65){
                discountPrice = basePrice - basePrice * 0.4;
            }
        }
        
        


        if(! error){
            document.getElementById("result").innerHTML = `
            Il prezzo del tuo biglietto è: ${discountPrice.toFixed(2)}`
        }

        // log
        console.log(discountPrice); 
    }
)


