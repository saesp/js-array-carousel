// Creare un blocco di immagini da 1 a 5

// crare tag img nel contenitore 

// creare click avanti e indietro per cambiare le immagini

// rendere invisibili le img precedenti e successive a quella selezionata

const contImg = document.getElementsByClassName("cont-img");

const butUp = document.querySelector(".but-up");

for (let i = 0; i < contImg.length; i++) {
    butUp.addEventListener("click", function (){

        // se img < numTot img allora vai avanti
        if (contImg[i] < contImg.length){
            contImg[i].classList.remove("img-vis");
            i++;
            contImg[i].classList.add("img-vis");
        }
    })
}



