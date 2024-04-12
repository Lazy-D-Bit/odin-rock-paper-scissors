const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");
const symbol = ["✊🏻","✋🏻","✌🏻"];
const player = document.getElementById("player-choice")
const computer = document.getElementById("computer-choice")
let result = document.getElementById("result");
rockBtn.addEventListener("click", function() {
    const playerChoice = 0;
    player.textContent = `${symbol[playerChoice]}`;
    game(playerChoice);
});
paperBtn.addEventListener("click", function() {
    const playerChoice = 1;
    player.textContent = `${symbol[playerChoice]}`;
    game(playerChoice);
});
scissorBtn.addEventListener("click", function() {
    const playerChoice = 2;
    player.textContent = `${symbol[playerChoice]}`;
    game(playerChoice);
});
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3); // Returns a random number from 0 to 2
    return random;
}
function game(playerChoice) {
    const computerChoice = getComputerChoice();
    computer.textContent = `${symbol[computerChoice]}`
    if (playerChoice == 0) {
        if (computerChoice == 0) {
            result.textContent = "DRAW";
        }
        else if (computerChoice == 1) {
            result.textContent = "YOU LOST";
        }
        else if (computerChoice == 2) {
            result.textContent = "YOU WON";
        }
    }
    else if (playerChoice == 1) {
        if (computerChoice == 1) {
            result.textContent = "DRAW";
        }
        else if (computerChoice == 2) {
            result.textContent = "YOU LOST";
        }
        else if (computerChoice == 0) {
            result.textContent = "YOU WON";
        }
    }
    else if (playerChoice == 2) {
        if (computerChoice == 2) {
            result.textContent = "DRAW";
        }
        else if (computerChoice == 0) {
            result.textContent = "YOU LOST";
        }
        else if (computerChoice == 1) {
            result.textContent = "YOU WON";
        }
    }
}