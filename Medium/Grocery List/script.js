const $ = document;
let submit = $.getElementsByClassName("submit")[0];
let input = $.querySelector("input");
let list = $.querySelector("ul");
let remove = $.getElementsByClassName("clearAll")[0];
let del = $.getElementsByClassName("delete");
let edit = $.getElementsByClassName("edit");

window.onload = () => {
  addEvents();
};

const createList = (text) => {
  let temp = `<li>
        <span>${text}</span>
        <div>
          <img
            class="edit"
            src="https://img.icons8.com/external-dashed-line-kawalan-studio/50/000000/external-edit-user-interface-dashed-line-kawalan-studio-2.png"
          />
          <img
            class="delete"
            src="https://img.icons8.com/windows/32/000000/trash.png"
          />
        </div>
      </li>`;

  let liCount = $.querySelectorAll("li");
  if (liCount.length < 5) {
    list.innerHTML += temp;
    addEvents();
  } else {
    alert("you can only 5 items in list");
  }
};

submit.addEventListener("click", () => {
  input.value && createList(input.value);
  input.value = "";
});

const addEvents = () => {
  for (let i = 0; i < del.length; i++) {
    del[i].addEventListener("click", (e) => {
      list.removeChild(e.target.parentElement.parentElement);
    });
    edit[i].addEventListener("click", (e) => {
      let news = prompt("Edit:");
      e.target.parentElement.parentElement.childNodes[1].innerText = news;
    });
  }
};

remove.addEventListener("click", () => {
  list.innerHTML = "";
});
