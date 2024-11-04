
const CHOICES = ["rock", "paper", "scissors"];
const ROUNDS = 5;

let getComputerChoice = () => CHOICES[Math.floor(Math.random() * 3)];
let humanScore = 0;
let computerScore = 0;

let gameIsDone = false;

function displayResult(result) {
    // console.log(result);
    const resultsDiv = document.querySelector("#results");
    const p = document.createElement("p");
    p.innerText = result;
    resultsDiv.appendChild(p);
}

function checkFinishGame() {
    if (humanScore < ROUNDS && computerScore < ROUNDS || gameIsDone ) { return }
    
    gameIsDone = true;
    const scoresDiv = document.querySelector('#scores');
    const p = document.createElement("p");
    
    scoresDiv.appendChild(p);
    
    if (humanScore > computerScore) {
        p.innerText = `Good job, you won ${humanScore} to ${computerScore} against the computer`;
    }
    else {
        p.innerText = `Sorry, you lost ${humanScore} to ${computerScore} against the computer`;
    }
}

function playRound(humanChoice) {
    if (gameIsDone) {
        displayResult("Game is over already mate!");
        return;
    }

    let computerChoice = getComputerChoice();
    // If difference is 0, both entered the same number
    // If difference is 1, human wins
    // If difference is 2, computer wins
    let roundScore = (CHOICES.indexOf(humanChoice) - CHOICES.indexOf(computerChoice) + 3 ) % 3; 

    switch (roundScore) {
        case 0: {displayResult(`Draw! You both played ${humanChoice}`);}
            break;
        case 1: {
                humanScore++;
                displayResult(`You win this round! ${humanChoice} beats ${computerChoice}`);
            }
            break;
        case 2: {
                computerScore++;
                displayResult(`You loose this round! ${computerChoice} beats ${humanChoice}`);
            }
    }

    const computerScoreSpan = document.querySelector("#computer-score");
    computerScoreSpan.innerText = computerScore;    
    const humanScoreSpan = document.querySelector("#human-score");
    humanScoreSpan.innerText = humanScore;
    
    checkFinishGame();

    return roundScore;   
}