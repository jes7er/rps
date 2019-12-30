function main() {

function computerPlay() {
    var options = ["rock","paper","scissors"];
    const compSelect = Math.round(Math.random()*2);
    return options[compSelect];
}

function humanPlay() {
    var humanSelection = prompt("Enter 'rock', 'paper' or 'scissors'").toLowerCase();
    return humanSelection;
}

function playRound(playerSelection, computerSelection) {
    //const para = document.querySelector('p');
    const para = document.getElementById('results');
    if (playerSelection === computerSelection) {
          para.innerHTML = '<p>Tie!</p>';
      } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
          para.innerHTML = '<p>Human wins!<br>(computer chose scissors)</p>';
          ++roundCount;
          ++humanScore;
      } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
          para.innerHTML = '<p>Computer wins!<br>(computer chose paper)</p>';
          ++roundCount;
          ++compScore;
      } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
          para.innerHTML = '<p>Computer wins!<br>(computer chose scissors)</p>';
          ++compScore;
          ++roundCount;
      } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
          para.innerHTML = '<p>Player wins!<br>(computer chose rock)</p>';
          ++humanScore;
          ++roundCount;
      } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
          para.innerHTML = '<p>Player wins!<br>(computer chose paper)</p>';
          ++humanScore;
          ++roundCount;
      } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
          para.innerHTML = '<p>Computer wins!<br>(computer chose rock)</p>';
          ++compScore;
          ++roundCount;
      } else {
          para.innerHTML = '<p>You did not enter a valid choice!</p>';
      }
    return humanScore,compScore;
}

let playerSelection = humanPlay();
let computerSelection = computerPlay();

var compScore = 0, humanScore = 0;

while ((compScore<5) && (humanScore<5)) {
    playRound(playerSelection, computerSelection);
}

}

window.onload = main;