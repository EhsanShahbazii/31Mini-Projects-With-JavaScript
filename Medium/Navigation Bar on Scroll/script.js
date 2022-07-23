const $ = document;
let menu = $.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 30) {
    menu.classList.add("scroll");
  } else {
    menu.classList.remove("scroll");
  }
});
