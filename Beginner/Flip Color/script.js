const $ = document;
let codeSpan = $.getElementsByClassName("code__span")[0];
let button = $.querySelector("button");

// create random number with min and max arguments.
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

// create random color with [number, number, number] formats.
const createRandomColor = () => {
  return [randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)];
};

// convert decimal number to hex number
const decToHex = (num) => {
  let hex = num.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};

// convert rgb to hex. example: rgb(42,137,42) => #2a892a
const rgbToHex = (r, g, b) => {
  return "#" + decToHex(r) + decToHex(g) + decToHex(b);
};

button.addEventListener("click", () => {
  let newColor = createRandomColor(); // create random color
  let hexColor = rgbToHex(newColor[0], newColor[1], newColor[2]); // convert rgb to hex

  $.body.style.backgroundColor = hexColor; // set color for body
  codeSpan.innerText = hexColor; // add color for show
  codeSpan.style.color = hexColor; // set color for color text
});
