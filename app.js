const startBtn = document.querySelector(".start");
const choicePanel = document.querySelector(".choice");
const choiceTitle = document.querySelector(".choice-title");
const rounds = document.getElementById("rounds");
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
const settingsBox = document.querySelector(".settings-box");
const settingBtn = document.querySelector(".settings");
const nameP1 = document.querySelector(".player1-name");
const nameP2 = document.querySelector(".player2-name");
const inputNameP1 = document.querySelector(".input-name-p1");
const inputNameP2 = document.querySelector(".input-name-p2");
const hideSettingsBtn = document.querySelector(".settings-close");
const setSettingsBtn = document.querySelector(".settings-set");
const player1El = document.querySelector(".player--1");
const player2El = document.querySelector(".player--2");
const resultTextBox = document.querySelector(".result-text");
const resultText = document.querySelector(".result-text--js");
const backBtn = document.querySelector(".back");
const gameRoundsText = document.querySelector(".chice-title");
const numberOfRounds = document.querySelector(".pick-number-round");
const roundNum = document.querySelector(".round-number");
const roundsHistory = document.querySelector(".rounds-history");
const showRoundsResultsBtn = document.querySelector(".show-rounds-results-btn");

let root = document.documentElement;
let winnnerText = "";
let paragraph;
let activePlayer = 0;

const playerOne = {
  choice: "",
};
const playerTwo = {
  choice: "",
};

const changeToLight = () => {
  root.style.setProperty("--first-color", "#018786");
  root.style.setProperty("--second-color", "#fff");
  root.style.setProperty("--text-color", "#0f60b6");
};
const changeToDark = () => {
  root.style.setProperty("--second-color", "#222222");
  root.style.setProperty("--first-color", "#90a4ae");
  root.style.setProperty("--text-color", "#075589");
};

lightBtn.addEventListener("click", changeToLight);
darkBtn.addEventListener("click", changeToDark);

const showPopupFnt = () => {
  popupInfo.style.display = "flex";
};
const hidePopupFnt = () => {
  popupInfo.style.display = "none";
};

const showSettings = () => {
  settingsBox.style.display = "flex";
};

const hideSettings = () => {
  settingsBox.style.display = "none";
};

const showRoundsNum = () => {
  numberOfRounds.textContent = rounds.value;

  rounds.value != 1
    ? (gameRoundsText.innerHTML = `Game to ${rounds.value} points`)
    : (gameRoundsText.innerHTML = `Game to ${rounds.value} point`);
};

const changeNames = () => {
  nameP1.textContent = inputNameP1.value;
  nameP2.textContent = inputNameP2.value;
  showRoundsNum();
  hideSettings();
};

const showRoundsHistory = () => {
  roundsHistory.style.display = "flex";
};

const showPlayerChoice = () => {
  choicePanel.style.display = "flex";
};

const hidePlayerChoice = () => {
  choicePanel.style.display = "none";
  scoreP1.textContent = 0;
  scoreP2.textContent = 0;
  roundNum.value = 0;
  resultTextBox.style.visibility = "hidden";
};

const switchPlayer = () => {
  player1El.classList.toggle("player--active");
  player2El.classList.toggle("player--active");
};

btnChoiceP1.forEach((e) => {
  e.addEventListener("click", () => {
    inputP1.value = e.children[1].textContent;
    playerOne.choice = e.children[1].textContent;
    switchPlayer();
  });
});

btnChoiceP2.forEach((e) => {
  e.addEventListener("click", () => {
    inputP2.value = e.children[1].textContent;
    playerTwo.choice = e.children[1].textContent;
    roundNum.textContent++;
    switchPlayer();
    checkResult();
    finalWinner();
  });
});

const showResultText = (winner) => {
  resultTextBox.style.visibility = "visible";
  resultText.textContent = `${winner}`;
};

const showWinnerText = (text) => {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = `Round ${roundNum.textContent}: ${text}!`;
  roundsHistory.appendChild(paragraph);
};

const checkResult = () => {
  let rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (playerOne.choice === playerTwo.choice) {
    winnnerText = "Draw";
    let result = "Draw!";
    showWinnerText(result);
    return showResultText(result);
  } else {
    result =
      rules[playerOne.choice] === playerTwo.choice
        ? `${nameP1.textContent} won!`
        : `${nameP2.textContent} won!`;

    result === `${nameP1.textContent} won!`
      ? scoreP1.textContent++
      : scoreP2.textContent++;
    showWinnerText(result);
    return showResultText(result);
  }
};

const finalWinner = () => {
  if (
    scoreP1.textContent === rounds.value ||
    scoreP2.textContent === rounds.value
  )
    if (scoreP1.textContent > scoreP2.textContent) {
      console.log(scoreP1.textContent);
      nameP1.textContent = nameP1.textContent + " WINNER !!!";
    } else {
      console.log(scoreP2.textContent);
      nameP2.textContent = nameP2.textContent + " WINNER !!!";
    }
};

startBtn.addEventListener("click", showPlayerChoice);
backBtn.addEventListener("click", hidePlayerChoice);
settingBtn.addEventListener("click", showSettings);
hideSettingsBtn.addEventListener("click", hideSettings);
setSettingsBtn.addEventListener("click", changeNames);
showPopupBtn.addEventListener("click", showPopupFnt);
hidePopupBtn.addEventListener("click", hidePopupFnt);
showRoundsResultsBtn.addEventListener("click", showRoundsHistory);
