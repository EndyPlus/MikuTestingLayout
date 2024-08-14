let burgerBtn = document.getElementById("burgerBtn");

let burgerList = document.getElementsByClassName("burger-list");
let burgerListUl = document.querySelector("ul");

function enableBurgerMenu() {
  burgerBtn.classList.add("active");
  burgerListUl.style.display = "flex";
  localStorage.setItem("status", "active");
}

function disableBurgerMenu() {
  burgerBtn.classList.remove("active");
  burgerListUl.style.display = "none";
  localStorage.removeItem("status");
}

function burger() {
  if (localStorage.getItem("status") !== "active") {
    enableBurgerMenu();
  } else {
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
