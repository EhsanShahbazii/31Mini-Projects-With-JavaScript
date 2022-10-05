const $ = document;
let img = $.querySelector("img");
let title = $.querySelector("h4");
let text = $.querySelector("p");
let buttons = $.querySelectorAll("button");

const data = [
  {
    id: "History",
    img: "https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5378.jpg?w=1060&t=st=1664998488~exp=1664999088~hmac=1d0d9fb3260884ebe2d1334714fda6ae2f5ae372ec2085a73ab3624a12b5b309",
    text: "lorem nsecnsequuntursi delectus rem inventore quod conse rem inventore quod consequuntur snsequuntursinsequuntursi delectus rem inventore quod conse rem inventore quod consequuntur si delectus rem inventore quod consequuntursisi delectus rem quuntur delectus rem inventore quod conse rem inventore quod consequuntur si delectus rem inventore quod consequuntursisi delectus rem quunturus rem inventore quod consequuntursisi delectus rem quunturtetur adipisicing elit. Non",
  },
  {
    id: "Vision",
    img: "https://img.freepik.com/free-photo/posing-thoughtful-portrait-medieval-young-man-vintage-clothing-standing-dark-background-male-model-as-duke-prince-royal-person-concept-comparison-eras-modern-fashion_155003-33898.jpg?w=1060&t=st=1664998438~exp=1664999038~hmac=70262955d9b97ffe3bced4564fba994b800fbead12736733693d6785ae6e8b9b",
    text: "si delectus rem inventore quod consequuntursi delectus rem inventore quod consequuntursi delectussi delectus rem inventore quod consequuntursi delectus rem inventore quod consequuntursi delectus rem inventore quod conse rem inventore quod consequuntur si delectus rem inventore quod consequuntursisi delectus rem quuntursi delectus rem inventore quod consequuntursius rem inventore quod consequuntur",
  },
  {
    id: "Goals",
    img: "https://img.freepik.com/free-photo/man-jumping-with-joy-by-lake_53876-40.jpg?w=1060&t=st=1664996218~exp=1664996818~hmac=00859c3fe86b80b2895e84b9dccf53b6f208f8c47408a9786714a695fc2a8807",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non veroLorem ipsum dolosi delectus rem inventore quod consequuntursi delectus rem inventore quod consequuntursi delectus rem inventore quod consesi delectus rem inventore quod consequuntursi delectus rem inventore quod consequuntursi delectus rem inventore quod conseing elit. Non veroLorem ipsum dolor, sit amet consectetur adipisicing elit. Non vero",
  },
];

window.onload = () => {
  img.src = data[0].img;
  title.innerText = data[0].id;
  text.innerText = data[0].text;
  buttons[0].classList.add("select");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    removeSelect();
    e.target.classList.add("select");

    let key = e.target.innerText;
    let current = data.filter((item) => item.id == key)[0];
    img.src = current.img;
    title.innerText = current.id;
    text.innerText = current.text;
    let x = 0.2;
    let y = 0.1;
    let z = x + y;
    console.log(z === 0.3);
  });
});

const removeSelect = () => {
  buttons.forEach((btn) => {
    btn.classList.remove("select");
  });
};
