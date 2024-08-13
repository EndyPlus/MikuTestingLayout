let icon = document.getElementById("burgerBtn");
let burgerList = document.getElementsByClassName("burger-list");
let burgerListUl = document.querySelector("ul");

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
  console.log("Click");
  if (localStorage.getItem("status") !== "active") {
    console.log("Open");
    enableBurgerMenu();
  } else {
    console.log("Close");
    disableBurgerMenu();
  }
}

// checking window size
function checkWindowSize() {
  if (window.innerWidth > 730) {
    disableBurgerMenu();
  }
}

function checkMobileReload() {
  let statusValue = localStorage.getItem("status");
  if (window.innerWidth <= 730) {
    if (statusValue == "active") {
      enableBurgerMenu();
    } else {
      disableBurgerMenu();
    }
  }
}

// following size changing
window.addEventListener("resize", checkWindowSize);

// following page reloading
window.addEventListener("load", checkMobileReload);
