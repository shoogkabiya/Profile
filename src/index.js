var FirstName = document.getElementById("FirstName");
var LastName = document.getElementById("LastName");

var form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("new data");
  window.location.href = "https://github.com/shoogkabiya";
});
