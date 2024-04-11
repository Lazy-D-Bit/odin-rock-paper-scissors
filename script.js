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
// let computerSelection = getComputerChoice();
// console.log(`Computer chooses: ${computerSelection}`);
function validInput() {
    let playerChoice = prompt("Enter your choice (rock, paper or scissor):");
    console.log(`You wrote: ${playerChoice}`);
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1).toLowerCase();
    while (playerChoice != "Rock" && playerChoice != "Paper" && playerChoice != "Scissor") {
        console.log("Enter again a valid input");
        playerChoice = prompt("Enter your choice again between these three \"rock, paper or scissor\":")
        console.log(`You wrote: ${playerChoice}`);
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1).toLowerCase();
    }
    return playerChoice;
}
// playerSelection = validInput();
// console.log(`You choose: ${playerSelection}`);
function playRound(computerSelection, playerSelection) {
    if (computerSelection == "Rock") {
        if (playerSelection == "Paper") {
            console.log("You Won! Paper beats Rock");
            return 1;
        }
        else if (playerSelection == "Scissor") {
            console.log("You Lose! Rock beats Scissor");
            return -1;
        }
        else {
            console.log("It's a Draw!");
            return 0;
        }
    }
    else if (computerSelection == "Paper") {
        if (playerSelection == "Scissor") {
            console.log("You Won! Scissor beats Paper");
            return 1;
        }
        else if (playerSelection == "Rock") {
            console.log("You Lose! Paper beats Rock");
            return -1;
        }
        else {
            console.log("It's a Draw!");
            return 0;
        }
    }
    else if (computerSelection == "Scissor") {
        if (playerSelection == "Rock") {
            console.log("You Won! Rock beats Scissor");
            return 1;
        }
        else if (playerSelection == "Paper") {
            console.log("You Lose! Scissor beats Paper");
            return -1;
        }
        else {
            console.log("It's a Draw!");
            return 0;
        }
    }
}
// playRound(computerSelection,playerSelection);
function playGame() {
    let score = 0
    for (let i = 0; i < 5; i++) {
        console.log(`**** Round ${i+1} ****`);
        playerSelection = validInput();
        console.log(`You choose: ${playerSelection}`);
        let computerSelection = getComputerChoice();
        console.log(`Computer chooses: ${computerSelection}`);
        score += playRound(computerSelection,playerSelection);
    }
    if (score > 0) {
        console.log(`You won by ${score} score!!!`);
        alert(`You won by ${score} score!!!`);
    }
    else if (score < 0) {
        console.log(`You lose by ${score*-1} score!!!`);
        alert(`You lost by ${score*-1} score!!!`);
    }
    else {
        console.log("Draw!!!");
        alert(`Draw!!!`);
    }
}
playGame()