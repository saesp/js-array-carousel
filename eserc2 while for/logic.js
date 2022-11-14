// Crea un array vuoto
// chiedi all’utente numeri fino a che non abbiamo un array di 6 numeri solo dispari

const arr = [];


// for (i = 0; i < 6; i++){
//     let numUser = parseInt(prompt('digita numero'));
//     if (numUser % 2 != 0){
//         arr.push(numUser);
//     }
// }


while (arr.length < 6){
    let numUser = parseInt(prompt('digita numero'));
    if (numUser % 2 != 0){
        arr.push(numUser);
    }
}
 
console.log(arr);