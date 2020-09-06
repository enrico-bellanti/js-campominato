$( document ).ready(function() {

  // FUNZIONI--------------------------------

  // funzione che controlla un valore con gli elementi di un array
  function isInArray(myArray, myValue) {
    if (myArray.indexOf(myValue) > -1) {
      return true;
    } else {
      return false;
    }
  }

  // funzione per disegnare il campo Minato
  // fai in modo di inserire il valore crescente di "i" all'interno di ogni <li>
  function drawMineset(level) {
    // setta la grandezza della game_area
    $('#game_area').width(level*40);
    // creo un ciclo lungo quanto numbRange chee inserisce il valore crescente di "i" all'interno di ogni <li>
    // ogni li contiene anche il data-slide con valore i
    totSquare = Math.pow(level, 2)
    for (var i = 1; i <= totSquare; i++) {
      $('#game_area').append("<li class = 'box' data-slide = '" + (i) + "'>"+ (i) +"</li>");
    }
  }

  // funzione per chiedere il livello all'utente e impostare il valore
  function setLevel() {
    var level = parseInt(prompt("Inserisci il livello desiderato\n(considera che maggiore e' il livello piu' grande sara' il campo minato)"));
    return level;
  }

  // FINE FUNZIONI-------------------------

  // dichiaro variabili
  // numero di mine
  var mine = 3;
  // numero box
  var totBox;
  // Livello
  var levelField = 0;
  // lista con la posizione delle mine
  var mineList = [];
  // lista dei numeri inseriti
  var userList = [];

  // richede livello
  levelField = setLevel();
  // ottengo la quantita' di box e la salvo in una variabile
  totBox = Math.pow(levelField, 2);
  // disegna il campo minato
  drawMineset(levelField);
  // creo un ciclo che mi genera 16 numeri
  for (var i = 0; i < mine; i++) {
    do {
     var numbMine = Math.floor(Math.random() * totBox) + 1;
   } while (isInArray(mineList, numbMine));
   mineList.push(numbMine)
  }
  console.log(mineList);

  // seleziono tutti i box e faccio in modo che se cliccati restituiscano il loro valore data-slide
  $('.box').click(function() {
    var numbUser = parseInt($(this).attr('data-slide'));

    // se il valore e' diverso da 0 allora non e' stato cliccato
    if (numbUser != 0) {
      // verifico che non e' una mina
      if (isInArray(mineList, numbUser)) {
        $("#lose").addClass("display_on");
      // altrimenti inserisco il valore nella lista dell'utente
      } else {
        userList.push(numbUser);
        // verifico se l'utente ha vinto il gioco
        if (userList.length == (totBox - mine)) {
          $("#win").addClass("display_on");
          // altrimenyti setto il valore data-slide a 0 e comunico all'utente a che livello si trova
        } else {
          $(this).attr("data-slide",0)
          $(this).addClass("green");
          alert("Livello: " + userList.length + "\nCompletato")
        }
      }
    }

  });

// end document
});
