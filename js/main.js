const hamburger = document.querySelector(".hamburger");
const gnbMenu = document.querySelector(".header .gnb-menu");
const headerNav = document.querySelector(".header-nav");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("open");
  if (hamburger.classList.contains("open")) {
    gnbMenu.classList.add("open");
    headerNav.style.display = "none";
  } else {
    gnbMenu.classList.remove("open");
    headerNav.style.display = "flex";
  }
});
