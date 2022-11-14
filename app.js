const popupInstruction = document.querySelector(".popup-instruction");
const closePopup = document.querySelector(".btn-close");
const openPopup = document.querySelector(".show-instruction");
const btnCloseChangeName = document.querySelector(".btn-close-chn");
const boxChangeName = document.querySelector(".change-name");
const inputChangeName = document.querySelector("#new-name");
const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");

const showPopup = () => {
  popupInstruction.style.display = "flex";
};

const hidePopup = () => {
  popupInstruction.style.display = "none";
};

openPopup.addEventListener("click", showPopup);
closePopup.addEventListener("click", hidePopup);
