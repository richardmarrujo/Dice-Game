var playerCount = 0;
var playerNames = [];
var started = false;

// Prompt for number of players
playerCount = parseInt(prompt("How many players? (Up to 4 players)"));

if (playerCount > 4) {
  alert("The game can only accommodate up to 4 players.");
  playerCount = 4;
}

// Prompt for player names
for (var i = 0; i < playerCount; i++) {
  playerNames.push(prompt("Enter name for Player " + (i + 1) + ":"));
}

// Function to create player dice elements
function createPlayerDice() {
  for (var i = 0; i < playerCount; i++) {
    var newDice = `
      <div class='dice'>
        <p class='player${i + 1}'>${playerNames[i].toUpperCase()}</p>
        <img class='img${i + 1}' src='images/dice6.png' alt='Dice image for Player ${i + 1}'>
      </div>
    `;
    $("br").before(newDice);
  }
}

// Call the function to create player dice elements
$(document).ready(function() {
  createPlayerDice();
});

// Function to roll dice and determine winner
function nextSequence() {
  var rolls = [];
  var randomNameIndex = Math.floor(Math.random() * playerCount);
  var randomName = playerNames[randomNameIndex];

  $("#start").text("Good Luck " + randomName + "!");

  setTimeout(function() {
    // Roll dice for each player
    for (var i = 0; i < playerCount; i++) {
      var randomNumber = Math.floor(Math.random() * 6) + 1;
      var diceImage = "images/dice" + randomNumber + ".png";
      $(".img" + (i + 1)).attr("src", diceImage);

      rolls.push({ index: i, roll: randomNumber });
    }

    // Sort rolls in descending order
    rolls.sort((a, b) => b.roll - a.roll);

    // Enlarge the dice images based on roll results
    for (var i = 0; i < rolls.length; i++) {
      var size = (100 - (i * 20)) + "%";
      $(".img" + (rolls[i].index + 1)).css("width", size);
    }

    // Check for ties and handle sudden death
    var highestRoll = rolls[0].roll;
    var winners = rolls.filter(player => player.roll === highestRoll);

    if (winners.length > 1) {
      $("#start").text("Sudden Death! Rolling again for " + winners.map(player => playerNames[player.index]).join(", ") + "...");
      setTimeout(suddenDeath, 3000, winners.map(player => player.index));
    } else {
      $("#start").text("Good Luck " + randomName + "! The winner is " + playerNames[winners[0].index] + " with a roll of " + highestRoll + "!");
    }
  }, 1000); // 1-second delay
}

// Function to handle sudden death rounds
function suddenDeath(tiedPlayers) {
  var rolls = [];

  for (var i = 0; i < tiedPlayers.length; i++) {
    var playerIndex = tiedPlayers[i];
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var diceImage = "images/dice" + randomNumber + ".png";
    $(".img" + (playerIndex + 1)).attr("src", diceImage);

    rolls.push({ index: playerIndex, roll: randomNumber });
  }

  // Sort rolls in descending order
  rolls.sort((a, b) => b.roll - a.roll);

  // Enlarge the dice images based on roll results
  for (var i = 0; i < rolls.length; i++) {
    var size = (100 - (i * 20)) + "%";
    $(".img" + (rolls[i].index + 1)).css("width", size);
  }

  // Check for further ties and handle sudden death recursively if needed
  var highestRoll = rolls[0].roll;
  var winners = rolls.filter(player => player.roll === highestRoll);

  if (winners.length > 1) {
    $("#start").text("Another tie! Rolling again for " + winners.map(player => playerNames[player.index]).join(", ") + "...");
    setTimeout(suddenDeath, 3000, winners.map(player => player.index));
  } else {
    $("#start").text("The winner is " + playerNames[winners[0].index] + " with a roll of " + highestRoll + "!");
  }
}

// Event listener to start the game on any key press
$(document).keypress(function() {
  if (!started) {
    $(".dice").fadeIn();
    $("#start").text("Good Luck!");
    nextSequence();
    started = true;
  }
});

// Event listener for the Roll The Dice button
$(".refresh").click(function() {
  nextSequence();
});
