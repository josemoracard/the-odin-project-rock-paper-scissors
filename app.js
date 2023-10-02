const prompt = require ("prompt-sync")({sigint: true})

function getComputerChoice() {
    let randomN = Math.floor(Math.random() * 3)
    let computerChoise = ''
    
    switch(randomN) {
        case 0:
            computerChoise = 'rock'
            break;
        case 1:
            computerChoise = 'paper'
            break;
        case 2:
            computerChoise = 'scissors'
            break;
    }

    return computerChoise
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) {
        return "It's a tie!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return `You win! ${player} beats ${computer}.`;
    } else {
        return `You lose! ${computer} beats ${player}.`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        const playerSelection = prompt("Enter your choice: rock, paper, or scissors: ");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }

    console.log("Game over!");

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else {
        console.log("You lose the game!");
    }

    console.log(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);
}

game();