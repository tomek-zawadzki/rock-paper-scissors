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
  showRoundsNum();
};

const changeNames = () => {
  nameP1.textContent = inputNameP1.value;
  nameP2.textContent = inputNameP2.value;
  hideSettings();
};

const showPlayerChoice = () => {
  choicePanel.style.display = "flex";
};

const switchPlayer = () => {
  player1El.classList.toggle("player--active");
  player2El.classList.toggle("player--active");
};

const showRoundsNum = () => {
  const roundsNum = document.createElement("h2");
  roundsNum.classList.add("choice-title");
  rounds.value != 1
    ? (roundsNum.innerHTML = `Game to ${rounds.value} wins`)
    : (roundsNum.innerHTML = `Game to ${rounds.value} win`);
  choicePanel.insertAdjacentElement("afterbegin", roundsNum);
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
    switchPlayer();
    checkResult();
  });
});

const showWinnerText = (text) => {
  // boxForResults.removeChild(boxForResults.lastChild);

  const paragraph = document.createElement("p");
  paragraph.innerHTML = `Result: ${text}! 💥💥💥`;
  boxForResults.appendChild(paragraph);
};

const checkResult = () => {
  let rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (inputP1.value === "" || inputP2.value === "") {
    const choiceError = document.createElement("p");
    choiceError.innerHTML = "Please choose paper, rock or scissors";
    boxForResults.appendChild(choiceError);
  } else if (playerOne.choice === playerTwo.choice) {
    winnnerText = "Draw";
    return showWinnerText(winnnerText);
  } else {
    const result =
      rules[playerOne.choice] === playerTwo.choice
        ? `${nameP1.textContent} won`
        : `${nameP2.textContent} won`;

    result === `${nameP1.textContent} won`
      ? scoreP1.textContent++
      : scoreP2.textContent++;

    return showWinnerText(result);
  }
};

const changeToLight = () => {
  root.style.setProperty("--first-color", "#94D1BE");
  root.style.setProperty("--second-color", "#fff");
  root.style.setProperty("--text-color", "#3B413C");
};
const changeToDark = () => {
  root.style.setProperty("--second-color", "#302b63");
  root.style.setProperty("--first-color", " rgb(238, 229, 229)");
  root.style.setProperty("--text-color", "rgb(143, 172, 205)");
};

settingBtn.addEventListener("click", showSettings);
hideSettingsBtn.addEventListener("click", hideSettings);
setSettingsBtn.addEventListener("click", changeNames);
lightBtn.addEventListener("click", changeToLight);
darkBtn.addEventListener("click", changeToDark);

startBtn.addEventListener("click", showPlayerChoice);
showPopupBtn.addEventListener("click", showPopupFnt);
hidePopupBtn.addEventListener("click", hidePopupFnt);

// showResult.addEventListener("click", checkResult);
