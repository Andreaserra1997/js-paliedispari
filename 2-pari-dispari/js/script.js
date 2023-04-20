// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const askOption = prompt('pari o dispari?');

switch (askOption) {
    case 'pari': console.log('Hai scelto pari');
    break;
    case 'dispari': console.log('Hai scelto dispari');
    break;
    default: console.log('Sei tonto!')
}

const number = parseInt(prompt('Dammi un numero da 1 a 5'));
if (number < 6) {
    console.log(`Il numero scelto dall'utente è:`,number)
};
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const randomNumber = getRndInteger(1, 5);
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};
console.log('Il numero random è', randomNumber);
// Sommiamo i due numeri
const sum = number + randomNumber;
console.log('La somma è', sum);
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
const stateSum = sumNumber (sum);
function sumNumber (somma) {
    if (somma % 2 === 0) {
        console.log('La somma è pari')
    } else if (somma % 2 === 1) {
        console.log('La somma è dispari')
    };
}
// Dichiariamo chi ha vinto.
if (stateSum % 2 == 0 && askOption == 'pari') {
    console.log('Hai vinto')
} else {
    console.log('Hai perso')
};