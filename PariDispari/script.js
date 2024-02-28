const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const numberUser = parseInt(document.getElementById("number-input").value);
  const evenOddUser = document.getElementById("even-odd-input").value;
  const numberPC = randomNumber(1, 5);

  const sum = numberUser + numberPC;

  document.querySelector(".output").innerHTML = `Hai scelto ${evenOddUser} e hai giocato ${numberUser}. Il PC ha giocato ${numberPC}. La somma è pari a ${sum}.`

  document.querySelector(".output-result").innerHTML =
    evenOdd(sum) === evenOddUser
      ? "Complimenti hai vinto!"
      : "Peccato, questa volta ha vinto il PC!";
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
