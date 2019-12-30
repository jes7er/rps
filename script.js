function main() {
//const humanScore = 0;
//const compScore = 0;

function computerPlay() {
    var options = ["rock","paper","scissors"];
    const compSelect = Math.round(Math.random()*2);
    return options[compSelect];
}

function playRound(playerSelection, computerSelection) {
    //const para = document.querySelector('p');
    const para = document.getElementById('results');
    if (playerSelection === computerSelection) {
          para.innerText = 'Tie!';
      } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
          para.innerText = 'Human wins!';
      } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
          para.innerText = 'Computer wins!';
      } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
          para.innerText = 'Computer wins!';
      } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
          para.innerText = 'Player wins!';
      } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
          para.innerText = 'Player wins!';
      } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
          para.innerText = 'Computer wins!';
      } else {
          para.innerText = 'You did not enter a valid choice!';
      }
}

let playerSelection = prompt("Enter rock, paper or scissors");
const computerSelection = computerPlay();



console.log(playRound(playerSelection, computerSelection));

}

window.onload = main;