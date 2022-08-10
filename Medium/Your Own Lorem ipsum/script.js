const $ = document;
let input = $.querySelector("input");
let btn = $.querySelector("button");
let res = $.getElementsByClassName("text")[0];

let data =
  " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque unde beatae eius eaque voluptates praesentium quia incidunt, ratione dicta,doloremque mollitia distinctio nobis consequuntur ad provident nostrum illum dolore earum!";

btn.addEventListener("click", () => {
  let count = input.value;
  let ris = "";
  for (let i = 0; i < count; i++) {
    ris += data;
  }
  res.innerText = ris;
});
