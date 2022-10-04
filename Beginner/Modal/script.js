const $ = document;
let opModal = $.getElementsByClassName("opModal")[0];
let closeModal = $.getElementsByClassName("close")[0];
let modal = $.getElementsByClassName("modal")[0];

opModal.addEventListener("click", () => {
  modal.classList.toggle("active");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});
