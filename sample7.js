const userName = document.querySelector("#user-name");
const tenPx = document.querySelector("#ten-px");
const fivePx = document.querySelector("#five-px");

tenPx.addEventListener("click", increaseByTen);

userName.style.border = 1 + "px solid black";

function increaseByTen() {
  userName.style.border = 10 + "px solid black";
}

fivePx.addEventListener("click", increaseByFive);

function increaseByFive() {
  userName.style.border = 5 + "px solid black";
}
