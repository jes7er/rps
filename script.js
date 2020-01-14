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
    var remove = document.getElementById('restart');
    remove.parentNode.removeChild(remove);
    // remove rematch button, reset global variables and re-add button functionality
    playerScore = 0, compScore = 0;
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', game));
    document.getElementById('player').innerText = playerScore;
    document.getElementById('computer').innerText = compScore;
    document.getElementById('roundResults').innerText = 'New Game!'
    return playerScore, compScore;
}

var playerScore = 0, compScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', game));

document.getElementById('player').innerText = playerScore;
document.getElementById('computer').innerText = compScore;
document.getElementById('roundResults').innerText = 'First to 5 wins, ties don\'t count!  Choose your weapon above.'

function createReplay(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => button.removeEventListener('click', game));
    var button = document.createElement("button");
    button.innerHTML = "Re-Match";
    button.setAttribute('id','restart');
    button.setAttribute('class','rps');
    button.style.width = '200px';
    button.addEventListener('click', resetGame);
    var p = document.getElementById('rematch');
    //console.log(location);
    p.appendChild(button); 
}

function game(e) {
            playerSelection = e.target.id;
            var results = playRound(playerSelection, computerPlay());
            if (results === 'player') {
                playerScore++;
            } else if (results === 'computer') {
                compScore++;
            }
            document.getElementById('player').innerText = playerScore;
            document.getElementById('computer').innerText = compScore;
            if (compScore === 5) {
                document.getElementById('roundResults').innerText = 'Computer wins!';
                createReplay();
            } else if (playerScore === 5) {
                document.getElementById('roundResults').innerText = 'Player wins!';
                createReplay();
            }
}