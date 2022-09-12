let redValue, greenValue, blueValue;

setInterval(function () {
  redValue = Math.floor(Math.random() * 255);
  greenValue = Math.floor(Math.random() * 255);
  blueValue = Math.floor(Math.random() * 255);

  console.log("rgb(" + redValue + "," + greenValue + "," + blueValue + ");");

  document.body.style.backgroundColor =
    "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
}, 2000);
