const dots = document.getElementById("dots");
const moreText = document.getElementById("more");
const readMoreBtn = document.getElementById("readMoreBtn");

function handleReadMoreBtn() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMoreBtn.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    readMoreBtn.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

readMoreBtn.addEventListener("click", handleReadMoreBtn);
