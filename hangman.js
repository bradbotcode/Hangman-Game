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
var rightGuess = [];
var wrongGuess = [];
var lettersInWord = [];
var numOfLetters = 0;
//Choose word randomly
var compGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
//Test compGuess
console.log(compGuess);

//Modify number of underscores based on length of word
for (var i = 0; i < compGuess.length; i++) {
  wordArray[i] = " _ ";
}
//Test wordArray
console.log(wordArray);

//Get user's guessr
document.onkeyup = function(event) {
  var userGuess = event.key.toLowerCase();

  //If userGuess is a part of the compGuess word, fill in wordArray "_"(s) accordingly and add letter to rightGuess array.
  for (j = 0; j < compGuess.length; j++) {
    if (compGuess[j] === userGuess) {
      wordArray[j] = userGuess;
      rightGuess.push(userGuess);
      console.log(wordArray, rightGuess);
    }
  }

  var html = "<div>" + wordArray + "</div>";

  document.getElementById("underscore").innerHTML = html;
};
