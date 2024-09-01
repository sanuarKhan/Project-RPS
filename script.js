// Initial scores
let humanScore = 0;
let computerScore = 0;

// computer choices
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Human Input
function getHumanChoice() {
  let userInput = prompt(
    "Give your choice: rock, paper, or scissors"
  ).toLowerCase();

  // Validate input
  while (!["rock", "paper", "scissors"].includes(userInput)) {
    userInput = prompt(
      "Invalid choice. Please enter rock, paper, or scissors:"
    );
  }

  return userInput;
}

// Play a round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    console.log("Opps! Better next time 😢");
  } else {
    humanScore++;
    console.log("Great! You won 😂");
  }
}

// Play the game
function playGame(num) {
  for (let i = 1; i <= num; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
}

playGame(5);

const result = `Your score: ${humanScore}\nComputer score: ${computerScore}`;
console.log(result);

if (computerScore > humanScore) {
  console.log("Computer won! Better luck next time 🏇");
} else if (computerScore < humanScore) {
  console.log("Oho 😂 You won!");
} else {
  console.log("Great contest! The game is a draw.");
}
