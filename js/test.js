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
function checkInArray(array, element) {
  if (array.indexOf(element) == -1) {
    return true;
  }
  return false;
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
while (listUser.length < 4 && isMine == false) {
  var numUser = prompt("Inserisci un numero da 1 a " + range);

// controlli
  console.log("E' gia stato inserito? " + !checkInArray(listMine, numUser));
  console.log(numUser);
  console.log("E' una mina?" + checkInArray(listMine, numUser))

  if (!checkInArray(listUser, numUser)) {
    if (checkInArray(listMine, numUser)) {
      alert("bomba");
      isMine = true;
    } else {
      listUser.push(numUser);
    }

  } else {
    alert("numero gia' inserito");
  }
  // controllo lista utente
  console.log("lista numeri utente: " + listUser);
}
