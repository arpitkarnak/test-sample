const userInput = document.querySelector("#user-input");

const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");

checkBtn.addEventListener("click", checkLength);

function checkLength() {
  if (userInput.value.length < 10) {
    output.innerText = "Error";
  } else {
    output.innerText = "Pass is strong";
  }
}

checkBtn.disabled = false;

userInput.addEventListener("input", doThis);

function doThis() {
  if (userInput.value.length < 5) {
    checkBtn.disabled = true;
  } else {
    checkBtn.disabled = false;
  }
}
