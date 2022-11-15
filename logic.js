// Creare un blocco di immagini da 1 a 5


let imgList = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

// contenitore carousel
const contCar = document.querySelector("div.cont-car");

// contenuto contenitore carousel
let carContent = " ";

for (let i = 0; i < imgList.length; i++) {
    
    carContent += `
    <div class="cont-img">
        <img src="${imgList[i]}">
    </div>`
}

contCar.innerHTML += carContent;
let active = 0;
document.getElementsByClassName('cont-img')[active].classList.add('active');


//div contenitori img
const contImg = document.getElementsByClassName('cont-img');

const butUp = document.querySelector(".but-up");

butUp.addEventListener("click", function(){
    
    if (active < imgList.length -1){
        contImg[active].classList.remove("active");
        active++;
        contImg[active].classList.add("active");
    }
})

const butDown = document.querySelector(".but-down");

butDown.addEventListener("click", function(){
    
    if (active < imgList.length && active !== 0){
        contImg[active].classList.remove("active");
        active--;
        contImg[active].classList.add("active");
    }
})





