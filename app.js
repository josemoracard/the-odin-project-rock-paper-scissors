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

// Here we manage the game state
let playerScore = 0;
let computerScore = 0;

function updateResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message + ` (Score: You ${playerScore} - ${computerScore} Computer)`;
}

function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        const finalMessage = playerScore > computerScore ? "🎉 You win the game!" : "😞 You lose the game!";
        updateResult(finalMessage);
        // Disable buttons after game over
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
    }
}

// Event listener for player's buttons
function handleClick(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    console.log(result); // Also logs it in console

    if (result.includes('win')) {
        playerScore++;
    } else if (result.includes('lose')) {
        computerScore++;
    }

    updateResult(result);
    checkWinner();
}

// Add event listeners to buttons
document.getElementById('rock').addEventListener('click', () => handleClick('rock'));
document.getElementById('paper').addEventListener('click', () => handleClick('paper'));
document.getElementById('scissors').addEventListener('click', () => handleClick('scissors'));