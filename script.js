// getting necessary dom elements
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const showHumanScore = document.querySelector(".showHumanScore");
const showComputerScore = document.querySelector(".showComputerScore");
const showResult = document.querySelector(".result");

const root = document.querySelector("#root");

// Initial scores
let humanScore = 0;
let computerScore = 0;

// computer choices
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Play a round
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    showResult.textContent = "Great contest! The game is a draw.";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    console.log("Opps! Better next time 😢");
    showResult.textContent = "Computer won! Better luck next time 🏇";
  } else {
    humanScore++;
    console.log("Great! You won 😂");
    showResult.textContent = "Oho 😂 You won!";
  }
}

// display score function for avoiding repeatation
function showScoreFn() {
  showComputerScore.textContent = computerScore;
  showHumanScore.textContent = humanScore;

  if (computerScore == 5 || humanScore == 5) {
    console.log(computerScore, humanScore);
    const popupDiv = document.createElement("div");
    popupDiv.classList.add("resultPopup");

    const userPoint = document.createElement("p");
    const computerPoint = document.createElement("p");
    const winMessage = document.createElement("h2");

    userPoint.innerText = `Your score ${humanScore}`;
    computerPoint.innerText = `Computer score ${computerScore}`;
    humanScore > computerScore
      ? (winMessage.innerText = "Oho 😂 You won!")
      : humanScore < computerScore
      ? (winMessage.innerText = "Computer won! Better luck next time 🏇")
      : (winMessage.innerText = "Great contest! The game is a draw.");

    popupDiv.appendChild(userPoint);
    popupDiv.appendChild(computerPoint);
    popupDiv.appendChild(winMessage);

    console.log(popupDiv);

    root.append(popupDiv);

    setTimeout(() => {
      document.location.reload();
    }, 3000);
  }
}
// Play the game

paper.addEventListener("click", (e) => {
  const humanSelection = e.target.innerText.toLowerCase();

  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
  showScoreFn();
});
rock.addEventListener("click", (e) => {
  const humanSelection = e.target.innerText.toLowerCase();

  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
  showScoreFn();
});
scissors.addEventListener("click", (e) => {
  const humanSelection = e.target.innerText.toLowerCase();

  const computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
  showScoreFn();
});

const result = `Your score: ${humanScore}\nComputer score: ${computerScore}`;
console.log(result);
//show the result on UI
