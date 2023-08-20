const navBtn = document.getElementById("navBtn");
const menu = document.querySelector(".visibleMenu");

function handleMenuTouchend(e) {
  if (e.type === "touchend") {
    menu.classList.toggle("hidden");
  }
}

function handleNavBtnTouchend(e) {
  if (e.type === "touchstart") {
    menu.classList.toggle("active");
  }
}

function handleNavBtnTouchstart(e) {
  if (e.type === "touchstart") {
    menu.classList.toggle("active");
  }
}

function handleNavBtnClick() {
  menu.classList.toggle("active");
}

navBtn.addEventListener("click", handleNavBtnClick);
navBtn.addEventListener("touchstart", handleNavBtnTouchstart);
navBtn.addEventListener("touchstart", handleNavBtnTouchend);
menu.addEventListener("touchend", handleMenuTouchend);
