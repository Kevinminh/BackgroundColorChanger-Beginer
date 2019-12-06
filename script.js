const colorBtn = document.querySelector(".colorBtn");
const chgBackground = document.querySelector("body");

const colors = [
  "yellow",
  "green",
  "blue",
  "red",
  "#e3e3e3",
  "#fad0c4",
  "#fbc2eb"
];

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  // chgBackground.style.backgroundColor = colors[2];
  let random = Math.floor(Math.random() * colors.length);
  chgBackground.style.backgroundColor = colors[random];
}
