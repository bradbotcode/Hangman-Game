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
//Choose word randomly
var underScore = [];
var rightGuess = [];
var wrongGuess = [];
var lettersInWord = [];
var numOfLetters = 0;
var rightGuessCount = 0;
var wrongGuessCount = 0;

var compGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(compGuess);

lettersInWord = compGuess.split("");

numOfLetters = lettersInWord.length;

console.log(numOfLetters);

//Modify number of underscores based on length of word
var underScore = [];
function generateUnderscore() {
  for (var i = 0; i < compGuess.length; i++) {
    underScore[i] = "_";
  }
  return underScore;
}
console.log(generateUnderscore());

//Get user's guess
document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase();
  //If userGuess is a part of the word from compGuess, put it in rightGuess array

  for (j = 0; j < compGuess.length; j++) {
    if (compGuess[j] === userGuess) {
      underScore[j] = userGuess;
      rightGuess.push(userGuess);
      console.log(underScore, rightGuess);
      //Else, put it in wrongGuess array
    } else {
      wrongGuess.push(userGuess);
      console.log(wrongGuess);
    }
  }
  //Replace underScore with userGuess, according to index of rightGuess, corresponding with compGuess
};
