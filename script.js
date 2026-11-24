let humanScore = 0;
let computerScore = 0;

const playerButtons = document.querySelectorAll(".player-option");
const playerChoiceElement = document.querySelector("#player-choice");
const playerScoreElement = document.querySelector("#player-score");
const computerChoiceElement = document.querySelector("#computer-choice");
const computerScoreElement = document.querySelector("#computer-score");

playerButtons.forEach((playerButton) => {
  playerButton.addEventListener("click", function () {
    const playerChoice = playerButton.textContent.trim().toLowerCase();
    const computerChoice = getComputerChoice();

    playerChoiceElement.textContent = playerChoice;
    computerChoiceElement.textContent = computerChoice;

    playerScoreElement.textContent = humanScore;
    computerScoreElement.textContent = computerScore;

    playRound(playerChoice, computerChoice);
  });
});

// playGame(5);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomInteger = Math.floor(Math.random() * 3);
  return choices[randomInteger];
}

// function getHumanChoice() {
//   const choice = prompt("Pick one between rock, paper and scissors");
//   return choice.trim().toLowerCase();
// }

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
    // console.log("it's a draw!");
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    // console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
  } else {
    humanScore++;
    // console.log(`you win! ${humanChoice} beats ${computerChoice}`);
  }
}

// function playGame(repeat) {
//   for (let i = 1; i <= repeat; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }

//   console.log(`Score: Human ${humanScore}, Computer ${computerScore}`);

//   let winner = "";

//   if (humanScore > computerScore) {
//     winner = "player";
//   } else {
//     winner = "computer";
//   }

//   console.log(`Winner: ${winner}`);
// }
