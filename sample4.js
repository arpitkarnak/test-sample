var userInput = document.querySelector("#user-input");

const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output");

userInput.addEventListener("input", doThis);

submitBtn.disabled = true;

function doThis() {
  if (userInput.value.length <= 0 || userInput.value.length > 5) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
  output.innerText = "you length :  " + userInput.value.length;
}
