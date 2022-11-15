const popupInstruction = document.querySelector(".popup-instruction");
const closePopup = document.querySelector(".btn-close");
const openPopup = document.querySelector(".show-instruction");
const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");
const newGame = document.querySelector(".start");
const playerOneChoice = document.querySelector(".player1-choice");
const playerTwoChoice = document.querySelector(".player2-choice");
const bodyBox = document.querySelector("body");
const scorePlayerOne = document.querySelector(".scoreOne");
const choicePaperP1 = document.querySelector(".paper-btn");
const choiceRockP1 = document.querySelector(".rock-btn");
const choiceScissorsP1 = document.querySelector(".scissors-btn");

let selectedSigns = [];

const userOne = {
  name: "Player 1",
  choice: "",
  result: 0,
};

const userTwo = {
  name: "Player 2",
  choice: "",
  result: 0,
};

const showPopup = () => {
  popupInstruction.style.display = "flex";
};

const hidePopup = () => {
  popupInstruction.style.display = "none";
};

const startGame = () => {
  playerOneChoice.style.display = "flex";
};

openPopup.addEventListener("click", showPopup);
closePopup.addEventListener("click", hidePopup);
newGame.addEventListener("click", startGame);

choicePaperP1.addEventListener("click", () => {
  const selected = "paper";
  console.log(selected);
  playerOneChoice.style.display = "none";
  userOne.choice = selected;
});
choiceRockP1.addEventListener("click", () => {
  const selected = "rock";
  console.log(selected);
  playerOneChoice.style.display = "none";
  userOne.choice = selected;
});
choiceScissorsP1.addEventListener("click", () => {
  const selected = "scissors";
  console.log(selected);
  playerOneChoice.style.display = "none";
  userTwo.choice = selected;
});

const game = function (userOne, userTwo) {
  if (userOne.choice === "paper" && userTwo.choice === "scissors")
    userOne.result++;
};
