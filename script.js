let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomInteger = Math.floor(Math.random() * 3);
  return choices[randomInteger];
}

function getHumanChoice() {
  const choice = prompt("Pick one between rock, paper and scissors");
  return choice.trim().toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    alert("Invalid choice, mate!");
    return;
  }

  if (humanChoice === computerChoice) {
    console.log("it's a draw!");
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
  } else {
    humanScore++;
    console.log(`you win! ${humanChoice} beats ${computerChoice}`);
  }

  console.log(`Score: Human ${humanScore}, Computer ${computerScore}`);
}
