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
var mine = 6;
var attempts = 100;
var minePosition = [];
var userPosition = [];

// funzione che dato array e numero mi controlla se e' stato gia' inserito
function isDuplicate(numList, numInserted) {
  for (var i = 0; i < numList.length; i++) {
    if (numList[i] == numInserted){
      var positionOn = true;
    }
  }
  return positionOn;
}


// creo un ciclo che mi genera 16 numeri
for (var i = 0; i < mine; i++) {
  do {
   var numCpu = Math.floor(Math.random() * attempts) + 1;
 } while (isDuplicate(minePosition, numCpu));
  minePosition[i] = numCpu;
}
console.log(minePosition);


// chiedo all'utente di inseerire tot numeri
var i = 0;
var isMine = false;
while (i < (attempts - mine) && isMine == false) {
  var numUser = parseInt(prompt("inserisci un numero"));

   var isDuplicated = isDuplicate(userPosition, numUser);
  console.log(isDuplicated);
  while (isDuplicated == true) {
    numUser = parseInt(prompt("sbagliato reinserisci un numero"));
    isDuplicated = isDuplicate(userPosition, numUser);
  }


  isMine = isDuplicate(minePosition, numUser);
  if (isMine) {
    alert("mi spiace e' esplosa la mina!");
  }else {
    userPosition[i] = numUser;

    if (i == (attempts - mine) - 1){
      alert("complimenti hai vinto! Sei arrivato al " + i + " livello");
      alert("Hai vinto con i seguenti numeri " + userPosition)
      isMine = true;
    }

  }
  console.log(userPosition);
  console.log(i);
  i++;
  console.log(i);
}
