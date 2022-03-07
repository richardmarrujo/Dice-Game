
var playerCount = 0
var playerName = []
var started = false
var randomName = []

// Prompt for how many players

playerCount = prompt("How many players")

// Prompt for name

for (var i = 0; i < playerCount; i++) {
  playerName.push(prompt("Player name?"));
}

// Replace placeholder for name

$("#player1").text(playerName[0]);
$("#player2").text(playerName[1]);
$("#player3").text(playerName[2]);
$("#player4").text(playerName[3]);

// started???
$(document).keypress(function() {
  if (!started) {
    $("#start").text("Good Luck");
    nextSequence();
    started = true;
  }
});

// Make it add dice depending on playerCount

// for (var i = 0; i < playerCount; i++) {
//   playerCount[i]
// }

function nextSequence() {

  var randomNumber = Math.floor(Math.random()*4);
  var randomName = playerName[randomNumber];
  console.log(randomName);

  $("#start").text("Good Luck " + randomName +"!");

  // First Dice Changer

  var randomNumber1 = Math.floor(Math.random() *6) +1;

  var randomDiceImage = "images/dice" +randomNumber1 + ".png";

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomDiceImage);

  // Second Dice Changer

  var randomNumber2 = Math.floor(Math.random() *6) +1;

  var randomDiceImage = "images/dice" +randomNumber2 + ".png";

  var image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomDiceImage);

  // Third Dice Changer
  var randomNumber3 = Math.floor(Math.random() *6) +1;

  var randomDiceImage = "images/dice" +randomNumber3 + ".png";

  var image3 = document.querySelectorAll("img")[2];

  image3.setAttribute("src", randomDiceImage);

  // Fourth Dice Changer
  var randomNumber4 = Math.floor(Math.random() *6) +1;

  var randomDiceImage = "images/dice" +randomNumber4 + ".png";

  var image4 = document.querySelectorAll("img")[3];

  image4.setAttribute("src", randomDiceImage);


  // Calculations
  setTimeout(function () {
    if (randomNumber1 > randomNumber2 && randomNumber3 && randomNumber4){
      $("#start").text(playerName[0] + " Wins! " + " Sorry " + randomName + " 😂 ")
    }
    if (randomNumber2 > randomNumber1 && randomNumber3 && randomNumber4) {
      $("#start").text(playerName[1] + " Wins! " + " Sorry " + randomName + " 😂 " )
    }
    if (randomNumber3 > randomNumber1 && randomNumber2 && randomNumber4) {
      $("#start").text(playerName[2] + " Wins! " + " Sorry " + randomName + " 😂 " )
    }
    if (randomNumber4 > randomNumber1 && randomNumber2 && randomNumber3) {
      $("#start").text(playerName[3] + " Wins! " + " Sorry " + randomName + " 😂  ")
    }
    if (randomNumber1 === randomNumber2 && randomNumber2 === randomNumber3 && randomNumber1 === randomNumber1 && randomNumber4 === randomNumber4) {
      document.querySelector("#start").innerHTML = "Draw!"
    }
  }, 1000);



};
