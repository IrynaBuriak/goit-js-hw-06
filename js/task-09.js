function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const span = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
const bodyBgColor = document.querySelector("body");

btnChangeColor.addEventListener("click", onBtnChangeColor);

function onBtnChangeColor(e) {
  let color = getRandomHexColor();
  bodyBgColor.style.backgroundColor = color;
  span.textContent = color;
}
