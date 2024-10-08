//Piatră, Foarfecă, Hârtie trecem in arrow functions

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput == "rock" || userInput == "scissors" || userInput == "paper") {
    return userInput;
  } else if (userInput == "bomb") {
    return userInput;
  } else {
    console.log("Your answer is incorrect");
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "scissors";
  } else {
    return "paper";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a well-deserved draw!";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    return "Congratulations! You win!";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    return "Computer wins, try again!";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    return "Congratulations! You win!";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    return "Computer wins, try again!";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    return "Congratulations! You win!";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    return "Computer wins, try again!";
  } else if (userChoice === "bomb") {
    return "The computer is defeated and destroyed!!! You win!!!";
  }
};

const playGame = () => {
  let userChoice = prompt("Choose an option between rock, scissors or paper ");
  getUserChoice(userChoice);

  let computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
