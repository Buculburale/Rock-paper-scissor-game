function getComputerChoice() {
  const choice = ['rock', 'paper', 'scissors'];
  return choice [Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "it is a tie";
  }else if (playerSelection==="rock" && computerSelection === "paper") {
    return "computer wins"
  }else if (playerSelection === "paper" && computerSelection == "scissors") {
    return "compueter wins"
  }else if (playerSelection == "scissors" && computerSelection === "rock") {
    return "computer wins"
  }else{
    return "player wins"
  }
         
}
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i <= 4; i++) {
    const playerSelection = prompt("enter your choice: rock, paper or scissors").toLocaleLowerCase();
    const computerSelection = getComputerChoice()
    const result = playRound(playerSelection, computerSelection);
    console.log(`Round ${i + 1}: ${result}`);
  if (result==="players wins") {
    playerScore++;
  }else if (result==="computer wins") {
    computerScore++;
  }

  if (playerScore > computerScore) {
    console.log("player wins the game");
  }else if (computerScore > playerScore) {
    console.log("computer wins the game");
  }else{
    console.log("it is a tie");
  }
}
}

game();