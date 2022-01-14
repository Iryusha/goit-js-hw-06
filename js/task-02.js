const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientElem = document.querySelector('ul#ingredients')

for (let i = 0; i < ingredients.length; i += 1) {
	const itemEl = document.createElement('li')
	itemEl.textContent = ingredients[i]
	itemEl.classList.add('item')
	ingredientElem.append(itemEl)
	console.log(itemEl.textContent)
}