const $ = document;
let menuIcon = $.getElementsByClassName("menu")[0];
let sidebar = $.getElementsByClassName("sidebar")[0];

let icons = [
  "https://img.icons8.com/ios-filled/50/000000/menu--v1.png",
  "https://img.icons8.com/external-becris-lineal-becris/64/000000/external-cancel-mintab-for-ios-becris-lineal-becris.png",
];

let i = 1;
menuIcon.addEventListener("click", (e) => {
  e.target.src = icons[i];
  sidebar.classList.toggle("active");
  i == 0 ? i++ : i--;
});
