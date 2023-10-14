const numCategory = document.querySelectorAll('.item');
console.log(`Number of categories: ${numCategory.length}`);

const categoriesList = document.querySelectorAll('ul#categories .item');

categoriesList.forEach((category) => {
  const categoryTitle = category.firstElementChild.textContent;
  const categoryItems = category.lastElementChild.children.length;


  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems}`);
});

