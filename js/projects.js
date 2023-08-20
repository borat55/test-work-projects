const insta = document.getElementById("insta");
const chromeClone = document.getElementById("chromeCline");
const coinTracker = document.getElementById("coinTracker");
const projectGuide = document.getElementById("projectGuide");

const instaBtn = document.getElementById("instaBtn");
const coinBtn = document.getElementById("coinBtn");
const chromeBtn = document.getElementById("chromeBtn");

function handleInstaBtn() {
  if (insta.style.display === "" || insta.style.display === "none") {
    insta.style.display = "flex";
    chromeClone.style.display = "none";
    coinTracker.style.display = "none";
    projectGuide.style.display = "none";
  }
}
function handleCoinBtn() {
  if (
    coinTracker.style.display === "" ||
    coinTracker.style.display === "none"
  ) {
    coinTracker.style.display = "flex";
    chromeClone.style.display = "none";
    insta.style.display = "none";
    projectGuide.style.display = "none";
  }
}
function handleChromeBtn() {
  if (
    chromeClone.style.display === "" ||
    chromeClone.style.display === "none"
  ) {
    chromeClone.style.display = "flex";
    insta.style.display = "none";
    coinTracker.style.display = "none";
    projectGuide.style.display = "none";
  }
}

instaBtn.addEventListener("click", handleInstaBtn);
coinBtn.addEventListener("click", handleCoinBtn);
chromeBtn.addEventListener("click", handleChromeBtn);
