// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

// Get references to the HTML elements
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const resultDiv = document.querySelector('.result');
const playerScoreSpan = document.querySelector('.player-score');
const compueterScoreSpan = document.querySelector('.computer-score');


// Function to randomly choose the computer's move
function getComputerChoice() {
  const choice = ['rock', 'paper', 'scissors'];
  return choice [Math.floor(Math.random() * choice.length)];
}


// Function to determine the result of a single round
function playRound(playerSelection, computerSelection) {

  // Create an element to display the round result
  const resultMessage = document.createElement('p');   

  // Check for the outcome of the round and update scores
  if (playerSelection === computerSelection) {
    resultMessage.innerText = "it is a tie";
  }else if (playerSelection==="rock" && computerSelection === "paper") {
    resultMessage.innerText = "computer wins";
    computerScore++;
  }else if (playerSelection === "paper" && computerSelection == "scissors") {
    resultMessage.innerText = "compueter wins";
    computerScore++;
  }else if (playerSelection == "scissors" && computerSelection === "rock") {
    resultMessage.innerText = "computer wins";
    computerScore++;
  }else{
    resultMessage.innerText = "player wins";
    playerScore++
  }

    // Display the round result
  resultDiv.appendChild(resultMessage);
         
}

    // Create an element to display the game winner
const winnerMessage = document.createElement('h4')

    // Function to announce the game winner
const anounceWinner = (playerScore, computerScore) =>{
  if (playerScore === 5) {
    winnerMessage.innerText = 'Player won the game'
  }else if (computerScore === 5) {
    winnerMessage.innerText = 'computer won the game'
  }

}
//Function to display the running score.
const updateScore =(playerScore, computerScore) =>{
  playerScoreSpan.innerText = `Player score: ${playerScore}`;
  compueterScoreSpan.innerText =`Computer score: ${computerScore}`;
}

    // Event listeners for player's choices
rockButton.addEventListener('click', () => {
  const playerSelection = 'rock';
  const computerSelection = getComputerChoice();
  playRound(computerSelection, playerSelection);
  updateScore(playerScore, computerScore);
  anounceWinner(playerScore, computerScore);
});

paperButton.addEventListener('click', () => {
  const playerSelection = 'paper';
  const computerSelection = getComputerChoice();
  playRound(computerSelection, playerSelection);
  anounceWinner(playerScore, computerScore);
});

scissorsButton.addEventListener('click', () => {
  const playerSelection = 'scissors';
  const computerSelection = getComputerChoice();
  playRound(computerSelection, playerSelection);
  anounceWinner(playerScore, computerScore);
});

    // Append the game winner message element to the result div
resultDiv.appendChild(winnerMessage);
