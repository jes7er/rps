const para = document.querySelector('p');
//const humanScore = 0;
//const compScore = 0;

function computerPlay() {
    var options = ["rock","paper","scissors"];
    const compSelect = Math.round(Math.random()*2);
    return options[compSelect];
}

function playRound(playerSelection, computerSelection) {
    //code here
    if (playerSelection === computerSelection) {
          para.textContent = 'Tie!';
      } else if (playerSelection === "rock") && (computerSelection === "scissors") {
          para.textContent = 'Human wins!';
      } else if (playerSelection === "rock") && (computerSelection === "paper") {
          para.textContent = 'Computer wins!';
      } else if (playerSelection === "paper") && (computerSelection === "scissors") {
          para.textContent = 'Computer wins!';
      } else if (playerSelection === "paper") && (computerSelection === "rock") {
          para.textContent = 'Player wins!';
      } else if (playerSelection === "scissors") && (computerSelection === "paper") {
          para.textContent = 'Player wins!';
      } else if (playerSelection === "scissors") && (computerSelection === "rock") {
          para.textContent = 'Computer wins!';
      } else {
          para.textContent = 'You did not enter a valid choice!';
      }
}

let playerSelection.toLowerCase() = prompt("Enter rock, paper or scissors");
const computerSelection = computerPlay();



console.log(playRound(playerSelection, computerSelection));



rock > scissors
scissors > paper 
paper > rock