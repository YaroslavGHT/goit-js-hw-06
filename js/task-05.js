const inputName = document.querySelector('#name-input');
const enteredName = document.querySelector('#name-output');

inputName.addEventListener("input", addName);

function addName(event){
    event.preventDefault();
    const form = event.target.value;
    if (form === ''){
        enteredName.textContent = 'Anonymous'
    } else
    enteredName.textContent = form;

}