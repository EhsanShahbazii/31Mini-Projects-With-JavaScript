let countrySelectBox = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");

let countriesData = {
  Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
  Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
  US: ["Los Angles", "San Diego", "Chicago"],
};

countrySelectBox.addEventListener("change", () => {
  if (countrySelectBox.value === "Please Select") {
    citySelect.innerHTML = "";
    citySelect.innerHTML += "<option>Select City</option>";
  } else {
    let mainCountryName = countrySelectBox.value; // Us
    let mainCountryCities = countriesData[mainCountryName];

    citySelect.innerHTML = "";

    mainCountryCities.forEach(function (city) {
      citySelect.innerHTML += "<option>" + city + "</option>";
    });
  }
});
