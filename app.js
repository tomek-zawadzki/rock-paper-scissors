const startBtn = document.querySelector(".start");
const choicePanel = document.querySelector(".choice");
const btnChoiceP1 = document.querySelectorAll(".btn-choice-p1");
const btnChoiceP2 = document.querySelectorAll(".btn-choice-p2");
const showResult = document.querySelector(".show-result");
const inputP1 = document.querySelector(".input-p1");
const inputP2 = document.querySelector(".input-p2");
const playerOne = {
  choice: "",
};
const playerTwo = {
  choice: "",
};

const showPlayerChoice = () => {
  choicePanel.style.display = "flex";
};

startBtn.addEventListener("click", showPlayerChoice);

btnChoiceP1.forEach((e) => {
  e.addEventListener("click", () => {
    inputP1.value = e.children[1].textContent;
    playerOne.choice = e.children[1].textContent;
    console.log(playerOne.choice);
  });
});

btnChoiceP2.forEach((e) => {
  e.addEventListener("click", () => {
    inputP2.value = e.children[1].textContent;
    playerTwo.choice = e.children[1].textContent;
    console.log(playerTwo.choice);
  });
});

const result = () => {
  if (playerOne.choice === "scissors" && playerTwo.choice === "paper") {
    return console.log("Player 1 won!");
  } else if (playerOne.choice === "paper" && playerTwo.choice === "scissors") {
    return console.log("Player 2 won!");
  } else if (playerOne.choice === "paper" && playerTwo.choice === "rock") {
    return console.log("Player 1 won!");
  } else if (playerOne.choice === "rock" && playerTwo.choice === "paper") {
    return console.log("Player 2 won!");
  } else if (playerOne.choice === "rock" && playerTwo.choice === "scissors") {
    return console.log("Player 1 won!");
  } else if (playerTwo.choice === "rock" && playerOne.choice === "scissors") {
    return console.log("Player 2 won!");
  } else {
    return console.log("Draw!");
  }
};

showResult.addEventListener("click", result);
