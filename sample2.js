const checkPassword = document.querySelector("#check-password");
const btnCheck = document.querySelector("#btn-check");
const output1 = document.querySelector("#output");

console.log(checkPassword.value.length);

function check() {
  if ((checkPassword.value.length = 0)) {
    output1.innerText = "Please provide the value";
  } else if (checkPassword.value.length < 10) {
    output1.innerText = "Please provide password more than 10 characters";
  } else if ((checkPassword.value.length = " ")) {
    output1.innerText = "Please Dont put space in your password";
  } else {
    output1.innerText = "Password is strong enough";
    console.log(checkPassword.value.length);
  }
}

btnCheck.addEventListener("click", check);
