// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const askOption = prompt('pari o dispari?');
const number = parseInt(prompt('Dammi un numero da 1 a 5'));
if (number < 6) {
    console.log(`Il numero scelto dall'utente è:`,number)
};
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
getRndInteger(1, 5)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};
console.log('Il numero random è', getRndInteger(1, 5))
// Sommiamo i due numeri
const sum = number + getRndInteger(1, 5);
console.log('La somma è', sum);
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.










