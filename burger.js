let icon = document.getElementById("burgerBtn");
let burgerList = document.getElementsByClassName("burger-list");
let burgerListUl = document.querySelector("ul");
let burgerActive = false;

function burger() {
  if (burgerActive == false) {
    icon.src = "/assets/close_icon.png";
    burgerListUl.style.display = "flex";
    burgerActive = true;
  } else {
    icon.src = "/assets/hamburger_icon.png";
    burgerListUl.style.display = "none";
    burgerActive = false;
  }
}

// checking window size
function checkWindowSize() {
  if (window.innerWidth >= 730) {
    icon.src = "/assets/hamburger_icon.png";
    burgerListUl.style.display = "none";
    burgerActive = false;
  }
}

// following size changing
window.addEventListener("resize", checkWindowSize);
