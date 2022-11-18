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
const darkBtn = document.querySelector(".btn-dark");
const lightBtn = document.querySelector(".btn-light");
const invtationBox = document.querySelector(".invitation");
const settingBtn = document.querySelector(".settings");

let root = document.documentElement;
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

const showSettings = () => {
  const settingsHtml = `
  <div class="settings-box">
  <h2>Settings</h2>
  <div class="buttons-settings">
    <button class="btn btn-dark">Dark</button>
    <button class="btn btn-light">Light</button>
  </div>
  `;
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

const changeToLight = () => {
  root.style.setProperty("--first-color", "#302b63");
  root.style.setProperty("--second-color", " rgb(238, 229, 229)");
  invtationBox.style.backgroundColor = "#fff";
};
const changeToDark = () => {
  root.style.setProperty("--second-color", "#302b63");
  root.style.setProperty("--first-color", " rgb(238, 229, 229)");
};

lightBtn.addEventListener("click", changeToLight);
darkBtn.addEventListener("click", changeToDark);

startBtn.addEventListener("click", showPlayerChoice);
showPopupBtn.addEventListener("click", showPopupFnt);
hidePopupBtn.addEventListener("click", hidePopupFnt);

showResult.addEventListener("click", result);
