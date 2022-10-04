const $ = document;
let menu1 = $.getElementsByClassName("tab")[0];
let menu2 = $.getElementsByClassName("tab1")[0];
let logo = $.getElementsByClassName("nav")[0];

// show and hide menu
logo.addEventListener("click", () => {
  menu2.classList.toggle("active");
});

// close menu if width is more than 569
window.addEventListener("resize", () => {
  let x = window.innerWidth;
  if (x >= 569) {
    menu2.classList.remove("active");
  }
});
