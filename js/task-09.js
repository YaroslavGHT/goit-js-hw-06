function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonColor = document.querySelector(".change-color");

buttonColor.addEventListener("click", changeColor);

function changeColor(event){
  const clickBtn = event.target;
  const colorValue = document.querySelector(".color");
  colorValue.textContent = getRandomHexColor();
  const body = document.querySelector("body");
  body.style.backgroundColor = getRandomHexColor();
}