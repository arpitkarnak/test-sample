const clickBtn = document.querySelector("#click-btn");
const output = document.querySelector("#output");

clickBtn.addEventListener("click", fetchAPI);

function fetchAPI() {
  var serverURL = "https://jsonplaceholder.typicode.com/todos/";

  fetch(serverURL)
    .then((response) => response.json())
    .then((json) => {
      let result = "";
      output.innerHTML = json.map((todo) => {
        result += `<p>${todo.title}</p>
        <p>${todo.completed}`;
        return result;
      });
    });
}
