let humanScore = 0;
let computerScore = 0;

const playerButtons = document.querySelectorAll(".player-option");
const playerChoiceElement = document.querySelector("#player-choice");
const playerScoreElement = document.querySelector("#player-score");
const computerChoiceElement = document.querySelector("#computer-choice");
const computerScoreElement = document.querySelector("#computer-score");
const winnerDeclaration = document.querySelector(".winner");

displayScore();

playerButtons.forEach((playerButton) => {
  playerButton.addEventListener("click", function () {
    const playerChoice = playerButton.textContent.trim().toLowerCase();
    const computerChoice = getComputerChoice();

    playerChoiceElement.textContent = playerChoice;
    computerChoiceElement.textContent = computerChoice;

    playRound(playerChoice, computerChoice);
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomInteger = Math.floor(Math.random() * 3);
  return choices[randomInteger];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    computerChoiceElement.classList.remove(
      "text-red",
      "text-green",
      "text-orange",
    );

    playerChoiceElement.classList.remove(
      "text-red",
      "text-green",
      "text-orange",
    );

    computerChoiceElement.classList.add("text-orange");
    playerChoiceElement.classList.add("text-orange");
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    displayScore();

    computerChoiceElement.classList.remove(
      "text-red",
      "text-green",
      "text-orange",
    );
    playerChoiceElement.classList.remove(
      "text-red",
      "text-green",
      "text-orange",
    );
    computerChoiceElement.classList.add("text-green");
    playerChoiceElement.classList.add("text-red");
  } else {
    humanScore++;
    displayScore();

    computerChoiceElement.classList.remove(
      "text-red",
      "text-green",
      "text-orange",
    );
    playerChoiceElement.classList.remove(
      "text-red",
      "text-green",
      "text-orange",
    );
    playerChoiceElement.classList.add("text-green");
    computerChoiceElement.classList.add("text-red");
  }
  declareWinner();
}

function displayScore() {
  playerScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
}

function disableButtons() {
  playerButtons.forEach((button) => button.setAttribute("disabled", ""));
}

function declareWinner() {
  let winner = "";
  if (computerScore === 5) {
    winner = "computer";
    disableButtons();
    winnerDeclaration.textContent = `Winner is: ${winner}, refresh to play again`;
  }
  if (humanScore === 5) {
    winner = "player";
    disableButtons();
    winnerDeclaration.textContent = `Winner is: ${winner}, refresh to play again`;
  }
}
