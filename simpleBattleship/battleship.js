// JavaScript Document
// Headfirst JavaScript Ch2, page 50

// location of battleship, start with random numbers 0-4 since guesses are 3 spots in positions 0-6
// Math.floor(Math.random() * 5) equals random number (0.00 - 0.99) * 5, then takes the whole number
var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;	// player's guess
var hits = 0; 	// count of correct guesses
var guesses = 0;	// count of guesses

var isSunk = false;		// tracks if the player guesses all the locations of the ship

// while the ship is not sunk, keep playing
while (isSunk == false) {
	
	// ask user for a guess
	guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
	
	// is guess input valid?
	if (guess < 0 || guess > 6) {
		alert("Please enter a valid number from 0-6!");
	} else {
		guesses += 1;
	
		// is guess a hit?
		if (guess == location1 || guess == location2 || guess == location3) {
			hits += 1;
			alert("HIT!")
	
			// is the ship sunk?
			if (hits == 3) {
				isSunk = true;
				alert("You sank my battleship!");
			}

		} else {
			alert("Miss!")
		}
	}		
}

// create results for player
var stats = "You took " + guesses + " guesses to sink the battleship, which means your shooting accuracy was " + (3/guesses);

// show player their results
alert(stats);
