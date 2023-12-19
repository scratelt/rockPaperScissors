const rockPaperScissors = ["rock", "paper", "scissors"];

function randomChoice() {
  return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
}


function playerChoice() {
    return prompt("rock, paper, or scissors: ").toLowerCase();
}



function singleRound() {

    const computerChoice = randomChoice();
    const playerInput = playerChoice();
    console.log("Player: " + playerInput + " | " + "Computer: " + computerChoice);

    if (computerChoice === playerInput) {
    return console.log("Tie round")
    }
    else if (playerInput === "rock" && computerChoice === "paper") {
    console.log("Computer wins")
    }
    else if (playerInput === "rock" && computerChoice === "scissors") {
    console.log("Player wins")
    }
    else if (playerInput === "paper" && computerChoice === "scissors") {
    console.log("Computer wins")
    }
    else if (playerInput === "paper" && computerChoice === "rock") {
    console.log("Player wins")
    }
    else if (playerInput === "scissors" && computerChoice === "rock") {
    console.log("Computer wins")
    }
    else if (playerInput === "scissors" && computerChoice === "paper") {
    console.log("Player wins")
    }
}