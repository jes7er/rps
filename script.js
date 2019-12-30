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
          para.innerHTML = '<p>Tie!</p>';
      } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
          para.innerHTML = '<p>Human wins!</p>';
      } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
          para.innerHTML = '<p>Computer wins!</p>';
      } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
          para.innerHTML = '<p>Computer wins!</p>';
      } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
          para.innerHTML = '<p>Player wins!</p>';
      } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
          para.innerHTML = '<p>Player wins!</p>';
      } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
          para.innerHTML = '<p>Computer wins!</p>';
      } else {
          para.innerHTML = '<p>You did not enter a valid choice!</p>';
      }
}

let playerSelection = prompt("Enter rock, paper or scissors");
const computerSelection = computerPlay();



console.log(playRound(playerSelection, computerSelection));

}

window.onload = main;