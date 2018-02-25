//Array of words.
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

//Establishing variables.
var wordArray = [];
var wrongGuess = [];
var guessesLeft = 11;
var compGuess;
var correctLetter = 0;

//Computer chooses word from wordBank, randomly.
function startGame() {
  compGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(compGuess);

  //Create the necessary amount of underscores for the compGuess word.
  for (var i = 0; i < compGuess.length; i++) {
    wordArray.push(" _ ");
    console.log(wordArray);
  }

  //Print underscores and guessesLeft to screen for start of game.
  document.getElementById("wordArray").textContent = wordArray.join(" ");
  document.getElementById("guessesLeft").textContent = guessesLeft;
}

//Call startGame function.
startGame();

//Capture players's keystroke and store it as, playerGuess.
document.onkeyup = function(event) {
  var playerGuess = event.key.toLowerCase();

  //If playerGuess is a part of the compGuess word, replace underscore in wordArray accordingly.
  function guessWork() {
    for (j = 0; j < compGuess.length; j++) {
      if (compGuess[j] === playerGuess) {
        wordArray[j] = playerGuess;
        guessesLeft--;
        correctLetter++;
        console.log(wordArray);
      }
    }

    //If playerGuess is not a part of compGuess word, add it to wrongGuess array.
    //If playerGuess is already in wrongGuess array, alert player and do not deduct from guessesLeft.
    if (wrongGuess.indexOf(playerGuess) > -1) {
      alert("You already guessed this!");
    } else if (wordArray.indexOf(playerGuess) < 0) {
      wrongGuess.push(playerGuess);
      guessesLeft--;
    }
  }

  //Call guessWork function.
  guessWork();

  //If correctLetter equals the length of compGuess, alert the player that they've won and reset game.
  if (correctLetter === compGuess.length) {
    alert("you win");
    location.reload();

    //Else, if guessesLeft equals 0, alert the player that they've lost and reset game.
  } else if (guessesLeft === 0) {
    alert("you lose");
    location.reload();
  }

  //Print necessary variables to screen as game occurs.
  document.getElementById("wordArray").textContent = wordArray.join(" ");
  document.getElementById("wrongGuesses").textContent = wrongGuess.join(" , ");
  document.getElementById("guessesLeft").textContent = guessesLeft;
};
