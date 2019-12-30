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

function playRound(playerSelection, computerSelection,para,compScore,humanScore) {
    if (playerSelection === computerSelection) {
          para.innerHTML = '<p>Tie!</p>';
      } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
          para.innerHTML = '<p>Human wins!<br>(computer chose scissors)</p>';
          ++humanScore;
      } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
          para.innerHTML = '<p>Computer wins!<br>(computer chose paper)</p>';
          ++compScore;
      } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
          para.innerHTML = '<p>Computer wins!<br>(computer chose scissors)</p>';
          ++compScore;
      } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
          para.innerHTML = '<p>Player wins!<br>(computer chose rock)</p>';
          ++humanScore;
      } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
          para.innerHTML = '<p>Player wins!<br>(computer chose paper)</p>';
          ++humanScore;
      } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
          para.innerHTML = '<p>Computer wins!<br>(computer chose rock)</p>';
          ++compScore;
      } else {
          para.innerHTML = '<p>You did not enter a valid choice!</p>';
      }
    return humanScore,compScore;
}

let playerSelection = humanPlay();
let computerSelection = computerPlay();
const para = document.getElementById('results');
var compScore = 0, humanScore = 0;

while ((compScore<5) && (humanScore<5)) {
    playRound(playerSelection, computerSelection, para,compScore,humanScore);
}

}

window.onload = main;