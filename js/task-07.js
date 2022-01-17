const inputItem = document.querySelector('#font-size-control')
const textItem = document.querySelector('#text')

console.log(inputItem)

inputItem.addEventListener('input', changesFontSize)
inputItem.setAttribute('value', 16)

function changesFontSize() {
	textItem.style.fontSize = inputItem.value + 'px'
}