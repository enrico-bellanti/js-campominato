for (var i = 0; i < listBox.length; i++) {
  listBox[i].addEventListener("click", function () {
    // recupero il valore cliccato
    numUtente = this.getAttribute("value");

    // se il valore e' diverso da 0 allora non e' stato cliccato
    if (numUtente != 0) {
      // verifico che non e' una mina
      if (isDuplicated(minePosition, numUtente)) {
        alert("MINA!\N HAI PERSO!")
      }else {
        // aggiungo il numero alla lista
        userPosition.push(numUtente);
        // setto il value di <li> a 0
        this.value = 0;
        alert("Livello: " + userPosition.lenght + "\nCompletato")
      }
    }

  });
}
