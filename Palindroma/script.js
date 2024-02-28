const inputWord = document.getElementById("word");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  document.querySelector(".output").innerHTML = checkPalindrome(inputWord.value)
    ? "La parola è palindroma"
    : "La parola non è palindroma";
});

//FUNCTION
function checkPalindrome(wordString) {
  for (let i = 0; i < wordString.length / 2; i++) {
    if (wordString[i] !== wordString[wordString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
