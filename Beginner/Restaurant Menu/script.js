const $ = document;
let container = $.querySelector("#con");
let buttons = $.querySelectorAll("button");

const data = [
  {
    id: 1,
    type: "BreakFast",
    image:
      "https://img.freepik.com/free-photo/english-breakfast-dish_1203-9631.jpg?w=1060&t=st=1664924237~exp=1664924837~hmac=6042422518a2760bfb0b1474e49a6e2040bf81864934553d766c6301b3370102",
    title: "English Susage eggs",
    price: "5.49",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio totam Lorem ipsum dolor sit, amet cLorem ipsum dolor sit, amet c",
  },
  {
    id: 2,
    type: "BreakFast",
    image:
      "https://img.freepik.com/premium-photo/eggs-benedict_33996-356.jpg?w=1060",
    title: "Hot eggs Bread lofa",
    price: "8.99",
    text: "t consectetur ad dolor sit dolor sit dolor sit dolor sit dolor sit dolor sitipisicing elit. Odio totam Lorem ipsum dolor sit, amet cLorem ipsum dolor sit, amet c",
  },
  {
    id: 3,
    type: "Lunch",
    image:
      "https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?w=1060&t=st=1664924456~exp=1664925056~hmac=965203c9d740f003bebfb8e17bbbd51103e5deb8396b4ff4256e947219e387b6",
    title: "Burger with hot fries",
    price: "11.29",
    text: "tur adipisicing elit. Odio totam Lorem ipsum dolor sit, amet cLorem ipsum dolor sit, amet icing elit. Odioicing elit. Odioicing elit. Odioicing elit. Odioicing elit. Odioicing elit. Odioc",
  },
  {
    id: 4,
    type: "Lunch",
    image:
      "https://img.freepik.com/free-photo/fresh-salad-with-vegetables-tomatoes-red-onions-lettuce-quail-eggs-healthy-food-diet-concept-vegetarian-food_2829-20246.jpg?w=1060&t=st=1664924490~exp=1664925090~hmac=832aa3a77b5f728dedbb7ba1f7b4c43133b836f508fcc3b3b85b6c451b8b5f1e",
    title: "salad with potins",
    price: "7.89",
    text: "sectetur aadipisicing elit. adipisicing elit. dipisicing elit. Odio totam Lorem ipsum dolor sit, amet cLorem ipsum dolor sit, amet c",
  },
  {
    id: 5,
    type: "Lunch",
    image:
      "https://img.freepik.com/premium-photo/penne-pasta-tomato-sauce-with-meat-tomatoes-decorated-with-pea-sprouts-dark-table_2829-3412.jpg?w=1060",
    title: "italian pasta",
    price: "15.49",
    text: "Lorem ipsum dolor sit,orem ipsum dolor sit, ame amet consectetur adipisicing elit. Odio totam Lorem ipsum dolor sit, amet cLorem ipsum dolor sit, amet c",
  },
  {
    id: 6,
    type: "Lunch",
    image:
      "https://img.freepik.com/premium-photo/steak-beef-beef-steak-medium-with-red-pepper-aromatic-herbs-fried-onion_147620-1059.jpg?w=996",
    title: "Special Stake migos",
    price: "27.99",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio totam Lorem ipsum dolorem ipsum dolor sorem ipsum dolor sorem ipsum dolor sorem ipsum dolor sor sit, amet cLorem ipsum dolor sit, amet c",
  },
  {
    id: 7,
    type: "Shakes",
    image:
      "https://img.freepik.com/free-photo/iced-pink-cocktail-fresh-strawberries_144627-1125.jpg?w=1060&t=st=1664924614~exp=1664925214~hmac=aa92a13ecad06c59199e04b46d0792c30876d4494f1bd083d002ee47bda06838",
    title: "strawberry with milk",
    price: "4.49",
    text: "Lorem ipsum doLorem ipsum dolor siLorem ipsum dolor silor sit, amet consectetur aditotam Lorem ipsum dolor sit, amet cLorem ipsum dolor sit, amet c",
  },
  {
    id: 8,
    type: "Dinner",
    image:
      "https://img.freepik.com/free-photo/homemade-pasta-with-herbs-tomatoes_1220-5185.jpg?w=1060&t=st=1664924662~exp=1664925262~hmac=7df5064cbf7f75f93ac3fd6cd2c94aaf07d7c95115a876b0a54cc383903dbd65",
    title: "nice pasta with oil",
    price: "11.49",
    text: "r sit, amet consectetur adipisicing elit. Odio totam Lorem ipsum dolor sit, amet cLorem ipsum doLorem ipsum doloLorem ipsum dololor sit, amet c",
  },
  {
    id: 9,
    type: "Dinner",
    image:
      "https://img.freepik.com/free-photo/grilled-chicken-breast-fresh-vegetable-salad-tomatoes-cucumbers-lettuce-leaves-chicken-salad-healthy-food-flat-lay-top-view_2829-4244.jpg?w=1060&t=st=1664924701~exp=1664925301~hmac=6fc92f99d9aee0f1d8b307b0d613a942442eef396219e83e295dd6ede86bb835",
    title: "chicken with vegetables",
    price: "18.49",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio totam Lorem ipsum dolor sit, amet cLorem ipsum dolor sit, amet c",
  },
];

window.onload = () => {
  data.forEach((newItem) => {
    createItem(newItem);
  });
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    let items = data.filter((item) => item.type == e.target.innerText);
    container.innerHTML = "";
    items.forEach((newItem) => {
      createItem(newItem);
    });
    if (e.target.innerText == "All") {
      data.forEach((newItem) => {
        createItem(newItem);
      });
    }
  });
});

const createItem = ({ image, title, price, text }) => {
  let temp = `<div class="item">
  <div>
  <img
    src=${image}
    alt="logo"
  />
</div>
<div class="right">
  <div class="tops">
    <h4>${title}</h4>
    <span class="price">$${price}</span>
  </div>
  <p>
    ${text}
  </p>
</div>
</div>`;

  container.innerHTML += temp;
};
