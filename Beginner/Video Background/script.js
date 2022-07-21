<<<<<<< HEAD
const $ = document;
let video = $.querySelector("video");
let btn = $.getElementsByClassName("up")[0];

let flag = false;
btn.addEventListener("click", (event) => {
  btn.classList.toggle("click");
  if (flag) {
    flag = false;
    video.play();
  } else {
    flag = true;
    video.pause();
  }
});
=======
const $ = document;
let video = $.querySelector("video");
let btn = $.getElementsByClassName("up")[0];

// play or pause video
let flag = false;
btn.addEventListener("click", () => {
  btn.classList.toggle("click");
  
  if (flag) {
    flag = false;
    video.play();
  } else {
    flag = true;
    video.pause();
  }
});
>>>>>>> 8ebb290c5a94e2d217c9394661f11c8af66ede3a
