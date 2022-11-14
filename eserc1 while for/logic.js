// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
// Da eseguire con for e while


const list = ['nome1', 'nome2', 'nome3'];
console.log(list);

let nameUser = prompt('Inserisci tuo nome');

let trovato = false;

// for (i = 0; i < list.length; i++){
//     if (nameUser === list[i]){
//         trovato = true;
//     }
// }

// if (trovato === true){
//     console.log('Sei invitato');   
// } else {
//     console.log('Non sei invitato');
// }


i = 0;
while (i < list.length){
    if (nameUser === list[i]){
        trovato = true;
    }

    i++;
}

if (trovato === true){
    console.log('Sei invitato');   
} else {
    console.log('Non sei invitato');
}