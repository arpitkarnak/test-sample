//Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc.

const userName = document.querySelector("#user-name");
const output1 = document.querySelector("#output");
const btnClick = document.querySelector("#btn-click");

var server = "https://api.agify.io";

btnClick.addEventListener("click", callApi);

function serverCall(value) {
  return server + "?name=" + value;
}

function callApi() {
  var userText = userName.value;
  fetch(serverCall(userText))
    .then((response) => response.json())
    .then((json) => {
      var newAge = json.age;
      output1.innerText = "Your Age :" + newAge;
    });
}
