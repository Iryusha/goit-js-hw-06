const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientElem = document.querySelector('ul#ingredients')

const makeItems = ingredients.map(function (ingredient) {
	console.log(ingredient)

	const itemEl = document.createElement('li')
	itemEl.textContent = ingredient
	itemEl.classList = 'item'

  return itemEl;
})

ingredientElem.append(...makeItems);


// for (let i = 0; i < ingredients.length; i += 1) {
// 	const itemEl = document.createElement('li')
// 	itemEl.textContent = ingredients[i]
// 	itemEl.classList.add('item')
// 	ingredientElem.append(itemEl)
// 	console.log(itemEl.textContent)
// }