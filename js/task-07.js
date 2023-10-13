const inputValue = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

inputValue.addEventListener('input', changeFontsize);

function changeFontsize(event){
    const val = event.target.value;
    textSpan.style.fontSize = `${val}px`;
}