const popupInstruction = document.querySelector(".popup-instruction");
const closePopup = document.querySelector(".btn-close");
const openPopup = document.querySelector(".show-instruction");

const showPopup = () => {
  popupInstruction.style.display = "flex";
};

const hidePopup = () => {
  popupInstruction.style.display = "none";
};

openPopup.addEventListener("click", showPopup);
closePopup.addEventListener("click", hidePopup);
