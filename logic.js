// Creare un blocco di immagini da 1 a 5


let imgList = new Array();

imgList[0] = new Image();
imgList[0].src = 'img/01.webp';

imgList[1] = new Image();
imgList[1].src = 'img/02.webp';

imgList[2] = new Image();
imgList[2].src = 'img/03.webp';

imgList[3] = new Image();
imgList[3].src = 'img/04.webp';

imgList[4] = new Image();
imgList[4].src = 'img/05.webp';


for (let i = 0; i < imgList.length; i++) {
    const contCar = document.querySelector("div.container-carousel");
    const div = document.createElement("div");

    div.append(imgList[i]);
    contCar.append(div);
    
    div.classList.add("cont-img");

    console.log(imgList[i]);
}


const butUp = document.querySelector(".but-up");

const contImg = document.getElementsByClassName("cont-img");
contImg[0].classList.add("active");
let activeItem = 0;

// creo azione click button
butUp.addEventListener("click", function (){
    
    // se img < numTot img allora vai avanti
    if (contImg < contImg.length - 1){
        contImg[activeItem].classList.remove("active");
        activeItem++;
        contImg[activeItem].classList.add("active");
    } 
})




