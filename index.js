var FirstName = document.getElementById("FirstName");
var LastName = document.getElementById("LastName");

var form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // FirstName = FirstName.value;
  // console.log("FirstName:", FirstName);
  // LastName = LastName.value;
  // console.log("LastName:", LastName);

  console.log("new data");
  // <a href="Links.js" />;
  window.location.href = "https://github.com/shoogkabiya";
});
