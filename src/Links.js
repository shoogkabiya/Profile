const github = document.createElement("img");
const links = document.querySelector(".links");
const linkedin = document.createElement("img");
const cv = document.createElement("img");

function displayImage() {
  github.src = "../images/github.webp";
  links.appendChild(github);
  linkedin.src = "../images/linkedin.png";
  links.appendChild(linkedin);
  cv.src = "../images/cv.png";
  links.appendChild(cv);
  imageshoog.src = "../images/shoog.jpg";
}

displayImage();
