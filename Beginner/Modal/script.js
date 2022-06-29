const $ = document;
let opModal = $.getElementsByClassName("opModal")[0];
let closeModal = $.getElementsByClassName("close")[0];
let modal = $.getElementsByClassName("modal")[0];

// active modal part
opModal.addEventListener("click", () => {
  modal.classList.toggle("active");
});

// remove modal part
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});
