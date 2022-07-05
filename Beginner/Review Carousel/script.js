const $ = document;
let img = $.querySelector("img");
let title = $.querySelector("h4");
let span = $.querySelector("span");
let text = $.querySelector("p");
let pre = $.getElementsByClassName("pre")[0];
let next = $.getElementsByClassName("next")[0];

// this is data like database
const data = [
  {
    id: 1,
    img: "./1.jpg",
    title: "lorem epson",
    span: "Web developer",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ipsum dolor sit amet consecteturipsum dolor sit amet consectetur ",
  },
  {
    id: 2,
    img: "./2.jpg",
    title: "many pixels",
    span: "Back-End developer",
    text: "Lorem ipsum ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur",
  },
  {
    id: 3,
    img: "./3.jpg",
    title: "scarllet jon",
    span: "Front-End developer",
    text: "Lorem ipsum dolor sitipsum dolor sit amet consecteturcteturipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    id: 4,
    img: "./4.jpg",
    title: "Thomas shelby",
    span: "Web developer",
    text: "Loipsum dolor sit amet conser sit amet consecteturipsum dolor sit amet consecteturipsum dolor sit amet consecteturtetur ",
  },
];

let current = 1;

// upload data in first
window.onload = () => {
  setData(data);
};

// add pre logic
pre.addEventListener("click", () => {
  if (current != 1) {
    current--;
  } else {
    current = 4;
  }

  setData(data);
});

// add next logic
next.addEventListener("click", () => {
  if (current != 4) {
    current++;
  } else {
    current = 1;
  }

  setData(data);
});

// set variables
const setData = (arr) => {
  img.src = arr[current - 1].img;
  title.innerText = arr[current - 1].title;
  span.innerText = arr[current - 1].span;
  text.innerText = arr[current - 1].text;
};
