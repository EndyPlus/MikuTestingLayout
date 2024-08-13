let icon = document.getElementById("burgerBtn");
let burgerList = document.getElementsByClassName("burger-list");
let burgerListUl = document.querySelector("ul");

const activeBurgerMenu = localStorage.getItem("status");

function enableBurgerMenu() {
  icon.src = "/assets/close_icon.png";
  burgerListUl.style.display = "flex";
  localStorage.setItem("status", "active");
}

function disableBurgerMenu() {
  icon.src = "/assets/hamburger_icon.png";
  burgerListUl.style.display = "none";
  localStorage.removeItem("status");
}

function burger() {
  if (!activeBurgerMenu) {
    enableBurgerMenu();
  } else {
    disableBurgerMenu();
  }
}

// checking window size
function checkWindowSize() {
  if (window.innerWidth > 730) {
    icon.src = "/assets/hamburger_icon.png";
    burgerListUl.style.display = "none";
    burgerActive = false;
  }
}

function checkMobileReload() {
  if (window.innerWidth <= 730 && activeBurgerMenu == "active") {
    enableBurgerMenu();
  }
}

// following size changing
window.addEventListener("resize", checkWindowSize);

// following page reloading
window.addEventListener("load", checkMobileReload);
