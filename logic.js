// Creare un blocco di immagini da 1 a 5


let imgList = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

const contCar = document.querySelector("div.cont-car");
let carContent = " ";

let active = 0;

for (let i = 0; i < imgList.length; i++) {
    
    carContent += `
    <div class="cont-img">
        <img src="${imgList[i]}">
    </div>`
}

contCar.innerHTML += carContent;
document.getElementsByClassName('cont-img')[active].classList.add('active');


const butUp = document.querySelector(".but-up");

butUp.addEventListener("click", function (){
    
    if (active == contImg.length - 1){
        active = 0;
    } else {
        active++;
    }

    document.querySelector('.cont-img.active').classList.remove("active");
    document.getElementsByClassName('cont-img')[active].classList.add("active");
})





