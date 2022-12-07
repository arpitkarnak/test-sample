const heading = document.querySelector("#heading");

const btnIncrease = document.querySelector("#btn-increase");
const btnDescrease = document.querySelector("#btn-descrease");

testFontSize = 32;

function increaseFontSize() {
  testFontSize = testFontSize + 2;

  console.log(testFontSize);
  heading.style.fontSize = testFontSize + "px";
}

function descreaseFontSize() {
  testFontSize = testFontSize - 2;

  console.log(testFontSize);
  heading.style.fontSize = testFontSize + "px";
}

btnIncrease.addEventListener("click", increaseFontSize);
btnDescrease.addEventListener("click", descreaseFontSize);
