function playRound(humanChoice, computerChoice) {
  // your code here!
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomInteger = Math.floor(Math.random() * 3);
  return choices[randomInteger];
}
