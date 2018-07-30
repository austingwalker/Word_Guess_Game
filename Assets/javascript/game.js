// word bank
var wordBank = ["longhorns", "zilker", "congress", "mt bonnel"];

// scoreboard vars
var wins = 0;
var losses = 0;

// guesses vars
var guess;
var guesses = [];
var guessesLeft = 13;

// random word vars
var randomWord;
var randomWordArray = [];
var blanks = [];

// Random word generator
randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
randomWordArray = randomWord.split("");
index = randomWordArray.length;

// for loop to make a blank list
for (var i = 0; i < index; i++) {
	blanks.push(" _ ");
}

// updates stats
function updateStats() {
	document.getElementById("start").textContent = "";
	document.getElementById("wordBlanks").textContent = blanks.join(" ");
	document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
	document.getElementById("guesses").textContent = "Guesses: " + guesses.join(" ");
}

function clearStats() {
	document.getElementById("wordBlanks").textContent = "";
	document.getElementById("guessesLeft").textContent = "";
	document.getElementById("guesses").textContent = "";
}

// key press function
document.onkeyup = function(event) {
	var correct = false;
	guess = String.fromCharCode(event.keyCode).toLowerCase();
	guessesLeft--;
	updateStats();

	for (var i = 0; i < index; i++) {
		if (guess.includes(randomWordArray[i])) {
			blanks[i] = guess;
			document.getElementById("wordBlanks").textContent = blanks.join(" ");
			updateStats();
		}
	}

	if (!correct) {
			guesses.push(guess);
			updateStats();
	}

	if (blanks.toString() === randomWordArray.toString()) {
		document.getElementById("start").textContent = "You Won!";
		clearStats();
		setTimeout(location.reload.bind(location), 1000);
	}

	if (guessesLeft === 0) {
		document.getElementById("start").textContent = "You Lost...";
		clearStats();
		setTimeout(location.reload.bind(location), 1000);
    }
    

}
