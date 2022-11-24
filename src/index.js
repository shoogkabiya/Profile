var FirstName = document.getElementById("FirstName");
var LastName = document.getElementById("LastName");
var github = document.createElement("img");
var linkedin = document.createElement("img");
var cv = document.createElement("img");

var form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("new data");
  window.location.href = "Links.html";
});
