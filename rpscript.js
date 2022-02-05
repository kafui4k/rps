

function computerPlay () {
    // this will randomly return 'Rock', 'Paper', 'Scissors'
    const choiceArray = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];

    return computerChoice;
}

// function to play a singleRound of RPS
// function should take in two parameters ('playerSelection', 'computerSelection')
// function should return a string that decalres the winner - "Yoou Lose! Paper beats ROck"

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {

    // code goes here
    if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++;
        console.log(`You Loose! ${computerSelection} beats ${playerSelection}`);
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++;
        console.log(`You Loose! ${computerSelection} beats ${playerSelection}`);
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++;
        console.log(`You Loose! ${computerSelection} beats ${playerSelection}`);
    } else if (computerSelection === playerSelection) {
        computerScore++;
        playerScore++;
        console.log(`It's a tie! ${playerSelection} matches ${computerSelection}`);
        
    } else {
        playerScore++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    }

}

function game() {
    let start = 5;

    for (let i = 1; i <= start; i++) {

        console.log(`Round ${i}`);

        const computerSelection = computerPlay();
        const playerSelection = prompt("enter your lengend to play...").toLowerCase();

        console.log(playRound(playerSelection, computerSelection));

    }    
    
}

game();

