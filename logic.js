// Creare un blocco di immagini da 1 a 5

// crare tag img nel contenitore 

// creare click avanti e indietro per cambiare le immagini

// rendere invisibili le img precedenti e successive a quella selezionata


const img1 = `<div class="cont-img><img class="cont-img src="img/01.webp"></div>`;
const img2 = `<div class="cont-img><img class="cont-img src="img/02.webp"></div>`;
const img3 = `<div class="cont-img><img class="cont-img src="img/03.webp"></div>`;
const img4 = `<div class="cont-img><img class="cont-img src="img/04.webp"></div>`;
const img5 = `<div class="cont-img><img class="cont-img src="img/05.webp"></div>`;

const contCar = document.getElementsByClassName("container-carousel");

const contImg = document.getElementsByClassName("cont-img");

contCar.innerHTML += img1 + img2 + img3 + img4 + img5;

const imgList = [img1, img2, img3, img4, img5];

const butUp = document.querySelector(".but-up");

for (let i = 0; i < imgList.length; i++) {
    butUp.addEventListener("click", function (){

        // se img < numTot img allora vai avanti
        if (imgList[i] < imgList.length){
            contImg[i].classList.remove("img-vis");
            i++;
            contImg[i].classList.add("img-vis");
        }
    })
}



