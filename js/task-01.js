const numCategory = document.querySelectorAll('.item');
let summ = 0;
numCategory.forEach(function(item){
    summ +=1;
});

console.log(`Number of categories: ${summ}`);

const categoriesList = document.querySelectorAll('ul#categories .item');

categoriesList.forEach((category) => {
  const categoryTitle = category.querySelector('h2').textContent;
  const categoryItems = category.querySelectorAll('ul li').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems}`);
});

