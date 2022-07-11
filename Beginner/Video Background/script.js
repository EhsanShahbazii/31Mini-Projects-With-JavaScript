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
