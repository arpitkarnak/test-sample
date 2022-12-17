const userInput = document.querySelector("#user-input");
const btnRed = document.querySelector("#btn-red");

const btnBlack = document.querySelector("#btn-black");
const btnYellow = document.querySelector("#btn-yellow");

btnRed.addEventListener("click", changeIntoRed);

function changeIntoRed() {
  userInput.style.color = "red";
}

btnBlack.addEventListener("click", changeIntoBlack);

function changeIntoBlack() {
  userInput.style.color = "black";
}

btnYellow.addEventListener("click", changeIntoYellow);

function changeIntoYellow() {
  userInput.style.color = "yellow";
}
