// getComputerChoice that rerurns ‘Rock’, ‘Paper’ or ‘Scissors’
// function playRound(playerSelection, computerSelection) returns something like "You Lose! Paper beats Rock"
// playGame() to play the game five times
// keeps score and reports a winner or loser at the end
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random == 0){
        return "Rock";
    }
    else if (random == 1) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}
let computerSelection = getComputerChoice();
console.log(`Computer chooses: ${computerSelection}`);
function validInput() {
    let playerChoice = prompt("Enter your choice (rock, paper or scissor):");
    console.log(`You wrote: ${playerChoice}`);
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1).toLowerCase();
    while (playerChoice != "Rock" && playerChoice != "Paper" && playerChoice != "Scissor") {
        playerChoice = prompt("Enter your choice again between these three \"rock, paper or scissor\":")
        console.log(`You wrote: ${playerChoice}`);
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1).toLowerCase();
    }
    return playerChoice;
}
playerSelection = validInput();
console.log(`You choose: ${playerSelection}`);
function playRound(computerSelection, playerSelection) {
    if (computerSelection == "Rock") {
        if (playerSelection == "Paper") {
            console.log("You Won! Paper beats Rock");
        }
        else if (playerSelection == "Scissor") {
            console.log("You Lose! Rock beats Scissor");
        }
        else {
            console.log("It's a Draw!");
        }
    }
    else if (computerSelection == "Paper") {
        if (playerSelection == "Scissor") {
            console.log("You Won! Scissor beats Paper");
        }
        else if (playerSelection == "Rock") {
            console.log("You Lose! Paper beats Rock");
        }
        else {
            console.log("It's a Draw!");
        }
    }
    else if (computerSelection == "Scissor") {
        if (playerSelection == "Rock") {
            console.log("You Won! Rock beats Scissor");
        }
        else if (playerSelection == "Paper") {
            console.log("You Lose! Scissor beats Paper");
        }
        else {
            console.log("It's a Draw!");
        }
    }
}
playRound(computerSelection,playerSelection);