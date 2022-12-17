const userName = document.querySelector("#user-name");
const userPass = document.querySelector("#user-pass");

const btnCheck = document.querySelector("#btn-check");
const output = document.querySelector("#output");

btnCheck.addEventListener("click", checkName);

function checkName() {
  var name = userName.value;
  var pass = userPass.value;

  if (pass.includes(name)) {
    output.innerText = "Error DOnt include name";
  } else {
    output.innerText = "Success";
  }
}
