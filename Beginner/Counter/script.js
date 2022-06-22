const $ = document;
let inc_btn = $.getElementsByClassName("inc__btn")[0];
let res_btn = $.getElementsByClassName("res__btn")[0];
let dec_btn = $.getElementsByClassName("dec__btn")[0];
let result = $.querySelector("span");

// update result++
inc_btn.addEventListener("click", () => {
  result.innerText = Number(result.innerText) + 1;
});

// reset result = 0
res_btn.addEventListener("click", () => {
  result.innerText = 0;
});

// update result--
dec_btn.addEventListener("click", () => {
  result.innerText = Number(result.innerText) - 1;
});
