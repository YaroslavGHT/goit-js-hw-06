// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


// При натисканні на кнопку "Приховати" потрібно введені користувачем
// символи в інпут відображати у вигляді крапок замість звичайного
// тексту, а також змінити назву кнопки на "Показати", при повторному
// натисканні знову будемо відображати символи, а назва кнопки зміниться
// на "Приховати".

// const input = document.querySelector('#passwordInput');
// const botton = document.querySelector('#passwordButton');

// botton.addEventListener('click', e =>{
//   console.dir(input);

//   if(input.type === 'text'){
//     e.target.textContent = "Показати";
//     input.type = "password";
//     return;
//   }
//   input.type = "text";
//   e.target.textContent = "Приховати";

  
// })

// Кнопка "Зменшити" повинна зменшувати квадрат на 10 пікселів.
// Кнопка "Збільшити" повинна збільшувати квадрат на 10 пікселів.

// const decreaseBtn = document.querySelector('#decrease');
// const increaseBtn = document.querySelector('#increase');
// const box = document.querySelector('#box');

// decreaseBtn.addEventListener('click', changeSize);
// increaseBtn.addEventListener('click', changeSize);

// function changeSize(event){
//   const id = event.target.id;
//   if(id === "increase"){
//     box.style.width = `${box.offsetWidth + 10}px`;
//     box.style.height = `${box.offsetHeight + 10}px`;
//   }else{
//     box.style.width = `${box.offsetWidth - 10}px`;
//     box.style.height = `${box.offsetHeight - 10}px`;
//   }
// }
  
// console.dir()

// При кліку на кнопку "Подвоїти" збільшувати значення в кожному
// елементі списку в два рази.

// const items = document.querySelectorAll('.listItem');
// const btn = document.querySelector('#double');

// btn.addEventListener('click', dobleValue);
// function dobleValue(event){
//   items.forEach(item => item.textContent = item.textContent * 2)
// };



// При кліку на кнопку "Filter" потрібно видалити з списку
//  позначені елементи.

// const form = document.querySelector('.checkboxForm');
// const wraper = document.querySelectorAll('.checkboxWrapper');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const filterList = [...wraper].filter(wrap => wrap.lastElementChild.checked);
//   filterList.forEach(el => el.remove())

// })


// Наведено список людей. Зроби можливість фільтрації (пошуку)
//  за ім'ям або за прізвищем.


// const input = document.querySelector('.contactsFilter');
// const list = document.querySelector('.contacts');
// const listEl = [...list.children];

// input.addEventListener("input", (event) => {
//   const value = event.target.value.toLowerCase();
//   const filterItem = listEl.filter(elem => elem.textContent.toLowerCase().includes(value))
//   list.innerHTML = '';
//   list.append(...filterItem);


//   console.log(value);
// })


// Наведено список людей. Зроби можливість сортування списку за ім'ям та за прізвищем.

// const people = document.querySelector('.people');
// const nameBtn = document.querySelector('#sortByNameButton');
// const lastNameBtn = document.querySelector('#sortByLastNameButton');

// nameBtn.addEventListener('click', e => {
//   const persons = people.children;
//   const sortPerson = [...persons].sort((a, b) => a.
//     textContent.localeCompare(b.textContent));
//   people.innerHTML = '';
//   people.append(...sortPerson);
// });

// lastNameBtn.addEventListener('click', el => ){
//   const persons = people.children;
//   const sortedPerson = [...persons].sort((a, b) => {
    
//   } )

// }