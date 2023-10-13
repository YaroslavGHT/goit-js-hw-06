const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = document.querySelector('#ingredients');

ingredients.forEach(function(food){
  const ingred = document.createElement("li");
  ingred.textContent = food;
  ingred.className = 'item';
  elements.appendChild(ingred);
});