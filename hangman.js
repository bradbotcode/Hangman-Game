//Create an array of words
var wordBank = [
  "approach",
  "anchor",
  "belay",
  "beta",
  "bouldering",
  "carabiner",
  "chalk",
  "crack",
  "dihedral",
  "dynamic",
  "grigri",
  "harness",
  "lead",
  "mantal",
  "stemming",
  "pumped",
  "rappel",
  "buttress",
  "chimney",
  "compression",
  "static",
  "campus",
  "crimp",
  "flash",
  "redpoint",
  "dyno",
  "flapper",
  "gaston",
  "grades",
  "kipping",
  "matching",
  "overhang",
  "pinch",
  "pocket",
  "problem",
  "project",
  "sidepull"
];
//Variable to be used
var wordArray = [];
var wrongGuess = [];
var guessesLeft = 11;
var compGuess;
var correctLetter = 0;

//Choose word randomly
function startGame() {
  compGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
  //Test compGuess
  console.log(compGuess);

  for (var i = 0; i < compGuess.length; i++) {
    wordArray.push(" _ ");
    console.log(wordArray);
  }

  document.getElementById("wordArray").textContent = wordArray.join(" ");
  document.getElementById("wrongGuesses").textContent = wrongGuess;
  document.getElementById("guessesLeft").textContent = guessesLeft;
}
startGame();
//Get user's guess

document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase();

  //If userGuess is a part of the compGuess word, fill in wordArray "_"(s) accordingly and add letter to rightGuess array.

  function guessWork() {
    for (j = 0; j < compGuess.length; j++) {
      if (compGuess[j] === userGuess) {
        wordArray[j] = userGuess;
        guessesLeft--;
        correctLetter++;
        console.log(wordArray);
      }
    }
    if (wrongGuess.indexOf(userGuess) > -1) {
      alert("You already guessed this!");
    } else if (wordArray.indexOf(userGuess) < 0) {
      wrongGuess.push(userGuess);
      guessesLeft--;
    }
  }
  guessWork();

  if (correctLetter === compGuess.length) {
    alert("you win");
    location.reload();
  } else if (guessesLeft === 0) {
    alert("you lose");
    location.reload();
  }

  document.getElementById("wordArray").textContent = wordArray.join(" ");
  document.getElementById("wrongGuesses").textContent = wrongGuess.join(" , ");
  document.getElementById("guessesLeft").textContent = guessesLeft;
};
