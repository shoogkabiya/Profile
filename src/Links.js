const github = document.createElement("img");
const links = document.querySelector(".links");
const linkedin = document.createElement("img");
const cv = document.createElement("img");

function displayImage() {
  github.src = "../images/github.webp";
  github.classList.add("github");
  links.appendChild(github);

  linkedin.src = "../images/linkedin.png";
  linkedin.classList.add("linkedin,");
  links.appendChild(linkedin);

  cv.src = "../images/cv.png";
  cv.classList.add("cv");
  links.appendChild(cv);
}

displayImage();
