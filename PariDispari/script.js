const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const numberUser = parseInt(document.getElementById("number-input").value);
  const evenOddUser = document
    .getElementById("even-odd-input")
    .value.toLowerCase();

  if (evenOddUser !== "pari" && evenOddUser !== "dispari") {
    alert("Attenzione! Devi inserire 'pari' o 'dispari");
  } else if (numberUser < 1 || numberUser > 5 || isNaN(numberUser)) {
    alert("Attenzione! Devi inserire un numero valido");
  } else {
    const numberPC = randomNumber(1, 5);

    const sum = numberUser + numberPC;

    document.querySelector(
      ".output"
    ).innerHTML = `Hai scelto ${evenOddUser} e hai giocato ${numberUser}. Il PC ha giocato ${numberPC}. La somma è uguale a ${sum}.`;

    document.querySelector(".output-result").innerHTML =
      evenOdd(sum) === evenOddUser
        ? "Complimenti hai vinto!"
        : "Peccato, questa volta ha vinto il PC!";
  }
});

//FUNCTIONS
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function evenOdd(number) {
  if (number % 2) {
    return "dispari";
  } else {
    return "pari";
  }
}
