let userInput = document.getElementById("numberInput");
let check = document.getElementById("checkButton");
let again = document.getElementById("againButton");

let secretNumber = document.getElementById("numberToGuess");

let messageToUser = document.getElementById("message");
let score = document.getElementById("score");
let highscore = document.getElementById("highscore");

//let confetti = document.getElementById("confetti");

let randomNumber = Math.floor(Math.random() * 21);

score = 20;
highscore = 0;

function showMessage(number, message) {
  if (number == randomNumber) {
    message = messageToUser.innerHTML;
  } else {
  }
}
