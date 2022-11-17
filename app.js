const startBtn = document.querySelector(".start");
const choicePanel = document.querySelector(".choice");
const btnChoiceP1 = document.querySelectorAll(".btn-choice-p1");
const btnChoiceP2 = document.querySelectorAll(".btn-choice-p2");
const showResult = document.querySelector(".show-result");
const inputP1 = document.querySelector(".input-p1");
const inputP2 = document.querySelector(".input-p2");
const scoreP1 = document.querySelector(".score-p1");
const scoreP2 = document.querySelector(".score-p2");
const popupInfo = document.querySelector(".popup-info");
const showPopupBtn = document.querySelector(".btn-info");
const hidePopupBtn = document.querySelector(".btn-close");
const boxForResults = document.querySelector(".box-for-results");

let winnnerText = "";

const playerOne = {
  choice: "",
};
const playerTwo = {
  choice: "",
};

const showPopupFnt = () => {
  popupInfo.style.display = "flex";
};
const hidePopupFnt = () => {
  popupInfo.style.display = "none";
};

const showPlayerChoice = () => {
  choicePanel.style.display = "flex";
};

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

const showWinnerText = (text) => {
  const p = document.createElement("p");
  p.innerHTML = `The winner is ${text}! 💥💥💥`;
  boxForResults.appendChild(p);
};

const result = () => {
  if (playerOne.choice === "scissors" && playerTwo.choice === "paper") {
    scoreP1.textContent++;
    winnnerText = "Player 1 won!";
    return showWinnerText(winnnerText);
  } else if (playerOne.choice === "paper" && playerTwo.choice === "scissors") {
    scoreP2.textContent++;
    winnnerText = "Player 2";
    return showWinnerText(winnnerText);
  } else if (playerOne.choice === "paper" && playerTwo.choice === "rock") {
    scoreP1.textContent++;
    winnnerText = "Player 1";
    return showWinnerText(winnnerText);
  } else if (playerOne.choice === "rock" && playerTwo.choice === "paper") {
    scoreP2.textContent++;
    winnnerText = "Player 2";
    return showWinnerText(winnnerText);
  } else if (playerOne.choice === "rock" && playerTwo.choice === "scissors") {
    scoreP1.textContent++;
    winnnerText = "Player 1";
    return showWinnerText(winnnerText);
  } else if (playerTwo.choice === "rock" && playerOne.choice === "scissors") {
    scoreP2.textContent++;
    winnnerText = "Player 2";
    return showWinnerText(winnnerText);
  } else {
    winnnerText = "draw";
    return showWinnerText(winnnerText);
  }
};

startBtn.addEventListener("click", showPlayerChoice);
showPopupBtn.addEventListener("click", showPopupFnt);
hidePopupBtn.addEventListener("click", hidePopupFnt);

showResult.addEventListener("click", result);
