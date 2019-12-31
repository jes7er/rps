const container = document.querySelector('#container');
const content = document.createElement('div');

content.classList.add('results');

function computerPlay() {
    var options = ["rock","paper","scissors"];
    const compSelect = Math.round(Math.random()*2);
    return options[compSelect];
}

function humanPlay() {
    var humanSelection = prompt("Enter 'rock', 'paper' or 'scissors'").toLowerCase();
    return humanSelection;
}

function playRound(playerSelection, computerSelection, humanScore, compScore) {
    if (playerSelection === computerSelection) {
          content.textContent = 'Tie!';
          container.appendChild(content);
      } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
          content.textContent = 'You win! - computer chose scissors';
          container.appendChild(content);
          humanScore += 1;
      } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
          content.textContent = 'Computer wins! - computer chose paper';
          container.appendChild(content);
          compScore += 1;
      } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
          content.textContent = 'Computer wins! - computer chose scissors';
          container.appendChild(content);
          compScore += 1;
      } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
          content.textContent = 'You win! - computer chose rock';
          container.appendChild(content);
          humanScore += 1;
      } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
          content.textContent = 'You win! - computer chose paper';
          container.appendChild(content);
          humanScore += 1;
      } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
          content.textContent = 'Computer wins! - computer chose rock';
          container.appendChild(content);
          compScore += 1;
      } else {
          content.textContent = 'You did not enter a valid choice!';
          container.appendChild(content);
      }
    return humanScore,compScore;
}

var playerSelection = humanPlay();
var computerSelection = computerPlay();

var compScore = 0;
var humanScore = 0;

while ((compScore < 5) && (humanScore < 5)) {
    playRound(playerSelection, computerSelection, humanScore, compScore);
}