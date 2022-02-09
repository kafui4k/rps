let computerScore = 0;
let playerScore = 0;
const scorestatus = document.getElementById('score-status');
const computerScoreBoard = document.getElementById('computer');
const playerScoreBoard = document.getElementById('man');

function computerPlay () {
    // this will randomly return 'Rock', 'Paper', 'Scissors'
    const choiceArray = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];

    return computerChoice.toLowerCase();
}

function winner(computerScore, playerScore) {
    if (computerScore === 5) {
        // call freeze game function
        console.log(`COMPUTER WINS!!!`);
    } else if (playerScore === 5) {
        // freeze game function
        console.log(`YOU WIN!!!`)
    }
}

function playRound(playerSelection, computerSelection) {
    
    // code goes here
    if (computerSelection === "paper" && playerSelection === "rock") {
        
        computerScore++;
        computerScoreBoard.innerHTML = `Computer Score: ${computerScore}`;
        scorestatus.innerHTML = `You Loose! ${computerSelection} beats ${playerSelection}`;

    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        computerScoreBoard.innerHTML = `Computer Score: ${computerScore}`;

        scorestatus.innerHTML = `You Loose! ${computerSelection} beats ${playerSelection}`;

    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        computerScoreBoard.innerHTML = `Computer Score: ${computerScore}`;

        scorestatus.innerHTML = `You Loose! ${computerSelection} beats ${playerSelection}`;

    } else if (computerSelection === playerSelection) {

        scorestatus.innerHTML = `It's a tie! ${playerSelection} matches ${computerSelection}`;
        
    } else {
        playerScore++;
        playerScoreBoard.innerHTML = `Player Score: ${playerScore}`;

        scorestatus.innerHTML = `You win! ${playerSelection} beats ${computerSelection}`;
    }

    winner(computerScore, playerScore);

}

function getButton(e) {
    const computerSelection = computerPlay();

    const btn = document.querySelector(`button[id="${e.srcElement.id}"]`);
    const playerSelection = btn.id;
    playRound(playerSelection, computerSelection)
}

window.addEventListener('click', getButton);