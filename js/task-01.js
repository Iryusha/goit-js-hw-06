const allCategories = document.querySelectorAll('.item');
const titleCategories = document.querySelectorAll('h2');
const allElem = document.querySelectorAll('.item ul');


console.log(`Number of categories: ${allCategories.length}`)

titleCategories.forEach((element, index) => {
	console.log(`Category: ${element.textContent}`)
	allElem.forEach((element, i) => {
		if (index === i) {
			console.log(`Elements: ${element.children.length}`)
		}
	})
})