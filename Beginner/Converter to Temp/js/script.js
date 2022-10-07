let $ = document;

const firstValue = $.querySelector(".C");
const secondValue = $.querySelector(".F");
const converter = $.querySelector("#converter");
const result = $.querySelector(".result");
const convertButton = $.querySelector(".convertButton");
const resetButton = $.querySelector(".resetButton");
const changeButton = $.querySelector(".changeButton");

const convert = () => {
  if (converter.value === "") {
    result.innerHTML = "insert correct value";
    result.style.color = "#993300";
  } else {
    if (firstValue.innerHTML === "°C") {
      let resultValue = converter.value * 1.8 + 32;
      result.style.color = "rgb(255, 255, 102)";
      result.innerHTML = converter.value + "°C To " + resultValue + "°F";
    } else {
      let resultValue = ((converter.value - 32) * 5) / 9;
      result.style.color = "rgb(255, 255, 102)";
      result.innerHTML =
        converter.value + "°F To " + resultValue.toFixed(2) + "°C";
    }
  }
};

const reset = () => {
  result.innerHTML = "";

  converter.value = "";
};

const swap = () => {
  if (firstValue.innerHTML === "°C") {
    firstValue.innerHTML = "°F";
    secondValue.innerHTML = "°C";
    converter.setAttribute("placeholder", "°F");
    document.title = "°F to °C";
  } else {
    firstValue.innerHTML = "°C";
    secondValue.innerHTML = "°F";
    converter.setAttribute("placeholder", "°C");
    document.title = "°C to °F";
  }
};

convertButton.addEventListener("click", convert);
resetButton.addEventListener("click", reset);
changeButton.addEventListener("click", swap);
