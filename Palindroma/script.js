const inputWord = document.getElementById("word");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  document.querySelector(".output").innerHTML = checkPalindrome(inputWord.value)
    ? "La parola è palindroma"
    : "La parola non è palindroma";
});

//FUNCTION
function checkPalindrome(wordString) {
  const wordArray = wordString.split("");
  console.log(wordArray);
  console.log(wordArray.length);

  for (let i = 0; i < wordArray.length / 2; i++) {
    let isPalindrome;

    if (wordArray[i] !== wordArray[wordArray.length - 1 - i]) {
      return (isPalindrome = false);
    }
  }
  return (isPalindrome = true);
}
