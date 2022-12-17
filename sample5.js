const output = document.querySelector("#output");

function check() {
  var serverURL = "https://jsonplaceholder.typicode.com/todos";
  fetch(serverURL)
    .then((res) => res.json())
    .then((json) => json.map());
}

check();
