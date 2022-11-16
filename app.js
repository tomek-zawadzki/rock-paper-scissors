const startBtn = document.querySelector(".start");
const choicePanel = document.querySelector(".choice");
const paperBtn1 = document.querySelector(".paper-btn1");
const rockBtn1 = document.querySelector(".rock-btn1");
const scissorsBtn1 = document.querySelector(".scissors-btn1");
const paperBtn2 = document.querySelector(".paper-btn2");
const rockBtn2 = document.querySelector(".rock-btn2");
const scissorsBtn2 = document.querySelector(".scissors-btn2");
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

// const paperSelected1 = paperBtn1.addEventListener("click", () => {
//   playerOne.choice = "paper";
// });

// const rockSelected1 = rockBtn1.addEventListener("click", () => {
//   playerOne.choice = "rock";
// });
// const scissorsSelected1 = scissorsBtn1.addEventListener("click", () => {
//   playerOne.choice = "scissors";
// });
// const paperSelected2 = paperBtn2.addEventListener("click", () => {
//   playerTwo.choice = "paper";
// });

// const rockSelected2 = rockBtn2.addEventListener("click", () => {
//   playerTwo.choice = "rock";
// });
// const scissorsSelected2 = scissorsBtn1.addEventListener("click", () => {
//   playerTwo.choice = "scissors";
// });

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

const game = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  const rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
