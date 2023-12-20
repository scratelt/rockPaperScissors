const rockPaperScissors = ["rock", "paper", "scissors"];

function randomChoice() {
  return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}


function playerChoiceRock() {
  singleRound("rock");
}

let btnRock = document.getElementById('rock');
btnRock.addEventListener('click', playerChoiceRock);

function playerChoicePaper() {
  singleRound("paper");
}

let btnPaper = document.getElementById('paper');
btnPaper.addEventListener('click', playerChoicePaper);

function playerChoiceScissors() {
  singleRound("scissors");
}

let btnScissors = document.getElementById('scissors');
btnScissors.addEventListener('click', playerChoiceScissors);

let playerScore = 0;
let computerScore = 0;



function singleRound(playerInput) {

    const computerChoice = randomChoice();
    
    console.log("Player: " + playerInput + " | " + "Computer: " + computerChoice);
    if (playerScore === 5 || computerScore === 5) {
      document.getElementById('result').innerHTML = "Game over";
      // return console.log("Game over")
    }
    else if (computerChoice === playerInput) {
      document.getElementById('result').innerHTML = "Tie round";
    // return console.log("Tie round")
    }
    else if (playerInput === "rock" && computerChoice === "paper") {
      document.getElementById('result').innerHTML = "Computer wins";
      computerScore++;
      document.getElementById('displayComputerScore').innerHTML = computerScore;
    // console.log("Computer wins")
    }
    else if (playerInput === "rock" && computerChoice === "scissors") {
      document.getElementById('result').innerHTML = "Player wins";
      playerScore++;
      document.getElementById('displayPlayerScore').innerHTML = playerScore;
    // console.log("Player wins")
    }
    else if (playerInput === "paper" && computerChoice === "scissors") {
      document.getElementById('result').innerHTML = "Computer wins";
      computerScore++;
      document.getElementById('displayComputerScore').innerHTML = computerScore;
    // console.log("Computer wins")
    }
    else if (playerInput === "paper" && computerChoice === "rock") {
      document.getElementById('result').innerHTML = "Player wins";
      playerScore++;
      document.getElementById('displayPlayerScore').innerHTML = playerScore;
    // console.log("Player wins")
    }
    else if (playerInput === "scissors" && computerChoice === "rock") {
      document.getElementById('result').innerHTML = "Computer wins";
      computerScore++;
      document.getElementById('displayComputerScore').innerHTML = computerScore;
    // console.log("Computer wins")
    }
    else if (playerInput === "scissors" && computerChoice === "paper") {
      document.getElementById('result').innerHTML = "Player wins";
      playerScore++;
      document.getElementById('displayPlayerScore').innerHTML = playerScore;
    // console.log("Player wins")
    }
}