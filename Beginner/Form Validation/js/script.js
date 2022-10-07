const $ = document;
let usernameMessage = $.querySelector(".username-validation");
let passwordMessage = $.querySelector(".password-validation");
let usernameInput = $.querySelector(".username");
let passwordInput = $.querySelector(".password");

function usernameValidation() {
  setData(usernameInput, usernameMessage, "Username", 12);
}

function passwordValidation() {
  setData(passwordInput, passwordMessage, "Password", 8);
}

const setData = (element, messageElement, type, limit) => {
  if (element.value.length < limit) {
    messageElement.style.color = "red";
    messageElement.innerHTML = "Must Contain 12 Character (Min)";
    messageElement.style.display = "block";
  } else {
    messageElement.style.color = "green";
    messageElement.innerHTML = `Correct ${type} Value`;
  }
};
