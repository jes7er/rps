function computerPlay() {
    var options = ["rock","paper","scissors"];
    min = Math.ceil(0);
    max = Math.floor(2);
    var compSelect = Math.floor(Math.random() * (max-min+1)) + min;
    return options[compSelect];
}

function playRound(playerSelection, computerSelection) {
    var winner = '';
    if (playerSelection === computerSelection) {
        textResult = 'Tie!';
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        textResult = 'You win! - computer chose scissors';
        winner = 'player';
    } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        textResult = 'You Lose! - computer chose paper';
        winner = 'computer';
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        textResult = 'You Lose! - computer chose scissors';
        winner = 'computer';
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        textResult = 'You win! - computer chose rock';
        winner = 'player';
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        textResult = 'You win! - computer chose paper';
        winner = 'player';
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        textResult = 'You Lose! - computer chose rock';
        winner = 'computer';
    }
    document.getElementById('roundResults').innerText = textResult;
    return winner;
}

function resetGame(){
    // reset global variables: let humanScore = 0, compScore = 0, roundCount = 0;
    // remove button click event: const buttons = document.querySelectorAll('button');
    //buttons.forEach((button) => {
    //    button.removeEventListener('click', playGame)});
}

let humanScore = 0, compScore = 0, roundCount = 0;


function game() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            humanSelection = e.target.id;
            var results = playRound(humanSelection, computerPlay());
            if (results === 'player') {
                humanScore++;
                roundCount++;
            } else if (results === 'computer') {
                compScore++;
                roundCount++;
            }
            document.getElementById('player').innerText = humanScore;
            document.getElementById('computer').innerText = compScore;
            if (compScore === 5) {
                document.getElementById('roundResults').innerText = 'Computer wins!';
                resetGame();
            } else if (humanScore === 5) {
                document.getElementById('roundResults').innerText = 'Player wins!';
                resetGame();
            }
        });
    });
}
game();