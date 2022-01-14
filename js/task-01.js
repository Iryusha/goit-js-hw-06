const allCategories = document.querySelectorAll('.item');
const titleCategories = document.querySelectorAll('h2');
const allElem = document.querySelectorAll('.item ul');


console.log(`Number of categories: ${allCategories.length}`)

console.log(`Category: ${titleCategories[0].textContent}`)
console.log(`Elements: ${allElem[0].children.length}`)

console.log(`Category: ${titleCategories[1].textContent}`)
console.log(`Elements: ${allElem[1].children.length}`)

console.log(`Category: ${titleCategories[2].textContent}`)
console.log(`Elements: ${allElem[2].children.length}`)