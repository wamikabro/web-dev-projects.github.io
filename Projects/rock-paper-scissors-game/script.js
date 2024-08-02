const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const userScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#computer-score");
const result = document.querySelector(".result");

// Rules
const outcomes = {
  rock: {
    rock: "Draw",
    paper: "Computer",
    scissors: "User",
  },
  paper: {
    rock: "User",
    paper: "Draw",
    scissors: "Computer",
  },
  scissors: {
    rock: "Computer",
    paper: "User",
    scissors: "Draw",
  },
};

rockButton.addEventListener("click", (e) => {
  run("rock");
});
paperButton.addEventListener("click", (e) => {
  run("paper");
});
scissorsButton.addEventListener("click", (e) => {
  run("scissors");
});

function run(userChoice) {
  const computerChoice = () => {
    const randomValue = Math.floor(Math.random() * 3 + 1);
    if (randomValue === 1) {
      return "rock";
    } else if (randomValue === 2) {
      return "paper";
    }
    return "scissors"; // on 3
  };

  // it will return Draw, User, Computer
  const winner = whoWin(userChoice, computerChoice());

  // to update score and result
  updateScreen(winner);
}

function whoWin(userChoice, computerChoice) {
  if (outcomes[userChoice] && outcomes[userChoice][computerChoice]) {
    return outcomes[userChoice][computerChoice];
  }
}

function updateScreen(winner) {
  if (winner === "User") {
    result.textContent = "You Win!";
  } else if (winner === "Computer") {
    result.textContent = "You Lose!";
  } else {
    result.textContent = "Draw.";
  }
}
