let counterValue = 0;
let spanCounter = document.querySelector('#value');

const buttonMin = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');

buttonMin.addEventListener("click", () => {
    counterValue -= 1;
    spanCounter.textContent = counterValue;
});
buttonPlus.addEventListener("click", () => {
    counterValue += 1;
    spanCounter.textContent = counterValue;
});    

