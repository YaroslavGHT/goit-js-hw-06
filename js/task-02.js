const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elements = document.querySelector('#ingredients');

const ingredientItems = ingredients.map(function(food) {
  const ingred = document.createElement("li");
  ingred.textContent = food;
  ingred.className = 'item';
  return ingred;
});

elements.append(...ingredientItems);



