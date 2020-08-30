// dichiaro variabili
// numero di mine
var mine = 16;
// range di numeri
var numRange = 100;
// lista con la posizione delle mine
var minePosition = [];
// lista dei numeri inseriti
var userPosition = [];

// inserisco funzioni che riutilizzo nel codice
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

// funzione per disegnare il campo Minato -
// fai in modo di inserire il valore i all'interno di ogni <li>
function drawMineset(numRange) {
  if (numRange == 80) {
    document.getElementById("game_area").classList.add("80_box");
  } else if (numRange == 50) {
    document.getElementById("game_area").classList.add("50_box");
  }

  for (var i = 0; i < numRange; i++) {
    var box = document.getElementById("game_area").innerHTML;
    box = box +  "<li class = 'box' value='" + (i+1) + "'>"+ (i+1) +"</li>";
    document.getElementById("game_area").innerHTML = box;
  }
}





// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// chiedo all'utente il livello di difficolta'
var levelDifficulty = 0;
var verificaLvl = false;
while (verificaLvl == false) {
  levelDifficulty = parseInt(prompt("Inserisci livello di difficola\n 0 => tra 1 e 100\n 1 =>  tra 1 e 80\n 2 => tra 1 e 50"));
  if (levelDifficulty == 0) {
    var mine = 16;
    var numRange = 100;
    var verificaLvl = true;
  }else if (levelDifficulty == 1){
    var mine = 4;
    var numRange = 10;
    var verificaLvl = true;
  }else if (levelDifficulty == 2){
    var mine = 16;
    var numRange = 50;
    var verificaLvl = true;
  }else {
    alert("prego reinserire il livello corretto");
    verificaLvl = false;
  }
  console.log("Livello selezionato " + levelDifficulty);

}

// disegno il campo Minato
drawMineset(numRange);


// creo un ciclo che mi genera 16 numeri
for (var i = 0; i < mine; i++) {
  do {
   var numCpu = Math.floor(Math.random() * numRange) + 1;
 } while (isDuplicate(minePosition, numCpu));

  minePosition[i] = numCpu;
}

console.log("numeri posizione mine " + minePosition);
console.log("numeri da 1 a " + numRange);
console.log("Tot livelli: " + (numRange - mine));




// attivo i box pronti per essere innescti al click
  var listBox = document.getElementsByClassName("box");

  for (var i = 0; i < listBox.length; i++) {
    listBox[i].addEventListener("click", function(){
      // creo un ciclo per controllare se il numero era stato gia' stato inserito
      // se il valore cliccato non e' stato gia' cliccato allora assegno la variabile
      // numUtente altrimenti ....

      var numCheck = this.getAttribute("value");
      var click = true;
      var isValidNum = false;
      while (click == true) {

        if (numCheck != 0) {
          var numUtente = this.getAttribute("value");
        }else if (numCheck == 0) {
          alert("valore gia' inserito"); //vorrei che qui non succedesse nulla
        }

        // controllo che il numero inserito non sia una mina
        while (isValidNum) {
          if (isDuplicate(minePosition, numUtente)) {
            alert("MINA! HAI PERSO.")
          } else {
            var i = userPosition.length;
            userPosition[i] = numUtente;
            i++;
            console.log(userPosition);
            alert("Livello " + (i) + " Completato")
            this.value = 0;
            console.log("il valore adesso e' diventato: " + this.getAttribute("value"));
            isValidNum = false;

          }
        }
      }

    });
  }
