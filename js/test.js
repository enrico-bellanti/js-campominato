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
    var numRange = 100;
    var verificaLvl = true;
  }else if (levelDifficulty == 1){
    var numRange = 80;
    var verificaLvl = true;
  }else if (levelDifficulty == 2){
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
    listBox[i].addEventListener("click", function () {
      // recupero il valore cliccato
      numUtente = this.getAttribute("value");

      // se il valore e' diverso da 0 allora non e' stato cliccato
      if (numUtente != 0) {
        // verifico che non e' una mina
        if (isDuplicate(minePosition, numUtente)) {
          // alert("MINA!\N HAI PERSO!")
          document.getElementById("lose").classList.add("display_on");
        }else {
          // aggiungo il numero alla lista
          userPosition.push(numUtente);
          if (userPosition.length == (numRange - mine)) {
            document.getElementById("win").classList.add("display_on");
          }
          // setto il value di <li> a 0
          this.value = 0;
          this.classList.add("green");
          alert("Livello: " + userPosition.length + "\nCompletato")
        }
      }

    });

    // controllo se il numero dei box inseriti e' uguale a (numRange - mine)
    // se si dichiaro vittoria

  }
