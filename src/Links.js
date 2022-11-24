const github = document.querySelector(".github");
const links = document.querySelector(".links");
const linkedin = document.querySelector(".linkedin");
const cv = document.querySelector(".cv");

function displayImage() {
  github.src = "../images/github.webp";
  // links.appendChild(github);
  linkedin.src = "../images/linkedin.png";
  // links.appendChild(linkedin);
  cv.src = "../images/cv.png";
  // links.appendChild(cv);
}
displayImage();
