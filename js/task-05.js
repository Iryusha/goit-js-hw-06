const inputItem = document.querySelector('#name-input')
const outputItem = document.querySelector('#name-output')

inputItem.addEventListener('input', outputInput)

function outputInput(event) {
	outputItem.textContent = event.currentTarget.value

	if (event.currentTarget.value.length <= 0) {
		outputItem.textContent = 'Anonymous'
	}
}