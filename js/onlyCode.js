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

var mine = 6;
var range = 10;
var chance = range - mine;
var listMine = [];
var listUser = [];
// Creo una funzione che controlla un dato se e' presente in un array
function checkInArray(numList, numInserted) {
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

// genero 16 numeri casuali all'interno di un raggiunge
// controllo che non ci siano numeri uguali

while (listMine.length < mine) {
  var numCpu = Math.floor(Math.random() * range) + 1;

  if (!checkInArray(listMine, numCpu)) {
    listMine.push(numCpu);
  }
}

console.log("lista mine " + listMine);

// chiedo all'utente di inserire un numero all'interno del range - mine
// controllo che il numero non sia gia' inserito
var isMine = false;
while (listUser.length < chance && isMine == false) {
  var numUser = prompt("Inserisci un numero da 1 a " + range);

// controlli
  console.log(numUser);
  console.log("E' gia stato inserito? " + checkInArray(listUser, numUser));
  console.log("E' una mina? " + checkInArray(listMine, numUser))
  if (isNaN(numUser) || numUser < 1 || numUser > range) {
    alert("attenzione inserisci un numero da 1 a " + range);
  }else if (checkInArray(listUser, numUser) == false) {

    if (checkInArray(listMine, numUser) == false) {
      listUser.push(numUser);
    } else {
      isMine = true;
    }

  } else {
    alert("numero gia' inserito");
  }
  // controllo lista utente
  console.log("lista numeri utente: " + listUser);
}

// condizione che conferma se e' una bomba o vittoria del giocatore
if (isMine) {
  alert("Mi dispiace hai perso hai beccato la Bomba!");
} else {
  alert("Complimenti hai completato il gioco");
}
