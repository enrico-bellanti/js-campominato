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
var tentativi = 10;
var posizioneMine = [];
var posizioneUtente = [];


// creo un ciclo che mi genera 16 numeri
for (var i = 0; i < mine; i++) {
  // while (isDuplicated == true) {
  //  var numeroCpu = Math.floor(Math.random() * 10) + 1;
  //  isDuplicated = checkDuplicate(posizioneMine, numeroCpu);
  // }
  do {
   var numeroCpu = Math.floor(Math.random() * 10) + 1;
 } while (checkDuplicate(posizioneMine, numeroCpu));
  posizioneMine[i] = numeroCpu;
}
console.log(posizioneMine);



// funzione che dato array e numero mi controlla se e' stato gia' inserito
function checkDuplicate(listaNumeri, numeroInserito) {
  for (var i = 0; i < listaNumeri.length; i++) {
    if (listaNumeri[i] == numeroInserito){
      var posizioneDuplicata = true;
    }
  }
  return posizioneDuplicata;
}

// creo ciclo per (100-16) volte e chiedo all'utente di inserire un numeroCpu
for (var i = 0; i < (100 - 95); i++) {
  var isDuplicated = true;
  while (isDuplicated == true) {
    numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
    isDuplicated = checkDuplicate(posizioneUtente, numeroUtente);
  }
  posizioneUtente[i] = numeroUtente;
}
console.log(posizioneUtente);
