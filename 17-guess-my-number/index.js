let userInput = document.getElementById("numberInput");
let check = document.getElementById("checkButton");
let again = document.getElementById("againButton");

let secretNumber = document.getElementById("numberToGuess");

let messageToUser = document.getElementById("message");
let score = document.getElementById("score");
let highscore = document.getElementById("highscore");

//let confetti = document.getElementById("confetti");

let randomNumber = Math.floor(Math.random() * 21);

score.innerHTML = 20;
highscore.innerHTML = 0;

function showMessage(gameStatus) {
  if (gameStatus == "win") {
    return "You won!";
  } else if (gameStatus == "loose") {
    return "You lost!";
  } else if (gameStatus == "error") {
    return "Error, the number must be between 1 and 20";
  } else {
    return "Try again!";
  }
}

function checkTheNumber() {
  let userNumber = Number(userInput.value);
  if (!userNumber || userNumber < 1 || userNumber > 20) {
    messageToUser.innerHTML = showMessage("error");
  }
}
