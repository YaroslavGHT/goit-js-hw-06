const inputText = document.querySelector('#validation-input');
const lengthText = inputText.dataset.length;

inputText.addEventListener("blur", checkLength);

function checkLength(event){
    event.preventDefault();
    const entered = event.target.value;
    if(entered.length === parseInt(lengthText)){
        inputText.classList.remove('invalid');
        inputText.classList.add('valid');
    } else{
        inputText.classList.remove('valid');
        inputText.classList.add('invalid');
    }
}
