# Rock-paper-scissor-game
Overview
This simple web-based Rock-Paper-Scissors game allows users to play against a computer opponent. The game consists of a basic HTML structure and a JavaScript program that handles the game's logic. Players make their selections, and the computer randomly selects its move. The winner of each round and the overall game winner are determined and displayed in the console.

Game Logic
1. The game's JavaScript logic is divided into three main functions:

2. getComputerChoice(): This function randomly selects the computer's move from "rock," "paper," or "scissors."

3. playRound(playerSelection, computerSelection): This function takes the player's and computer's selections as arguments and determines the result of a single round based on the Rock-Paper-Scissors rules.

4. game(): The game function manages the entire game. It keeps track of the player's and computer's scores over five rounds and determines the overall winner.