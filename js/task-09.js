const outputItem = document.querySelector('.color')
const btnItem = document.querySelector('.change-color')
const bodyItem = document.querySelector('body')

btnItem.addEventListener('click', changesBackgroundColor)

function changesBackgroundColor() {
	outputItem.textContent = getRandomHexColor()
	bodyItem.style.backgroundColor = outputItem.textContent
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



