const $ = document;
let img_btn = $.querySelectorAll("img");
let items = $.querySelectorAll(".item");

// open FAQ part
img_btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("act_img");
    e.target.parentElement.parentElement.classList.toggle("active");
  });
});
