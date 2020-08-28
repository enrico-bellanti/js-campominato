// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
//

// dichiaro variabili
// numero di mine
var mine = 16;
// range di numeri
var numRange = 100;
// lista con la posizione delle mine
var minePosition = [];
// lista dei numeri inseriti
var userPosition = [];
// vincitori ottimisti
var vinto = true;

// funzione che controlla un valore con gli elementi di un array
function isDuplicate(numList, numInserted) {
  var i = 0;
  var duplicateOn = false;
  while (i < numList.length && duplicateOn == false) {
    if (numList[i] == numInserted) {
      duplicateOn = true;
    }
    i++
  }
  return duplicateOn;
}


// creo un ciclo che mi genera 16 numeri
for (var i = 0; i < mine; i++) {
  do {
   var numCpu = Math.floor(Math.random() * numRange) + 1;
 } while (isDuplicate(minePosition, numCpu));

  minePosition[i] = numCpu;
}
console.log("numeri posizione mine " + minePosition);


// chiedo all'utente un numero da 1 a 100
// controllo che sia da 0 a 100 e che non sia gia' stato scritto nell'array

console.log("numeri da 1 a " + numRange);
console.log("Tot livelli: " + (numRange - mine));

// inserisco un ciclo while per richiederlo fino a numRange (100-16)
var i = 0;
var finito = false;
while (i < (numRange - mine) && finito == false) {
  console.log("livello: " + (i+1));

  // controllo che il numero non sia gia' stato inserito o che non e' all'interno nel numRange
  var numValidate = false;
  do {
    var numUtente = parseInt(prompt("inserisci un numero da 1 a " + numRange));
    if (isDuplicate(userPosition, numUtente) == true) {
      alert("Attenzione il numero e' gia' stato inserito");
      numValidate = false;
    }else if (numUtente > numRange) {
      alert("Attenzione il numero inserito non e' nel range indicato");
      numValidate = false;
    }else {
      numValidate = true;
    }
  } while (numValidate == false);

  // se il numero e' stato validato allora controllo se e' uguale alla posizione delle mine
  console.log("numero inserito: " + numUtente)
  var isMine = isDuplicate(minePosition, numUtente);
  console.log("era una mina? " + isMine);
  // se isMine e' true finira' il ciclo while e la variabile vinto cambiata in false (hai perso)
  if (isMine) {
    finito = true;
    vinto = false;
  // altrimenti aggiungera' la posizione all'interno dell'array userPosition e poi incrementerà di 1 la var i
  } else {
    userPosition[i] = numUtente;
    console.log(userPosition);
    i++
  }

}


if (vinto == true) {
  alert("hai vinto!");
} else {
  alert("mi dispiace e' esplosa la mina! Hai perso.")
}
