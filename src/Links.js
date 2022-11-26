const github = document.createElement("img");
const links = document.querySelector(".links");
const linkedin = document.createElement("img");
const cv = document.createElement("img");

function displayImage() {
  github.src = "../images/github.webp";
  github.classList.add("github");
  links.appendChild(github);
  github.onclick = function (event) {
    window.location.href = "https://github.com/shoogkabiya";
  };

  linkedin.src = "../images/linkedin.png";
  linkedin.classList.add("linkedin");
  links.appendChild(linkedin);
  linkedin.onclick = function (event) {
    window.location.href = "https://www.linkedin.com/in/shoog-kabiya/";
  };

  cv.src = "../images/cv.png";
  cv.classList.add("cv");
  links.appendChild(cv);
}

displayImage();
