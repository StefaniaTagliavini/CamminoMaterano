// js per sticky navbar

window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
// When the user scrolls the page, execute myFunction

// toggle menu dropdown on click

const allDropdowns = document.querySelectorAll(".navbar__items");
const DROP_CLASS = "drop";
const menu = document.querySelector(".menu");

menu.addEventListener("click", ({ target }) => {
  if (!target.classList.contains("menu-dropdown")) return;

  const parent = target.parentNode;
  const navItems = parent.querySelector(".navbar__items");

  allDropdowns.forEach(
    (el) => el !== navItems && el.classList.remove(DROP_CLASS)
  );

  if (navItems) {
    navItems.classList.toggle(DROP_CLASS);
  }
});
