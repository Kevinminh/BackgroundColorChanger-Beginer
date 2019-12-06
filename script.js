const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorBtn = document.querySelector(".colorBtn");
const chgBackground = document.querySelector("body");
const hexColor = document.querySelector(".hex");

const colors = [
  "yellow",
  "#d57eeb",
  "#4facfe",
  "#d4fc79",
  "#e3e3e3",
  "#fad0c4",
  "#fbc2eb"
];

colorBtn.addEventListener("click", getHex);

function changeColor() {
  // chgBackground.style.backgroundColor = colors[2];
  let random = Math.floor(Math.random() * colors.length);
  chgBackground.style.backgroundColor = colors[random];
}

function getHex() {
  let hexCol = "#";

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    hexCol += hexNumbers[random];
  }
  chgBackground.style.backgroundColor = hexCol;
  hexColor.innerHTML = hexCol;
}
