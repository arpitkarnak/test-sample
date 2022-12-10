const userInput = document.querySelector("#input");
const submitButton = document.querySelector("#button");

userInput.addEventListener("input", () => {
  if (input.value.length > 10) {
    submitButton.style.display = "none";
  } else {
    submitButton.style.display = "inline";
  }
});
