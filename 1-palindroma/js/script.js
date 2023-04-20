/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

const word = prompt("Inserisci una parola palindroma:");

function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
};

if (isPalindrome(word)) {
  console.log(`${word} è una parola palindroma`);
} else {
  console.log(`${word} non è una parola palindroma`);
};