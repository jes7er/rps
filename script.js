const main = document.querySelector('#main');
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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
          content.textContent = 'Tie!';
          main.appendChild(content);
          
      } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
          content.textContent = 'You win! - computer chose scissors';
          main.appendChild(content);
          ++humanScore;
      } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
          content.textContent = 'Computer wins! - computer chose paper';
          main.appendChild(content);
          ++compScore;
      } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
          content.textContent = 'Computer wins! - computer chose scissors';
          main.appendChild(content);
          ++compScore;
      } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
          content.textContent = 'You win! - computer chose rock';
          main.appendChild(content);
          ++humanScore;
      } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
          content.textContent = 'You win! - computer chose paper';
          main.appendChild(content);
          ++humanScore;
      } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
          content.textContent = 'Computer wins! - computer chose rock';
          main.appendChild(content);
          ++compScore;
      } else {
          content.textContent = 'You did not enter a valid choice!';
          main.appendChild(content);
      }
    return humanScore,compScore;
}

var playerSelection = humanPlay();
var computerSelection = computerPlay();

var compScore = 0, humanScore = 0;

while ((compScore<5) && (humanScore<5)) {
    playRound(playerSelection, computerSelection);
}